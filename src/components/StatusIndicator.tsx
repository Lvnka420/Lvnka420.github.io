import { motion } from "framer-motion";

interface StatusIndicatorProps {
  status: "online" | "active" | "warning";
  label: string;
  value?: string;
}

const StatusIndicator = ({ status, label, value }: StatusIndicatorProps) => {
  const statusColors = {
    online: "bg-cyber-green",
    active: "bg-cyber-red",
    warning: "bg-cyber-yellow",
  };

  const glowColors = {
    online: "shadow-[0_0_10px_hsl(120,100%,50%),0_0_20px_hsl(120,100%,50%,0.5)]",
    active: "shadow-[0_0_10px_hsl(0,100%,50%),0_0_20px_hsl(0,100%,50%,0.5)]",
    warning: "shadow-[0_0_10px_hsl(60,100%,50%),0_0_20px_hsl(60,100%,50%,0.5)]",
  };

  const textColors = {
    online: "text-cyber-green",
    active: "text-cyber-red",
    warning: "text-cyber-yellow",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3 font-mono"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`w-2 h-2 rounded-full ${statusColors[status]} ${glowColors[status]}`}
      />
      <span className="text-muted-foreground text-xs tracking-widest uppercase">
        {label}
      </span>
      {value && (
        <span className={`text-xs font-bold tracking-wider ${textColors[status]}`}>
          {value}
        </span>
      )}
    </motion.div>
  );
};

export default StatusIndicator;