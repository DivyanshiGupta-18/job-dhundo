// import Link from "next/link"
// import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import React from "react"

export default function Footer() {
  return (
    // <footer className="bg-slate-900 text-slate-200">
    //   <div className="container mx-auto px-4 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //       <div className="space-y-4">
    //         <h3 className="text-xl font-bold">Company Name</h3>
    //         <p className="text-slate-400">Creating amazing experiences and connecting people through technology.</p>
    //       </div>

    //       <div className="space-y-4">
    //         <h3 className="text-xl font-bold">Quick Links</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="/" className="hover:text-white transition-colors">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/about" className="hover:text-white transition-colors">
    //               About
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/services" className="hover:text-white transition-colors">
    //               Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/contact" className="hover:text-white transition-colors">
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="space-y-4">
    //         <h3 className="text-xl font-bold">Resources</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="/blog" className="hover:text-white transition-colors">
    //               Blog
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/faq" className="hover:text-white transition-colors">
    //               FAQ
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/support" className="hover:text-white transition-colors">
    //               Support
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/privacy" className="hover:text-white transition-colors">
    //               Privacy Policy
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="space-y-4">
    //         <h3 className="text-xl font-bold">Connect With Us</h3>
    //         <div className="flex space-x-4">
    //           <Link href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram">
    //             <Instagram className="w-6 h-6" />
    //           </Link>
    //           <Link href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
    //             <Twitter className="w-6 h-6" />
    //           </Link>
    //           <Link href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook">
    //             <Facebook className="w-6 h-6" />
    //           </Link>
    //           <Link href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
    //             <Linkedin className="w-6 h-6" />
    //           </Link>
    //           <Link href="https://youtube.com" className="hover:text-white transition-colors" aria-label="YouTube">
    //             <Youtube className="w-6 h-6" />
    //           </Link>
    //           <Link href="https://github.com" className="hover:text-white transition-colors" aria-label="GitHub">
    //             <Github className="w-6 h-6" />
    //           </Link>
    //         </div>
    //         <div className="mt-4">
    //           <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
    //           <div className="flex">
    //             <input
    //               type="email"
    //               placeholder="Your email"
    //               className="px-4 py-2 bg-slate-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary w-full"
    //             />
    //             <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
    //               Subscribe
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
    //       <p className="text-sm text-slate-400">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    //       <div className="flex space-x-4 mt-4 md:mt-0">
    //         <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
    //           Terms of Service
    //         </Link>
    //         <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
    //           Privacy Policy
    //         </Link>
    //         <Link href="/cookies" className="text-sm text-slate-400 hover:text-white transition-colors">
    //           Cookie Policy
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-muted py-12 px-4">
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
      </footer>
  )
}

