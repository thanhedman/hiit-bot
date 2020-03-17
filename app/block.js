class Block {
    constructor(length, activity = {name: "rest"}) {
        this.length = length
        this.activity = activity
    }

    formatMessage() {
        let formatCharacter
        if (this.activity === "rest") {
            formatCharacter = "_"
        } else {
            formatCharacter = "*"
        }
        return `${formatCharacter}${this.length} seconds of ${this.activity.name}${formatCharacter}`
    }

    formatPreview() {
        let message = `Exercise: ${this.activity.name}`
        if (this.activity.link !== undefined) {
            message += `\n${this.activity.link}`
        }
        if (this.activity.modification !== undefined) {
            message += `\nModification: ${this.activity.modification}`
        }
        return message
    }
}

module.exports = Block
