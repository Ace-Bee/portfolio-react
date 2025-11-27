import { Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-8 border-t border-border bg-background">
            <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                    &copy; {new Date().getFullYear()} Ace. All Rights Reserved.
                </p>
                <p className="text-sm text-muted-foreground/60 mt-2 flex items-center justify-center gap-1">
                    Built with React & Tailwind <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                </p>
            </div>
        </footer>
    )
}

export default Footer
