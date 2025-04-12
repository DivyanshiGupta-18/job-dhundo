// 'use client';


// import { useState } from "react";
// import { ExternalLink, Building2, HelpCircle, Search, ChevronDown } from 'lucide-react';
// import { motion } from "framer-motion";
// import Image from 'next/image';

// // Simple Custom Accordion Component with Animation
// function Accordion({ children }: { children: React.ReactNode }) {
//   return <div className="border border-primary/20 rounded-xl overflow-hidden divide-y divide-primary/20">{children}</div>;
// }

// function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="border-primary/10">
//       <button 
//         className="w-full p-6 flex justify-between items-center font-medium hover:bg-primary/5 transition-colors duration-200" 
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-left">{title}</span>
//         <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
//       </button>
//       <motion.div 
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden"
//       >
//         <div className="p-6 text-muted-foreground bg-primary/5">{children}</div>
//       </motion.div>
//     </div>
//   );
// }

// // Job Platforms Data
// const jobPlatforms = [
//   { name: 'Naukri.com', description: "India's leading job portal", url: 'https://www.naukri.com', jobs: '1M+', companies: '150K+', logo: 'text-blue-500 bg-blue-50' },
//   { name: 'LinkedIn Jobs', description: 'Professional networking and job search platform', url: 'https://www.linkedin.com/jobs', jobs: '800K+', companies: '200K+', logo: 'text-blue-600 bg-blue-50' },
//   { name: 'Indeed', description: "World's largest job site", url: 'https://www.indeed.co.in', jobs: '2M+', companies: '250K+', logo: 'text-green-500 bg-green-50' },
//   { name: 'Monster', description: 'Global employment platform', url: 'https://www.monster.com', jobs: '500K+', companies: '100K+', logo: 'text-purple-500 bg-purple-50' }
// ];

// // FAQs Data
// const faqs = [
//   { question: "How do I create a strong resume?", answer: "Use relevant experience, action verbs, and keywords from the job description." },
//   { question: "What should I include in my cover letter?", answer: "Highlight skills, interest in the role, and how you can add value." },
//   { question: "How can I prepare for job interviews?", answer: "Research, practice questions, dress professionally, and ask questions." },
//   { question: "What are the best ways to network?", answer: "Attend events, join professional groups, use LinkedIn, and stay in touch." },
//   { question: "How do I negotiate salary?", answer: "Know your worth, research market rates, and justify your request with data." },
//   { question: "What if I'm not hearing back from applications?", answer: "Tailor your resume, follow up, expand your network, and enhance skills." }
// ];

// export default function FAQPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800">
//       <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
        
//         {/* ✅ Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center my-5"
//         >
//           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
//             Job Search Resources & FAQs
//           </h1>
//           <p className="text-xl text-muted-foreground">Find answers to common questions and explore top job platforms</p>
//         </motion.div>

//         {/* ✅ Job Platforms */}
//         <section>
//           <motion.h2 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl font-bold mb-12"
//           >
//             Popular Job Platforms
//           </motion.h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {jobPlatforms.map((platform, index) => (
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//                 key={index} 
//                 className="bg-card/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 hover:border-primary/30 transition-colors duration-300"
//               >
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-4">
//                       <div className={`p-3 rounded-lg ${platform.logo}`}>
//                         <Building2 className="w-8 h-8" />
//                       </div>
//                       <h3 className="text-2xl font-semibold">{platform.name}</h3>
//                     </div>
//                     <p className="text-muted-foreground mt-3">{platform.description}</p>
//                   </div>
//                   <a 
//                     href={platform.url} 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="text-primary hover:text-primary/80 transition-colors"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                   </a>
//                 </div>
//                 <div className="flex gap-6 text-sm">
//                   <div className="px-4 py-2 bg-primary/10 rounded-full">
//                     <span className="font-semibold">{platform.jobs}</span> Jobs
//                   </div>
//                   <div className="px-4 py-2 bg-primary/10 rounded-full">
//                     <span className="font-semibold">{platform.companies}</span> Companies
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* ✅ Search Tips */}
//         <motion.section 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
//           <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-12 border border-primary/10">
//             <div className="flex items-start">
//               <div className="flex-1 flex items-start gap-8">
//                 <div className="bg-primary/10 rounded-xl">
//                   <Search className="w-12 h-12 text-primary" />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold mb-6">Job Search Tips</h2>
//                   <ul className="space-y-4 text-muted-foreground">
//                     {["Set up job alerts on multiple platforms",
//                       "Follow companies on LinkedIn",
//                       "Keep your profile updated",
//                       "Use industry-specific keywords",
//                       "Apply within 24-48 hours of job posting"].map((tip, index) => (
//                       <motion.li 
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.1 }}
//                         className="flex items-center gap-3"
//                       >
//                         <div className="w-2 h-2 rounded-full bg-primary" />
//                         {tip}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="hidden lg:block w-[400px] h-[300px] rounded-xl overflow-hidden"
//               >
//                 <img 
//                   src="https://media.licdn.com/dms/image/v2/D4D12AQH2F-elouFN3A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1686170808135?e=2147483647&v=beta&t=EEAl9-r6kGaf9cV4nwyf8AlFcWri9BFMgQXlRpL8Nws"
//                   alt="Professional working on laptop"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* ✅ FAQs */}
//         <section>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center gap-4 mb-12"
//           >
//             <div className="p-3 bg-primary/10 rounded-lg">
//               <HelpCircle className="w-8 h-8 text-primary" />
//             </div>
//             <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
//           </motion.div>
//           <Accordion>
//             {faqs.map((faq, index) => (
//               <AccordionItem key={index} title={faq.question}>
//                 {faq.answer}
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </section>

