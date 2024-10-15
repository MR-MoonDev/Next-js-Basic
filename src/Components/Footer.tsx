import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        {/* About Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are dedicated to providing the best online learning experience, 
            offering a range of courses to help you grow in your career.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Courses</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="flex  flex-col ">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Phone: 03123906818
          </p>
          <p className="text-gray-400">
            Email: muhammadmuneebulraza@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
