import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const slideFrom = (direction) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Diag 2.0',
      description: "Un logiciel de gestion d'états des lieux permettant de créer des typologies personnalisées pour instancier et diagnostiquer rapidement des milliers de logements sans saisie manuelle.",
      image: '/diag2-preview.png',
      tech: ['React', 'TypeScript', 'Node.JS', 'Material UI', 'Framer Motion', 'Redux', 'Chart.JS'],
      category: 'Web App',
      featured: true
    },
    {
      id: 2,
      title: 'Projex CRM',
      description: 'Un outil collaboratif de suivi commercial transformant une newsletter hebdomadaire en mini CRM, pour centraliser, qualifier et exploiter les retours terrain des équipes.' ,
      image: '/projex-crm-preview.png',
      tech: ['Next.JS', 'TypeScript', 'Tailwinds', 'Strapi', 'Framer Motion', 'React Query'],
      category: 'Web App',
      featured: true
    },
    {
      id: 3,
      title: 'Maïa',
      description: "Une plateforme de gestion client tout-en-un pour bureaux d’études, intégrant suivi de projet, facturation, relances et communication centralisée.",
      image: '/maia-preview.png',
      tech: ['Next.JS', 'Directus', 'Ant Design'],
      category: 'Web App',
      featured: false
    },
    {
      id: 4,
      title: 'Gritty Gears',
      description: "Site web de e-commerce sur le thème de la moto. Projet réalisé dans le cadre des études.",
      image: '/gritty-gears-preview.png',
      tech: ['React', 'TypeScript', 'React Native', 'Firebase'],
      category: 'E-Commerce',
      featured: false
    },
    {
      id: 5,
      title: 'Soxup',
      description: "Site web de e-commerce réalisé pour une marque de chaussettes au design décalé.",
      image: '/soxup-preview.png',
      tech: ['Next.JS', 'TypeScript', 'Stripe', 'Medusa.JS'],
      category: 'E-Commerce',
      featured: false
    },
    {
      id: 5,
      title: 'IHM Solac',
      description: "IHM déployée sur les ponts roulants du site d'ArcelorMittal Mardyck. Affiche l'état des élements du pont roulant, et ses défauts.",
      image: '/ihm-preview.png',
      tech: ['LAD', 'FBD', 'Magelis', 'Control Expert', 'VijeoDesigner', 'C++'],
      category: 'IHM',
      featured: false
    },
  ];

  return (
    <section id="projects" className="portfolio-section bg-gradient-subtle">
      <div className="portfolio-container">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes projets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques réalisations qui illustrent mon savoir-faire et ma créativité
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className={`portfolio-card overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex lg:items-center lg:gap-8`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideFrom(index % 2 === 0 ? 'left' : 'right')}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      ✨ Projet phare
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir le projet
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.filter(p => !p.featured).map((project, i) => (
              <motion.div
                key={project.id}
                className="portfolio-card group"
                variants={fadeInUp}
                custom={i}
              >
                <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4 transition-shadow duration-300 group-hover:shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-3 w-3" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Voir
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Intéressé par ces réalisations ? Discutons de votre projet !
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-primary hover:opacity-90 px-8"
            >
              Démarrer un projet
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
