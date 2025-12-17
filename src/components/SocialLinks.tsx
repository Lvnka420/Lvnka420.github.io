import { motion } from "framer-motion";
import { Instagram, Github, Music, Gamepad2, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "INSTAGRAM", href: "https://www.instagram.com/lvnka420" },
  { icon: Github, label: "GITHUB", href: "https://github.com/lvnka" },
  { icon: Music, label: "APPLE MUSIC", href: "https://music.apple.com/profile/LvNa47" },
  { icon: Gamepad2, label: "STEAM", href: "https://steamcommunity.com/id/lvnka" },
  { icon: Mail, label: "CONTACT", href: "mailto:lvnka@dnmx.cc" },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="border border-border p-4 bg-card/30 backdrop-blur-sm"
    >
      <div className="text-xs text-muted-foreground mb-4 tracking-widest">
        {">"} CONNECTION.EXE
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center gap-2 p-3 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-[10px] tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;