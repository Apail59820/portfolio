import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAbout = () => {
        const element = document.querySelector('#about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 portfolio-hero-glow rounded-full animate-glow-pulse"></div>

            <div className="portfolio-container relative z-10">
                <div className="text-center fade-in-up">
                    {/* Profile Image */}
                    <div className="relative inline-block mb-8">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                            <img
                                src={'/amaury.png'}
                                alt="Amaury Paillart"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up-delay">
                        Salut, je suis{' '}
                        <span className="portfolio-gradient-text">
              Amaury
            </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up-delay">
                        Développeur web freelance passionné par la création d'expériences numériques modernes et performantes
                    </p>

                    {/* Status badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium mb-8 fade-in-up-delay-2">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                        Disponible pour de nouveaux projets
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up-delay-2">
                        <Button
                            onClick={scrollToContact}
                            className="bg-gradient-primary hover:opacity-90 transition-opacity duration-300 px-8 py-3 text-base font-medium shadow-glow"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Discutons de votre projet
                        </Button>
                        <Button
                            variant="outline"
                            onClick={scrollToAbout}
                            className="px-8 py-3 text-base font-medium border-border hover:bg-muted/50"
                        >
                            En savoir plus
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 fade-in-up-delay-2">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up-delay-2">
                    <button
                        onClick={scrollToAbout}
                        className="animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        <ArrowDown className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;