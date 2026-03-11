import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div>
          <h2 className="text-white text-xl font-bold mb-3">Bizarez Tech</h2>
          <p className="text-sm">
            Your all-in-one PDF toolkit — merge, rotate, split, and more.
          </p>
        </div>

        
        <div className="flex flex-col items-end text-right">
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>Email: hajizakaria650@gmail.com</p>
          <p>Phone: +254 714 275 034</p>
          <div className="flex gap-4 mt-3">
            <a
              href="https://linkedin.com/in/bizarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © 2026 Bizarez Tech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
