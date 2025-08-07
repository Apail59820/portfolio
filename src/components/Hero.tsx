import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const typewriterRef = useRef(null);

  const [renderedTypewritter, setRenderedTypewriter] = useState<boolean>(false);

  useEffect(() => {
    // Split "Salut, je suis" en lettres
    const splitText = new SplitType(textRef.current, {
      types: "chars",
      tagName: "span",
    });

    // Animation pour chaque lettre
    gsap.from(splitText.chars, {
      y: 60,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
    });

    // Animation spéciale pour "Amaury"
    gsap.from(nameRef.current, {
      scale: 0.5,
      opacity: 0,
      y: 50,
      delay: 0.8,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    // Nettoyage
    return () => {
      splitText.revert();
    };
  }, []);

  useEffect(() => {
    if (!renderedTypewritter) {
      setRenderedTypewriter(true);

      const text =
        "Développeur web freelance passionné par la création d'expériences numériques modernes et performantes";

      let index = 0;

      const interval = setInterval(() => {
        if (typewriterRef.current && index < text.length) {
          typewriterRef.current.textContent += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30); // vitesse de frappe (en ms par lettre)

      return () => clearInterval(interval);
    }
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 portfolio-hero-glow rounded-full animate-glow-pulse"></div>

      <div className="portfolio-container relative z-10">
        <div className="text-center fade-in-up">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
              <img
                src={"/amaury.png"}
                alt="Amaury Paillart"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up-delay text-center">
            <span ref={textRef} className="inline-block mr-2">
              Salut, je suis
            </span>
            <span
              ref={nameRef}
              className="inline-block portfolio-gradient-text"
            >
              Amaury
            </span>
          </h1>
          {/* Subtitle */}
          <p
            ref={typewriterRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto whitespace-pre-wrap font-mono"
          ></p>
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 fade-in-up-delay-2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
