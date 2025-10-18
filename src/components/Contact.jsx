import React from "react";
import { FaGithub, FaGlobe, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-600 text-white flex items-center justify-center px-4 py-10">
      <div className="bg-[#000000] max-w-2xl w-full p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#00ADB5] mb-6">
          Contact & Connect
        </h1>
        <p className="text-base leading-relaxed mb-8">
          Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="https://github.com/Rashid-Massan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#1E1E2F] hover:bg-[#00ADB5] hover:text-[#000000] transition py-3 px-5 rounded-md"
          >
            <FaGithub size={22} /> GitHub
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#1E1E2F] hover:bg-[#00ADB5] hover:text-[#000000] transition py-3 px-5 rounded-md"
          >
            <FaGlobe size={20} /> Portfolio (coming soon!)
          </a>

          <a
            href="https://instagram.com/notaprogrammerlol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#1E1E2F] hover:bg-[#00ADB5] hover:text-[#000000] transition py-3 px-5 rounded-md"
            >
            <FaInstagram size={20} /> Instagram
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rashidmassan649@gmail.com"
            target="_blank"
            className="flex items-center justify-center gap-3 bg-[#1E1E2F] hover:bg-[#00ADB5] hover:text-[#000000] transition py-3 px-5 rounded-md"
          >
            <FaEnvelope size={20} /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
