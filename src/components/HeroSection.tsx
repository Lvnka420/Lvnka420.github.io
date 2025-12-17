import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import StatusIndicator from "./StatusIndicator";

const HeroSection = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative py-12 border-b border-border"
    >
      {/* Main title */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2 glow-green">
          <GlitchText text="LVNKA" />
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto max-w-md"
        />
      </motion.div>

      {/* Status indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        <StatusIndicator status="online" label="SERVER" value="ONLINE" />
        <StatusIndicator status="warning" label="SUBJECT" value="#47" />
        <StatusIndicator status="active" label="SEMTEX" value="ACTIVE" />
      </motion.div>

      {/* ASCII art decoration */}
      <motion.pre
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8 }}
        className="hidden md:block absolute top-4 left-4 text-[8px] text-primary/30 leading-none select-none"
      >
{`╔═══════════════════╗
║  SYSTEM ONLINE    ║
║  ████████████ 100%║
╚═══════════════════╝`}
      </motion.pre>

      <motion.pre
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8 }}
        className="hidden md:block absolute top-4 right-4 text-[8px] text-primary/30 leading-none select-none"
      >
{`╔═══════════════════╗
║  SECTOR: KATOWICE ║
║  LAT: 50.2649     ║
║  LON: 19.0238     ║
╚═══════════════════╝`}
      </motion.pre>
    </motion.header>
  );
};

export default HeroSection;