import React from 'react';

export default function DeveloperPage() {

    const skills = []
    const projects = []
    const technologies = []
    return (
        <div className="container mx-auto px-6 py-16">
            <section className="text-center my-16">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">Developer
                    Portfolio</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Building modern, scalable web
                    applications with clean code and thoughtful user
                    experiences.
                </p>
            </section>
            {/*About & Skills*/}
            <section>
                {/*About*/}
                <div></div>
                {/*Skills*/}
                <div></div>
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
        </div>
    );
}

