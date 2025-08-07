import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: '#about', label: 'À propos' },
        { href: '#skills', label: 'Compétences' },
        { href: '#projects', label: 'Projets' },
        { href: '#contact', label: 'Contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="portfolio-container">
                <div className="flex items-center justify-between h-16">
                    <div className="font-semibold text-xl portfolio-gradient-text">
                        Amaury Paillart
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>

                {isMenuOpen && (
                    <nav className="md:hidden pb-4">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;