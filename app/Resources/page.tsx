"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Correct YouTube Video IDs
const videos = [
  { id: "uPraLAw8PXo", title: "How to Get a Job Fast" },
  { id: "R3abknwWX7k", title: "Resume Writing Tips" },
  { id: "3-Duc8It0cY", title: "Top Skills Employers Look For" },
  { id: "ug1LXrzKPVQ", title: "Best Online Courses for Career Growth" },
];

// Resources Data
const resources = [
  {
    category: "Job Search Tips",
    videos: [videos[0], videos[1]],
    questions: [
      "How do I create a strong resume?",
      "What are the best job search platforms?",
      "How can I ace a job interview?",
    ],
  },
  {
    category: "Skill Development",
    videos: [videos[2], videos[3]],
    questions: [
      "Which skills are in high demand?",
      "How can I learn new skills online?",
      "What are the best free coding platforms?",
    ],
  },
];

const JobDhundoResources = () => {
  const [playingVideo, setPlayingVideo] = useState<{ [key: string]: boolean }>({});

  const handlePlay = (id: string) => {
    setPlayingVideo((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-4xl font-bold text-center mb-10 text-blue-400 mt-15"
      >
        Job Dhundo Resources
      </motion.h1>

      {resources.map((section, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-10 p-6 bg-gray-800 shadow-lg rounded-lg transition duration-300 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">{section.category}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Video Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Videos</h3>
              {section.videos.map((video, idx) => (
                <div key={idx} className="mb-6 relative group">
                  <p className="font-medium mb-2">{video.title}</p>

                  {/* Video Thumbnail & Play Button */}
                  {!playingVideo[video.id] ? (
                    <div
                      className="relative cursor-pointer rounded-lg overflow-hidden transition duration-300 hover:opacity-80"
                      onClick={() => handlePlay(video.id)}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white opacity-90 hover:opacity-100 transition duration-300" />
                      </div>
                    </div>
                  ) : (
                    <iframe
                      className="w-full h-48 rounded-lg"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              ))}
            </div>

            {/* Questions Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-300">Common Questions</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
                {section.questions.map((question, idx) => (
                  <li key={idx} className="mb-2">{question}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default JobDhundoResources;

