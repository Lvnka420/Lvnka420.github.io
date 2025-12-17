import { motion } from "framer-motion";
import { Play, Pause, SkipForward, Volume2, ExternalLink } from "lucide-react";
import { useState } from "react";

const MusicBar2T4 = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-cyber-red/10">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyber-red text-xs font-bold tracking-[0.3em]"
          >
            ▶ 2T4
          </motion.span>
          <span className="text-[10px] text-muted-foreground">AUDIO SYSTEM</span>
        </div>
        <a
          href="https://lvna.neocities.org/2T4.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Main bar */}
      <div className="p-3">
        <div className="flex items-center gap-4">
          {/* Album art / Visualizer */}
          <motion.div
            animate={isPlaying ? {
              boxShadow: [
                "0 0 0 hsl(0, 100%, 50%, 0)",
                "0 0 15px hsl(0, 100%, 50%, 0.4)",
                "0 0 0 hsl(0, 100%, 50%, 0)",
              ]
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-12 h-12 bg-secondary border border-cyber-red/30 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
          >
            {/* Animated bars */}
            <div className="flex items-end gap-[2px] h-6">
              {[0.3, 0.6, 0.4, 0.8, 0.5].map((height, i) => (
                <motion.div
                  key={i}
                  animate={isPlaying ? {
                    height: [`${height * 100}%`, "20%", `${height * 100}%`],
                  } : { height: "20%" }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.3,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="w-1 bg-cyber-red"
                />
              ))}
            </div>
          </motion.div>

          {/* Track info */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2"
            >
              <span className="text-[10px] text-cyber-red">NOW PLAYING</span>
              <span className="text-[10px] text-muted-foreground">•</span>
              <span className="text-[10px] text-muted-foreground">2T4 PROJECT</span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-sm font-bold text-foreground truncate"
            >
              Gordon R.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="text-xs text-muted-foreground truncate"
            >
              Hałastra
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 border border-border hover:border-cyber-red flex items-center justify-center transition-colors group"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-muted-foreground group-hover:text-cyber-red transition-colors" />
              ) : (
                <Play className="w-4 h-4 text-muted-foreground group-hover:text-cyber-red transition-colors" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 border border-border hover:border-primary flex items-center justify-center transition-colors group"
            >
              <SkipForward className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
            <div className="hidden sm:flex items-center gap-1 ml-2">
              <Volume2 className="w-3 h-3 text-muted-foreground" />
              <div className="w-16 h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground w-10">01:18</span>
          <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "45%" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-full bg-gradient-to-r from-cyber-red to-cyber-red/50"
            />
          </div>
          <span className="text-[10px] text-muted-foreground w-10 text-right">02:54</span>
        </div>

        {/* Last.fm stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-3 pt-2 border-t border-border/50 flex items-center justify-between text-[10px] text-muted-foreground"
        >
          <div className="flex items-center gap-3">
            <span><span className="text-cyber-red">27,914</span> scrobbles</span>
            <span><span className="text-cyber-yellow">237</span> this artist</span>
            <span><span className="text-primary">6</span> this track</span>
          </div>
          <a
            href="http://last.fm/user/LvNa47"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            LvNa47 <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MusicBar2T4;