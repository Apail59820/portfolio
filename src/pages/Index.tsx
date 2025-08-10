import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
    return (
        <>
            <Helmet>
                <title>Amaury Paillart - Développeur Web Freelance</title>
                <meta
                    name="description"
                    content="Développeur web freelance spécialisé en Next.js, React et TypeScript. 2 ans d'expérience, création de sites vitrines, applications web et panels d'administration."
                />
                <link rel="canonical" href="https://apaillart.portfolio.com/" />
            </Helmet>
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Index;
