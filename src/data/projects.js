import { AustronautLogo, DishoLogo, GifExpertAppLogo, HiAppLogo, NotesAppLogo, PianoAppLogo, SocnetLogo } from "../assets"

export const projects = [
    {
        name: 'Austronaut',
        desc: `Austronaut is an advanced AI assistant, powered by LLaMA, designed to provide accurate answers, solve problems, and optimize productivity in a variety of fields.
        With its state-of-the-art natural language processing, Astronaut can fluently understand and generate text, offering assistance in tasks such as programming, writing, learning, and more.
        Its intuitive interface and enhanced conversational experience make it an ideal tool for developers, students, and professionals looking for a quick and efficient solution to their queries.
        Explore the universe of knowledge with Astronaut and take your productivity to the next level.`,
        logo: AustronautLogo,
        technologies: ['React JS', 'Firebase', 'Motion', 'Tailwind CSS'],
        video: '',
        linkGH: 'https://github.com/Juanfelipegrc/austronaut',
        linkN: 'https://austronaut-chat.netlify.app/',
    },

    {
        name: 'Hi',
        desc: `Hi is a real-time messaging application inspired by WhatsApp, built to offer users a fast, fluid, and modern way to communicate.
        With features such as instant chat, adding contacts by email and nickname, voice and video calls, voice messages, profile editing, and a clean, user-friendly interface, Hi reimagines how we stay connected.
        Designed with modern technologies, Hi ensures a seamless and secure user experience, making it the ideal platform for anyone looking for a powerful yet simple communication tool.
        Whether you're chatting with friends, collaborating with colleagues, or connecting with family, Hi helps you stay close — no matter the distance.`,
        logo: HiAppLogo,
        technologies: ['React JS', 'Firebase', 'Tailwind CSS'],
        video: '',
        linkGH: 'https://github.com/Juanfelipegrc/hi-app',
        linkN: 'https://hi-app.netlify.app/',
    },

    {
        name: 'Socnet',
        desc: `Socnet - Connect, Share, Discover
            Socnet is a modern social networking app designed for effortless sharing and meaningful connections. Built with React Native and Expo, it offers a smooth and intuitive experience that brings people closer through visual content.

            Key Features:

            Share photos and moments instantly to your personal feed

            Like, comment, and engage with posts from your community

            Follow other users and grow your network

            Explore trending content and discover new profiles

            Enjoy real-time interaction through a clean, fast interface

            Experience a minimalist, user-friendly design built for mobile

            Socnet is more than just a photo-sharing app — it's a space to express yourself, stay connected, and discover the people and stories that inspire you.`,
        logo: SocnetLogo,
        technologies: ['React Native JS', 'Clerk', 'Convex', 'Expo'],
        video: '',
        linkGH: 'https://github.com/Juanfelipegrc/socnet',
        linkN: '',
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
        technologies: ['React JS', 'Firebase', 'Bootstrap'],
        video: '',
        linkGH: 'https://github.com/Juanfelipegrc/disho-replica',
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
        technologies: ['React JS', 'Firebase', 'CSS'],
        video: '',
        linkGH: 'https://github.com/Juanfelipegrc/notes-app',
        linkN: 'https://notes-app-react-js-firebase-firestore.netlify.app/',
    },

    {
        name: 'Gif Expert App',
        desc: `The GIF Expert App is a modern web application designed to search and display animated GIFs in a fast and responsive interface. Built with React.js, the app seamlessly integrates with the Giphy API to deliver real-time search results and a smooth user experience.

        Key Features:

        - Real-time GIF search functionality
        - Ability to add and manage custom categories
        - Fast rendering using reusable React components
        - Responsive grid layout for displaying GIFs
        - Lazy loading for optimized performance
        - Clean and intuitive user interface
        
        Tech Stack:

        - React.js
        - JavaScript (ES6+)
        - CSS Modules or Tailwind CSS
        - Giphy API
        - Vite.js for optimized development and build speed
        The GIF Expert App is a great example of component-based architecture, asynchronous data handling, and responsive design. It's an ideal project to demonstrate proficiency in modern front-end development.`,
        logo: GifExpertAppLogo,
        technologies: ['React JS', 'CSS'],
        video: '',
        linkGH: 'https://github.com/Juanfelipegrc/react-gif-expert-app',
        linkN: 'https://gif-expert-app-react-js.netlify.app/',
    },

    {
        name: 'Piano App',
        desc: `Piano App is an application developed with React.js and Bootstrap that allows users to play a digital piano directly from their browser. The main focus was to create an accessible, smooth, and visually clean experience, ideal for both beginners and users with musical experience.

        Key Features:
        - Responsive digital keyboard with a layout adapted for mobile and desktop
        - Realistic piano sounds using the Soundfont-player library
        - Piano control via physical keyboard using React Hotkeys
        - Interface built with Bootstrap, optimized for usability

        Project Goal:
        To build an interactive tool that combines musical education and entertainment, with a clear design and a modern architecture based on reusable React components.`,
        logo: PianoAppLogo,
        technologies: ['React JS', 'Bootstrap', 'CSS'],
        video: '',
        linkGH: 'https://github.com/Juanfelipegrc/piano-app',
        linkN: 'https://piano-app-react-js.netlify.app/',
    },

]