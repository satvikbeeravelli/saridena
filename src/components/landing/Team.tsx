import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Lead Architect",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Mike Johnson",
    role: "Head of Construction",
    image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Team() {
  return (
    <section id="team" className="bg-secondary">
      <div className="container">
        <SectionTitle
          subtitle="Our Visionaries"
          title="Meet the Leadership Team"
          description="The driving force behind our success. A group of passionate, experienced professionals dedicated to excellence."
        />
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <div className="text-center p-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top ring-4 ring-primary/10" 
                />
                <h3 className="text-xl font-bold font-heading">{member.name}</h3>
                <p className="text-accent font-semibold mb-3 font-content">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
