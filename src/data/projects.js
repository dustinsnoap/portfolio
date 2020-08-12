//assets
import img_legends_of_alabastra from '../assets/img/legends_of_alabastra.png'
import img_liftquest from '../assets/img/liftquest.png'
import img_mydish from '../assets/img/mydish.png'

export default [
    {
        name: 'Legends of Alabastra',
        year: 2020,
        tech: ['html', 'css', 'python', 'react', 'django', 'pusher', 'postgresql', 'redux', 'canvas'],
        img: img_legends_of_alabastra,
        link_code: 'https://github.com/Legends-of-Alabastra-ReBorn/LOAR-BE',
        link_demo: 'https://hungry-spence-d1d30a.netlify.app/',
        description: `Web based adventure game loosely based on Sid Meier's 8bit adventure Pirates.`,
        contributions: [
            'Wrote compression algorithms to reduce data flow between users and server.',
            'Developed a small two dimensional graphics engine in Javascript.',
            // 'Created algorithms using python focusing on efficiency and reliability.'
        ]
    },
    {
        name: 'LiftQuest',
        year: 2019,
        tech: ['html', 'css', 'react', 'node', 'postgres'],
        img: img_liftquest,
        link_code: 'https://github.com/workout-tracktor/labspt4-workout-tracker-BE',
        link_demo: 'https://www.liftquestapp.com/',
        description: 'An app that helps you find a workout that best suits your goals and lifestyle.',
        contributions: [
            'Designed and built a fully scalable backend using NodeJS and Postgres.',
            'Focused on writing a secure and easily understood and maintainable code.',
            ''
        ]
    },
    {
        name: 'MyDish',
        year: 2019,
        tech: ['html', 'css', 'react', 'react-native', 'node', 'postgres'],
        img: img_mydish,
        link_code: 'https://github.com/Lambda-School-Labs/mydish-be',
        link_demo:'https://play.google.com/store/apps/details?id=com.lambdaschool.mydish',
        description: 'A recipe app that brings the functionality of Github to your cookbook.',
        contributions: [
            'Led a team of developers to create an app to the specifications to a stakeholder.',
            'Wrote an extensive testing library to ensure reliability among the code base.',
            ''
        ]
    },
    {
        name: 'Simpson Says',
        year: 2019,
        tech: ['html', 'css', 'react', 'node', 'postgres', 'python'],
        img: img_legends_of_alabastra,
        link_code: 'https://github.com/Legends-of-Alabastra-ReBorn/LOAR-BE',
        link_demo: 'https://hungry-spence-d1d30a.netlify.app/',
        description: 'A web app that uses AI to find and create Simpsons quotes based on user input.',
        contributions: [
            `Communicated between Web Developers and Data Scientists.`,
            `Created middleware to help communications between different languages.`,
        ]
    },
]