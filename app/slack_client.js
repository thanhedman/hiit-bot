const { WebClient, ErrorCode, retryPolicies } = require('@slack/web-api')
const https = require("https")

class SlackClient {
    constructor(config) {
        this.config = config.slack
        this.client = new WebClient(this.config.token, {
            retryConfig: retryPolicies.fiveRetriesInFiveMinutes,
        })
    }

    sendCommand(command, text) {
        const payload = JSON.stringify(
            {
                channel: this.config.channel.id,
                command: command,
                text: text
            }
        )
        const options = {
          hostname: 'slack.com',
          port: 443,
          path: '/api/chat.command',
          method: 'POST',
          headers: {
              "Authorization": `Bearer ${this.config.legacyToken}`,
              "Content-Type": "application/json",
              "Content-Length": Buffer.byteLength(payload)
          }
        }
        const req = https.request(options, (res) => {
          console.log(`chat.command status: ${res.statusCode}`);
          res.setEncoding('utf8');
          res.on('data', (chunk) => {
            console.log(`chat.command response: ${chunk}`);
          });
          res.on('end', () => {
            // console.log('No more data in response.');
          });
        });

        req.on('error', (e) => {
          console.error(`problem with chat.command request: ${e.message}`);
        });

        // Write data to request body
        req.write(payload);
        req.end();
    }

    async sendMessageBlocks(blocks, header, divide) {
        let blocks_formatted
        if (divide) {
            blocks_formatted = [...blocks].map((e, i) => i < blocks.length - 1 ? [e, {"type": "divider"}] : [e]).reduce((a, b) => a.concat(b))
        } else {
            blocks_formatted = blocks
        }
        await(async () => {
            // Post a message to the channel, and await the result.
            // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
            const result = await this.client.chat.postMessage({
                blocks: JSON.stringify(blocks_formatted),
                text: header,
                channel: this.config.channel.name
            });

            // The result contains an identifier for the message, `ts`.
            console.debug(`Successfully send message ${result.ts} in conversation ${this.config.channel}`);
        })();
    }
}

module.exports = SlackClient
