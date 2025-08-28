import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    category?: string;
    tags?: string[];
    link?: string;
    isHighlighted?: boolean;
}

const ProjectCard = ({ title, description, category, tags, link, isHighlighted }: ProjectCardProps) => {
    return (
        <Card className={`group hover:shadow-card transition-spring ${isHighlighted ? 'border-orange bg-orange-light/5' : ''}`}>
            <CardHeader>
                {category && (
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        {category}
                    </div>
                )}
                <CardTitle className="text-lg group-hover:text-orange transition-smooth">
                    {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                )}
                {link && (
                    <Button variant="outline" size="sm" className="w-full group">
                        View Project
                        <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default ProjectCard;