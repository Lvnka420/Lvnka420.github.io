import { motion } from "framer-motion";
import { Home, Music, FileText } from "lucide-react";

const navItems = [
  { icon: Home, label: "HOME BASE", href: "#home" },
  { icon: Music, label: "SOUNDTRACK", href: "#soundtrack" },
  { icon: FileText, label: "2T4", href: "#2t4" },
];

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="border border-border p-4 bg-card/30 backdrop-blur-sm"
    >
      <div className="text-xs text-muted-foreground mb-4 tracking-widest">
        {">"} NAVIGATION
      </div>
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <a
              href={item.href}
              className="group flex items-center gap-3 py-2 px-3 text-sm hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/50"
            >
              <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="tracking-wider group-hover:text-primary group-hover:glow-green transition-all">
                [{item.label}]
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: "auto" }}
                className="text-primary overflow-hidden whitespace-nowrap"
              >
                {" "}← ENTER
              </motion.span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;