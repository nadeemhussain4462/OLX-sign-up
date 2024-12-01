// Open the Sign-Up page as a pop-up
document.querySelector(".signUp-btn").addEventListener("click", () => {
    window.open(
      "signup.html", // Path to your sign-up page
      "SignUp",
      "width=500,height=500,top=200,left=450"
    );
  });
  


// Dummy data for items
const itemsData = {
    "mobile-phones": [
        { name: "iPhone 14", price: "$1200", time: "1 day ago", image: "image/bike1.jfif"},
        { name: "Samsung Galaxy S22", price: "$1000", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Galaxy+S22" },
        { name: "OnePlus 11", price: "$800", time: "2 days ago", image: "https://via.placeholder.com/300x200?text=OnePlus+11" },
        { name: "Google Pixel 7", price: "$900", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=Pixel+7" }
    ],
    cars: [
        { name: "Toyota Corolla", price: "$15000", time: "2 days ago", image: "image/car1.jfif" },
        { name: "Honda Civic", price: "$18000", time: "5 hours ago", image: "image/car2.jfif" },
        { name: "Suzuki Mehran", price: "$7000", time: "1 day ago", image: "image/car3.jfif" },
        { name: "Kia Sportage", price: "$25000", time: "3 hours ago", image: "image/car4.jfif" }
    ],
    motorcycles: [
        { name: "Yamaha Red", price: "$12000", time: "1 hour ago", image: "image/bike1.jfif" },
        { name: "Honda CG1000", price: "$800", time: "2 days ago", image: "image/bike2.jfif" },
        { name: "Yamaha Yellow", price: "$12000", time: "1 hour ago", image: "image/bike3.jfif" },
        { name: "Honda Bullet ", price: "$1800", time: "2 days ago", image: "image/bike4.jfif" }
    ],
    houses: [
        { name: "3 Bed Apartment", price: "$120,000", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=3+Bed+Apartment" },
        { name: "Villa in Karachi", price: "$300,000", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Villa+in+Karachi" },
        { name: "3 Bed Apartment", price: "$120,000", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=3+Bed+Apartment" },
        { name: "Villa in Karachi", price: "$300,000", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Villa+in+Karachi" }
    ],
    "video-audios": [
        { name: "Sony Headphones", price: "$250", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Sony+Headphones" },
        { name: "Bluetooth Speaker", price: "$150", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Bluetooth+Speaker" },
        { name: "Sony Headphones", price: "$250", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Sony+Headphones" },
        { name: "Bluetooth Speaker", price: "$150", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Bluetooth+Speaker" },
    ],
    tablets: [
        { name: "iPad Pro", price: "$1000", time: "2 hours ago", image: "https://via.placeholder.com/300x200?text=iPad+Pro" },
        { name: "Samsung Galaxy Tab", price: "$700", time: "3 days ago", image: "https://via.placeholder.com/300x200?text=Galaxy+Tab" },
        { name: "iPad Pro", price: "$1000", time: "2 hours ago", image: "https://via.placeholder.com/300x200?text=iPad+Pro" },
        { name: "Samsung Galaxy Tab", price: "$700", time: "3 days ago", image: "https://via.placeholder.com/300x200?text=Galaxy+Tab" },
    ],
    "land-plots": [
        { name: "5 Marla Plot", price: "$15,000", time: "4 days ago", image: "https://via.placeholder.com/300x200?text=5+Marla+Plot" },
        { name: "10 Marla Plot", price: "$25,000", time: "6 hours ago", image: "https://via.placeholder.com/300x200?text=10+Marla+Plot" },
        { name: "5 Marla Plot", price: "$15,000", time: "4 days ago", image: "https://via.placeholder.com/300x200?text=5+Marla+Plot" },
        { name: "10 Marla Plot", price: "$25,000", time: "6 hours ago", image: "https://via.placeholder.com/300x200?text=10+Marla+Plot" },
    ]
    
};


// Function to display items
function displayItems(category) {
    const cardContainer = document.getElementById("item-cards");
    cardContainer.innerHTML = ""; // Clear previous cards

    if (itemsData[category]) {
        itemsData[category].forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Listed: ${item.time}</p>
                </div>
                <div class="card-actions">
                    <button>Add to Cart</button>
                    <button>Wishlist</button>
                </div>
            `;

            cardContainer.appendChild(card);
        });
    }
}

// Event listener for category clicks
document.getElementById("category-list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const category = event.target.getAttribute("data-category");
        displayItems(category);
    }
});











// // Redirect to a mock Sign-Up page and set dummy credentials in local storage
// document.querySelector(".signUp-btn").addEventListener("click", () => {
//     // Simulate Sign-Up process
//     localStorage.setItem("email", "hoteleyenadeem@gmail.com");
//     localStorage.setItem("password", "Nadeem4462");
//     // alert("Dummy credentials saved. Redirecting to Sign-Up page...");
//     // Redirect to a simulated Sign-Up page (you can replace the URL)
//     window.location.href = "signup.html";
//   });
  
  // Handle Login functionality
  document.querySelector(".login-btn").addEventListener("click", () => {
    // Prompt user for email and password
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");
  
    // Retrieve dummy credentials from local storage
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
  
    // Validate credentials
    if (email === storedEmail && password === storedPassword) {
      // If credentials match, show success pop-up
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome to OLX Clone!",
      });
    } else {
      // If credentials do not match, show error pop-up
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
      });
    }
  });
  