'use client';

import { useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Calendar, 
  ArrowUpRight, 
  ArrowRight, 
  Globe, 
  Dribbble, 
  Instagram, 
  Twitter 
} from 'lucide-react';

export default function Home() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateAnimation = () => {
      if (!imgRef.current) return;
      const scrollPx = window.scrollY;
      const animationDistance = window.innerHeight * 0.55; 
      
      let rawProgress = scrollPx / animationDistance;
      let progress = Math.max(0, Math.min(1, rawProgress));
      
      const smoothProgress = 1 - Math.pow(1 - progress, 3);
      let curveProgress = Math.pow(1 - progress, 1.5); 
      
      imgRef.current.style.setProperty('--progress', smoothProgress.toString());
      imgRef.current.style.setProperty('--curve', `${3 * curveProgress}rem`); 
      imgRef.current.style.setProperty('--video-scale', (1.15 - (0.15 * smoothProgress)).toString()); 
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateAnimation();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateAnimation(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <nav>
        <div className="logo">EduLink BHT</div>
        <div className="nav-right">
          <div className="nav-links-group">
            <a href="#" className="nav-links">About</a>
            <a href="#" className="nav-links">Policy</a>
            <a href="#" className="nav-links">Membership</a>
            <a href="#" className="nav-links">Events</a>
            <a href="#" className="nav-links">Blog</a>
            <a href="#" className="nav-links">Research &nearr;</a>
          </div>
          <button className="split-button">
            <span className="sb-text">Try EduLink</span>
            <div className="sb-divider"></div>
            <div className="sb-icon">
              <ChevronDown />
            </div>
          </button>
        </div>
      </nav>

      <header className="hero">
        <h1 className="serif-text">Empowering Youth and Education</h1>
        <p>The only social media platform that promotes education through fun content, helping young minds and all age groups navigate the modern world.</p>
        <button className="cta-button">Discover Opportunities</button>
      </header>

      <section className="image-section">
        <div className="image-container" id="expandingImage" ref={imgRef}>
          <video className="bg-video" autoPlay loop muted playsInline>
            <source src="https://res.cloudinary.com/dcpuyfslg/video/upload/v1773725540/206779_cylgz0.mp4" type="video/mp4" />
          </video>
          <div className="inner-content">
            {/* Using standard img tags for quick transition, Next.js Image component recommended for later optimization */}
            <img src="https://i.imghippo.com/files/Aj1827DWQ.png" alt="EduLink Logo" className="inside-logo" />
            <p className="tagline">Make a change, be the change.</p>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-content">
          <div className="info-left">
            <h2 className="info-heading">
              Learn from the 
              <span className="avatar-group">
                <img src="https://i.pravatar.cc/100?img=11" alt="Expert 1" />
                <img src="https://i.pravatar.cc/100?img=12" alt="Expert 2" />
                <img src="https://i.pravatar.cc/100?img=13" alt="Expert 3" />
              </span> 
              experts and <br />share your opinion.
            </h2>
            
            <p className="info-subtext">
              Growing as a community matters, so does individually.
            </p>

            <a href="#" className="split-button">
              <span className="sb-text">Book a Lesson</span>
              <div className="sb-divider"></div>
              <div className="sb-icon">
                <Calendar />
              </div>
            </a>
          </div>

          <div className="info-right">
            <div className="service-card">
              <h4>Backstory</h4>
              <p>Learn about the journey of edulink.</p>
              <div className="card-arrow">
                <ArrowUpRight />
              </div>
            </div>

            <div className="service-card">
              <h4>Development</h4>
              <p>Lessons from the mistakes.</p>
              <div className="card-arrow">
                <ArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="trusted-text">Working with <strong>100+</strong> students</div>
        <div className="logos-container">
          <div className="logo-item" style={{ fontWeight: 600 }}>The Royal Academy</div>
          <div className="logo-item" style={{ fontWeight: 500, fontSize: '1.1rem' }}>Druk Gyalpo's Institute</div>
          <div className="logo-item" style={{ fontWeight: 700 }}>Newton</div>
          <div className="logo-item" style={{ fontWeight: 600, fontSize: '1.2rem' }}>Gravitas</div>
          <div className="logo-item" style={{ fontWeight: 800, fontSize: '1.05rem' }}>AquaReclaim</div>
        </div>
      </section>

      <div className="footer-wrapper">
        <footer className="footer-card">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="https://i.imghippo.com/files/Aj1827DWQ.png" alt="Icon" />
              Gravitas Crop
            </div>
            <h3>Empowering minds<br /><span>for a better future.</span></h3>
            
            <p className="newsletter-label">Subscribe to our newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="newsletter-btn">
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className="footer-links-col">
            <a href="#">Our Services +</a>
            <a href="#">Projects</a>
            <a href="#">Our Process</a>
            <a href="#">Referral Program</a>
          </div>

          <div className="footer-links-col">
            <a href="#">About Us</a>
            <a href="#">Resources</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Web">
              <Globe />
            </a>
            <a href="#" className="social-icon" aria-label="Dribbble">
              <Dribbble />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="social-icon" aria-label="X">
              <Twitter />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
