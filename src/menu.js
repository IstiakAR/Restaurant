import './css/menu.css';

export default function Menu() {
    const content = document.getElementById('content');
    
    const menuData = {
        appetizers: [
            { name: "Bruschetta", description: "Toasted bread topped with tomatoes, fresh basil, and mozzarella", price: "$9" },
            { name: "Calamari", description: "Crispy fried calamari served with marinara sauce", price: "$12" },
            { name: "Mushrooms", description: "Baked mushroom caps filled with herb stuffing", price: "$10" }
        ],
        soupsAndSalads: [
            { name: "Italian Wedding Soup", description: "Traditional soup with mini meatballs and spinach", price: "$7" },
            { name: "Caesar Salad", description: "Crisp romaine, croutons, and parmesan", price: "$9" }
        ],
        mainCourses: [
            { name: "Filet Mignon", description: "8oz center cut tenderloin with red wine reduction", price: "$34" },
            { name: "Spaghetti Carbonara", description: "Classic pasta with pancetta and parmesan", price: "$18" },
            { name: "Grilled Salmon", description: "Fresh salmon with lemon butter sauce", price: "$26" }
        ],
        desserts: [
            { name: "Tiramisu", description: "Classic Italian dessert with coffee-soaked ladyfingers", price: "$8" },
            { name: "Chocolate Lava Cake", description: "Warm cake with a molten center and vanilla gelato", price: "$9" }
        ]
    };

    const generateMenuItems = (items) => {
        return items.map(item => `
            <div class="menu-item">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="item-price">${item.price}</div>
            </div>
        `).join('');
    };

    content.innerHTML = `
        <div class="menu-book">
            <div class="menu-page left-page">
                <div class="page-content">
                    <h1 class="menu-title">Our Menu</h1>
                    
                    <div class="menu-section">
                        <h2>Appetizers</h2>
                        ${generateMenuItems(menuData.appetizers)}
                    </div>
                    
                    <div class="menu-section">
                        <h2>Soups & Salads</h2>
                        ${generateMenuItems(menuData.soupsAndSalads)}
                    </div>
                </div>
            </div>
            
            <div class="menu-page right-page">
                <div class="page-content">
                    <div class="menu-section">
                        <h2>Main Courses</h2>
                        ${generateMenuItems(menuData.mainCourses)}
                    </div>
                    
                    <div class="menu-section">
                        <h2>Desserts</h2>
                        ${generateMenuItems(menuData.desserts)}
                    </div>
                </div>
            </div>
        </div>
    `;
}