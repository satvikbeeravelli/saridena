import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, Home, MapPin, Bed, Square, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageLoader } from "@/components/ImageLoader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Category = "Interior" | "Exterior" | "Floor Plan" | "Location and layout" | "Isometric View";

interface ProjectItem {
  name: string;
  image: string;
  type?: string;
  model?: string;
}

const categoryOrder: Category[] = ["Location and layout", "Exterior", "Floor Plan", "Interior", "Isometric View"];

// Helper function to generate image paths
const getImagePath = (folder: string, filename: string) => `${import.meta.env.BASE_URL}photos/${folder}/${filename}`;

// Exact same data structure as in Projects.tsx for LakeWoods Villas
const lakewoodProjectData: Record<Category, ProjectItem[]> = {
  Interior: [
    { name: "Modern Living Room", image: getImagePath("interior", "1.png") },
    { name: "Cozy Bedroom", image: getImagePath("interior", "2.png") },
    { name: "Sleek Kitchen", image: getImagePath("interior", "3.png") },
    { name: "Modern Living Room", image: getImagePath("interior", "4.png") },
    { name: "Cozy Bedroom", image: getImagePath("interior", "5.png") },
    { name: "Sleek Kitchen", image: getImagePath("interior", "6.png") },
    { name: "Modern Living Room", image: getImagePath("interior", "7.png") },
    { name: "Cozy Bedroom", image: getImagePath("interior", "8.png") },
    { name: "Sleek Kitchen", image: getImagePath("interior", "9.png") },
    { name: "Modern Living Room", image: getImagePath("interior", "10.png") },
    { name: "Cozy Bedroom", image: getImagePath("interior", "11.png") },
    { name: "Sleek Kitchen", image: getImagePath("interior", "12.png") },
    { name: "Modern Living Room", image: getImagePath("interior", "13.png") },
    { name: "Cozy Bedroom", image: getImagePath("interior", "14.png") },
    { name: "Sleek Kitchen", image: getImagePath("interior", "15.png") },
    { name: "Modern Living Room", image: getImagePath("interior", "16.png") },
    { name: "Cozy Bedroom", image: getImagePath("interior", "17.png") },
    { name: "Sleek Kitchen", image: getImagePath("interior", "18.png") },
    { name: "Modern Living Room", image: getImagePath("interior", "19.png") },
    { name: "Cozy Bedroom", image: getImagePath("interior", "20.jpg") },
  ],
  Exterior: [
    { name: "Contemporary Villa", image: getImagePath("exterior", "7.png") },
    { name: "Beachfront Residence", image: getImagePath("exterior", "1.jpg") },
    { name: "Mountain Chalet", image: getImagePath("exterior", "2.jpg") },
    { name: "Contemporary Villa", image: getImagePath("exterior", "3.png") },
    { name: "Beachfront Residence", image: getImagePath("exterior", "4.jpg") },
    { name: "Mountain Chalet", image: getImagePath("exterior", "5.jpg") },
    { name: "Contemporary Villa", image: getImagePath("exterior", "6.jpg") },
  ],
  "Floor Plan": [
    { name: "Two-Story House Blueprint", image: getImagePath("floorplan", "2.jpg") },
    { name: "Apartment Layout", image: getImagePath("floorplan", "3.jpg") },
    { name: "Open-Concept Floor Plan", image: getImagePath("floorplan", "4.jpg") },
  ],
  "Location and layout": [
    { name: "Open-Concept Floor Plan", image: getImagePath("floorplan", "1.jpg") },
    { name: "LakeWoods Villas Map", image: "map_iframe", type: "map" },
  ],
  "Isometric View": [
    { name: "Isometric View - Building Layout", image: getImagePath("isometric", "1.jpg") },
    { name: "Isometric View - Design Perspective", image: getImagePath("isometric", "2.jpg") },
    { name: "Isometric View - Overview", image: getImagePath("isometric", "3.jpg") }
  ],
};

