const projectJson = [
    {
        title: "My Vampire Boyfriend",
        image: '/MVB.png',
        github: "https://github.com/SjaanHydrick/my-vampire-boyfriend",
        url: "https://sjaanhydrick.github.io/my-vampire-boyfriend/",
        logos: [
            '/javascript.png',
            '/html.png',
            '/css.png'
        ],
        description: [
            `My Vampire Boyfriend is a fun choose your own adventure / dating simulator.  It is more importantly a demonstration of the game engine that my team & I built.`,

            `We used a modular design that guides the user through the story based on information from a series of JSON files.`,

            `Although there were 5 scenes and over 50 possible prompts, the game could be scaled twice that size without changing any game engine code.`,]
    },
    {
        title: "AlcheZoomy",
        image: '/alchezoomy.png',
        github: "https://github.com/Alchezoomy",
        url: "https://alchezoomy.netlify.app/",
        logos: [
            '/javascript.png',
            '/css.png',
            '/nodejs.png',
            'postgresql.png',
            'react.png',
        ],
        description: [
            `AlcheZoomy is an educational assistant app, that uses Zoom's API to give student's the ability to search through and save recorded lectures.`,

            `  My team used Zoom's built in chat, video, and transcription services to create a RESTful API using Node.js and PostgreSQL. 
        `,
            ` We also created a student portal that allows users to scroll through available lectures, and view them accommpanied by their chat & transcript data.  The students can also store individual timecodes for future reference.`,]
    },
    {
        title: "AlcheZoomy2",
        image: '/alchezoomy2.png',
        github: "https://github.com/AlcheZoomy-2-0",
        url: "https://alchezoomy2.netlify.app/",
        logos: [
            '/javascript.png',
            '/css.png',
            '/nodejs.png',
            '/postgresql.png',
            '/react.png',
            '/mobx.png',
            '/materialui.svg',
            '/aws.png'
        ],
        description: [
            `Having learned a termendous amount by our first run at the AlcheZoomy project, I am working on rebuilding it from scratch.`,
            `Using OAuth 2.0, mobX, Material-Ui, functional React, I am building a faster, cleaner, and more stable version of the app.`,
            ` When it is finished, teachers will be able to publish individual meetings, adding them to our database of lectures.  Students will then be invited to view, save, and take notes on the lectures.`,
            `At completion I hope that it will be used by future Alchemy students.`
        ]
    },
]



export default projectJson;