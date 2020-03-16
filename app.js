const config = require("./config")
const Generator = require("./app/generator")
const SlackClient = require("./app/slack_client")
const Scheduler = require("./app/scheduler")

const task = () => {
    const generator = new Generator(config)
    const slack_client = new SlackClient(config)
    const workout = generator.generateFromConfig()
    console.log(workout.formatMessage())
    slack_client.sendMessage(workout.formatMessage())
}

new Scheduler(config).schedule(task)
