import React from 'react';
import {FileText, ListVideo, Pencil, PenTool, Video} from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/app/components/UI/ProjectCard";

export default function CreatorPage() {
    const creatorCategories = [
        {
            title: 'GeekVilág (HUN)',
            description: "Under the pen name Gabe March, I write articles in Hungarian on various pop culture topics such as movies, series, and video games.",
            icon: <Pencil className="h-6 w-6"/>,
            link: 'https://geekvilag.hu/szerkesztok/geekvilag/',
            tags: ['writing', 'blog', 'pop culture']
        },
        {
            title: 'Képregényológus (HUN)',
            description: 'I run a YouTube channel where I create both short- and long-form videos on various comic book topics.',
            icon: <Video className="h-6 w-6"/>,
            link: 'https://www.youtube.com/@Kepregenyologus/',
            tags: ['youtube', 'videos', 'comics']
        },
        {
            title: 'Gaberegényes (HUN)',
            description: "I also create short format videos on TikTok. Yep, it's about comics too",
            icon: <ListVideo className="h-6 w-6"/>,
            link: 'https://www.tiktok.com/@gaberegenyes',
            tags: ['tiktok', 'short format videos', 'comics']
        },
        {
            title: 'Comicologist - Medium blog (EN)',
            description: 'You guessed it, I love comic books. I recently started a Medium blog where I write articles about comics, but in English.',
            icon: <PenTool className="h-6 w-6"/>,
            link: 'https://medium.com/comicologist',
            tags: ['writing', 'blog', 'comics']
        },
        {
            title: 'Short stories (HUN)',
            description: "I currently publish my short stories on Wattpad in Hungarian.",
            icon: <FileText className="h-6 w-6"/>,
            link: 'https://www.wattpad.com/user/GborSzilgyi6',
            tags: ['writing', 'short stories', 'fiction']
        },
    ]

    const highlightedProjects = [
        {
            title: "Sandman graphic novel",
            description: "A comprehensive deep dive to a legendary comic series",
            category: "Long format video",
            tags: ["video", "sandman", "graphic novel"],
            isHighlighted: true,
            link: "https://youtu.be/exgM9se3wnc?si=YxKRUvNEewqo4xdM"
        },
        {
            title: "Enter: Full Stack ",
            description: "My tech journey to become a Full Stack developer through storytelling",
            category: "Medium publication",
            tags: ["medium", "content writing", "programming", "web development"],
            isHighlighted: true,
            link: "https://medium.com/enter-full-stack"
        },
        {
            title: "Ébredés",
            description: "An unsettling weird horror short story about the nightmare lurking beneath the surface of everyday life.",
            category: "Short story",
            tags: ["storytelling", "writing", "short stories"],
            isHighlighted: true,
            link: "https://www.wattpad.com/story/400489501-%C3%A9bred%C3%A9s"
        }
    ]

    return (
        <div className='container mx-auto px-6 py-16'>
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 bg-gradient-accent bg-clip-text text-transparent">
                    Creative Portfolio
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Crafting stories that connect, inspire, and challenge perspectives across various mediums and
                    formats.
                </p>
            </section>
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Content Creation</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {creatorCategories.map((category, index) => (
                        <Link key={index} href={category.link} target="_blank">
                            <div

                                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-spring border group cursor-pointer"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="p-2 bg-orange-light rounded-lg group-hover:bg-orange group-hover:text-white transition-smooth">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold group-hover:text-orange transition-smooth">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">{category.description}</p>
                                <div className="flex py-3 gap-3">
                                    {category.tags.map((tag, index) => (
                                        <div key={index}>
                                            <span className="px-3 py-1 bg-muted rounded-full text-sm">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="mb-16">
                <div className="flex justify-center">
                    <h2 className="text-3xl my-6 font-bold">Highlighted Projects</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {highlightedProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            category={project.category}
                            tags={project.tags}
                            isHighlighted={project.isHighlighted}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
