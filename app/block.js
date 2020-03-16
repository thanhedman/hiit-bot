class Block {
    constructor(length, activity = "rest") {
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
        return `${formatCharacter}${this.length} seconds of ${this.activity}${formatCharacter}`
    }
}

module.exports = Block
