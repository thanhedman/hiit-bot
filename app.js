const config = require("./config")
const Generator = require("./app/generator")
const SlackClient = require("./app/slack_client")
const Scheduler = require("./app/scheduler")

const task = () => {
    const generator = new Generator(config)
    const slack_client = new SlackClient(config)
    const workout = generator.generateFromConfig()
    setTimeout(() => {
        console.log(workout.formatMessage())
        slack_client.sendMessage(workout.formatMessage())
    }, 300000)
    const previews = workout.formatPreviews()
    previews.forEach(e => console.log(e))
    previews.forEach(e => slack_client.sendMessage(e))
}

new Scheduler(config).schedule(task)
