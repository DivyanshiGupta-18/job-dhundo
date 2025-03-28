'use client';

import { Upload, Search, CheckCircle, Building2, Users } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const featuredCompanies = [
    { name: 'Google', jobs: 150 },
    { name: 'Microsoft', jobs: 120 },
    { name: 'Amazon', jobs: 200 },
    { name: 'Meta', jobs: 80 },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      content: 'Thanks to Job-Dhundo, I found my dream job within weeks. The AI-powered matching system is incredible!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'The auto-apply feature saved me countless hours. I got interviews from top companies without the hassle.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128'
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-700">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 mt-6">
            Find Your Dream Job with Resume-Based Auto Apply!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Let AI match you with the perfect opportunities and apply automatically
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="text-gray-50 px-8 py-3 rounded-lg hover:bg-white/90 transition-colors flex gap-2 items-center" style={{border: "1px solid white"}}>
              <Upload className="w-5 h-5" />
              Upload Resume
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: 'Upload Resume',
                description: 'Upload your resume and let our AI analyze your skills and experience'
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: 'AI Matches Jobs',
                description: 'Our advanced AI matches you with the most relevant job opportunities'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Auto Apply',
                description: 'We automatically apply to matching jobs on your behalf'
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card">
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Companies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <Building2 className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-muted-foreground">{company.jobs} open positions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg text-center">
                <div className="flex items-center mb-4 justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Job Search?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of job seekers who found their dream jobs through Job-Dhundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="bg-white text-gray-500 px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-muted py-12 px-4">
        <div className=" container max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">Job-Dhundo</h3>
            <p className="text-slate-400">
              Making job hunting easier with AI-powered matching and auto-apply features.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Browse Jobs</li>
              <li>Upload Resume</li>
              <li>Career Resources</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Post a Job</li>
              <li>Browse Candidates</li>
              <li>Pricing</li>
              <li>Enterprise Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>support@job-dhundo.com</li>
              <li>+1 (555) 123-4567</li>
              <li>FAQ</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </footer> */}
    </main>
  );
}