import './css/about.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt, faLocationDot, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faLinkedin, faTwitter, faInstagram, faAt, faLocationDot, faPhone, faClock);
dom.watch();

export default function About() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="about-container">
            <div class="about-header">
                <h1>About Us</h1>
                <p class="tagline">Serving exceptional cuisine since 1995</p>
            </div>
            
            <div class="about-content">
                <div class="about-info">
                    <div class="about-description">
                        <h2>Our Story</h2>
                        <p>Founded in the heart of Paris, our restaurant has been serving authentic cuisine for over 25 years. 
                        Our commitment to quality ingredients and exceptional service has made us a beloved destination for locals and tourists alike.</p>
                        
                        <p>Our team of passionate chefs crafts each dish with care, blending traditional techniques with modern innovation.</p>
                    </div>
                    
                    <div class="hours-section">
                        <h2>Hours</h2>
                        <div class="hours-item">
                            <span class="day">Monday - Thursday</span>
                            <span class="time">11:00 AM - 10:00 PM</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">Friday - Saturday</span>
                            <span class="time">11:00 AM - 11:00 PM</span>
                        </div>
                        <div class="hours-item">
                            <span class="day">Sunday</span>
                            <span class="time">12:00 PM - 9:00 PM</span>
                        </div>
                    </div>
                </div>
                
                <div class="contact-section">
                    <h2>Contact Information</h2>
                    <div class="contact-item">
                        <i class="fa-solid fa-phone"></i>
                        <span>+33 9 07 45 12 65</span>
                    </div>
                    <div class="contact-item">
                        <i class="fa-solid fa-at"></i>
                        <span>contact@restaurant.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>42 rue Moulbert, 75016 Paris</span>
                    </div>
                    
                    <div class="social-section">
                        <h3>Follow Us</h3>
                        <div class="social-icons">
                            <a href="https://www.facebook.com" target="_blank" class="social-icon">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" class="social-icon">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" class="social-icon">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}