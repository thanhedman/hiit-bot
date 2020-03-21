const Splits = require("./splits")
const Workout = require("./workout")
const Block = require("./block")
require("./shim")

class Generator {
    constructor(config) {
        this.exercises = config.exercises
        this.parameters = config.parameters
    }

    generateFromPool(exercises) {
        return this.generate(
            this.parameters.length_minutes,
            this.parameters.rest_minutes,
            this.parameters.rounds,
            exercises,
            this.parameters.num_exercises
        )
    }

    generateFromConfig() {
        const split = Splits[this.parameters.split]
        let possible_exercises
        if (split === Splits.ALL) {
            possible_exercises = Object.values(this.exercises).reduce((acc, curr) => acc.concat(curr), [])
        } else {
            possible_exercises = this.exercises[split.description()]
        }
        return this.generateFromPool(
            this.parameters.length_minutes,
            this.parameters.rest_minutes,
            this.parameters.rounds,
            possible_exercises,
            this.parameters.num_exercises
        )
    }

    generate(
        length_minutes,
        rest_minutes,
        rounds,
        possible_exercises,
        num_exercises = Math.round((length_minutes - rest_minutes)/rounds)
    ) {
        const active_minutes = length_minutes - rest_minutes
        const set_length_seconds = 60 * active_minutes / (num_exercises * rounds)
        const rest_length_seconds = 60 * rest_minutes / (rounds - 1)
        const exercises = this.randomExercises(num_exercises, possible_exercises)
        const sequence = this.buildSequence(set_length_seconds, rest_length_seconds, rounds, exercises)
        return new Workout(sequence, this.parameters.timerLink)
    }

    randomExercises(num_exercises, possible_exercises) {
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
