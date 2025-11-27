import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Source Code', href: 'https://github.com/Ace-Bee', external: true },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const offsetTop = element.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-2" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="text-2xl font-bold font-heading bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent hover:scale-105 transition-transform"
                >
                    Portfolio
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            onClick={(e) => !link.external && scrollToSection(e, link.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative group",
                                activeSection === link.href.substring(1)
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                            <span
                                className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gradient-start to-gradient-end transition-all duration-300 group-hover:w-full",
                                    activeSection === link.href.substring(1) ? "w-full" : ""
                                )}
                            />
                        </a>
                    ))}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>

                <div
                    className={cn(
                        "fixed inset-x-0 top-[60px] p-6 bg-background/95 backdrop-blur-xl border-b border-border md:hidden transition-all duration-300 ease-in-out",
                        isMobileMenuOpen
                            ? "translate-y-0 opacity-100 pointer-events-auto"
                            : "-translate-y-full opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                onClick={(e) => {
                                    if (!link.external) {
                                        scrollToSection(e, link.href)
                                    } else {
                                        setIsMobileMenuOpen(false)
                                    }
                                }}
                                className={cn(
                                    "text-lg font-medium py-2 border-b border-border/50 transition-colors",
                                    activeSection === link.href.substring(1)
                                        ? "text-primary border-primary/50"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
