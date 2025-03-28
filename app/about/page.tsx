import React from 'react';

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-8">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Job-Dhundo</h1>
            <p className="text-xl text-gray-600">Your Gateway to Finding the Perfect Job</p>
          </header>

          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Job-Dhundo, we are committed to simplifying the job search process for both job seekers and employers. Our mission is to connect talented individuals with the right job opportunities, making the hiring process seamless and efficient.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">What We Offer</h2>
            <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
              <li><strong className="font-semibold">Easy Job Applications:</strong> Apply to multiple jobs with just a few clicks.</li>
              <li><strong className="font-semibold">Resume Builder:</strong> Create and manage professional resumes effortlessly.</li>
              <li><strong className="font-semibold">Job Alerts:</strong> Get notified about the latest job openings that match your profile.</li>
              <li><strong className="font-semibold">Employer Solutions:</strong> For employers, we provide tools to post jobs, manage applications, and find the best candidates.</li>
              <li><strong className="font-semibold">Career Resources:</strong> Access tips, guides, and resources to enhance your career prospects.</li>
            </ul>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Job-Dhundo?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Job-Dhundo stands out because of its user-friendly interface, comprehensive job listings, and a wide range of features designed to meet the needs of both job seekers and employers. Whether you're looking for your dream job or the perfect candidate, Job-Dhundo is here to help.
            </p>
          </section>

          {/* Our Team Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team is made up of passionate professionals dedicated to making the job search process as smooth as possible. We are constantly working to improve our platform and provide the best experience for our users.
            </p>
          </section>

          {/* Contact Us Section */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions or need assistance? Feel free to reach out to us at{" "}
              <a
                href="mailto:support@jobdhundo.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                support@jobdhundo.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default page;
