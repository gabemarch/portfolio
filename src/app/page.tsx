"use client"
import {useState} from "react";
import RoleToggle from "./components/UI/RoleToggle";
import {Button} from "./components/UI/Button";
import {ArrowRight, Code, User} from "lucide-react";
import Link from "next/link";
import PreviewCard from "@/app/components/UI/PreviewCard";

export default function Home() {
    const [activeRole, setActiveRole] = useState<"creator" | "developer">("creator");
    return (
        <div className="container mx-auto px-6 py-16">
            <section className="text-center mb-16 ">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                        I&apos;m a writer, content creator and web developer.
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Crafting compelling stories and building beautiful digital
                        experiences. Welcome to my portfolio where creativity meets
                        technology.
                    </p>
                    <div className="flex justify-center mb-8">
                        <RoleToggle activeRole={activeRole} onRoleChange={setActiveRole}/>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button variant="hero" size="lg" asChild>
                            <Link href={`/${activeRole}`}>
                                {activeRole === "creator" ? (
                                    <>
                                        <User className="h-5 w-5"/>
                                        Explore Creative Work
                                    </>
                                ) : (
                                    <>
                                        <Code className="h-5 w-5"/>
                                        View Development Projects
                                    </>
                                )}
                                <ArrowRight className="h-5 w-5"/>
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">
                                Get In Touch
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <PreviewCard role='creator'/>
                    <PreviewCard role='developer'/>
                </div>
            </section>
        </div>
    );
}
