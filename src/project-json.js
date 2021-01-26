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
        title: "AlcheZoomy",
        image: '/alchezoomy2.png',
        github: "https://github.com/Alchezoomy2",
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
    {
        title: 'Petreon',
        image: '/Petreon.png',
        github: 'https://github.com/Alchemy-Petreon',
        url: "https://petreon.netlify.app/",
        logos: [
            '/nodejs.png',
            '/postgresql.png',
            '/react.png',
            '/aws.png'
        ],
        description: [
            'Full-stack social media platform, utilizing Google OAuth credentials.  Hosted on AWS RDS & S3, Heroku and Netlify servers.',

            'Personally responsible for all authorization & database systems, as well as implementing independent development & production environments.',

            'Built by a three person team in eight days.'
        ]
    }
]

export default projectJson;
