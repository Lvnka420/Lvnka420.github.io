import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="border-t border-border py-6 mt-12"
    >
      <div className="text-center space-y-2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-xs text-muted-foreground flex items-center justify-center gap-2"
        >
          BUILT WITH <Heart className="w-3 h-3 text-cyber-red animate-pulse" /> BY LVNKA
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-[10px] text-muted-foreground/50"
        >
          © {new Date().getFullYear()} | ALL SYSTEMS OPERATIONAL
        </motion.p>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent max-w-xs mx-auto"
        />
        
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.6 }}
          className="text-[8px] text-muted-foreground/30 leading-tight"
        >
{`> END OF TRANSMISSION
> CONNECTION TERMINATED
> █`}
        </motion.pre>
      </div>
    </motion.footer>
  );
};

export default Footer;