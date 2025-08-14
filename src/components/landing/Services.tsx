import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HardHat, Home, DraftingCompass, Wrench, Building, Lightbulb } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    icon: <Home className="h-10 w-10 text-accent" />,
    title: "Custom Villa Construction",
    description: "From foundation to finish, we build bespoke villas tailored to your unique lifestyle and preferences.",
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-accent" />,
    title: "Architectural Design",
    description: "Our in-house architects collaborate with you to create stunning, functional, and timeless designs.",
  },
  {
    icon: <HardHat className="h-10 w-10 text-accent" />,
    title: "Project Management",
    description: "We provide end-to-end project oversight, ensuring your project is on time, on budget, and to the highest quality.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: "Renovations & Remodeling",
    description: "Transform your existing space with our expert renovation services, from minor updates to complete overhauls.",
  },
  {
    icon: <Building className="h-10 w-10 text-accent" />,
    title: "Sustainable Building",
    description: "Implementing eco-friendly practices and materials for energy-efficient and environmentally responsible constructions.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: "Smart Home Integration",
    description: "Integrating cutting-edge smart home technologies for enhanced comfort, security, and efficiency.",
  },
];

const magazineVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const cardMagazineVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export function Services() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-12 md:py-24 bg-muted/30" ref={sectionRef}>
      <div className="container px-4">
        {/* Magazine-style header */}
        <motion.div
          className="mb-12 md:mb-20 text-center"
          variants={magazineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading">
            OUR
            <br />
            <span className="text-primary">EXPERTISE</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-content">
            Comprehensive construction services that bring your architectural dreams to reality with unmatched precision and quality.
          </p>
        </motion.div>

        {/* Magazine-style service cards grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardMagazineVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full text-center pt-8 md:pt-12 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card">
                <CardHeader className="items-center px-6 md:px-8 pb-8">
                  <div className="bg-primary/10 p-4 md:p-6 rounded-full mb-6 ring-2 ring-primary/20 hover:bg-primary/20 hover:ring-primary/40 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold mb-4 font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed font-content">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
