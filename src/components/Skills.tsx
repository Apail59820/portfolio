import { Code, Database, Globe } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
      color: "primary",
    },
    {
      title: "Backend & CMS",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Directus", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "API REST", level: 80 },
        { name: "PostgreSQL", level: 70 },
      ],
      color: "accent",
    },
    {
      title: "Outils & Méthodes",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Agile/Scrum", level: 75 },
        { name: "Testing", level: 70 },
      ],
      color: "muted",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          icon: "bg-primary/10 text-primary",
          bar: "bg-gradient-primary",
        };
      case "accent":
        return {
          icon: "bg-accent/10 text-accent",
          bar: "bg-gradient-accent",
        };
      default:
        return {
          icon: "bg-muted text-foreground",
          bar: "bg-gradient-to-r from-muted-foreground to-foreground",
        };
    }
  };

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        {/* TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour donner vie à vos projets
          </p>
        </motion.div>

        {/* CATEGORIES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => {
            const colorClasses = getColorClasses(category.color);

            const { ref, inView } = useInView({ triggerOnce: true });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start("visible");
              }
            }, [inView]);

            return (
              <motion.div
                key={category.title}
                ref={ref}
                initial={{ opacity: 0, rotateY: 15, y: 40 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    rotateY: 0,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                className="portfolio-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses.icon}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: "0%" }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: "0%" }
                      }
                      transition={{
                        duration: 1,
                        delay: j * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${colorClasses.bar}`}
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1s ease-out",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AUTRES COMPÉTENCES */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <h3 className="text-xl font-semibold mb-6">Autres compétences</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "SEO",
              "Performance Web",
              "Accessibilité",
              "UX/UI Design",
              "APIs externes",
              "Déploiement",
              "Optimisation",
              "C++",
              "C# .Net",
              "Go"
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm border border-border hover:bg-muted transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
