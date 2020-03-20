const { CronJob } = require("cron")

class Scheduler {
    constructor (cron, timezone) {
        this.cron = cron
        this.timezone = timezone
    }

    schedule(task) {
        const cronJob = new CronJob(this.cron, task, null, true, this.timezone)
        cronJob.start()
        return cronJob
    }
}

module.exports = Scheduler
