'use client';

import { useState } from "react";
import { ExternalLink, Building2, HelpCircle, Search } from 'lucide-react';

//  Simple Custom Accordion Component
function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="border border-gray-200 rounded-lg">{children}</div>;
}

function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <button className="w-full p-4 flex justify-between font-medium" onClick={() => setIsOpen(!isOpen)}>
        {title} <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-600">{children}</div>}
    </div>
  );
}

//  Job Platforms Data
const jobPlatforms = [
  { name: 'Naukri.com', description: "India's leading job portal", url: 'https://www.naukri.com', jobs: '1M+', companies: '150K+', logo: 'text-blue-600' },
  { name: 'LinkedIn Jobs', description: 'Professional networking and job search platform', url: 'https://www.linkedin.com/jobs', jobs: '800K+', companies: '200K+', logo: 'text-blue-700' },
  { name: 'Indeed', description: "World's largest job site", url: 'https://www.indeed.co.in', jobs: '2M+', companies: '250K+', logo: 'text-blue-500' },
  { name: 'Monster', description: 'Global employment platform', url: 'https://www.monster.com', jobs: '500K+', companies: '100K+', logo: 'text-purple-600' }
];

//  FAQs Data
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
    <main className="min-h-screen bg-zinc-700 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ✅ Header */}
        <div className="text-center my-16">
          <h1 className="text-4xl font-bold mb-4">Job Search Resources & FAQs</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions and explore top job platforms</p>
        </div>

        {/* ✅ Job Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Popular Job Platforms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jobPlatforms.map((platform, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Building2 className={`w-12 h-12 ${platform.logo}`} />
                      <h3 className="text-xl font-semibold">{platform.name}</h3>
                    </div>
                    <p className="text-muted-foreground mt-2">{platform.description}</p>
                  </div>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex gap-4 text-sm">
                  <div><span className="font-semibold">{platform.jobs}</span> Jobs</div>
                  <div><span className="font-semibold">{platform.companies}</span> Companies</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Search Tips */}
        <section className="mb-16 bg-muted/50 rounded-lg p-8">
          <div className="flex items-start gap-6">
            <Search className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Job Search Tips</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Set up job alerts on multiple platforms</li>
                <li>• Follow companies on LinkedIn</li>
                <li>• Keep your profile updated</li>
                <li>• Use industry-specific keywords</li>
                <li>• Apply within 24-48 hours of job posting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ✅ FAQs */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ✅ Additional Resources */}
        <section className="bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Resume Templates", "Interview Preparation", "Career Guides"].map((title, index) => (
              <div key={index} className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">
                  {title === "Resume Templates" ? "Access professional templates for different industries" :
                   title === "Interview Preparation" ? "Practice common questions with expert tips" :
                   "In-depth career guides for various industries"}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
