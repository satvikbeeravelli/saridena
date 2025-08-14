import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(sectionRef, {
    amount: 0.6,
  });

  // Replay the video when Hero section is in view
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [isInView]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60 z-10" />

      <video
        ref={videoRef}
        src="/saridena/videos/bg_video.mp4"
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.div
          className="container text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
            Crafting Your Dream Villa
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Experience unparalleled luxury and craftsmanship with Saridena
            Constructions. We bring your vision of a perfect home to life.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#projects">
                Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-background"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
