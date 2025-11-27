import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const About = () => {
    const experience = [
        {
            role: "Senior Frontend Developer",
            company: "Tech Company Inc.",
            period: "2022 - Present",
            description: "Leading frontend development projects, mentoring junior developers, and implementing modern web solutions."
        },
        {
            role: "Frontend Developer",
            company: "Digital Agency",
            period: "2020 - 2022",
            description: "Developed responsive websites and web applications for various clients using React and modern CSS."
        },
        {
            role: "Junior Developer",
            company: "Startup Co.",
            period: "2019 - 2020",
            description: "Built and maintained web applications, collaborated with design team to implement UI/UX improvements."
        }
    ]

    const education = [
        {
            degree: "Bachelor of Computer Science",
            school: "University Name",
            period: "2015 - 2019",
            description: "Graduated with honors. Focused on software engineering, web development, and user interface design."
        },
        {
            degree: "Web Development Bootcamp",
            school: "Coding Academy",
            period: "2018",
            description: "Intensive program covering modern web technologies including React, Node.js, and responsive design."
        }
    ]

    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full mx-auto mb-8" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        I&apos;m a passionate developer with a keen eye for design and a love for creating
                        seamless user experiences. With expertise in modern web technologies, I bring
                        ideas to life through clean code and intuitive interfaces.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <Tabs defaultValue="experience" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="grid w-full max-w-md grid-cols-2">
                                <TabsTrigger value="experience">Experience</TabsTrigger>
                                <TabsTrigger value="education">Education</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="experience" className="space-y-6">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="border-l-4 border-l-primary hover:bg-accent/5 transition-colors">
                                        <CardHeader>
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <div>
                                                    <CardTitle className="text-xl mb-1">{item.role}</CardTitle>
                                                    <p className="text-primary font-medium">{item.company}</p>
                                                </div>
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {item.period}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </TabsContent>

                        <TabsContent value="education" className="space-y-6">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="border-l-4 border-l-blue-500 hover:bg-accent/5 transition-colors">
                                        <CardHeader>
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <div>
                                                    <CardTitle className="text-xl mb-1">{item.degree}</CardTitle>
                                                    <p className="text-blue-500 font-medium">{item.school}</p>
                                                </div>
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {item.period}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    )
}

export default About
