import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="portfolio-container py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} Amaury Paillart. Tous droits réservés.
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">
                            Développeur web freelance passionné
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>Fait avec</span>
                        <Heart className="h-4 w-4 text-red-500 fill-current" />
                        <span>et Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;