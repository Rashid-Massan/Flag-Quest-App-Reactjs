import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#1F1F2E] text-white py-4 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="font-press2 text-lg tracking-wider cursor-default">
          🌍 Flag Quest
        </div>
        <div className="flex gap-4 text-sm text-[#AAAAAA]">
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className="text-xs text-[#777777] cursor-default">
          © {new Date().getFullYear()} Flag Quest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
