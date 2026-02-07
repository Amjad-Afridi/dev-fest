export type EventItem = {
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    description: string;
    slug: string;
}

export const events: EventItem[] = [
    {
        title: "AI & Machine Learning Summit",
        date: "2026-02-15",
        time: "10:00 AM",
        location: "Tech Convention Center, Hall A",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        description: "Explore the latest breakthroughs in AI and machine learning with industry experts. Learn about neural networks, deep learning, and practical AI applications.",
        slug: "ai-ml-summit"
    },
    {
        title: "Web3 & Blockchain Workshop",
        date: "2026-02-16",
        time: "11:00 AM",
        location: "Innovation Hub, Room 301",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
        description: "Dive into decentralized technologies, smart contracts, and the future of Web3. Hands-on workshop with blockchain development tools.",
        slug: "web3-blockchain"
    },
    {
        title: "Cloud Architecture Masterclass",
        date: "2026-02-17",
        time: "12:00 PM",
        location: "Digital Campus, Auditorium B",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        description: "Master cloud infrastructure design patterns with AWS, Azure, and GCP. Learn scalability, security, and cost optimization strategies.",
        slug: "cloud-architecture"
    },
    {
        title: "Mobile Development Bootcamp",
        date: "2026-02-18",
        time: "1:00 PM",
        location: "Startup Incubator, Lab 2",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        description: "Build cross-platform mobile apps with React Native and Flutter. From basics to advanced state management and native integrations.",
        slug: "mobile-dev-bootcamp"
    },
    {
        title: "Cybersecurity & Ethical Hacking",
        date: "2026-02-19",
        time: "2:00 PM",
        location: "Security Lab, Building C",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        description: "Learn penetration testing, vulnerability assessment, and security best practices. Hands-on labs with real-world scenarios.",
        slug: "cybersecurity-hacking"
    },
    {
        title: "DevOps & CI/CD Pipeline",
        date: "2026-02-20",
        time: "3:00 PM",
        location: "Tech Park, Conference Room 5",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
        description: "Automate your deployment workflows with Docker, Kubernetes, and Jenkins. Build robust CI/CD pipelines for modern applications.",
        slug: "devops-cicd"
    },
    {
        title: "UI/UX Design Thinking",
        date: "2026-02-21",
        time: "4:00 PM",
        location: "Creative Studio, Floor 3",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        description: "Transform user experiences with design thinking methodologies. Learn Figma, prototyping, and user research techniques.",
        slug: "uiux-design"
    },
    {
        title: "Data Science & Analytics",
        date: "2026-02-22",
        time: "5:00 PM",
        location: "Research Center, Lab A",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        description: "Unlock insights from data using Python, R, and modern analytics tools. Learn data visualization, statistical modeling, and predictive analytics.",
        slug: "data-science"
    },
    {
        title: "Game Development with Unity",
        date: "2026-02-23",
        time: "6:00 PM",
        location: "Gaming Arena, Studio 1",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
        description: "Create immersive 2D and 3D games with Unity engine. Learn game physics, animations, and monetization strategies.",
        slug: "game-dev-unity"
    },
    {
        title: "Open Source Contribution Day",
        date: "2026-02-24",
        time: "7:00 PM",
        location: "Community Hall, Main Building",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        description: "Join the open source community! Learn how to contribute to major projects, collaborate with developers worldwide, and build your portfolio.",
        slug: "opensource-day"
    }
]