//         {/* ✅ Additional Resources */}
//         <motion.section 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="relative"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-3xl" />
//           <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-12 border border-primary/10">
//             <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Resume Templates",
//                   description: "Access professional templates for different industries",
//                   color: "from-blue-500/20 to-blue-600/20"
//                 },
//                 {
//                   title: "Interview Preparation",
//                   description: "Practice common questions with expert tips",
//                   color: "from-purple-500/20 to-purple-600/20"
//                 },
//                 {
//                   title: "Career Guides",
//                   description: "In-depth career guides for various industries",
//                   color: "from-pink-500/20 to-pink-600/20"
//                 }
//               ].map((resource, index) => (
//                 <motion.div 
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                   className={`p-6 rounded-xl bg-gradient-to-br ${resource.color} backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300`}
//                 >
//                   <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
//                   <p className="text-sm text-muted-foreground">{resource.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//       </div>
//     </main>
//   );
// }




'use client';


import { useState } from "react";
import { ExternalLink, Building2, HelpCircle, Search, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

// Simple Custom Accordion Component with Animation
function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="border border-primary/20 rounded-xl overflow-hidden divide-y divide-primary/20">{children}</div>;
}

function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-primary/10">
      <button
        className="w-full p-6 flex justify-between items-center font-medium hover:bg-primary/5 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left">{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 text-muted-foreground bg-primary/5">{children}</div>
      </motion.div>
    </div>
  );
}

// Job Platforms Data
const jobPlatforms = [
  { name: 'Naukri.com', description: "India's leading job portal", url: 'https://www.naukri.com', jobs: '1M+', companies: '150K+', logo: 'text-blue-500 bg-blue-50' },
  { name: 'LinkedIn Jobs', description: 'Professional networking and job search platform', url: 'https://www.linkedin.com/jobs', jobs: '800K+', companies: '200K+', logo: 'text-blue-600 bg-blue-50' },
  { name: 'Indeed', description: "World's largest job site", url: 'https://www.indeed.co.in', jobs: '2M+', companies: '250K+', logo: 'text-green-500 bg-green-50' },
  { name: 'Monster', description: 'Global employment platform', url: 'https://www.monster.com', jobs: '500K+', companies: '100K+', logo: 'text-purple-500 bg-purple-50' }
];

// FAQs Data
const faqs = [
  { question: "How do I create a strong resume?", answer: "Use relevant experience, action verbs, and keywords from the job description." },
  { question: "What should I include in my cover letter?", answer: "Highlight skills, interest in the role, and how you can add value." },
  { question: "How can I prepare for job interviews?", answer: "Research, practice questions, dress professionally, and ask questions." },
  { question: "What are the best ways to network?", answer: "Attend events, join professional groups, use LinkedIn, and stay in touch." },
  { question: "How do I negotiate salary?", answer: "Know your worth, research market rates, and justify your request with data." },
  { question: "What if I'm not hearing back from applications?", answer: "Tailor your resume, follow up, expand your network, and enhance skills." }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">

        {/* ✅ Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center my-5"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Job Search Resources & FAQs
          </h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions and explore top job platforms</p>
        </motion.div>

        {/* ✅ Job Platforms */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12"
          >
            Popular Job Platforms
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {jobPlatforms.map((platform, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                key={index}
                className="bg-card/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${platform.logo}`}>
                        <Building2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold">{platform.name}</h3>
                    </div>
                    <p className="text-muted-foreground mt-3">{platform.description}</p>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="px-4 py-2 bg-primary/10 rounded-full">
                    <span className="font-semibold">{platform.jobs}</span> Jobs
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full">
                    <span className="font-semibold">{platform.companies}</span> Companies
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ Search Tips */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
          <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-12 border border-primary/10">
            <div className="flex items-start">
              <div className="flex-1 flex items-start gap-8">
                <div className="bg-primary/10 rounded-xl">
                  <Search className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Job Search Tips</h2>
                  <ul className="space-y-4 text-muted-foreground">
                    {["Set up job alerts on multiple platforms",
                      "Follow companies on LinkedIn",
                      "Keep your profile updated",
                      "Use industry-specific keywords",
                      "Apply within 24-48 hours of job posting"].map((tip, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {tip}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ✅ FAQs */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </motion.div>
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ✅ Additional Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-3xl" />
          <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-12 border border-primary/10">
            <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Resume Templates",
                  description: "Access professional templates for different industries",
                  color: "from-blue-500/20 to-blue-600/20"
                },
                {
                  title: "Interview Preparation",
                  description: "Practice common questions with expert tips",
                  color: "from-purple-500/20 to-purple-600/20"
                },
                {
                  title: "Career Guides",
                  description: "In-depth career guides for various industries",
                  color: "from-pink-500/20 to-pink-600/20"
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl bg-gradient-to-br ${resource.color} backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300`}
                >
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}