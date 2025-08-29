import React from 'react';
import {Code, Globe, Server, Smartphone} from "lucide-react";

export default function DeveloperPage() {

    const skills = [
        {name: "React", level: 95},
        {name: "Next.js", level: 90},
        {name: "TypeScript", level: 88},
        {name: "Tailwind CSS", level: 92},
        {name: "Redux-Saga", level: 85},
        {name: "Node.js", level: 80},
        {name: "Express", level: 78},
        {name: "Python", level: 30},
        {name: "", level: 50}
    ];

    const projects = [{
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration for seamless shopping experience.",
        category: "Full Stack",
        tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        link: "#"
    }, {
        title: "Project Management Tool",
        description: "Collaborative project management application with real-time updates and team collaboration features.",
        category: "Frontend",
        tags: ["React", "TypeScript", "Socket.io", "Redux"],
        link: "#"
    }, {
        title: "Analytics Dashboard",
        description: "Real-time analytics dashboard with interactive charts and data visualization for business insights.",
        category: "Frontend",
        tags: ["React", "D3.js", "Tailwind CSS", "Chart.js"],
        link: "#"
    }, {
        title: "The Backend Basic Bunch",
        description: "Every developer's starter kit! You know the drill: Weather app, Day starter automation, Folder sorter ",
        category: "Backend",
        tags: ["Python", ""],
        link: "#"
    }];

    const technologies = [
        {
            category: "Frontend",
            icon: <Code className="h-6 w-6"/>,
            techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
        }, {
            category: "Backend",
            icon: <Server className="h-6 w-6"/>,
            techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
        }, {
            category: "Mobile",
            icon: <Smartphone className="h-6 w-6"/>,
            techs: ["React Native", "Expo", "iOS", "Android"]
        }, {
            category: "DevOps",
            icon: <Globe className="h-6 w-6"/>,
            techs: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"]
        }
    ]

    const softSkills = [
        {
            name: "Assertive",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "Agile",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "Team Player",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "Confident in English",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "Communication",
            icon: <Globe className="h-6 w-6"/>
        },
    ]

    const otherSkills = [
        {
            name: "Git",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "Figma",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "Jira",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "Slack",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            name: "AI Tools",
            icon: <Globe className="h-6 w-6"/>
        },
    ]


    return (<div className="container mx-auto px-6 py-16">
        <section className="text-center my-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">Developer
                Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Building modern, scalable web
                applications with clean code and thoughtful user
                experiences.
            </p>
        </section>
        {/*About & Skills*/}
        <section className="grid lg:grid-cols-2 gap-12 mb-16">
            {/*About*/}
            <div>
                <h2 className="text-3xl font-bold mb-6">About</h2>
                <div className="bg-card rounded-xl p-6 shadow-card border">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Passionate frontend developer with expertise in React ecosystem and modern web technologies.
                        I enjoy creating intuitive user interfaces and solving complex problems with elegant solutions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        With a strong foundation in both frontend and backend development, I build end-to-end
                        applications that are both beautiful and functional.
                    </p>
                </div>
            </div>
            {/*Skills*/}
            <div>
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <div className="bg-card rounded-xl p-6 shadow-card border">
                    <div className="space-y-4">
                        {skills.map((skill, i) => (<div key={i}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-sm text-muted-foregrond">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                                <div
                                    className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{width: `${skill.level}%`}}>
                                </div>
                            </div>
                        </div>))}
                    </div>

                </div>
            </div>
        </section>
        {/*Technologies*/}
        <section>

        </section>
        {/*Projects*/}
        <section>

        </section>
        {/*CTA*/}
        <section>

        </section>
    </div>);
}

