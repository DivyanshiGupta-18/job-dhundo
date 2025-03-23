// import React from 'react'

// const page = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20">
//         <div className="container mx-auto text-center">
//           {/* <img src= "https://content.thriveglobal.com/wp-content/uploads/2018/08/DreamJob.png" /> */}
//           <h1 className="text-5xl font-bold mb-4">Find Your Dream Job with Resume-Based Auto Apply!</h1>
//           <p className="text-xl mb-8">Upload your resume and let our AI do the rest.</p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
//             Upload Resume
//           </button>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">1. Upload Resume</h3>
//               <p className="text-gray-600">Upload your resume in seconds.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">2. AI Matches Relevant Jobs</h3>
//               <p className="text-gray-600">Our AI finds the best jobs for you.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">3. Auto Apply for You</h3>
//               <p className="text-gray-600">We apply to jobs on your behalf.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Job Listings */}
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Featured Job Listings</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((job) => (
//               <div key={job} className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
//                 <p className="text-gray-600 mb-4">Google - Remote</p>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
//                   Apply Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resume Upload & Profile Builder */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Upload Your Resume</h2>
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
//             <form>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Upload Resume</label>
//                 <input
//                   type="file"
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Dashboard Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Your Dashboard</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Applied Jobs</h3>
//               <p className="text-gray-600">View all jobs you've applied to.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Saved Jobs</h3>
//               <p className="text-gray-600">See jobs you've saved for later.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
//               <p className="text-gray-600">Discover new job recommendations.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filters & Job Preferences */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Filters & Job Preferences</h2>
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
//             <form>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2">Location</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     placeholder="Enter location"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Experience</label>
//                   <select className="w-full p-2 border border-gray-300 rounded">
//                     <option>0-2 years</option>
//                     <option>2-5 years</option>
//                     <option>5+ years</option>
//                   </select>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full mt-6 hover:bg-blue-700 transition duration-300"
//               >
//                 Apply Filters
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials & Success Stories */}
//       <section className="bg-blue-600 text-white py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((testimonial) => (
//               <div key={testimonial} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
//                 <p className="mb-4">"Job-Dhundo helped me find my dream job in just a week!"</p>
//                 <p className="font-semibold">- John Doe</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ & Contact Us */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">FAQ & Contact Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
//               <p className="text-gray-600">Coming soon...</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//               <p className="text-gray-600">Email: support@jobdhundo.com</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// export default page


"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Briefcase, Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const page = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto text-center relative z-10"
        >
          <h1 className="text-6xl font-bold mb-6">Find Your Dream Job with AI-Powered Job Search</h1>
          <p className="text-2xl mb-8 text-blue-200">Upload your resume and let our AI do the rest.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 flex items-center gap-2 mx-auto"
          >
            <Upload size={24} />
            Upload Resume
          </motion.button>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-16 text-blue-400"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Upload className="w-12 h-12 text-blue-400" />,
                title: "Upload Resume",
                description: "Upload your resume in seconds"
              },
              {
                icon: <Star className="w-12 h-12 text-blue-400" />,
                title: "AI Matches Jobs",
                description: "Our AI finds the perfect matches"
              },
              {
                icon: <Briefcase className="w-12 h-12 text-blue-400" />,
                title: "Auto Apply",
                description: "We apply to jobs for you"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700 p-8 rounded-xl shadow-xl card-hover"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-blue-400"
          >
            Featured Job Listings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "Google",
                role: "Senior Software Engineer",
                location: "Remote",
                image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80"
              },
              {
                company: "Meta",
                role: "Product Manager",
                location: "New York",
                image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
              },
              {
                company: "Apple",
                role: "UI/UX Designer",
                location: "California",
                image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80"
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-gray-800 rounded-xl overflow-hidden card-hover"
              >
                <img
                  src={job.image}
                  alt={job.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{job.role}</h3>
                  <p className="text-blue-400 mb-4">{job.company} - {job.location}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-16 text-white"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Found my dream job at Google in just 2 weeks!",
                author: "Sarah Johnson",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              },
              {
                text: "The AI matching system is incredibly accurate!",
                author: "Michael Chen",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              },
              {
                text: "Best job search platform I've ever used!",
                author: "Emily Davis",
                role: "UX Designer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-blue-300">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-8 text-blue-400"
          >
            Get Started Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl mb-12 text-gray-300"
          >
            Join thousands of professionals who found their dream jobs through our platform
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default page;
