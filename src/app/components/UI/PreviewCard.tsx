import {ArrowRight, Code, User} from "lucide-react";
import {Button} from "@/app/components/UI/Button";
import Link from "next/link";

export default function PreviewCard({role}: { role: string }) {
    return (
        <>
                {role === 'creator' ?
                    <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-spring border">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-orange-light rounded-lg">
                                <User className="h-6 w-6 text-orange"/>
                            </div>
                            <h3 className="text-2xl font-semibold">Creative Work</h3>
                        </div>
                        <p>Exploring storytelling through various mediums including writing, content creation, and
                            narrative design.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-muted rounded-full text-sm">Writing</span>
                            <span className="px-3 py-1 bg-muted rounded-full text-sm">Content Creation</span>
                            <span className="px-3 py-1 bg-muted rounded-full text-sm">Storytelling</span>
                        </div>
                        <Button variant="accent" asChild>
                            <Link href="/creator">
                                View Creative Portfolio
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    :
                    <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-spring border">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-sage-light rounded-lg">
                                <Code className="h-6 w-6 text-sage"/>
                            </div>
                            <h3 className="text-2xl font-semibold">Development</h3>
                        </div>
                        <p>Building modern web applications with React, TypeScript, and other cutting-edge technologies.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-muted rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-muted rounded-full text-sm">Typescript</span>
                            <span className="px-3 py-1 bg-muted rounded-full text-sm">TailwindCss</span>
                        </div>
                        <Button variant="portfolio" asChild>
                            <Link href="/developer">
                                View Tech Portfolio
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                }
        </>
    )
}