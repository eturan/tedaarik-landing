import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface BlobConfig {
  color: string;
  size: string;
  position: { x: string; y: string };
  animation: { x: number[]; y: number[] } | { scale: number[] };
  duration: number;
  delay: number;
  blur: string;
  mouseInfluence: number;
}

interface GradientMeshBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

const blobConfigs: BlobConfig[] = [
  {
    color: "hsl(var(--mesh-amber) / 0.35)",
    size: "w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]",
    position: { x: "-10%", y: "-15%" },
    animation: { x: [-30, 30], y: [-20, 20] },
    duration: 10,
    delay: 0,
    blur: "blur-[60px] md:blur-[80px] lg:blur-[100px]",
    mouseInfluence: 0.4,
  },
  {
    color: "hsl(var(--mesh-coral) / 0.3)",
    size: "w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]",
    position: { x: "70%", y: "-5%" },
    animation: { x: [20, -20], y: [-25, 25] },
    duration: 12,
    delay: 1,
    blur: "blur-[50px] md:blur-[70px] lg:blur-[90px]",
    mouseInfluence: 0.5,
  },
  {
    color: "hsl(var(--accent) / 0.25)",
    size: "w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]",
    position: { x: "5%", y: "60%" },
    animation: { x: [-20, 20], y: [20, -20] },
    duration: 8,
    delay: 2,
    blur: "blur-[55px] md:blur-[75px] lg:blur-[95px]",
    mouseInfluence: 0.45,
  },
  {
    color: "hsl(var(--mesh-beige) / 0.5)",
    size: "w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px]",
    position: { x: "30%", y: "20%" },
    animation: { scale: [1, 1.08, 1] },
    duration: 15,
    delay: 0.5,
    blur: "blur-[70px] md:blur-[100px] lg:blur-[120px]",
    mouseInfluence: 0.2,
  },
  {
    color: "hsl(var(--mesh-peach) / 0.3)",
    size: "w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]",
    position: { x: "65%", y: "55%" },
    animation: { x: [25, -25], y: [-15, 15] },
    duration: 11,
    delay: 1.5,
    blur: "blur-[45px] md:blur-[65px] lg:blur-[85px]",
    mouseInfluence: 0.55,
  },
];

// Individual blob that tracks mouse
const Blob = ({
  config,
  mouseX,
  mouseY,
  opacityMultiplier,
  shouldReduceMotion,
  isMobile,
}: {
  config: BlobConfig;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  opacityMultiplier: number;
  shouldReduceMotion: boolean | null;
  isMobile: boolean;
}) => {
  // Transform mouse position to blob movement based on influence
  const blobX = useTransform(mouseX, (value) =>
    isMobile || shouldReduceMotion ? 0 : value * config.mouseInfluence
  );
  const blobY = useTransform(mouseY, (value) =>
    isMobile || shouldReduceMotion ? 0 : value * config.mouseInfluence
  );

  // Add spring physics for smooth movement
  const springX = useSpring(blobX, { damping: 20, stiffness: 80, mass: 0.5 });
  const springY = useSpring(blobY, { damping: 20, stiffness: 80, mass: 0.5 });

  const isScaleAnimation = "scale" in config.animation;
  const baseAnimateProps = shouldReduceMotion
    ? {}
    : isScaleAnimation
    ? { scale: (config.animation as { scale: number[] }).scale }
    : {};

  return (
    <motion.div
      className={`absolute rounded-full ${config.size} ${config.blur}`}
      style={{
        left: config.position.x,
        top: config.position.y,
        backgroundColor: config.color,
        opacity: opacityMultiplier,
        x: springX,
        y: springY,
      }}
      animate={baseAnimateProps}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: config.delay,
      }}
    />
  );
};

export const GradientMeshBackground = ({
  className = "",
  intensity = "subtle",
}: GradientMeshBackgroundProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      // Calculate mouse position relative to container center, scaled to movement range
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) * 0.15;
      const y = (e.clientY - centerY) * 0.15;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, shouldReduceMotion, mouseX, mouseY]);

  const visibleBlobs = isMobile ? blobConfigs.slice(0, 3) : blobConfigs;

  const opacityMultiplier = {
    subtle: 0.7,
    medium: 1,
    strong: 1.3,
  }[intensity];

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {visibleBlobs.map((config, index) => (
        <Blob
          key={index}
          config={config}
          mouseX={mouseX}
          mouseY={mouseY}
          opacityMultiplier={opacityMultiplier}
          shouldReduceMotion={shouldReduceMotion}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default GradientMeshBackground;
