import { motion } from "framer-motion";
import TerminalCard from "./TerminalCard";

const profileData = [
  { label: "Name", value: "Lvnka" },
  { label: "Origin", value: "Katowice" },
  { label: "Specialties", value: "IT | AUDIO" },
  { label: "Dream Ride", value: "Saab 9-3 Aero" },
  { label: "Status", value: "Unavailable", highlight: true },
];

const ProfileSection = () => {
  return (
    <TerminalCard title="profile.exe" delay={0.5}>
      <div className="space-y-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-muted-foreground mb-4"
        >
          $&gt; cat /home/lvnka/about.txt
        </motion.div>
        
        {profileData.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex items-center gap-2 py-1 text-sm"
          >
            <span className="text-muted-foreground">$&gt;</span>
            <span className="text-primary/70">{item.label}:</span>
            <span className={item.highlight ? "text-cyber-red glow-red" : "text-foreground"}>
              {item.value}
            </span>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 pt-4 border-t border-border"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>DRIVER ID:</span>
            <span className="text-cyber-yellow">#47</span>
            <span className="mx-2">|</span>
            <span>7 months</span>
            <span className="mx-2">|</span>
            <span className="text-cyber-red">IN RELATIONSHIP</span>
          </div>
        </motion.div>
      </div>
    </TerminalCard>
  );
};

export default ProfileSection;