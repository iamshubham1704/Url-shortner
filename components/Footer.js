import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p className="text-lg">
        &copy; {new Date().getFullYear()} Shubham Solanki. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
