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

    formatPreviews() {
        let messages = ["<!here>\nThis is what we'll be doing in five minutes:\n\n"]
        const exercises = [... new Set(this.sequence.filter(e => e.activity.name !== "rest"))]
        messages = messages.concat(
            exercises.map(e => e.formatPreview())
        )
        messages.push("This is a good time to Google!")
        return messages
    }
}

module.exports = Workout
