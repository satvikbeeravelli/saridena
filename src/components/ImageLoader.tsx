import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  loading?: 'eager' | 'lazy';
  whileHover?: any;
  transition?: any;
  style?: React.CSSProperties;
}

export const ImageLoader = ({
  src,
  alt,
  className = '',
  onClick,
  loading = 'lazy',
  whileHover,
  transition,
  style
}: ImageLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Actual image */}
      {(isInView || loading === 'eager') && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onClick={onClick}
          loading={loading}
          decoding="async"
          whileHover={whileHover}
          transition={transition}
          style={style}
        />
      )}
    </div>
  );
};
