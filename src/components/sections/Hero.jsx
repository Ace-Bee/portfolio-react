import { useEffect, useRef } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap, magneticHover } from '@/lib/gsap'

const Hero = () => {
    const sectionRef = useRef(null)
    const titleLine1Ref = useRef(null)
    const titleLine2Ref = useRef(null)
    const paragraphRef = useRef(null)
    const buttonsRef = useRef(null)
    const avatarRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
            tl.set([titleLine1Ref.current, titleLine2Ref.current, paragraphRef.current, buttonsRef.current, avatarRef.current], { opacity: 0 })
            tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
              .fromTo(titleLine1Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
              .fromTo(titleLine2Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
              .fromTo(paragraphRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
              .fromTo(buttonsRef.current.children, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.3')
              .fromTo(avatarRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, '-=0.2')
        }, sectionRef)
        Array.from(buttonsRef.current?.children ?? []).forEach((btn) => {
            ctx.add(() => magneticHover(btn))
        })
        return () => ctx.revert()
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <div ref={sectionRef} className="absolute inset-0 pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-muted-foreground mb-4 font-medium">Hello, I&apos;m</p>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                            <span ref={titleLine1Ref} className="text-gradient inline-block">Your Name</span>
                            <br />
                            <span ref={titleLine2Ref} className="text-foreground inline-block">Developer</span>
                        </h1>
                        <p ref={paragraphRef} className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                            I create beautiful, functional, and user-centered digital experiences.
                            Passionate about turning ideas into reality through code and design.
                        </p>

                        <div ref={buttonsRef} className="flex flex-wrap gap-4">
                            <Button size="lg" variant="glow" className="group" asChild>
                                <a href="/cv.pdf" download>
                                    Download CV
                                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                                </a>
                            </Button>
                            <Button size="lg" variant="secondary" className="group" asChild>
                                <a href="#projects">
                                    View Work
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gradient-start to-gradient-end opacity-20 blur-2xl animate-pulse" />
                            <div ref={avatarRef} className="relative w-full h-full rounded-full border-4 border-background overflow-hidden shadow-2xl">
                                <img
                                    src="/profile.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
