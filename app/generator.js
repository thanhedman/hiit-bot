const Splits = require("./splits")
const Workout = require("./workout")
const Block = require("./block")
require("./shim")

class Generator {
    constructor(config) {
        this.exercises = config.exercises
        this.parameters = config.parameters
    }

    generateFromConfig() {
        return this.generate(
            this.parameters.length_minutes,
            this.parameters.rest_minutes,
            this.parameters.rounds,
            this.parameters.num_exercises,
            Splits[this.parameters.split]
        )
    }

    generate(
        length_minutes,
        rest_minutes,
        rounds,
        num_exercises = Math.round((length_minutes - rest_minutes)/rounds),
        split = Splits.ALL
    ) {
        const active_minutes = length_minutes - rest_minutes
        const set_length_seconds = 60 * active_minutes / (num_exercises * rounds)
        const rest_length_seconds = 60 * rest_minutes / (rounds - 1)
        const exercises = this.randomExercises(num_exercises, split)
        const sequence = this.buildSequence(set_length_seconds, rest_length_seconds, rounds, exercises)
        return new Workout(sequence)
    }

    randomExercises(num_exercises, split) {
        let possible_exercises;
        if (split === Splits.ALL) {
            possible_exercises = Object.values(this.exercises).reduce((acc, curr) => acc.concat(curr), [])
        } else {
            possible_exercises = this.exercises[split.description()]
        }
        const selected_exercises = []
        for (let i = 0; i < num_exercises; i++) {
            let random_exercise = possible_exercises.random()
            possible_exercises = possible_exercises.filter(e => e !== random_exercise)
            selected_exercises.push(random_exercise)
        }
        return selected_exercises
    }

    buildSequence(set_length_seconds, rest_length_seconds, rounds, exercises) {
        let sequence = []
        const active_blocks = exercises.map(e => new Block(set_length_seconds, e))
        const rest_block = new Block(rest_length_seconds)
        for (let i = 0; i < rounds; i++) {
            sequence = sequence.concat(active_blocks)
            if (i < rounds -1) {
                sequence.push(rest_block)
            }
        }
        return sequence
    }
}

module.exports = Generator
