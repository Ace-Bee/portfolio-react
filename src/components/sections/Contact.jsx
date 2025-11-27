import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Contact Me</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full mx-auto mb-8" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a href="mailto:your.email@example.com" className="block h-full">
                            <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center p-12 text-center h-full">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Email</h3>
                                    <p className="text-muted-foreground mb-6">your.email@example.com</p>
                                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                                        Send Message
                                    </Button>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="block h-full">
                            <Card className="h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group cursor-pointer">
                                <CardContent className="flex flex-col items-center justify-center p-12 text-center h-full">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Linkedin className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">LinkedIn</h3>
                                    <p className="text-muted-foreground mb-6">Connect with me</p>
                                    <Button variant="outline" className="group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        Connect
                                    </Button>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
