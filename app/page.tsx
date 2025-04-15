"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Page: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeScore, setResumeScore] = useState<number | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Company logos for the moving banner
  const companyLogos = [
    { name: "Google", color: "bg-blue-500" },
    { name: "Meta", color: "bg-indigo-500" },
    { name: "Apple", color: "bg-gray-700" },
    { name: "Microsoft", color: "bg-green-500" },
    { name: "Amazon", color: "bg-orange-500" },
    { name: "Netflix", color: "bg-red-500" },
    { name: "Tesla", color: "bg-red-600" },
    { name: "Spotify", color: "bg-green-600" },
  ];

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const recommendedJobs = [
    { company: "Google", role: "Frontend Developer", location: "Remote" },
    { company: "Meta", role: "UX Designer", location: "New York" },
    { company: "Microsoft", role: "Data Analyst", location: "Bangalore" },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      alert(`Uploaded: ${file.name}`);
      setResumeScore(Math.floor(Math.random() * 100) + 1);
    }
  };

  const handleApply = (job: string) => {
    setAppliedJobs((prev) => [...prev, job]);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section with Enhanced Animation */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          >
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto text-center relative z-10"
          style={{ scale: scale }} 
        >
          <motion.h1
            className="text-6xl font-bold mb-6 mt-10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Dream Job with Resume-Based Auto Apply!
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Upload your resume and let our AI do the rest.
          </motion.p>

          <motion.button
            onClick={handleUploadClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 flex items-center gap-2 mx-auto"
          >
            📤 Upload Resume
            <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
          </motion.button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept=".pdf,.doc,.docx"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                alert(`Selected File: ${file.name}`);
              }
            }}
          />
        </motion.div>
      </section>

      {/* Resume Score */}
      {resumeScore !== null && (
        <section className="text-center py-10 bg-gray-800">
          <h2 className="text-2xl">Resume Score: {resumeScore}%</h2>
          <p className="text-gray-400">Improve by adding more experience and skills</p>
        </section>
      )}

      {/* Moving Company Logos Section */}
      <section className="py-16 bg-gray-800/50 overflow-hidden">
        <div className="relative">
          <motion.div
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${logo.color} p-6 rounded-xl min-w-[200px]`}
              >
                <span className="text-white font-semibold text-xl">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-16 text-blue-400">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "📄",
                title: "Upload Resume",
                description: "Upload your resume in seconds",
              },
              {
                icon: "🤖",
                title: "AI Matches Jobs",
                description: "Our AI finds the perfect matches",
              },
              {
                icon: "📤",
                title: "Auto Apply",
                description: "We apply to jobs for you",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gray-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className="flex justify-center mb-6 text-4xl"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Jobs with Enhanced Animations */}
      <section className="py-20 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Featured Job Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "Google",
                role: "Senior Software Engineer",
                location: "Remote",
                image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
              },
              {
                company: "Meta",
                role: "Product Manager",
                location: "New York",
                image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
              },
              {
                company: "Apple",
                role: "UI/UX Designer",
                location: "California",
                image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.img
                  src={job.image}
                  alt={job.company}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {job.role}
                  </h3>
                  <p className="text-blue-400 mb-4">
                    {job.company} - {job.location}
                  </p>
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
        </motion.div>
      </section>

      {/* Testimonials with Enhanced Animations */}
      <section className="py-20 gradient-bg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-16 text-white">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Found my dream job at Google in just 2 weeks!",
                author: "Sarah Johnson",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              },
              {
                text: "The AI matching system is incredibly accurate!",
                author: "Michael Chen",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
              },
              {
                text: "Best job search platform I've ever used!",
                author: "Emily Davis",
                role: "UX Designer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-lg mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-blue-300">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recommended Jobs */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-center">🎯 Recommended Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedJobs.map((job, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <p className="text-gray-400">{job.company} - {job.location}</p>
              <motion.button
                onClick={() => handleApply(job.role)}
                whileHover={{ scale: 1.05 }}
                className="mt-4 bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Applied Jobs Section */}
      {appliedJobs.length > 0 && (
        <section className="py-16 bg-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6">✅ Applied Jobs</h2>
          <ul className="text-gray-400">
            {appliedJobs.map((job, index) => (
              <li key={index} className="mb-2">{job} - Status: In Progress</li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact Section with Enhanced Animation */}
      <section className="py-20 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            Get Started Today
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Join thousands of professionals who found their dream jobs through our platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Page;