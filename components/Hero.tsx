import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/my_resume.pdf';
    link.download = 'Jobai_Damba_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Expanding Circle Animations with Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Expanding Circle */}
        <div className="absolute top-16 left-12">
          <motion.div
            className="absolute inset-0 border-2 border-primary/20 rounded-full"
            animate={{ 
              scale: [0.5, 2, 0.5],
              opacity: [0.8, 0.2, 0.8] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: '120px', height: '120px' }}
          />
          <motion.div
            className="absolute inset-0 border border-blue-400/15 rounded-full"
            animate={{ 
              scale: [0.3, 1.8, 0.3],
              opacity: [0.6, 0.1, 0.6] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ width: '120px', height: '120px' }}
          />
          {/* Dots inside the expanding circle */}
          <motion.div
            className="absolute top-4 left-8 w-2 h-2 bg-primary/60 rounded-full"
            animate={{ 
              scale: [0.8, 1.3, 0.8],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 180, 360] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-6 right-4 w-1.5 h-1.5 bg-blue-400/70 rounded-full"
            animate={{ 
              scale: [0.5, 1.2, 0.5],
              opacity: [0.7, 1, 0.7],
              rotate: [0, -180, -360] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.div
            className="absolute top-12 right-8 w-1 h-1 bg-primary/80 rounded-full"
            animate={{ 
              scale: [0.3, 1, 0.3],
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
        </div>

        {/* Top Right Expanding Circle */}
        <div className="absolute top-20 right-16">
          <motion.div
            className="absolute inset-0 border-2 border-blue-400/25 rounded-full"
            animate={{ 
              scale: [0.4, 2.2, 0.4],
              opacity: [0.9, 0.15, 0.9] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ width: '100px', height: '100px' }}
          />
          <motion.div
            className="absolute inset-0 border border-primary/20 rounded-full"
            animate={{ 
              scale: [0.6, 1.9, 0.6],
              opacity: [0.7, 0.1, 0.7] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            style={{ width: '100px', height: '100px' }}
          />
          {/* Dots inside */}
          <motion.div
            className="absolute top-2 left-6 w-1.5 h-1.5 bg-blue-400/80 rounded-full"
            animate={{ 
              scale: [0.6, 1.4, 0.6],
              opacity: [0.8, 1, 0.8],
              y: [0, -8, 0] 
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-4 left-8 w-2 h-2 bg-primary/70 rounded-full"
            animate={{ 
              scale: [0.7, 1.2, 0.7],
              opacity: [0.7, 1, 0.7],
              x: [0, 6, 0] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <motion.div
            className="absolute top-8 right-2 w-1 h-1 bg-blue-300/90 rounded-full"
            animate={{ 
              scale: [0.4, 1.1, 0.4],
              opacity: [0.9, 1, 0.9] 
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          />
        </div>

        {/* Bottom Left Expanding Circle */}
        <div className="absolute bottom-24 left-20">
          <motion.div
            className="absolute inset-0 border-2 border-primary/30 rounded-full"
            animate={{ 
              scale: [0.3, 1.8, 0.3],
              opacity: [1, 0.2, 1] 
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ width: '90px', height: '90px' }}
          />
          <motion.div
            className="absolute inset-0 border border-blue-400/25 rounded-full"
            animate={{ 
              scale: [0.5, 2.1, 0.5],
              opacity: [0.8, 0.1, 0.8] 
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            style={{ width: '90px', height: '90px' }}
          />
          {/* Dots inside */}
          <motion.div
            className="absolute top-6 left-4 w-1.5 h-1.5 bg-primary/85 rounded-full"
            animate={{ 
              scale: [0.5, 1.3, 0.5],
              opacity: [0.85, 1, 0.85],
              rotate: [0, 270, 540] 
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.div
            className="absolute bottom-2 right-6 w-2 h-2 bg-blue-400/75 rounded-full"
            animate={{ 
              scale: [0.8, 1.1, 0.8],
              opacity: [0.75, 1, 0.75],
              y: [0, -5, 0] 
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          />
        </div>

        {/* Bottom Right Expanding Circle */}
        <div className="absolute bottom-32 right-12">
          <motion.div
            className="absolute inset-0 border-2 border-blue-300/35 rounded-full"
            animate={{ 
              scale: [0.6, 2.3, 0.6],
              opacity: [0.9, 0.1, 0.9] 
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            style={{ width: '110px', height: '110px' }}
          />
          <motion.div
            className="absolute inset-0 border border-primary/30 rounded-full"
            animate={{ 
              scale: [0.4, 2, 0.4],
              opacity: [0.8, 0.15, 0.8] 
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
            style={{ width: '110px', height: '110px' }}
          />
          {/* Dots inside */}
          <motion.div
            className="absolute top-8 left-2 w-1 h-1 bg-blue-300/95 rounded-full"
            animate={{ 
              scale: [0.3, 1.2, 0.3],
              opacity: [0.95, 1, 0.95] 
            }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-primary/80 rounded-full"
            animate={{ 
              scale: [0.6, 1.4, 0.6],
              opacity: [0.8, 1, 0.8],
              x: [0, -4, 0] 
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          />
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-blue-400/70 rounded-full"
            animate={{ 
              scale: [0.7, 1.3, 0.7],
              opacity: [0.7, 1, 0.7],
              rotate: [0, -360, -720] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
          />
        </div>

        {/* Center Small Expanding Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="absolute inset-0 border border-primary/40 rounded-full"
            animate={{ 
              scale: [0.2, 1.5, 0.2],
              opacity: [1, 0.3, 1] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{ width: '60px', height: '60px', marginLeft: '-30px', marginTop: '-30px' }}
          />
          <motion.div
            className="absolute top-4 left-4 w-1 h-1 bg-primary/90 rounded-full"
            animate={{ 
              scale: [0.5, 1.1, 0.5],
              opacity: [0.9, 1, 0.9] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </div>

      {/* Cute floating elements with clear background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating hearts */}
        <motion.div
          className="absolute top-20 left-[10%] text-2xl opacity-40"
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 15, 0], 
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          💖
        </motion.div>
        <motion.div
          className="absolute top-32 right-[15%] text-xl opacity-35"
          animate={{ 
            y: [0, -25, 0], 
            x: [0, -12, 0], 
            rotate: [0, -180, -360],
            scale: [0.8, 1.1, 0.8] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-[20%] text-lg opacity-30"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 8, 0], 
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          💙
        </motion.div>
        <motion.div
          className="absolute top-[40%] right-[8%] text-2xl opacity-25"
          animate={{ 
            y: [0, -35, 0], 
            x: [0, -15, 0], 
            rotate: [0, 270, 540],
            scale: [1, 0.9, 1] 
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          🌟
        </motion.div>
        
        {/* Additional cute elements */}
        <motion.div
          className="absolute top-[60%] left-[5%] text-lg opacity-20"
          animate={{ 
            y: [0, -18, 0], 
            rotate: [0, -90, 0],
            scale: [1, 1.4, 1] 
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          🎀
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[25%] text-xl opacity-30"
          animate={{ 
            y: [0, -22, 0], 
            x: [0, 10, 0],
            rotate: [0, 360, 720],
            scale: [0.9, 1.2, 0.9] 
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        >
          💫
        </motion.div>
        <motion.div
          className="absolute top-[15%] left-[60%] text-sm opacity-25"
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, 180, 0],
            scale: [1, 1.5, 1] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-[60%] left-[80%] text-lg opacity-20"
          animate={{ 
            y: [0, -28, 0], 
            x: [0, -8, 0],
            rotate: [0, -270, -540],
            scale: [1, 0.8, 1] 
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        >
          �
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 inline-block px-4 py-2 bg-secondary rounded-full glass-effect floating">
                  <span className="text-sm">✨ Welcome to my portfolio ✨</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent"
              >
                Hi, I'm <span className="glowing">Jobai Damba</span>
                <br />
                <span className="text-2xl">💙 Creative Developer 💙</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 text-muted-foreground max-w-2xl lg:max-w-none"
              >
                I craft beautiful, responsive Full Stack Web Applications with modern technologies.
                Passionate about creating seamless user experiences and writing clean, maintainable code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 justify-center lg:justify-start mb-8 flex-wrap"
              >
                <Button size="lg" className="sparkle-btn glowing" onClick={downloadResume}>
                  <Download className="w-4 h-4 mr-2" />
                  Download My Resume
                </Button>
                <Button size="lg" variant="outline" className="glass-effect" onClick={() => scrollToSection("contact")}>
                  💌 Get In Touch 💌
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-6 justify-center lg:justify-start"
              >
                <span
                  className="text-muted-foreground/50 cursor-not-allowed transition-colors"
                  title="Link disabled"
                >
                  <Github className="w-6 h-6" />
                </span>
                <span
                  className="text-muted-foreground/50 cursor-not-allowed transition-colors"
                  title="Link disabled"
                >
                  <Linkedin className="w-6 h-6" />
                </span>
                <a
                  href="mailto:jane@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </motion.div>
            </div>

            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="breezy-photo-container">
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 blur-xl"
                  animate={{ 
                    scale: [1, 1.15, 1], 
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Cute bouncing photo */}
                <motion.img
                  src="/jmdamba/images/jen.jpg"
                  alt="Jane Doe - Creative Developer"
                  className="profile-photo relative z-10"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.02, 1],
                    rotate: [0, 2, 0, -2, 0] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1] 
                  }}
                />

                {/* Twinkling sparkles around photo */}
                <motion.div
                  className="absolute -top-2 -right-2 text-lg"
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 -left-3 text-sm"
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.3, 1, 0.3],
                    rotate: [0, -180, -360] 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1 
                  }}
                >
                  💫
                </motion.div>
                <motion.div
                  className="absolute top-1/4 -left-4 text-xs"
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.4, 1.3, 0.4],
                    x: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2 
                  }}
                >
                  ⭐
                </motion.div>
                
                {/* Adorable floating magical elements */}
                <div className="floating-elements">
                  <motion.div 
                    className="floating-element element-1"
                    animate={{ 
                      y: [0, -25, 0], 
                      rotate: [0, 360, 0],
                      scale: [1, 1.3, 1] 
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ✨
                  </motion.div>
                  <motion.div 
                    className="floating-element element-2"
                    animate={{ 
                      y: [0, -20, 0], 
                      x: [0, 15, 0], 
                      rotate: [0, -180, 0],
                      scale: [0.8, 1.2, 0.8] 
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    �
                  </motion.div>
                  <motion.div 
                    className="floating-element element-3"
                    animate={{ 
                      y: [0, -15, 0], 
                      rotate: [0, 180, 360],
                      scale: [1, 1.4, 1] 
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    🌟
                  </motion.div>
                  <motion.div 
                    className="floating-element element-4"
                    animate={{ 
                      y: [0, -30, 0], 
                      x: [0, -12, 0], 
                      rotate: [0, 270, 540],
                      scale: [1, 0.9, 1] 
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  >
                    💙
                  </motion.div>
                  <motion.div 
                    className="floating-element element-5"
                    animate={{ 
                      y: [0, -18, 0], 
                      rotate: [0, -90, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                  >
                    🎀
                  </motion.div>
                  <motion.div 
                    className="floating-element element-6"
                    animate={{ 
                      y: [0, -22, 0], 
                      x: [0, 8, 0],
                      rotate: [0, 360, 720],
                      scale: [0.9, 1.3, 0.9] 
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                  >
                    💫
                  </motion.div>
                  <motion.div 
                    className="floating-element element-7"
                    animate={{ 
                      y: [0, -12, 0], 
                      rotate: [0, 180, 0],
                      scale: [1, 1.5, 1] 
                    }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 6 }}
                  >
                    ⭐
                  </motion.div>
                  <motion.div 
                    className="floating-element element-8"
                    animate={{ 
                      y: [0, -35, 0], 
                      x: [0, -5, 0],
                      rotate: [0, -270, -540],
                      scale: [1, 0.7, 1] 
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 7 }}
                  >
                    💝
                  </motion.div>
                </div>

                {/* Orbiting rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
                />
                <motion.div
                  className="absolute inset-0 border border-blue-400/15 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
