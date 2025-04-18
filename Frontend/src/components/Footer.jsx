

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// function Footer({ theme }) {
//   // Determine icon color based on the theme
//   const iconColor = theme === "dark" ? "black" : "white"; // White for dark theme, black for light theme

//   return (
//     <div>
//       <hr />
//       <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
//         <nav className="grid grid-flow-col gap-4">
//           <Link to="/about" className="link link-hover">
//             About us
//           </Link>
//           <Link to="/contact" className="link link-hover">
//             Contact
//           </Link>
//         </nav>
//         <nav>
//           <div className="grid grid-flow-col gap-4">
//             {/* Twitter Icon */}
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://x.com/GauriSi25449202"
//             >
//               <FaTwitter size={24} color={iconColor} />
//             </a>
//             {/* LinkedIn Icon */}
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://www.linkedin.com/in/gauri-singhal-876b41254/"
//             >
//               <FaLinkedin size={24} color={iconColor} />
//             </a>
//             {/* Instagram Icon */}
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://www.instagram.com/its_gaurisinghal/"
//             >
//               <FaInstagram size={24} color={iconColor} />
//             </a>
//           </div>
//         </nav>
//         <aside>
//           <p>Made by Gauri Singhal</p>
//         </aside>
//       </footer>
//     </div>
//   );
// }

// export default Footer;


import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme ? savedTheme : "light");
  }, []);

  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href="
            https://x.com/ArpitaGarg54321?s=08 ">
              <FaTwitter
                size={24}
                className={`${
                  theme === "dark" ? "white" : "black"
                }`}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/arpita-garg-035931263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <FaLinkedin
                size={24}
                className={`${
                  theme === "dark" ? "white" : "black"
                }`}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/arpi_30_?igsh=MW9rbHl4dmNqcW5paA=="
            >
              <FaInstagram
                size={24}
                className={`${
                  theme === "dark" ? "white" : "black"
                }`}
              />
            </a>
          </div>
        </nav>
        <aside>
          <p>Made by Arpita Garg</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
