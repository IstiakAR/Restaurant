import homeImage from './assests/home2.jpg';
import './css/home.css';

export default function Home() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="home">
            <div class="hero-container">
                <img src="${homeImage}" alt="Restaurant Image" class="background-image">
                <div class="text-overlay">
                    <h1>Welcome to Our Restaurant</h1>
                    <p>Experience the best dining experience with us.</p>
                </div>
            </div>
        </div>
    `;
}