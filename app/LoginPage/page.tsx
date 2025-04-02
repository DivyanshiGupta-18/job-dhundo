'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Handle window sizing after component mounts
  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateRandomPositions = () => {
    if (!isMounted) return {};

    const width = Math.random() * 200 + 50;
    const height = Math.random() * 200 + 50;
    const x = Math.random() * windowSize.width;
    const y = Math.random() * windowSize.height;

    return {
      width,
      height,
      x,
      y,
      xEnd: Math.random() * windowSize.width,
      yEnd: Math.random() * windowSize.height,
      duration: Math.random() * 20 + 10,
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements - only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => {
            const pos = generateRandomPositions();
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/10"
                style={{ width: pos.width, height: pos.height }}
                initial={{
                  x: pos.x,
                  y: pos.y,
                  opacity: 0.1,
                }}
                animate={{
                  x: [pos.x, pos.xEnd],
                  y: [pos.y, pos.yEnd],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: pos.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            );
          })}
        </div>
      )}

      <motion.div
        className="w-full max-w-md relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="flex justify-center my-10">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-blue-500 text-white p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Job-Dhundo</span>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex">
            <motion.button
              whileHover={{ backgroundColor: isSignIn ? 'rgb(59, 130, 246)' : 'rgb(243, 244, 246)' }}
              className={`w-1/2 py-4 text-center font-medium ${isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setIsSignIn(true)}
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: !isSignIn ? 'rgb(59, 130, 246)' : 'rgb(243, 244, 246)' }}
              className={`w-1/2 py-4 text-center font-medium ${!isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setIsSignIn(false)}
            >
              Register
            </motion.button>
          </div>

          <motion.div
            key={isSignIn ? 'signin' : 'register'}
            initial={{ opacity: 0, x: isSignIn ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              {isSignIn ? 'Sign in to your account' : 'Create your account'}
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {!isSignIn && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {isSignIn && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              )}

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isSignIn ? 'Sign in' : 'Create Account'}
                </motion.button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.67724 20.5C4.72764 20.5 1 15.7596 1 10C1 4.24037 4.72764 0 9.67724 0C12.5623 0 14.7837 1.30202 16.3996 3.1943L13.9924 5.91201C13.2389 5.02565 11.9509 4.02461 9.67724 4.02461C6.89 4.02461 4.72764 6.54348 4.72764 10C4.72764 13.4565 6.89 15.9754 9.67724 15.9754C12.3404 15.9754 13.5551 14.3716 13.9924 13.1661C14.2143 12.5761 14.3292 11.8847 14.3292 11.1933H9.67724V7.42283H19.2542C19.3691 8.01485 19.4307 8.63997 19.4307 9.32139C19.4307 12.2426 18.5003 14.9337 16.4612 16.7246C14.8454 18.4298 12.5623 20.5 9.67724 20.5Z" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="mt-6 text-center text-sm text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          By signing in, you agree to our{' '}
          <Link href="#" className="font-medium text-blue-100 hover:text-white">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="font-medium text-blue-100 hover:text-white">
            Privacy Policy
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginPage;