import { Calendar, GraduationCap, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="portfolio-section bg-gradient-subtle">
      <div className="portfolio-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez mon parcours et ma passion pour le développement web
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Story */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Mon histoire</h3>
            </div>

            {[
              "À 24 ans, je suis un développeur web freelance passionné par la création d'expériences numériques qui ont du sens. Mon parcours a commencé il y a une dizaine d'années avec une curiosité insatiable pour la programmation et ses possibilités infinies.",
              "Mes 2 années d'expérience m'ont permis de travailler sur des projets variés : des panels d'administration, sites vitrines élégants, en passant par des applications et scripts sur mesure. Chaque projet est une nouvelle aventure où je peux allier créativité et technicité.",
              "Ce qui me motive ? Transformer vos idées en solutions digitales performantes, accessibles et esthétiques. Je crois fermement qu'un bon code doit être à la fois élégant techniquement et accessible humainement.",
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Cards */}
          <motion.div variants={staggerContainer} className="space-y-6">
            {/* Experience Card */}
            <motion.div
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="portfolio-card hover:scale-[1.02] transition-transform duration-300"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Expérience</h4>
                  <p className="text-muted-foreground">2 ans</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Développement d'applications web complètes, de la conception à la mise en production,
                tous effectués en interne pour un bureau d'études.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="portfolio-card hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Formation</h4>
                  <p className="text-muted-foreground">Master, Bachelor & BTS</p>
                </div>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Master Expert Développeur Web @ Nexa digital School</li>
                <li>• Bachelor Concepteur Développeur d'Applications @ Doranco</li>
                <li>• BTS Systèmes numériques option informatique & réseaux @ Lycée de l'Europe</li>
              </ul>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-primary rounded-xl p-6 text-white shadow-lg"
            >
              <h4 className="font-semibold text-lg mb-3">Ma philosophie</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                "Chaque ligne de code doit servir un objectif : améliorer l'expérience utilisateur,
                optimiser les performances, ou simplifier la maintenance. La technologie doit être
                au service de l'humain."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
