import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Heart, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const serviceId = "service_ekydym9";
      const templateId = "template_pc8xugo";
      const publicKey = "m4QsOuM41ewK1JK-x";

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      toast.success("Message sent! ✨", {
        description: "Thank you for your message! I'll get back to you soon.",
        duration: 4000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Oops! Something went wrong 😢", {
        description: "Please try again or email me directly at jobaidamba@gmail.com",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Let's discuss your project",
      value: "jobaidamba@gmail.com",
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-400",
      link: "mailto:jobaidamba@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: "Based in Philippines",
      value: "Available for remote work",
      gradientFrom: "from-cyan-400",
      gradientTo: "to-blue-500",
      link: "#",
    },
    {
      icon: Clock,
      title: "Availability",
      subtitle: "Ready for new projects",
      value: "Open to opportunities",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-500",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-blue-400/5 relative overflow-hidden">
      {/* Expanding Circle Animation for Contact Header */}  
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Main expanding circle behind the mail icon */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="absolute inset-0 border-2 border-primary/20 rounded-full"
            animate={{ 
              scale: [0.3, 3, 0.3],
              opacity: [0.8, 0.1, 0.8] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: '200px', height: '200px', marginLeft: '-100px' }}
          />
          <motion.div
            className="absolute inset-0 border border-blue-400/15 rounded-full"
            animate={{ 
              scale: [0.5, 2.5, 0.5],
              opacity: [0.6, 0.05, 0.6] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ width: '200px', height: '200px', marginLeft: '-100px' }}
          />
          <motion.div
            className="absolute inset-0 border border-primary/25 rounded-full"
            animate={{ 
              scale: [0.7, 2.8, 0.7],
              opacity: [0.4, 0.08, 0.4] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ width: '200px', height: '200px', marginLeft: '-100px' }}
          />
          
          {/* Animated dots inside the expanding circles */}
          <motion.div
            className="absolute top-16 left-20 w-2 h-2 bg-primary/70 rounded-full"
            animate={{ 
              scale: [0.6, 1.4, 0.6],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 360, 720] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-24 left-32 w-1.5 h-1.5 bg-blue-400/80 rounded-full"
            animate={{ 
              scale: [0.4, 1.2, 0.4],
              opacity: [0.8, 1, 0.8],
              y: [0, -12, 0] 
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute top-20 left-12 w-1 h-1 bg-primary/90 rounded-full"
            animate={{ 
              scale: [0.3, 1.1, 0.3],
              opacity: [0.9, 1, 0.9] 
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
          <motion.div
            className="absolute top-32 left-24 w-1.5 h-1.5 bg-blue-300/85 rounded-full"
            animate={{ 
              scale: [0.5, 1.3, 0.5],
              opacity: [0.85, 1, 0.85],
              x: [0, 8, 0] 
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          />
          <motion.div
            className="absolute top-12 left-28 w-2 h-2 bg-primary/60 rounded-full"
            animate={{ 
              scale: [0.7, 1.2, 0.7],
              opacity: [0.6, 1, 0.6],
              rotate: [0, -270, -540] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />
        </div>

        {/* Side expanding circles */}
        <div className="absolute top-12 left-[10%]">
          <motion.div
            className="absolute inset-0 border border-blue-400/20 rounded-full"
            animate={{ 
              scale: [0.2, 1.8, 0.2],
              opacity: [0.9, 0.2, 0.9] 
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            style={{ width: '80px', height: '80px' }}
          />
          <motion.div
            className="absolute top-4 left-6 w-1 h-1 bg-blue-400/80 rounded-full"
            animate={{ 
              scale: [0.4, 1.1, 0.4],
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </div>

        <div className="absolute top-16 right-[12%]">
          <motion.div
            className="absolute inset-0 border border-primary/25 rounded-full"
            animate={{ 
              scale: [0.4, 2.1, 0.4],
              opacity: [0.8, 0.15, 0.8] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
            style={{ width: '70px', height: '70px' }}
          />
          <motion.div
            className="absolute top-2 left-4 w-1.5 h-1.5 bg-primary/75 rounded-full"
            animate={{ 
              scale: [0.5, 1.3, 0.5],
              opacity: [0.75, 1, 0.75] 
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-30"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Static Ice Cube */}
            <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-300 border border-blue-200 rounded-lg shadow-lg">
              <div className="absolute inset-0 opacity-70">
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-blue-100 rounded-full"></div>
                <div className="absolute bottom-1 left-2 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
            </div>

            <span className="text-3xl">🧊</span>

            <h2 className="text-3xl font-bold text-primary">
              Let's Get In Touch
            </h2>

            <span className="text-2xl">❄️</span>

            {/* Small Static Ice Cube */}
            <div className="w-6 h-6 bg-gradient-to-br from-blue-200 to-blue-400 border border-blue-300 rounded-md shadow-md">
              <div className="absolute inset-0 opacity-70">
                <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-blue-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-background/40 backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    {/* Gradient Icon */}
                    <div className="mx-auto mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradientFrom} ${info.gradientTo} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {info.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs">
                        {info.subtitle}
                      </p>

                      <div className="space-y-1">
                        <p className="font-medium text-primary text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="contact-form-card bg-background/40 backdrop-blur-md border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6 justify-center">
                  <Heart className="h-5 w-5 text-primary fill-current" />
                  <h3 className="text-xl font-semibold text-primary">Send me a message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          placeholder="Your beautiful name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="bg-background/50 border-border focus:border-primary/50 placeholder:text-muted-foreground/60 
                                   hover:bg-background/70 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                        />
                        {/* Freezing Effect on Focus */}
                        <motion.div
                          className="absolute inset-0 border border-blue-400/30 rounded-md pointer-events-none"
                          initial={{ opacity: 0, scale: 1 }}
                          whileHover={{ opacity: 0.5, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="bg-background/50 border-border focus:border-primary/50 placeholder:text-muted-foreground/60
                                   hover:bg-background/70 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                        />
                        {/* Freezing Effect on Focus */}
                        <motion.div
                          className="absolute inset-0 border border-blue-400/30 rounded-md pointer-events-none"
                          initial={{ opacity: 0, scale: 1 }}
                          whileHover={{ opacity: 0.5, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        placeholder="Tell me about your amazing project... ✨"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="bg-background/50 border-border focus:border-primary/50 placeholder:text-muted-foreground/60 resize-none
                                 hover:bg-background/70 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                      />
                      {/* Freezing Effect on Focus */}
                      <motion.div
                        className="absolute inset-0 border border-blue-400/30 rounded-md pointer-events-none"
                        initial={{ opacity: 0, scale: 1 }}
                        whileHover={{ opacity: 0.5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message ✨"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Toaster position="top-center" richColors closeButton />
    </section>
  );
}
