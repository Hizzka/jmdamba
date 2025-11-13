import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export function Skills() {
  const expertise = {
    designTools: [
      {
        name: "Figma",
        description: "UI/UX Design & Prototyping",
        icon: "🎨"
      },
      {
        name: "Adobe Creative Suite",
        description: "Photoshop, Illustrator, XD",
        icon: "🎭"
      },
      {
        name: "Sketch",
        description: "Interface Design",
        icon: "💎"
      },
      {
        name: "Principle",
        description: "Animation & Interaction",
        icon: "✨"
      }
    ],
    development: [
      {
        name: "React",
        description: "Frontend Development",
        icon: "⚛️"
      },
      {
        name: "TypeScript",
        description: "Type-safe JavaScript",
        icon: "📘"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS",
        icon: "🎨"
      },
      {
        name: "Next.js",
        description: "Full-stack React Framework",
        icon: "🚀"
      }
    ],
    specialties: [
      {
        name: "Responsive Design",
        description: "Mobile-first approach",
        icon: "📱"
      },
      {
        name: "User Research",
        description: "Data-driven design decisions",
        icon: "🔍"
      },
      {
        name: "Design Systems",
        description: "Scalable component libraries",
        icon: "🏗️"
      },
      {
        name: "Accessibility",
        description: "Inclusive design practices",
        icon: "💙"
      }
    ]
  };

  return (
    <section id="expertise" className="py-20 icy-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            💫 My Expertise 💫
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Tools and technologies I use to bring creative visions to life ✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Design Tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="expertise-category"
          >
            <Card className="glass-effect h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                  Design Tools
                </h3>
                <div className="space-y-4">
                  {expertise.designTools.map((tool, index) => (
                    <div
                      key={index}
                      className="expertise-item flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-all duration-300"
                    >
                      <span className="text-2xl expertise-icon">
                        {tool.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-foreground">{tool.name}</h4>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="expertise-category"
          >
            <Card className="glass-effect h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                  Development
                </h3>
                <div className="space-y-4">
                  {expertise.development.map((tech, index) => (
                    <div
                      key={index}
                      className="expertise-item flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-all duration-300"
                    >
                      <span className="text-2xl expertise-icon">
                        {tech.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-foreground">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="expertise-category"
          >
            <Card className="glass-effect h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                  Specialties
                </h3>
                <div className="space-y-4">
                  {expertise.specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="expertise-item flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-all duration-300"
                    >
                      <span className="text-2xl expertise-icon">
                        {specialty.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-foreground">{specialty.name}</h4>
                        <p className="text-sm text-muted-foreground">{specialty.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
