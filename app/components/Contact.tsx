import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className='pt-7'>
    <div className=" w-full max-w-7xl px-[clamp(8px,10%,24px)] pu-5 mx-auto bg-transparent rounded-none pb-9">
      <h2 className="text-2xl font-bold text-WhiteCustom mb-6">Contact Me:</h2>
      
      <div className="flex flex-col space-y-4 text-WhiteCustom">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/yassine-bibi-b8936b252" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-3 hover:text-blue-600"
        >
          <FaLinkedin className="text-2xl" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/YassineBibi02" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-3 hover:text-gray-400"
        >
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>

        {/* Email */}
        <a 
          href="mailto:yassinebibi2002@gmail.com" 
          className="flex items-center space-x-3 hover:text-red-500"
        >
          <FaEnvelope className="text-2xl" />
          <span>yassinebibi2002@gmail.com</span>
        </a>

        {/* Phone */}
        <a 
          href="tel:+4917670548067" 
          className="flex items-center space-x-3 hover:text-green-600"
        >
          <FaPhone className="text-2xl" />
          <span>+49 176 70548067</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactInfo;