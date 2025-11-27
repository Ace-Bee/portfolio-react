import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg text-muted-foreground mb-4 font-medium">Hello, I'm</p>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                            <span className="text-gradient">Your Name</span>
                            <br />
                            <span className="text-foreground">Developer</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                            I create beautiful, functional, and user-centered digital experiences.
                            Passionate about turning ideas into reality through code and design.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" variant="glow" className="group">
                                Download CV
                                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                            </Button>
                            <Button size="lg" variant="secondary" className="group" asChild>
                                <a href="#projects">
                                    View Work
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gradient-start to-gradient-end opacity-20 blur-2xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full border-4 border-background overflow-hidden shadow-2xl">
                                <img
                                    src="/profile.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
