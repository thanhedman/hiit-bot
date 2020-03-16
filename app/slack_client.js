const { WebClient, ErrorCode, retryPolicies } = require('@slack/web-api');

class SlackClient {
    constructor(config) {
        this.config = config.slack
        this.client = new WebClient(this.config.token, {
            retryConfig: retryPolicies.fiveRetriesInFiveMinutes,
        })
    }

    sendMessage(message) {
        (async () => {
            // Post a message to the channel, and await the result.
            // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
            const result = await this.client.chat.postMessage({
                text: message,
                channel: this.config.channel,
            });

            // The result contains an identifier for the message, `ts`.
            console.debug(`Successfully send message ${result.ts} in conversation ${this.config.channel}`);
        })();
    }
}

module.exports = SlackClient
