import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-f1-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-f1-red p-2 rounded-lg">
                <Flag className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">F1 Hub</h3>
                <p className="text-sm text-f1-gray-400">Formula 1 Central</p>
              </div>
            </div>
            <p className="text-f1-gray-400 text-sm">
              Your ultimate destination for Formula 1 news, results, and live updates. 
              Stay connected with the world of motorsport.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/races" className="text-f1-gray-400 hover:text-white transition-colors">Race Calendar</Link></li>
              <li><Link to="/drivers" className="text-f1-gray-400 hover:text-white transition-colors">Drivers</Link></li>
              <li><Link to="/teams" className="text-f1-gray-400 hover:text-white transition-colors">Teams</Link></li>
              <li><Link to="/standings" className="text-f1-gray-400 hover:text-white transition-colors">Championship</Link></li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Content</h4>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-f1-gray-400 hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/gallery" className="text-f1-gray-400 hover:text-white transition-colors">Photo Gallery</Link></li>
              <li><a href="#" className="text-f1-gray-400 hover:text-white transition-colors">Race Highlights</a></li>
              <li><a href="#" className="text-f1-gray-400 hover:text-white transition-colors">Statistics</a></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-f1-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-f1-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-f1-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-f1-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-f1-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-f1-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-f1-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-f1-gray-800 mt-8 pt-8 text-center">
          <p className="text-f1-gray-400 text-sm">
            © 2024 F1 Hub. All rights reserved. This is an unofficial Formula 1 fan website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
