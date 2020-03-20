class Workout {
    constructor(sequence) {
        this.sequence = sequence
    }

    formatMessage() {
        let blocks = [{
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "<!here> Time to get up and get active! 🏋️‍♀️ Let's do:"
            }
        }]
        blocks = blocks.concat(this.sequence.map(e => e.formatMessage()))
        blocks.push({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "Get moving!"
            }
        })
        return blocks
    }

    previewHeadline() {
        const exercises = [... new Set(this.sequence.filter(e => e.activity.name !== "rest"))]
        return `<!here> This is what we'll be doing in five minutes: ${exercises.map(e => e.activity.name).join(", ")}`
    }

    formatPreviews() {
        let blocks = [{
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "<!here> This is what we'll be doing in five minutes:"
            }
        }]
        const exercises = [... new Set(this.sequence.filter(e => e.activity.name !== "rest"))]
        blocks = blocks.concat(
            exercises.map(e => e.formatPreview())
        )
        blocks.push({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "This is a good time to Google!"
            }
        })
        return blocks
    }
}

module.exports = Workout
