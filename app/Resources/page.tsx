import React from "react";

const resources = [
  {
    category: "Job Search Tips",
    videos: [
      { title: "How to Get a Job Fast", url: "https://www.youtube.com/embed/example1" },
      { title: "Resume Writing Tips", url: "https://www.youtube.com/embed/example2" }
    ],
    questions: [
      "How do I create a strong resume?",
      "What are the best job search platforms?",
      "How can I ace a job interview?"
    ]
  },
  {
    category: "Skill Development",
    videos: [
      { title: "Top Skills Employers Look For", url: "https://www.youtube.com/embed/example3" },
      { title: "Best Online Courses for Career Growth", url: "https://www.youtube.com/embed/example4" }
    ],
    questions: [
      "Which skills are in high demand?",
      "How can I learn new skills online?",
      "What are the best free coding platforms?"
    ]
  }
];

const JobDhundoResources = () => {
  return (
    <div className="p-6 bg-zinc-600 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Job Dhundo Resources</h1>
      {resources.map((section, index) => (
        <div key={index} className="mb-8 p-4 bg-zinc-700 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Videos</h3>
              {section.videos.map((video, idx) => (
                <div key={idx} className="mb-4">
                  <p className="font-medium">{video.title}</p>
                  <iframe
                    className="w-full h-48 rounded"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Common Questions</h3>
              <ul className="list-disc list-inside">
                {section.questions.map((question, idx) => (
                  <li key={idx} className="mb-2 text-zinc-50">{question}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDhundoResources;
