import React from 'react';
import {BookOpen, PenTool} from "lucide-react";

export default function CreatorPage() {
    const creatorCategories = [
        {
            title: 'GeekVilág',
            description: 'Pen name: Gabe March',
            icon: <BookOpen className="h-6 w-6"/>,
            link: 'https://geekvilag.hu/szerkesztok/geekvilag/'
        },
        {
            title: 'Képregényológus',
            description: 'Comics, YouTube-channel',
            icon: <BookOpen className="h-6 w-6"/>,
            link: 'https://www.youtube.com/@Kepregenyologus/'
        },
        {
            title: 'Gaberegényes',
            description: 'Comics, TikTok',
            icon: <BookOpen className="h-6 w-6"/>,
            link: 'https://www.tiktok.com/@gaberegenyes'
        },
        {
            title: 'Comicologist - Medium',
            description: 'Comics, Medium',
            icon: <BookOpen className="h-6 w-6"/>,
            link: 'https://medium.com/comicologist'
        },
        {
            title: 'Short stories',
            description: "Currently I'm publishing my short stories to Wattpad in Hungarian.",
            icon: <PenTool className="h-6 w-6"/>,
            link: 'https://www.wattpad.com/user/GborSzilgyi6'
        },
    ]
    return (
        <div className='container mx-auto px-16 py-16'>
            <section>
                <h1>Creative Portfolio</h1>
                <p>Crafting stories that connect, inspire, and challenge perspectives across various mediums and
                    formats.
                </p>
            </section>
            <section className="mb-16">
                {creatorCategories.map((category, index) => (
                    <div key={index}>
                        <div>
                            <div>
                                {category.icon}
                            </div>
                            <div>
                                <h3>{category.title}</h3>
                            </div>
                                <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
