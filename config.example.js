const baseConfig = {
    exercises: {
        lower: [
            {
                name:"squat jumps",
                modification: "squats",
                link: "https://media.giphy.com/media/fx4WwDYnqtYbe/giphy.link"
            },
            {
                name: "lunges",
                link: "https://media.giphy.com/media/X8yODDTOQoSUByIpgl/giphy.link"
            },
            {
                name: "skaters",
                link: "https://media.giphy.com/media/wqMYREwqjGeIYbtuBK/giphy.link"
            },
            {
                name: "(faux) jump rope",
                link: "https://www.youtube.com/watch?v=5eGZhKxeNu4"
            },
            {
                name: "knee raises",
                link: "https://www.youtube.com/watch?v=5eGZhKxeNu4"
            },
            {
                name: "butt kickers",
                link: "https://sporteluxe.com/wp-content/uploads/2017/12/butt-kicks-300x169.gif"
            },
            {
                name: "calf raises",
                link: "https://gfycat.com/entirethatgazelle"
            },
            {
                name: "glute bridge march",
                link: "https://media3.popsugar-assets.com/files/thumbor/XEjDZ0M2JJ8-1oiUPBM-0ycnaIQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/07/28/857/n/1922729/72c654c374292398_BridgeWithKneeUps.gif",
                modification: "elevate your head and shoulders on a couch or bench"
            }
        ],
        upper: [
            {
                name: "lateral raises",
                link: "https://www.verywellfit.com/thmb/9OhmipLgM3hbHTik5aNgICiGltM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/61-4588211-dumbell-Lateral-side-Raise-GIF-7858592bcda347a9adf46886c5106e73.gif"
            },
            {
                name: "pushups",
                link: "https://www.verywellfit.com/thmb/WEMOE5Z79lFIOOwPfgHljmF1aao=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif",
                modification: "knee-down pushups"
            },
            {
                name: "overhead press",
                link: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-overhead-press.gif?resize=768:*"
            },
            {
                name: "chair dips",
                link: "https://www.sparkpeople.com/assets/exercises/Triceps-Dips-with-Straight-Legs.gif",
                modification: "keep knees bent to shorten range of motion"
            },
            {
                name: "renegade row",
                link: "https://media.self.com/photos/57d884a14b76f0f832a0d917/master/w_1600%2Cc_limit/renegade_row1.gif",
                modification: "use modified pushup position"
            }
        ],
        core: [
            {
                name: "crunches",
                link: "https://www.verywellfit.com/thmb/yz_k4jgtWtEZSQOZDCwXsvj3j7U=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-1-2696610-AbdominalCrunch01-1853copy-599463c4d088c00013e2cad9.gif"
            },
            {
                name: "planks",
                link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1076/articles/2016/06/strengthtraining-1515701521.jpg?resize=400:*",
                modification: "plank semi-upright against a chair or couch"
            },
            {
                name: "mountain climbers",
                link: "https://media1.popsugar-assets.com/files/thumbor/Iu8waoj6rmL6c7B8gZUdS1ZIa3I/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/08/791/n/1922729/c4943793a2ba2dd5_SlowerClimbers.gif"
            },
            {
                name: "wall sits",
                link: "https://www.verywellfit.com/thmb/TwgOPk3FxuIq2_hVcDgujV8et-Y=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/47-3120741-WallSit-003-1be63dfbd24d4fcba0521e1f37d33ddf.jpg"
            },
            {
                name: "russian twists",
                link: "https://thumbs.gfycat.com/HospitableShimmeringDodo-size_restricted.gif"
            },
            {
                name: "flutter kicks",
                link: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xOTU2MTczOC9vcmlnaW4uZ2lmIiwiZXhwaXJlc19hdCI6MTYzNTI3MTUwMn0.5LAlAMc-8KrI0Ik3M9tHbz2LvWfnABCgMEuFe-ScYkA/img.gif?width=400"
            },
            {
                name: "bicycle crunches",
                link: "https://i.pinimg.com/originals/d8/76/16/d87616d4b21e886f009b24fe66db69d6.gif"
            },
            {
                name: "burpees",
                link: "https://media.self.com/photos/5943fddc4e4e9b6122499b42/master/w_1600%2Cc_limit/burpees6.gif",
                modification: "see https://www.self.com/gallery/ways-to-do-a-burpee"
            },
            {
                name: "side plank",
                link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/side-plank-1549646915.jpg?resize=400:*",
                modification: "keep knees down and bent"
            }
        ]
    },
    schedule: {
        cron: "55 9-15 * * 1-5",
        timezone: "America/New_York"
    },
    slack: {
        token: "TOKEN",
        channel: "CHANNEL_ID"
    },
    parameters:  {
        length_minutes: 4,
        rest_minutes: 1,
        rounds: 3,
        num_exercises: 3,
        split: "ALL"
    }
}

module.exports = baseConfig
