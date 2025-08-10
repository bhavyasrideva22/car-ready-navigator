import { Car, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-automotive-steel text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">AutoSkills Assessment</div>
                <div className="text-sm text-white/70">Automotive Career Readiness Platform</div>
              </div>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Comprehensive assessment platform helping aspiring automotive design engineers 
              understand their readiness and chart their career path with confidence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Assessment Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sample Questions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Learning Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/70 text-sm">
              © 2024 AutoSkills Assessment. All rights reserved.
            </p>
            <p className="text-white/70 text-sm mt-4 md:mt-0">
              Built with precision for automotive excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};