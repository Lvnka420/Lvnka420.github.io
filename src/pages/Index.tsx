import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProfileSection from "@/components/ProfileSection";
import MusicBar2T4 from "@/components/MusicBar2T4";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background effects */}
      <MatrixRain />
      <ScanlineOverlay />
      
      {/* Main content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-8">
        {/* Boot sequence animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="fixed inset-0 bg-background z-50 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ times: [0, 0.1, 0.9, 1], duration: 1.5 }}
            className="text-sm font-mono text-primary"
          >
            <p className="mb-1">&gt; INITIALIZING SYSTEM...</p>
            <p className="mb-1">&gt; LOADING SUBJECT #47...</p>
            <p>&gt; ACCESS GRANTED_</p>
          </motion.div>
        </motion.div>

        {/* Hero */}
        <HeroSection />

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Left column */}
          <div className="space-y-6">
            <Navigation />
            <ProfileSection />
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            <MusicBar2T4 />
            <SocialLinks />
            
            {/* Disclaimer section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="border border-cyber-red/30 bg-cyber-red/5 p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-cyber-red rounded-full animate-pulse" />
                <span className="text-xs text-cyber-red tracking-widest font-bold">
                  DISCLAIMER
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                STWIERDZENIE, ŻE AUTOR SUGERUJE DOKONANIE ZAMACHU BOMBOWEGO, 
                ZAMACHU INNEGO TYPU, BĄDŹ WYRZĄDZENIA USZCZERBKU NA ZDROWIU 
                OSOBOM TRZECIM, JEST OMYLNE!
              </p>
              <p className="text-[10px] text-muted-foreground leading-relaxed mt-2">
                OSOBY ODPOWIEDZIALNE ZA PROJEKT 2T4 INFORMUJĄ, ŻE NADINTERPRETACJA 
                UTWORÓW 2T4 I CZYNNE POWIELANIE TREŚCI ZAWARTYCH W TEKSTACH, 
                MOŻE MIEĆ KONSEKWENCJE PRAWNE.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      
      {/* Corner decorations */}
      <div className="fixed bottom-4 left-4 text-[10px] text-muted-foreground/30 font-mono hidden md:block">
        <p>SYS://KATOWICE</p>
        <p>VER: 2.0.47</p>
      </div>
      
      <div className="fixed bottom-4 right-4 text-[10px] text-muted-foreground/30 font-mono text-right hidden md:block">
        <p>{new Date().toLocaleDateString()}</p>
        <p>UPTIME: ∞</p>
      </div>
    </div>
  );
};

export default Index;