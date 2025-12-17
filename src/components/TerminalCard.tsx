import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const TerminalCard = ({ title, children, delay = 0 }: TerminalCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="border border-border bg-card/50 backdrop-blur-sm overflow-hidden border-glow"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyber-red" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyber-green" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 tracking-wider">
          {title}
        </span>
      </div>
      
      {/* Terminal content */}
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalCard;