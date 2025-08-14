import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Play, ExternalLink, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const allProjects: Record<string, any> = {
  "LakeWoods Villas": {
    description: "Luxury waterfront villas featuring contemporary design and premium amenities",
    features: ["Waterfront Location", "Modern Architecture", "Premium Finishes", "Smart Home Integration"],
    status: "Available",
    type: "Residential"
  },
  "Azure Heights": {
    description: "High-end residential towers with panoramic city views and world-class amenities",
    features: ["Sky Gardens", "Infinity Pool", "Concierge Service", "Smart Living Technology"],
    status: "Pre-Launch",
    type: "Residential"
  },
  "Emerald Gardens": {
    description: "Sustainable residential community designed for modern family living",
    features: ["Eco-Friendly Design", "Solar Integration", "Garden Spaces", "Community Amenities"],
    status: "Planning",
    type: "Residential"
  },
  "Metropolitan Plaza": {
    description: "Premium commercial complex combining retail and office spaces with modern aesthetics",
    features: ["Mixed-Use Design", "Modern Facade", "Flexible Layouts", "Green Building"],
    status: "Under Construction",
    type: "Commercial"
  },
  "Sapphire Residences": {
    description: "Ultra-luxury apartments with bespoke interiors and exclusive lifestyle amenities",
    features: ["Luxury Finishes", "Private Elevators", "Rooftop Lounge", "Valet Service"],
    status: "Available",
    type: "Residential"
  },
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string>("LakeWoods Villas");
  const [showVideoPreview, setShowVideoPreview] = useState<boolean>(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showVideoPreview && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = 0;
      video.play().catch(error => {
        console.error('Failed to play video:', error);
      });
    }
  }, [showVideoPreview]);

  const handleExploreProject = () => {
    if (selectedProject === "LakeWoods Villas") {
      window.dispatchEvent(new CustomEvent('navigateToLakewood'));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Under Construction':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Planning':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-primary font-medium">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-heading">
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional architectural projects, each crafted with precision 
            and designed to exceed expectations.
          </p>
        </motion.div>

        {/* Project Selection */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-slate-700/90 backdrop-blur-lg border-2 border-slate-500/60 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-primary/50 hover:bg-slate-600/90 transition-all duration-300 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 font-heading">Select a Project</h3>
              <p className="text-gray-300">Choose from our collection of premium developments</p>
            </div>

            {/* Project Buttons Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {Object.entries(allProjects).map(([projectName, project]) => (
                <motion.button
                  key={projectName}
                  onClick={() => setSelectedProject(projectName)}
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-105 min-h-[120px] touch-manipulation ${
                    selectedProject === projectName
                      ? 'border-primary bg-primary/10 shadow-lg'
                      : 'border-border/50 bg-background/50 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Object.keys(allProjects).indexOf(projectName) * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xs sm:text-sm font-heading line-clamp-2">{projectName}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 line-clamp-3 mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-accent font-medium">{project.type}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      selectedProject === projectName ? 'text-primary' : 'text-gray-300 group-hover:text-primary'
                    } group-hover:translate-x-1`} />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Info */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading">{selectedProject}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border w-fit ${getStatusColor(allProjects[selectedProject].status)}`}>
                    {allProjects[selectedProject].status}
                  </span>
                </div>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {allProjects[selectedProject].description}
                </p>

                <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {allProjects[selectedProject].type}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-heading">Key Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {allProjects[selectedProject].features.map((feature: string, index: number) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 p-3 bg-slate-600/80 backdrop-blur-sm rounded-lg border-2 border-slate-400/50 shadow-md hover:shadow-lg hover:border-primary/50 hover:bg-slate-500/80 transition-all duration-200 text-white touch-manipulation"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg"
                  onClick={handleExploreProject}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl min-h-[48px] touch-manipulation"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Explore Project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => setShowVideoPreview(!showVideoPreview)}
                  className="group border-border/50 hover:border-border px-8 py-4 text-lg font-semibold rounded-xl min-h-[48px] touch-manipulation"
                >
                  <Eye size={18} className="mr-2" />
                  {showVideoPreview ? 'Hide Preview' : 'Preview'}
                </Button>
              </div>
            </div>

            {/* Project Visual */}
            <div className="relative">
              <motion.div
                className="relative aspect-video bg-slate-700/90 backdrop-blur-lg border-2 border-slate-500/60 rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {showVideoPreview ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      console.error('Video failed to load:', e.currentTarget.src);
                    }}
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/sari1.mp4`} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={`${import.meta.env.BASE_URL}photos/exterior/1.jpg`}
                      alt={selectedProject}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        console.log('Image failed to load:', e.currentTarget.src);
                        e.currentTarget.src = `${import.meta.env.BASE_URL}photos/saridena_logo.png`;
                      }}
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                        onClick={() => setShowVideoPreview(true)}
                      >
                        <Play size={24} className="mr-2" />
                        Play Preview
                      </Button>
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-slate-700/95 backdrop-blur-lg border-2 border-slate-500/60 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-slate-600/95 transition-all duration-300 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent font-heading">3D</div>
                  <div className="text-sm text-gray-300">VR Ready</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}