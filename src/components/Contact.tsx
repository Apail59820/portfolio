import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/useToast.ts';

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast({
                title: "Message envoyé !",
                description: "Je vous recontacterai dans les plus brefs délais.",
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            label: 'Email',
            value: 'amaury.paillart@example.com',
            href: 'mailto:amaury.paillart@example.com'
        },
        {
            icon: <Phone className="h-5 w-5" />,
            label: 'Téléphone',
            value: '+33 6 12 34 56 78',
            href: 'tel:+33612345678'
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: 'Localisation',
            value: 'France',
            href: null
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="h-5 w-5" />,
            label: 'GitHub',
            href: 'https://github.com',
            color: 'hover:text-foreground'
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            color: 'hover:text-blue-600'
        }
    ];

    return (
        <section id="contact" className="portfolio-section">
            <div className="portfolio-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Travaillons ensemble
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Vous avez un projet en tête ? Discutons-en ! Je suis disponible pour de nouveaux défis passionnants.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Que ce soit pour un nouveau projet, une collaboration ou simplement échanger sur le développement web,
                                n'hésitez pas à me contacter. Je réponds généralement sous 24h.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="font-medium">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-muted-foreground">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h4 className="font-medium mb-4">Retrouvez-moi aussi sur</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-200 hover:scale-105 ${social.color}`}
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="bg-gradient-accent rounded-xl p-6 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                <span className="font-medium">Statut : Disponible</span>
                            </div>
                            <p className="text-white/90 text-sm">
                                Actuellement ouvert à de nouveaux projets freelance. Prochaine disponibilité : immédiate.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="portfolio-card">
                        <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Nom complet *
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Votre nom"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="votre@email.com"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Sujet *
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="De quoi voulez-vous parler ?"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Décrivez votre projet ou votre demande..."
                                    rows={5}
                                    className="w-full resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Envoyer le message
                                    </>
                                )}
                            </Button>
                        </form>

                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;