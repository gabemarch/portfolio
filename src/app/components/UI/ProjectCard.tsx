import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/app/components/UI/Card";

interface ProjectCardProps {
    title: string;
    description: string;
    category?: string;
    tags?: string[];
    link?: string;
    isHighlighted?: boolean;
}

export default function ProjectCard({ title, description, category, tags, link, isHighlighted}: ProjectCardProps) {
    return(
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardDescription>{description}</CardDescription>
            <CardContent>
            </CardContent>
        </Card>
    )
}