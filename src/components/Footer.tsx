import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-muted py-16 border-t border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
          <ul className="space-y-3">
            <li><Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</Link></li>
            <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            <li><span className="text-sm text-muted-foreground">Careers</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Support</h4>
          <ul className="space-y-3">
            <li><span className="text-sm text-muted-foreground">Help Center</span></li>
            <li><span className="text-sm text-muted-foreground">Safety</span></li>
            <li><span className="text-sm text-muted-foreground">Community</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><span className="text-sm text-muted-foreground">Privacy Policy</span></li>
            <li><span className="text-sm text-muted-foreground">Terms of Service</span></li>
            <li><span className="text-sm text-muted-foreground">Cookie Policy</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Hearth. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-muted-foreground opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-sm">Twitter</span>
          <span className="text-muted-foreground opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-sm">Instagram</span>
          <span className="text-muted-foreground opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-sm">Facebook</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
