import { motion } from "framer-motion";

const ScanlineOverlay = () => {
  return (
    <>
      {/* Static scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.03) 2px,
              rgba(0, 255, 0, 0.03) 4px
            )`
          }}
        />
      </div>
      
      {/* Moving scan line */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent pointer-events-none z-50"
        style={{
          boxShadow: "0 0 20px hsl(120, 100%, 50%, 0.5), 0 0 40px hsl(120, 100%, 50%, 0.3)",
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.4) 100%
          )`
        }}
      />
    </>
  );
};

export default ScanlineOverlay;