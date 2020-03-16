const { CronJob } = require("cron")

class Scheduler {
    constructor (config) {
        this.config = config.schedule
    }

    schedule(task) {
        const cronJob = new CronJob(this.config.cron, task, null, true, this.config.timezone)
        cronJob.start()
    }
}

module.exports = Scheduler
