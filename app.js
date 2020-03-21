const http = require("http")
const config = require("./config")
const Generator = require("./app/generator")
const SlackClient = require("./app/slack_client")
const Scheduler = require("./app/scheduler")

let exercisePool = Object.values(config.exercises).reduce((acc, curr) => acc.concat(curr), [])

const sendMessageTask = () => {
    const generator = new Generator(config)
    const slack_client = new SlackClient(config)
    const workout = generator.generateFromPool(exercisePool)
    const used_exercises = new Set(workout.sequence.map(e => e.activity))
    exercisePool = exercisePool.filter(e => !used_exercises.has(e))
    setTimeout(() => {
        console.log(workout.formatMessage())
        slack_client.sendMessageBlocks(workout.formatMessage(), "<!here> Time to get up and get active! 🏋️‍♀️", false)
    }, config.schedule.previewOffset)
    setTimeout(() => {
        console.log("Starting call")
        const slack_client = new SlackClient(config)
        slack_client.sendCommand("/zoom")
    }, config.schedule.videoOffset)
    const previews = workout.formatPreviews()
    console.log(JSON.stringify(previews))
    slack_client.sendMessageBlocks(previews, workout.previewHeadline(), true)
}

const resetUsedExercisesTask = () => {
    exercisePool = Object.values(config.exercises).reduce((acc, curr) => acc.concat(curr), [])
}

const commandTask = () => {
    const slack_client = new SlackClient(config)
    slack_client.sendCommand(config.slack.callCommand)
}

// sendMessageTask()

// Kick off regularly occuring exercise previews and prompts
const messageCron = new Scheduler(config.schedule.messageCron, config.schedule.timezone).schedule(sendMessageTask)

// Occasionally reset the pool of used exercises
const resetCron = new Scheduler(config.schedule.resetCron, config.schedule.timezone).schedule(resetUsedExercisesTask)

const port = process.env.PORT || 8000

const hostname = "0.0.0.0"

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
      messageCron: {
          nextDates: messageCron.nextDates(),
          lastDate: messageCron.lastDate()
      },
      resetCron: {
          nextDates: resetCron.nextDates(),
          lastDate: resetCron.lastDate()
      },
      remainingExercises: exercisePool,
      remainingExercisesCount: exercisePool.length
  }))
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
