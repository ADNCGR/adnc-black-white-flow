import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Self-contained scroll-reveal + idle float + cursor-tilt widget.
 * Three nested layers so the animations don't fight over the same
 * transform: outer handles entrance, middle handles idle float,
 * inner handles the 3D tilt spring.
 */
export function TiltCard({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 18, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 18, mass: 0.6 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(py * -14);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const floatDuration = 5 + (index % 4) * 0.7;
  const floatDelay = (index % 5) * 0.35;
  const floatAmplitude = reduceMotion ? 0 : 8 + (index % 3) * 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -floatAmplitude, 0] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: floatDuration,
                delay: floatDelay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }
        }
        style={{ height: "100%" }}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: reduceMotion ? 0 : springX,
            rotateY: reduceMotion ? 0 : springY,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
            height: "100%",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
