import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with.",
      icon: "🎨",
      features: [
        "User Research",
        "Wireframing", 
        "Prototyping",
        "Visual Design"
      ]
    },
    {
      title: "Frontend Development",
      description: "Bringing designs to life with clean, efficient, and responsive code.",
      icon: "💻",
      features: [
        "React & Next.js",
        "TypeScript",
        "Responsive Design",
        "Performance Optimization"
      ]
    },
    {
      title: "Mobile App Design",
      description: "Designing mobile experiences that feel native and delightful on any device.",
      icon: "📱",
      features: [
        "iOS & Android",
        "Cross-platform",
        "App Store Guidelines",
        "Touch Interactions"
      ]
    },
    {
      title: "User Experience Consulting",
      description: "Helping businesses understand their users and optimize their digital products.",
      icon: "👥",
      features: [
        "UX Audits",
        "User Testing",
        "Analytics Review",
        "Strategy Planning"
      ]
    },
    {
      title: "Design Systems",
      description: "Building scalable design systems that ensure consistency across products.",
      icon: "🔍",
      features: [
        "Component Libraries",
        "Style Guides",
        "Documentation",
        "Token Management"
      ]
    },
    {
      title: "Website Optimization",
      description: "Improving existing websites for better performance and user engagement.",
      icon: "⚡",
      features: [
        "Speed Optimization",
        "SEO Improvements",
        "Conversion Rate",
        "Accessibility"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
                  scale: [1, 1.3, 1] 
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
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
              What I Do
            </motion.h2>
            <motion.div
              animate={{ 
                rotate: [0, -360, -720],
                scale: [1, 1.3, 1] 
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl text-blue-400">💫</span>
            </motion.div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design and development services to bring your vision to life ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <Card className="glass-effect h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="service-icon mb-4 mx-auto">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl flex items-center justify-center text-2xl border border-primary/20">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="sparkle-btn glowing px-8 py-3"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            💙 Let's work together 💙
          </Button>
        </motion.div>
      </div>
    </section>
  );
}