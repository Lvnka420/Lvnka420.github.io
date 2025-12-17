import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

const GlitchText = ({ text, className = "", as: Tag = "span" }: GlitchTextProps) => {
  return (
    <Tag className={`glitch relative inline-block ${className}`} data-text={text}>
      {text}
    </Tag>
  );
};

export default GlitchText;