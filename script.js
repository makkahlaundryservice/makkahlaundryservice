// Makkah Laundry Service

console.log("Makkah Laundry Service Loaded");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    console.log(link.innerText + " clicked");
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

if (target) {
  target.scrollIntoView({
    behavior: "smooth"
  });
}
  });
});
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  
  bookingForm.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    const name = this.querySelector('input[placeholder="Full Name"]').value;
    const hotel = document.getElementById("hotelName").value;
    const room = this.querySelector('input[placeholder="Room Number"]').value;
    const phone = this.querySelector('input[placeholder="Mobile Number"]').value;
    const service = document.getElementById("service").value;
    const serviceSpeed = document.getElementById("serviceSpeed").value;
    const pickupDate = document.getElementById("pickupDate").value;
const pickupTime = document.getElementById("pickupTime").value;
const clothesType = document.getElementById("clothesType").value;
const clothQty = document.getElementById("clothQty").value;
    const note = this.querySelector("textarea").value;
    
    const message =
      `🧺 *New Laundry Order*

👤 Name: ${name}

🏨 Hotel: ${hotel}

🚪 Room: ${room}

📱 Phone: ${phone}

🧼 Service: ${service}
⚡ Speed: ${serviceSpeed}
📅 Pickup Date: ${pickupDate}

🕒 Pickup Time: ${pickupTime}
👕 Clothes: ${clothesType}

🔢 Quantity: ${clothQty}

📝 Note: ${note}`;
    
    window.open(
      `https://wa.me/966575563613?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    
  });
  
}
const langBtn = document.getElementById("langBtn");

if (langBtn) {

let arabic = false;

langBtn.addEventListener("click", () => {
  
  if (!arabic) {
    
    document.querySelector(".hero h1").innerHTML =
      "خدمة غسيل الملابس بمكة<br>توصيل لجميع الفنادق القريبة من برج الساعة";
    
    document.querySelector(".hero p").innerHTML =
      "غسيل • كي • تنظيف جاف • استلام وتوصيل";
    
    langBtn.innerHTML = "English";
    
    arabic = true;
    
  } else {
    
    document.querySelector(".hero h1").innerHTML =
      "Professional Laundry Service<br>Near Makkah Clock Tower";
    
    document.querySelector(".hero p").innerHTML =
      "Fast Pickup • Hotel Delivery • Ironing • Dry Cleaning";
    
    langBtn.innerHTML = "العربية";
    
    arabic = false;
    
  }
  
});
}
function calculatePrice() {
  
  const service =
    parseFloat(document.getElementById("serviceType").value);
  
  const qty =
    parseInt(document.getElementById("quantity").value);
  
  const total = service * qty;
  
  document.getElementById("totalPrice").innerHTML =
    "Total: " + total + " SAR";
  
}
function trackOrder() {
  
  const id =
    document.getElementById("orderID").value.trim();
  
  const result =
    document.getElementById("trackingResult");
  
  if (id === "MLS-1001") {
    
    result.innerHTML =
      "✅ Ready for Delivery";
    
  } else if (id === "MLS-1002") {
    
    result.innerHTML =
      "🧺 Washing in Progress";
    
  } else if (id === "MLS-1003") {
    
    result.innerHTML =
      "🚚 Out for Delivery";
    
  } else {
    
    result.innerHTML =
      "❌ Order ID Not Found";
    
  }
  
}
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
  
  darkBtn.addEventListener("click", () => {
    
    document.body.classList.toggle("dark");
    
    if (document.body.classList.contains("dark")) {
      darkBtn.innerHTML = "☀️";
    } else {
      darkBtn.innerHTML = "🌙";
    }
    
  });
  
}