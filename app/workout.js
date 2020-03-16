class Workout {
    constructor(sequence) {
        this.sequence = sequence
    }

    formatMessage() {
        let message = "<!here>\nTime to get up and get active! 🏋️‍♀️ Let's do:\n\n"
        message += this.sequence.map(e => e.formatMessage()).join("\n")+"\n\n"
        message += "Get moving! 💪\n"
        return message
    }
}

module.exports = Workout
