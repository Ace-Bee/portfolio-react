import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Projects = () => {
    const projects = [
        {
            title: "Analytics Dashboard",
            description: "A modern analytics dashboard with real-time data visualization, built with React and Chart.js.",
            image: "/project1.png",
            tags: ["React", "Chart.js", "API"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "E-Commerce Platform",
            description: "Full-featured online shopping platform with cart management, payment integration, and admin panel.",
            image: "/project2.png",
            tags: ["Next.js", "Stripe", "MongoDB"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Fitness Tracker App",
            description: "Mobile-first fitness tracking application with workout plans, progress tracking, and social features.",
            image: "/project3.png",
            tags: ["React Native", "Firebase", "Charts"],
            links: { github: "#", demo: "#" }
        }
    ]

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Projects</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full mx-auto mb-8" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Here are some of my recent works showcasing my skills in web development and UI design.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden h-full flex flex-col hover:shadow-glow transition-all duration-300 group border-border/50">
                                <div className="relative overflow-hidden h-48">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex gap-4 pt-0">
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                    <Button variant="default" size="sm" className="w-full" asChild>
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
