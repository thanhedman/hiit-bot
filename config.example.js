const baseConfig = {
    exercises: {
        lower: ["squat jumps", "lunges", "skaters", "(faux) jump rope", "knee raises", "butt kickers"],
        upper: ["lateral raises", "pushups", "overhead press", "chair dips"],
        core: ["crunches", "planks", "mountain climbers", "wall sits", "russian twists", "flutter kicks", "bicycle crunches"]
    },
    schedule: {
        cron: "0 9-17 * * 1-5",
        timezone: "America/New_York"
    },
    slack: {
        token: "TOKEN",
        channel: "CHANNEL_ID"
    },
    parameters:  {
        length_minutes: 5,
        rest_minutes: 1/2,
        rounds: 3,
        num_exercises: 3,
        split: "ALL"
    }
}

module.exports = baseConfig
