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
            `My Vampire Boyfriend is a choose your own adventure / dating simulator.  It is more importantly a demonstration of the game engine that my team & I built.`,

            `We used a modular design that guides the user through the story based on information from a series of linked JSON files. The engine parses that data to produce the story.`,

            `Although there were 5 scenes and over 50 possible prompts, the game could be scaled to twice that size without changing any game engine code.`,]
    },
    {
        title: "Alche Zoomy",
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
        title: "Alche Zoomy 2",
        image: '/alchezoomy2.png',
        github: "https://github.com/AlcheZoomy-2-0",
        url: "https://www.alchezoomy.com/",
        logos: [
            // '/javascript.png',
            '/nodejs.png',
            '/postgresql.png',
            '/react.png',
            '/mobx.png',
            '/materialui.svg',
            '/aws.png'
        ],
        description: [
            `A educational application that allows teachers to publish their Zoom lectures with video, transcripts & chat.`,

            `Utilizes React frontend, Node.js API, PostgreSQL database, Nginx webserver, and S3 bucket storage.  All hosted in AWS cloud.`,

            `Uses Zoom's OAuth API for secure login management`,

            `Utilizes React, MobX, Node.js, PostgreSQL, Material.ui, & OAuth 2.0 on AWS servers`
        ]
    },
]

export default projectJson;
