

// --- Component: Footer ---
const Footer = () => {
    return (
      <footer className="bg-dark-bg text-gray-400 py-10 text-center font-poppins border-t border-primary-green/20">
        <div className="container mx-auto px-4">
          <p className="text-lg font-bold text-primary-green mb-4">Collegetips.in 🐾</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-light-text transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-light-text transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-light-text transition-colors duration-300">Support</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Collegetips.in. All rights reserved. Made with love for all paws. ❤️</p>
        </div>
      </footer>
    );
  };
  export default Footer;