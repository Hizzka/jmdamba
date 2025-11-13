import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

export function Projects() {
  const [projectModal, setProjectModal] = useState<{ isOpen: boolean; project: any }>({ isOpen: false, project: null });

  const projects = [
    {
      title: "CFCST JOB PORTAL",
      subtitle: "Full Stack Web Application",
      description: "An immersive 3D portfolio showcasing modern web development with Three.js and interactive animations.",
      fullDescription: "An innovative online job portal designed for CFCST (Central Foundation College of Science and Technology) to streamline the recruitment process for students, alumni, and employers. The platform enables job seekers to create profiles, upload resumes, and apply for job openings, while employers can post vacancies, review applicants, and manage hiring efficiently. The system offers a clean, intuitive interface and ensures accessibility across all devices.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      tags: [],
      techStack: [],
       features: [
        "User authentication for students, alumni, and employers",
        "Profile creation and resume upload functionality",
        "Job posting and application management",
        "Real-time notifications and status tracking",
        "Admin dashboard for user and job management",
        "Responsive UI for mobile and desktop users",
        "Search and filter options for job listings"
      ],
      challenges: "Ensuring smooth and secure data flow between applicants and employers while maintaining a responsive and user-friendly interface across devices.",
      solutions: "Implemented role-based authentication to manage permissions, optimized API requests using Axios interceptors, and applied lazy loading to improve performance. Used responsive layout techniques with Tailwind CSS to guarantee a consistent experience across all screen sizes.",
      github: "#",
      live: "https://bisque-barracuda-541875.hostingersite.com",
      gradient: "from-blue-500/20 to-cyan-500/20",
      category: "Full Stack Web Application"
    },
    {
      title: "Feedback System",
      subtitle: "Full Stack Web Application (USM)",
      description: "An efficient and user-friendly feedback platform for the University of Southern Mindanao to collect and analyze client satisfaction data across offices and services.",
      fullDescription: "An efficient and user-friendly Feedback System developed for the University of Southern Mindanao (USM) to automate and simplify the process of gathering client satisfaction data. The platform enables students, faculty, staff, alumni, parents, suppliers, and visitors to provide structured feedback on university services, personnel, and office facilities. By replacing the traditional paper-based survey with a web-based form, the system ensures faster data collection, improved accuracy, and easier report generation for administrative analysis.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      tags: [],
      techStack: [],
      features: [
        "Online client satisfaction survey for different university offices and departments",
        "Role-based access control for administrators and office personnel",
        "Real-time form validation and data submission",
        "Multiple rating categories (Responsiveness, Reliability, Access, Facilities, etc.)",
        "Comment and suggestion fields for detailed feedback",
        "Dashboard for report generation and feedback statistics",
        "Secure, confidential data handling for all respondents",
        "Mobile-responsive interface for accessibility on any device"
      ],
      challenges: "Integrating multiple rating sections with dynamic question sets; maintaining responsiveness and performance within AngularJS’s digest cycle; ensuring confidentiality of responses while storing identifiable data for analysis.",
      solutions: "Used AngularJS directives and two-way data binding to dynamically generate rating inputs and manage survey states. Implemented Laravel RESTful APIs for secure and efficient backend communication. Applied Axios with error handling to manage form submissions and prevent duplicate entries. Utilized Bootstrap's grid system to maintain a consistent responsive layout. Developed an admin dashboard with summarized reports and printable survey results to assist university decision-makers.",
      github: "#",
      live: "http://blueviolet-elk-807105.hostingersite.com/",
      gradient: "from-green-500/20 to-blue-500/20",
      category: "Full Stack Web Application"
    },
    {
      title: "HW-1647 Management System",
      subtitle: "Full Stack Web Application",
      description: "A comprehensive web-based management system for Highway 1647 Gardeners' Association to streamline stall management, gardener registration, rental tracking, and sales monitoring.",
      fullDescription: "HW-1647 is a comprehensive web-based management system developed for Highway 1647 Gardeners' Association in Barangay Osias, Kabacan, Cotabato. The system streamlines operations by providing digital tools for stall management, gardener registration, rental tracking, and sales monitoring. Established on January 19, 2021 under the leadership of Board Member Jonathan Tabara, Highway 1647 serves as a centralized marketplace where gardeners can rent stalls and sell various kinds of plants. The project aims to modernize administrative processes, improve transparency between the association and its members, and offer a user-friendly interface for managing daily transactions and records.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      tags: [],
      techStack: [],
      features: [
        "Role-Based Access Control – Separate dashboards for admin, stall owners, and gardeners",
        "Stall Management – Assign, monitor, and manage stall rentals including payment history and availability",
        "Gardener Profiles – Maintain digital records of members, including business details and assigned stalls",
        "Plant Inventory & Sales Tracking – Manage available plants, pricing, and daily sales reports per stall",
        "Rental Fee Management – Automated computation of rental dues, billing reminders, and payment logging",
        "Data Analytics Dashboard – Visualize sales performance, rental income, and occupancy trends",
        "Notifications & Announcements – Keep members informed about schedules, events, or policy updates",
        "Responsive & Accessible Design – Optimized for mobile and desktop use by gardeners and administrators",
        "Secure Authentication – Encrypted login system to protect member and financial data",
        "Exportable Reports – Generate printable or downloadable financial and occupancy reports"
      ],
      challenges: "Developing a system that balances usability for non-technical users (local gardeners) with robust data management capabilities. Ensuring accurate and real-time updates for stall availability, rental payments, and sales data in a shared environment presented architectural and UI challenges.",
      solutions: "Adopted a modular MVC structure with optimized database relationships for stalls, users, and transactions. Implemented AJAX-based dynamic updates for real-time data changes without page reloads. Used role-based middleware for access security and indexed MySQL queries for efficient data retrieval. The system ensures data accuracy through transactional updates and audit logs for every key operation.",
      github: "#",
      live: "https://beige-fly-537237.hostingersite.com",
      gradient: "from-indigo-500/20 to-fuchsia-500/20",
      category: "Full Stack Web Application"
    }
  ];

  return (
    <section id="portfolio" className="py-20 icy-gradient relative overflow-hidden transition-all duration-300">
      {/* Magical floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-[15%] w-2 h-2 bg-blue-400/30 dark:bg-blue-300/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-[20%] w-3 h-3 bg-cyan-300/25 dark:bg-cyan-400/40 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            opacity: [0.25, 0.8, 0.25],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-[25%] text-blue-300/20 dark:text-blue-200/30 text-xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ❄️
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              ❄️
            </motion.div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              My Portfolio
            </h2>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-blue-400 dark:text-blue-300" />
            </motion.div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in fullstack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="portfolio-card overflow-hidden h-full flex flex-col bg-card/90 dark:bg-gray-900/90 backdrop-blur-sm border-border/40 dark:border-gray-700/40 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/5 hover:-translate-y-1">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-background/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border/20">
                      {project.category}
                    </div>
                  </div>
                </div>

                <CardContent className="flex-grow p-6">
                  {/* Project Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Dialog open={projectModal.isOpen && projectModal.project?.title === project.title} onOpenChange={(open) => {
                      if (!open) {
                        setProjectModal({ isOpen: false, project: null });
                      }
                    }}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                          onClick={() => setProjectModal({ isOpen: true, project })}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="w-[94vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-w-none max-h-[92vh] sm:max-h-[90vh] overflow-y-auto !bg-white dark:!bg-gray-900 border border-border shadow-2xl z-[50] transition-all duration-300 mx-auto">
                        <DialogHeader className="pb-4">
                          <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-2">
                            {projectModal.project?.title}
                          </DialogTitle>
                          <p className="text-center text-primary font-medium mb-4 text-sm sm:text-base">
                            {projectModal.project?.subtitle}
                          </p>
                        </DialogHeader>
                        
                        {/* Project Image */}
                        <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                          <div className={`absolute inset-0 bg-gradient-to-br ${projectModal.project?.gradient} opacity-80`} />
                          <img
                            src={projectModal.project?.image}
                            alt={projectModal.project?.title}
                            className="w-full h-48 sm:h-64 object-cover"
                          />
                        </div>

                        {/* Project Overview */}
                        <div className="mb-4 sm:mb-6">
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Project Overview</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {projectModal.project?.fullDescription}
                          </p>
                        </div>

                        {/* Key Features */}
                        <div className="mb-4 sm:mb-6">
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Key Features</h3>
                          <div className="space-y-1.5 sm:space-y-2">
                            {projectModal.project?.features.map((feature: string, featureIndex: number) => (
                              <div key={featureIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Challenges & Solutions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Challenges</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                              {projectModal.project?.challenges}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Solutions</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                              {projectModal.project?.solutions}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                          <Button
                            asChild
                            className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 h-12 sm:h-10"
                            size="lg"
                          >
                            <a href={projectModal.project?.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              <span className="text-sm sm:text-base">View Live Demo</span>
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            asChild
                            className="flex-1 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 h-12 sm:h-10"
                            size="lg"
                          >
                            <a href={projectModal.project?.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              <span className="text-sm sm:text-base">View Code</span>
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 className="h-5 w-5 text-primary dark:text-blue-400" />
            <p className="text-muted-foreground">Want to see more of my work?</p>
            <Sparkles className="h-5 w-5 text-cyan-400 dark:text-cyan-300" />
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-blue-500 to-cyan-400 hover:from-primary/90 hover:via-blue-500/90 hover:to-cyan-400/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
          >
            Let's Work Together ❄️
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
