// import React, { useRef } from "react";


// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Page = () => {
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleUploadClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen">
//       {/* Hero Section */}
//       <section className="gradient-bg text-white py-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <video
//             autoPlay
//             loop
//             muted
//             className="w-full h-full object-cover"
//             poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
//           >
//             <source
//               src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
//               type="video/mp4"
//             />
//           </video>
//         </div>
//         <div
//           className="container mx-auto text-center relative z-10"
//           style={fadeIn.visible} 
//         >
//           <h1 className="text-6xl font-bold mb-6 mt-6">
//             Find Your Dream Job with AI-Powered Job Search
//           </h1>
//           <p className="text-2xl mb-8 text-blue-200">
//             Upload your resume and let our AI do the rest.
//           </p>
//           <button
//             onClick={handleUploadClick}
//             className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 flex items-center gap-2 mx-auto"
//           >
//             📤 Upload Resume
//           </button>

//           {/* Hidden File Input */}
//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//             accept=".pdf,.doc,.docx"
//             onChange={(event) => {
//               const file = event.target.files?.[0];
//               if (file) {
//                 alert(`Selected File: ${file.name}`);
//               }
//             }}
//           />
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-16 text-blue-400">
//             How It Works
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {[
//               {
//                 icon: "📄", // Replaced with emoji
//                 title: "Upload Resume",
//                 description: "Upload your resume in seconds",
//               },
//               {
//                 icon: "🤖", // Replaced with emoji
//                 title: "AI Matches Jobs",
//                 description: "Our AI finds the perfect matches",
//               },
//               {
//                 icon: "📤", // Replaced with emoji
//                 title: "Auto Apply",
//                 description: "We apply to jobs for you",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-700 p-8 rounded-xl shadow-xl card-hover"
//               >
//                 <div className="flex justify-center mb-6 text-4xl">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 text-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Jobs */}
//       <section className="py-20 bg-gray-900">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
//             Featured Job Listings
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 company: "Google",
//                 role: "Senior Software Engineer",
//                 location: "Remote",
//                 image:
//                   "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
//                 alt: "Description",
//               },
//               {
//                 company: "Meta",
//                 role: "Product Manager",
//                 location: "New York",
//                 image:
//                   "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
//                 alt: "Description",
//               },
//               {
//                 company: "Apple",
//                 role: "UI/UX Designer",
//                 location: "California",
//                 image:
//                   "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80",
//                 alt: "Description",
//               },
//             ].map((job, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-xl overflow-hidden card-hover"
//               >
//                 <img
//                   src={job.image}
//                   alt={job.company}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {job.role}
//                   </h3>
//                   <p className="text-blue-400 mb-4">
//                     {job.company} - {job.location}
//                   </p>
//                   <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 gradient-bg">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-16 text-white">
//             Success Stories
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 text: "Found my dream job at Google in just 2 weeks!",
//                 author: "Sarah Johnson",
//                 role: "Software Engineer",
//                 image:
//                   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
//               },
//               {
//                 text: "The AI matching system is incredibly accurate!",
//                 author: "Michael Chen",
//                 role: "Product Manager",
//                 image:
//                   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
//               },
//               {
//                 text: "Best job search platform I've ever used!",
//                 author: "Emily Davis",
//                 role: "UX Designer",
//                 image:
//                   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
//               },
//             ].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
//               >
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.author}
//                   className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <p className="text-lg mb-4">"{testimonial.text}"</p>
//                 <p className="font-semibold">{testimonial.author}</p>
//                 <p className="text-blue-300">{testimonial.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8 text-blue-400">
//             Get Started Today
//           </h2>
//           <p className="text-xl mb-12 text-gray-300">
//             Join thousands of professionals who found their dream jobs through
//             our platform
//           </p>
//           <button className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
//             Start Your Journey
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;










"use client"; // Required for using useRef

import React, { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Page = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          className="container mx-auto text-center relative z-10"
          style={fadeIn.visible} 
        >
          <h1 className="text-6xl font-bold mb-6 mt-10">
            Find Your Dream Job with AI-Powered Job Search
          </h1>
          <p className="text-2xl mb-8 text-blue-200">
            Upload your resume and let our AI do the rest.
          </p>

          {/* Upload Button */}
          <button
            onClick={handleUploadClick}
            className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 flex items-center gap-2 mx-auto"
          >
            📤 Upload Resume
          </button>

          {/* Hidden File Input */}
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
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-blue-400">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "📄", // Replaced with emoji
                title: "Upload Resume",
                description: "Upload your resume in seconds",
              },
              {
                icon: "🤖", // Replaced with emoji
                title: "AI Matches Jobs",
                description: "Our AI finds the perfect matches",
              },
              {
                icon: "📤", // Replaced with emoji
                title: "Auto Apply",
                description: "We apply to jobs for you",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-xl shadow-xl card-hover"
              >
                <div className="flex justify-center mb-6 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Featured Job Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "Google",
                role: "Senior Software Engineer",
                location: "Remote",
                image:
                  "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
                alt: "Description",
              },
              {
                company: "Meta",
                role: "Product Manager",
                location: "New York",
                image:
                  "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
                alt: "Description",
              },
              {
                company: "Apple",
                role: "UI/UX Designer",
                location: "California",
                image:
                  "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80",
                alt: "Description",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden card-hover"
              >
                <img
                  src={job.image}
                  alt={job.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {job.role}
                  </h3>
                  <p className="text-blue-400 mb-4">
                    {job.company} - {job.location}
                  </p>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Found my dream job at Google in just 2 weeks!",
                author: "Sarah Johnson",
                role: "Software Engineer",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              },
              {
                text: "The AI matching system is incredibly accurate!",
                author: "Michael Chen",
                role: "Product Manager",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
              },
              {
                text: "Best job search platform I've ever used!",
                author: "Emily Davis",
                role: "UX Designer",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            Get Started Today
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Join thousands of professionals who found their dream jobs through
            our platform
          </p>
          <button className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
