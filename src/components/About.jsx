import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-600 text-white flex items-center justify-center px-4 py-10">
      <div className="bg-[#000000] max-w-3xl p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#00ADB5] mb-4">
          About Flag Quiz
        </h1>
        <p className="text-base leading-relaxed mb-3">
          Welcome to <span className="text-[#00ADB5] font-semibold">Flag Quiz</span> — a fun and interactive way to test your knowledge of world flags!
        </p>
        <p className="text-base leading-relaxed mb-3">
          This website is designed to help users learn flags from different countries through engaging quizzes and challenges. Whether you're a student, traveler, or just curious about geography, this platform offers a simple and enjoyable experience.
        </p>
        <p className="text-base leading-relaxed mb-3">
          Our goal is to make learning visual and exciting. With each quiz, you can improve your memory, track your progress, and challenge your friends!
        </p>
        <p className="text-base leading-relaxed mb-3">
          Built with passion and a love for learning, Flag Quiz aims to make geography fun for everyone.
        </p>
        <p className="text-base leading-relaxed">
          Have suggestions or feedback? We’d love to hear from you and make this platform even better!
        </p>
      </div>
    </div>
  );
};

export default About;
