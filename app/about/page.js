import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Our URL Shortener
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our URL shortener! Our platform provides a simple and efficient way to shorten long, cumbersome URLs into clean, manageable links. Whether you're sharing on social media, in emails, or anywhere else, our tool makes it easy to keep your links concise and professional.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Why Use Our Service?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Free and easy-to-use platform for everyone.</li>
          <li>Customizable short URLs to suit your branding.</li>
          <li>Fast and reliable performance with no unnecessary steps.</li>
          <li>Enhance click-through rates by creating memorable links.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We aim to make sharing links effortless and efficient. Our tool is designed with simplicity and user-friendliness in mind, allowing individuals and businesses alike to create, manage, and share links seamlessly.
        </p>
        <div className="text-center mt-10">
          <Link href={"/generate"}><button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
            Get Started
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
