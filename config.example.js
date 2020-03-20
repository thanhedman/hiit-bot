const baseConfig = {
    exercises: {
        lower: [
            {
                name:"squat jumps",
                modification: "squats",
                link: "https://i.giphy.com/fx4WwDYnqtYbe.gif"
            },
            {
                name: "lunges",
                link: "https://i.giphy.com/X8yODDTOQoSUByIpgl.gif"
            },
            {
                name: "skaters",
                link: "https://i.giphy.com/wqMYREwqjGeIYbtuBK.gif",
                modification: "rest your inside leg on the ground"
            },
            {
                name: "(faux) jump rope",
                link: "https://media1.popsugar-assets.com/files/thumbor/Zi8_ZieHUpwNluZncagesNlkh4Q/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/06/28/880/n/1922729/7a21b37c99787f72_fake-jump-rope/i/Invisible-Jump-Rope.jpg"
            },
            {
                name: "knee raises",
                link: "http://2.bp.blogspot.com/-eH9bR0Yz07Y/UfcoR-zDr8I/AAAAAAAAAFU/V1Z5AO2xyKQ/s1600/Elbow-Knee-Raises-1.jpg"
            },
            {
                name: "butt kickers",
                link: "https://sporteluxe.com/wp-content/uploads/2017/12/butt-kicks-300x169.gif"
            },
            {
                name: "calf raises",
                link: "http://thumbs.gfycat.com/EntireThatGazelle-size_restricted.gif"
            },
            {
                name: "glute bridge marches",
                link: "https://media3.popsugar-assets.com/files/thumbor/XEjDZ0M2JJ8-1oiUPBM-0ycnaIQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/07/28/857/n/1922729/72c654c374292398_BridgeWithKneeUps.gif",
                modification: "elevate your head and shoulders on a couch or bench"
            },
            {
                name: "split jumps",
                link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/splitjump-1457044565.gif"
            },
            {
                name: "hip raises",
                link: "https://image.2bstronger.com/sarticle/fitness/17-exercises-to-shape-and-tone-your-booty-56484/1001.gif"
            }
        ],
        upper: [
            {
                name: "lateral raises",
                link: "https://www.verywellfit.com/thmb/9OhmipLgM3hbHTik5aNgICiGltM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/61-4588211-dumbell-Lateral-side-Raise-GIF-7858592bcda347a9adf46886c5106e73.gif",
                equipment: "weights"
            },
            {
                name: "pushups",
                link: "https://www.verywellfit.com/thmb/WEMOE5Z79lFIOOwPfgHljmF1aao=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif",
                modification: "knee-down pushups"
            },
            {
                name: "overhead press",
                link: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-overhead-press.gif?resize=768:*",
                equipment: "weights"
            },
            {
                name: "chair dips",
                link: "https://www.sparkpeople.com/assets/exercises/Triceps-Dips-with-Straight-Legs.gif",
                modification: "keep knees bent to shorten range of motion or use a lower surface than chair"
            },
            {
                name: "renegade rows",
                link: "https://media.self.com/photos/57d884a14b76f0f832a0d917/master/w_1600%2Cc_limit/renegade_row1.gif",
                modification: "plank tap or use modified pushup position",
                equipment: "weights (optional)"
            },
            {
                name: "floor dips",
                link: "https://i0.wp.com/theswimreport.com//wp-content/uploads/2015/06/Tricep-Dips.gif?zoom=2&resize=400%2C360&ssl=1"
            },
            {
                name: "hammer curls",
                link: "https://www.verywellfit.com/thmb/-kguxvVk5i1SH3pZg7mu4WV5Ers=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14-Hammer-Curls-GIF-1e195b4ea80747cb871947b90fb0808f.gif",
                equipment: "weights"
            },
            {
                name: "plank up-downs",
                link: "https://media.self.com/photos/58dd5de554b00b6f47fad908/master/w_1600%2Cc_limit/Plank-up-downs.gif"
            },
            {
                name: "body ups",
                link: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bodyup.gif?resize=768:*"
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
                link: "http://blog.anytimefitness.com/wp-content/uploads/2016/01/WallSitForm.jpg"
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
                name: "side planks",
                link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/side-plank-1549646915.jpg?resize=400:*",
                modification: "keep knees down and bent"
            },
            {
                name: "supermans",
                link: "https://www.sparkpeople.com/assets/exercises/Superman.gif"
            },
            {
                name: "rotating side planks",
                link: "https://upl.stack.com/wp-content/uploads/2016/02/12145858/Rotating-Side-Plank-Forearms.gif"
            }
        ]
    },
    schedule: {
        messageCron: "55 9-15 * * 1-5", // every weekday every hour 955 to 355
        resetCron: "59 23 * * 1-5", // every weekday at midnight
        timezone: "America/New_York",
        previewOffset: 5 * 60 * 1000 // 5 minutes
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
