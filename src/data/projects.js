import { AustronautLogo, DishoLogo, HiAppLogo, NotesAppLogo } from "../assets"

export const projects = [
    {
        name: 'Austronaut',
        desc: `Austronaut is an advanced AI assistant, powered by LLaMA, designed to provide accurate answers, solve problems, and optimize productivity in a variety of fields.
        With its state-of-the-art natural language processing, Astronaut can fluently understand and generate text, offering assistance in tasks such as programming, writing, learning, and more.
        Its intuitive interface and enhanced conversational experience make it an ideal tool for developers, students, and professionals looking for a quick and efficient solution to their queries.
        Explore the universe of knowledge with Astronaut and take your productivity to the next level.`,
        logo: AustronautLogo,
        video: '',
        linkGH: '',
        linkN: 'https://austronaut-chat.netlify.app/',
    },

    {
        name: 'Hi',
        desc: `Hi is a real-time messaging application inspired by WhatsApp, built to offer users a fast, fluid, and modern way to communicate.
        With features such as instant chat, adding contacts by email and nickname, voice and video calls, voice messages, profile editing, and a clean, user-friendly interface, Hi reimagines how we stay connected.
        Designed with modern technologies, Hi ensures a seamless and secure user experience, making it the ideal platform for anyone looking for a powerful yet simple communication tool.
        Whether you're chatting with friends, collaborating with colleagues, or connecting with family, Hi helps you stay close — no matter the distance.`,
        logo: HiAppLogo,
        video: '',
        linkGH: '',
        linkN: 'https://hi-app.netlify.app/',
    },

    {
        name: 'Disho Replica',
        desc: `The Disho Replica is a front-end project developed with React.js and styled using Bootstrap, designed to replicate the visual structure and user interface of the original Disho platform.

        This project highlights my ability to work with component-based architecture and implement responsive layouts using Bootstrap's powerful grid system. It demonstrates both UI/UX precision and clean, maintainable code within a real-world design scenario.

        Key features include:

        - Built with React.js for reusable, dynamic components
        - Bootstrap styling for fast, responsive, and modern layouts
        - Mobile-first design for full responsiveness
        - Well-structured components and layout sections
        - Smooth user interaction and clean navigation
        This project is a great example of how I translate design ideas into fully functional, production-ready interfaces using widely adopted technologies like React and Bootstrap.`,
        logo: DishoLogo,
        video: '',
        linkGH: '',
        linkN: 'https://disho-replica.netlify.app/',
    },

    {
        name: 'Notes App',
        desc: `Notes App is a fully functional note-taking application developed with React.js, designed to provide a clean and responsive interface for organizing personal notes.

        It features real-time data storage and synchronization using Firebase Firestore, as well as user authentication with Firebase Auth, ensuring that each user's notes are securely stored and accessible across devices.

        Styled using pure CSS, the app maintains a lightweight, clean design that focuses on usability. Additionally, all interactions such as confirmations, alerts, and success messages are enhanced with SweetAlert, providing a smooth and visually appealing user experience.

        Key Features:

        Create, edit, and delete notes in real time
        Secure login and registration with Firebase Authentication
        Cloud storage and synchronization using Firestore Database
        Responsive user interface built with React.js and pure CSS
        Custom alerts and confirmations with SweetAlert
        Whether used for productivity, journaling, or task management, Notes App provides a simple yet powerful solution for managing information securely and efficiently.`,
        logo: NotesAppLogo,
        video: '',
        linkGH: '',
        linkN: 'https://notes-app-react-js-firebase-firestore.netlify.app/',
    },

]