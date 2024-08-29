export const projects = [
    {
        id: "1",
        imageUrl: "/images/zynkle/zynkle-1.jpg",
        name: "Zynkle",
        summary: "Incoming social media app, connecting people around the world.",
        githubUrl: "https://github.com/marionikolov17/Zynkle",
        demoUrl: "https://zynkle-1-gsu7.onrender.com/",
        images: [
            "/images/zynkle/zynkle-1.jpg",
            "/images/zynkle/zynkle-2.jpg",
            "/images/zynkle/zynkle-3.jpg",
            "/images/zynkle/zynkle-4.jpg",
        ],
        tech: {
            "Front-End": [
                "react", "vite", "redux", "tailwind", "axios"
            ],
            "Back-End": [
                "node", "express", "typescript", "firebase"
            ],
            "Database": [
                "mongodb"
            ]
        },
        features: [
            "User authentication that uses more complex authentication flow, in order to bring more security.",
            "Implementation of infinite scrolling on home page, which brings more discoverability to the users and their posts.",
            "Creation of posts which uses memory storage for preparing the file, and then saves it to a cloud file storage.",
            "Interacting with posts - like/dislike, save/unsave, share and comment",
            "Deletion of post with resource protection (owner only)",
            "Commenting on a post",
            "Like/dislike and reply to comments",
            "Delete comment/s (comment owner or post owner)",
            "Like/dislike replies",
            "Delete reply/ies (reply owner or post owner)",
            "Following and unfollowing other users",
            "Editing your profile",
            "Searching for users, based on their usernames or full names",
            "Instant user feedback for every action",
            "Beautiful error and message toasts",
            "Logging out of the application",
            "Clean and simple design with consistency and relation to the app's mission and name",
            "Fully responsive design",
        ],
        skills: [
            "Polished my React skills.",
            "Learned Redux State management.",
            "Used Feature-Sliced Design pattern in React.",
            "Learned to handle requests with axios.",
            "Learned how to implement instant user action feedback and fall states.",
            "Learned how to deploy Full-stack web application.",
            "Learned how to upload files to server and to cloud file storage.",
            "Polished my Express.js skills with implementing Typescript.",
            "Learned the importance and difference of Development and Production environment.",
            "Use different servers and databases for Development and Production.",
            "Became very comfortable with TailwindCSS"
        ]
    },
    {
        id: "2",
        imageUrl: "/images/fitness/fitness-5.jpg",
        name: "Fitness-Manager",
        summary: "Create your workout or choose the best one!",
        githubUrl: "https://github.com/MihaelPavlov/Fitness-Coaching-Manager",
        demoUrl: "",
        images: [
            "/images/fitness/fitness-1.jpg",
            "/images/fitness/fitness-2.jpg",
            "/images/fitness/fitness-3.jpg",
            "/images/fitness/fitness-4.jpg",
            "/images/fitness/fitness-5.jpg",
            "/images/fitness/fitness-6.jpg",
        ],
        tech: {
            "Front-End": [
                "angular"
            ],
            "Back-End": [
                "node", "express", "typescript", "knex"
            ],
            "Database": [
                "mysql"
            ]
        },
        features: [
            "Become a contributor",
            "Create exercises",
            "Create workouts",
            "Manage your workouts and exercises",
            "Become a trainee",
            "Subscribe to contributors",
            "Get assigned to do a workout",
            "Private chat to your contributor",
            "Doing real-time workouts",
            "Save workouts to your collection",
            "Edit your profile"
        ],
        skills: [
            "Learned how to work in team.",
            "Learned how to contribute to github repository.",
            "Learned how to do pull requests.",
            "Commented on pull requests.",
            "Approved pull requests.",
            "Gained insights of how a real business project is built from scratch.",
            "Polished my Angular skills.",
            "Polished my Express.js skills.",
            "Learned to use Typescript in Back-End.",
            "Used relational database (MySql) instead of MongoDB",
            "Custom implementaion of GraphQl",
            "Knex.js"
        ]
    },
]
