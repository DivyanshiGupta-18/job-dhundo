// "use client";

// import { Upload, Search, CheckCircle, Building2 } from "lucide-react";
// import { useState } from "react";
// import { motion } from "framer-motion";

// // Animation Variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function Home() {
//   const [email, setEmail] = useState("");

//   const featuredCompanies = [
//     { name: "Google", jobs: 150 },
//     { name: "Microsoft", jobs: 120 },
//     { name: "Amazon", jobs: 200 },
//     { name: "Meta", jobs: 80 },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Software Engineer",
//       content:
//         "Thanks to Job-Dhundo, I found my dream job within weeks. The AI-powered matching system is incredible!",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128",
//     },
//     {
//       name: "Michael Chen",
//       role: "Product Manager",
//       content:
//         "The auto-apply feature saved me countless hours. I got interviews from top companies without the hassle.",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-gray-900 text-white">
//       {/* How It Works */}
//       <section className="py-25 px-4 bg-gradient-to-r from-purple-500 to-blue-500">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="max-w-7xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold text-center mb-12 mt-3">How It Works</h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             {[
//               {
//                 icon: <Upload className="w-10 h-10 text-blue-500" />,
//                 title: "Upload Resume",
//                 description:
//                   "Upload your resume and let our AI analyze your skills and experience.",
//               },
//               {
//                 icon: <Search className="w-10 h-10 text-green-500" />,
//                 title: "AI Matches Jobs",
//                 description:
//                   "Our advanced AI matches you with the most relevant job opportunities.",
//               },
//               {
//                 icon: <CheckCircle className="w-10 h-10 text-purple-500" />,
//                 title: "Auto Apply",
//                 description: "We automatically apply to matching jobs on your behalf.",
//               },
//             ].map((step, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn}
//                 className="text-center p-6 rounded-lg bg-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="inline-block p-4 bg-gray-600 rounded-full mb-4">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                 <p className="text-gray-300">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Featured Companies */}
//       <section className="py-20 px-4 bg-gradient-to-r from-blue-300 to-purple-900">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="max-w-7xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold text-center mb-12">Featured Companies</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {featuredCompanies.map((company, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn}
//                 className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 text-center"
//               >
//                 <Building2 className="w-12 h-12 mb-4 text-blue-400 mx-auto" />
//                 <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
//                 <p className="text-gray-300">{company.jobs} open positions</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 px-4 bg-gradient-to-r from-blue-800 to-purple-400">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="max-w-7xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn}
//                 className="bg-gray-700 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex items-center mb-4 justify-center">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="font-semibold">{testimonial.name}</h3>
//                     <p className="text-gray-400">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-300">{testimonial.content}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Call To Action */}
//       <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pbluee-500 text-white">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="max-w-7xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-6">Ready to Start Your Job Search?</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Join thousands of job seekers who found their dream jobs through Job-Dhundo.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
//             />
//             <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300">
//               Get Started
//             </button>
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }






"use client";

import { Upload, Search, CheckCircle, Building2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [email, setEmail] = useState("");

  const featuredCompanies = [
    { name: "Google", jobs: 150 },
    { name: "Microsoft", jobs: 120 },
    { name: "Amazon", jobs: 200 },
    { name: "Meta", jobs: 80 },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content:
        "Thanks to Job-Dhundo, I found my dream job within weeks. The AI-powered matching system is incredible!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content:
        "The auto-apply feature saved me countless hours. I got interviews from top companies without the hassle.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-blue-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 mt-3">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Upload className="w-10 h-10 text-blue-500" />,
                title: "Upload Resume",
                description:
                  "Upload your resume and let our AI analyze your skills and experience.",
              },
              {
                icon: <Search className="w-10 h-10 text-green-500" />,
                title: "AI Matches Jobs",
                description:
                  "Our advanced AI matches you with the most relevant job opportunities.",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-purple-500" />,
                title: "Auto Apply",
                description: "We automatically apply to matching jobs on your behalf.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center p-6 rounded-lg bg-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-block p-4 bg-gray-600 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* White Gap Between Sections */}
      <div className="h-5 bg-white"></div>

      {/* Featured Companies */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-300 to-purple-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Featured Companies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                <Building2 className="w-12 h-12 mb-4 text-blue-400 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-300">{company.jobs} open positions</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* White Gap Between Sections */}
      <div className="h-5 bg-white"></div>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-800 to-purple-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-700 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4 justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* White Gap Between Sections */}
      <div className="h-5 bg-white"></div>

      {/* Call To Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Job Search?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of job seekers who found their dream jobs through Job-Dhundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300">
              Get Started
            </button>
          </div>
        </motion.div>
      </section>
      <div className="h-5 bg-white"></div>
    </main>
  );
}
