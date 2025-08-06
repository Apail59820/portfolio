import { Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: <Globe className="h-6 w-6" />,
            skills: [
                { name: 'Next.js', level: 90 },
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 85 },
                { name: 'Tailwind CSS', level: 90 },
            ],
            color: 'primary'
        },
        {
            title: 'Backend & CMS',
            icon: <Database className="h-6 w-6" />,
            skills: [
                { name: 'Directus', level: 85 },
                { name: 'Node.js', level: 75 },
                { name: 'API REST', level: 80 },
                { name: 'PostgreSQL', level: 70 },
            ],
            color: 'accent'
        },
        {
            title: 'Outils & Méthodes',
            icon: <Code className="h-6 w-6" />,
            skills: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'Figma', level: 80 },
                { name: 'Agile/Scrum', level: 75 },
                { name: 'Testing', level: 70 },
            ],
            color: 'muted'
        }
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'primary':
                return {
                    icon: 'bg-primary/10 text-primary',
                    bar: 'bg-gradient-primary'
                };
            case 'accent':
                return {
                    icon: 'bg-accent/10 text-accent',
                    bar: 'bg-gradient-accent'
                };
            default:
                return {
                    icon: 'bg-muted text-foreground',
                    bar: 'bg-gradient-to-r from-muted-foreground to-foreground'
                };
        }
    };

    return (
        <section id="skills" className="portfolio-section">
            <div className="portfolio-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mes compétences
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Technologies et outils que je maîtrise pour donner vie à vos projets
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => {
                        const colorClasses = getColorClasses(category.color);

                        return (
                            <div key={category.title} className="portfolio-card">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses.icon}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                </div>

                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${colorClasses.bar}`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Skills */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold mb-6">Autres compétences</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Responsive Design',
                            'SEO',
                            'Performance Web',
                            'Accessibilité',
                            'UX/UI Design',
                            'APIs externes',
                            'Déploiement',
                            'Optimisation'
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-muted/50 rounded-full text-sm border border-border hover:bg-muted transition-colors duration-200"
                            >
                {skill}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;