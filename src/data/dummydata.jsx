export default{
    firstName:'James',
    lastName:'Carter',
    jobTitle:'full stack developer',
    address:'525 N tryon Street, NC 28117',
    phone:'(123)-456-7890',
    email:'exmaple@gmail.com',
    themeColor:"#ff6666",
    templateId:'default',
    summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    experience:[
        {
            
            title:'Full Stack Developer',
            companyName:'Amazon',
            city:'New York',
            state:'NY',
            startDate:'2025-02',
            endDate:'',
            currentlyWorking:true,
            workSummary:' Designed, developed, and maintained full-stack applications using React and Node.js.\n'+
            '• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n'+
            'various devices and browsers.\n'+
            '• Maintaining the React Native in-house organization application.'+
            '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end'+
            'and back-end systems.'
        },
        {
        
            title:'Frontend Developer',
            companyName:'Google',
            city:'Charlotte',
            state:'NC',
            startDate:'May 2019',
            endDate:'2025-11',
            currentlyWorking:false,
            workSummary:' Designed, developed, and maintained full-stack applications using React and Node.js.'+
            '• Implemented responsive user interfaces with React, ensuring seamless user experiences across'+
            'various devices and browsers.'+
            '• Maintaining the React Native in-house organization application.'+
            '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end'+
            'and back-end systems.'
        }
    ],
    education:[
        {
            id:1,
            universityName:'StandFord University',
            startDate:'Aug 2020',
            endDate:'Dec:2022',
            degree:'Master',
            major:'Computer Science',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
            id:2,
            universityName:'IIT Bengaluru',
            startDate:'Aug 2018',
            endDate:'Dec:2019',
            degree:'BE/Btech',
            major:'Computer Science',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        }
    ],
    skills:[
        {
            id:1,
            name:'Angular',
            rating:5,
        },
        {
            id:1,
            name:'React',
            rating:4,
        },
        {
            id:1,
            name:'MySql',
            rating:5,
        },
        {
            id:1,
            name:'React Native',
            rating:1,
        }
    ],
    skillCategories:{
        languages:'JavaScript, C++',
        frontend:'HTML, CSS, JavaScript (ES6+), TypeScript, Tailwind CSS, React.js, Next.js',
        backend:'Node.js, Express.js, REST APIs, WebSockets (Socket.io)',
        databases:'MongoDB, MySQL',
        ai:'OpenAI API, Gemini API',
        tools:'Git, GitHub, Postman, Vercel'
    },
    projects:[
        {
            title:'Resumind',
            link:'https://github.com/Kushalkush-dev/Resumind-Ai-based-Resume-Builder.',
            description:'Built an AI-powered resume builder enabling users to create, preview, download professional resumes in real time. Implemented dynamic state management and PDF generation using React-PDF for instant updates and exports.',
            startDate:'',
            endDate:''
        },
        {
            title:'Matify AI',
            link:'https://github.com/Kushalkush-dev/Matify-Ai-V_2.0',
            description:'Developed an AI-based system to interpret handwritten mathematical problems using OpenAI and Gemini models. Generated structured LaTeX solutions and rendered outputs in a handwritten-style format.',
            startDate:'',
            endDate:''
        }
    ]
}