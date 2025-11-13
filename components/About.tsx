import { motion } from "framer-motion";
import { Code2, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "✨ Clean Code",
      description: "Writing maintainable, scalable, and elegant code with a touch of magic.",
    },
    {
      icon: Sparkles,
      title: "💎 Beautiful Design",
      description: "Creating stunning, intuitive interfaces that sparkle and delight users.",
    },
    {
      icon: Zap,
      title: "❄️ Smooth Performance",
      description: "Optimizing applications for ice-cold performance and dreamy UX.",
    },
  ];

  return (
    <section id="about" className="py-20 icy-gradient relative overflow-hidden">
      {/* Background floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating ice crystals */}
        <motion.div
          className="absolute top-10 left-[10%] w-4 h-4 bg-blue-300/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-[15%] w-3 h-3 bg-cyan-400/25 rounded-full"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -270, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[20%] w-5 h-5 bg-primary/15 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            rotate: [0, 360, 720],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div
          className="absolute top-1/2 right-[8%] w-2 h-2 bg-blue-200/30 rounded-full"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -180, -360],
            scale: [1.2, 0.7, 1.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating snowflakes */}
        <motion.div
          className="absolute top-16 left-[25%] text-blue-300/40 text-xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          ❄️
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-[25%] text-cyan-400/35 text-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
            scale: [1.1, 0.7, 1.1],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          ❄️
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-[5%] text-primary/30 text-sm"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [0.9, 1.4, 0.9],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          ✨
        </motion.div>

        {/* Flowing lines/paths */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400/20 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div 
              className="flex items-center gap-2 text-primary"
              animate={{ 
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ 
                  rotate: [0, 360, 720],
                  scale: [1, 1.4, 1] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                💫
              </motion.span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                y: [0, -2, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              About Me
            </motion.h2>
            <motion.div
              animate={{ 
                rotate: [0, -360, -720],
                scale: [1, 1.4, 1] 
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl text-blue-400">💫</span>
            </motion.div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate creative developer with a love for icy-cool aesthetics and modern web magic.
            ✨ Turning dreams into digital reality, one line of code at a time! ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Floating sparkles around the image */}
            <motion.div
              className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400/70 rounded-full"
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-1 -right-3 w-2 h-2 bg-primary/80 rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6],
                scale: [0.6, 1.4, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-3 w-2.5 h-2.5 bg-cyan-400/60 rounded-full"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 0.9, 0.4],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute -bottom-1 -right-2 w-1.5 h-1.5 bg-blue-300/90 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [0.7, 1, 0.7],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            {/* Main image with animations */}
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
              }}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Ice crystal overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  transform: "skewX(-15deg)"
                }}
              />

              <ImageWithFallback
                src="/jmdamba/images/job.jpg"
                alt="Developer workspace"
                className="w-full h-[400px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Frost border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
              />
            </motion.div>

            {/* Floating ice crystals */}
            <motion.div
              className="absolute top-1/4 -right-4 text-blue-300/70 text-lg"
              animate={{
                rotate: [0, 360],
                y: [0, -5, 0],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              ❄️
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 -left-4 text-cyan-400/60 text-sm"
              animate={{
                rotate: [0, -360],
                x: [0, 3, 0],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              ✨
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-primary">❄️ My Journey ❄️</h3>
            <p className="text-muted-foreground mb-4">
              With over 5 years of experience crafting digital experiences, I've created everything
              from cozy small business sites to stunning enterprise applications that sparkle! ✨
            </p>
            <p className="text-muted-foreground mb-4">
              I specialize in React, Vue.js, AngularJS, Laravel, and all things modern and beautiful. 
              My mission is to create applications that not only dazzle visually but feel 
              absolutely dreamy to use! 💙
            </p>
            <p className="text-muted-foreground">
              When I'm not weaving code magic, you'll find me exploring new tech trends,
              contributing to open-source projects, or sharing the love with fellow developers! 🌟
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                rotateY: 5,
                scale: 1.02
              }}
              animate={{
                y: [0, -2, 0]
              }}
              transition={{
                duration: 0.5, 
                delay: index * 0.1,
                y: { 
                  duration: 3 + index, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }
              }}
              className="relative group"
            >
              {/* Floating particles around cards */}
              <motion.div
                className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400/70 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0.8, 1.4, 0.8],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0.6, 1.3, 0.6],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <Card className="glass-effect floating hover:glowing transition-all duration-300 relative overflow-hidden">
                {/* Card shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transform: "skewX(-15deg)"
                  }}
                />
                
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    }}
                    animate={{
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      rotate: { 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.3
                      }
                    }}
                  >
                    <feature.icon className="w-12 h-12 mb-4 text-primary mx-auto" />
                  </motion.div>
                  
                  <motion.h4 
                    className="mb-2"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                  >
                    {feature.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>

                {/* Floating icons around cards */}
                <motion.div
                  className="absolute top-2 right-2 text-blue-300/40 text-xs opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  ✨
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
