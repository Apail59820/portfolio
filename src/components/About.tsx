import { Calendar, GraduationCap, User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="portfolio-section bg-gradient-subtle">
            <div className="portfolio-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        À propos de moi
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Découvrez mon parcours et ma passion pour le développement web
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Story */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                                <User className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold">Mon histoire</h3>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            À 24 ans, je suis un développeur web freelance passionné par la création d'expériences numériques qui ont du sens. Mon parcours a commencé il y a quelques années avec une curiosité insatiable pour le web et ses possibilités infinies.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            Mes 2 années d'expérience en alternance m'ont permis de travailler sur des projets variés : des panels d'administration complexes aux sites vitrines élégants, en passant par des applications sur mesure. Chaque projet est une nouvelle aventure où je peux allier créativité et technicité.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            Ce qui me motive ? Transformer vos idées en solutions digitales performantes, accessibles et esthétiques. Je crois fermement qu'un bon code doit être à la fois élégant techniquement et accessible humainement.
                        </p>
                    </div>

                    {/* Stats & Info */}
                    <div className="space-y-6">
                        {/* Experience Card */}
                        <div className="portfolio-card">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Expérience</h4>
                                    <p className="text-muted-foreground">2 ans en alternance</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Développement d'applications web complètes, de la conception à la mise en production
                            </p>
                        </div>

                        {/* Education Card */}
                        <div className="portfolio-card">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Formation</h4>
                                    <p className="text-muted-foreground">Master & Bachelor</p>
                                </div>
                            </div>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Master Expert Développeur Web</li>
                                <li>• Bachelor Concepteur Développeur d'Applications</li>
                            </ul>
                        </div>

                        {/* Philosophy */}
                        <div className="bg-gradient-primary rounded-xl p-6 text-white">
                            <h4 className="font-semibold text-lg mb-3">Ma philosophie</h4>
                            <p className="text-white/90 text-sm leading-relaxed">
                                "Chaque ligne de code doit servir un objectif : améliorer l'expérience utilisateur, optimiser les performances, ou simplifier la maintenance. La technologie doit être au service de l'humain."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;