class Block {
    constructor(length, activity = {name: "rest"}) {
        this.length = length
        this.activity = activity
    }

    formatMessage() {
        let formatCharacter
        if (this.activity.name === "rest") {
            formatCharacter = "_"
        } else {
            formatCharacter = "*"
        }
        return {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": `${formatCharacter}${this.length} seconds of ${this.activity.name}${formatCharacter}`
            }
        }
    }

    formatPreview() {
        let modification = ""
        if (this.activity.modification !== undefined) {
            modification = `\n*Modification:* ${this.activity.modification}`
        }
        const block = {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": `*Exercise:* ${this.activity.name}${modification}`
            }
        }
        if (this.activity.link !== undefined) {
            block.accessory = {
                "type": "image",
                "image_url": this.activity.link,
                "alt_text": this.activity.name
            }
        }
        return block
    }
}

module.exports = Block