export function LakewoodVillas() {
  const [isInView, setIsInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>("Location and layout");
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    setIsInView(true);
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToProjects = () => {
    // Navigate back to projects section using custom event
    const event = new CustomEvent('navigateToHome');
    window.dispatchEvent(event);
  };

  const projectDetails = {
    name: "Lakewood Villas",
    location: "Gandipet, Hyderabad",
    type: "Luxury Villa Development",
    status: "Under Construction",
    completionDate: "Q4 2025",
    totalUnits: "24 Premium Villas",
    priceRange: "₹2.5 - 4.2 Cr",
    specifications: {
      plotArea: "300-500 sq.yds",
      builtUpArea: "3200-4800 sq.ft",
      bedrooms: "3-5 BHK",
      bathrooms: "3-6",
      parking: "2-3 Cars",
      floors: "G+2"
    }
  };

  const amenities = [
    "Private Swimming Pool",
    "Landscaped Gardens",
    "24/7 Security",
    "Club House",
    "Gymnasium", 
    "Children's Play Area",
    "Jogging Track",
    "Power Backup",
    "Rainwater Harvesting",
    "Gated Community"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <motion.div
        className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 py-4">
          <Button
            variant="ghost"
            onClick={handleBackToProjects}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="relative h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <ImageLoader
            src={getImagePath("exterior", "1.jpg")}
            alt="Lakewood Villas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            className="text-center text-white max-w-4xl px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              LAKEWOOD
              <br />
              <span className="text-primary">VILLAS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Where luxury meets tranquility by the lake
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>{projectDetails.location}</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  PROJECT
                  <br />
                  <span className="text-primary">OVERVIEW</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Lakewood Villas represents the pinnacle of luxury living in Hyderabad. 
                  Nestled in the serene locale of Gandipet, these premium villas offer 
                  breathtaking lake views and unparalleled comfort.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each villa is meticulously designed with modern architecture, 
                  spacious layouts, and premium finishes that reflect sophistication 
                  and elegance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <Home className="h-8 w-8 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">Total Units</p>
                  <p className="text-xl font-bold">{projectDetails.totalUnits}</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <Calendar className="h-8 w-8 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">Completion</p>
                  <p className="text-xl font-bold">{projectDetails.completionDate}</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <Square className="h-8 w-8 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">Plot Area</p>
                  <p className="text-xl font-bold">{projectDetails.specifications.plotArea}</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <Bed className="h-8 w-8 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">Configuration</p>
                  <p className="text-xl font-bold">{projectDetails.specifications.bedrooms}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation and Gallery - Exact copy from Projects.tsx */}
            <motion.div
              className="mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                PROJECT GALLERY
              </h3>
              
              {/* Navigation Tabs - Exact copy from Projects.tsx */}
              <div className="mb-6 md:mb-8 lg:mb-12">
                <nav className="flex justify-center overflow-x-auto">
                  <div className="border-b-2 flex min-w-max">
                    {categoryOrder.map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className={`py-2 md:py-3 lg:py-3 px-2 md:px-4 lg:px-5 text-xs sm:text-sm md:text-sm lg:text-base font-medium rounded-none whitespace-nowrap ${
                          selectedCategory === category
                            ? "border-b-2 border-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentImageIndex(null);
                        }}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </nav>
              </div>

              {/* Gallery Content - Exact copy from Projects.tsx */}
              {selectedCategory === "Location and layout" ? (
                <div className="flex flex-wrap justify-center gap-4">
                  {lakewoodProjectData["Location and layout"]?.map((project, index) => (
                    <motion.div
                      key={index}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/3"
                    >
                      {project.type === "map" ? (
                        <div className="relative w-full h-60 group">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0534597203205!2d78.3265527!3d17.3611604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9500700340b9%3A0x55a866128dbfe12c!2sSaridena%20Lakewoods!5e0!3m2!1sen!2sin!4v1754636342761!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="pointer-events-none"
                          ></iframe>
                          <a
                            href="https://www.google.com/maps/search/Saridena+Lakewoods,+Gandipet,+Hyderabad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            View in Larger Map
                          </a>
                        </div>
                      ) : (
                        <ImageLoader
                          src={project.image}
                          alt={project.name}
                          className="w-full h-48 md:h-56 lg:h-60 high-quality-image"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setCurrentImageIndex(index)}
                          loading={index < 3 ? "eager" : "lazy"}
                          style={{ imageRendering: 'auto' }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  setApi={setCarouselApi}
                  className="w-full"
                >
                  <CarouselContent>
                    {lakewoodProjectData[selectedCategory]?.map((project, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-lg shadow-lg overflow-hidden image-container"
                          >
                            <ImageLoader
                              src={project.image}
                              alt={project.name}
                              className="w-full h-48 md:h-56 lg:h-60 high-quality-image"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              onClick={() => setCurrentImageIndex(index)}
                              loading={index < 3 ? "eager" : "lazy"}
                              style={{ imageRendering: 'auto' }}
                            />
                          </motion.div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              )}
            </motion.div>

            {/* Specifications */}
            <motion.div
              className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                VILLA SPECIFICATIONS
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(projectDetails.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-4 bg-background rounded-lg">
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="text-primary font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                PREMIUM AMENITIES
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm md:text-base">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-primary/5"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Make Lakewood Villas Your Home?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team to schedule a site visit and learn more about this exclusive development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Site Visit
              </Button>
              <Button size="lg" variant="outline" onClick={handleBackToProjects}>
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
