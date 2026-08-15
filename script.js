// =========================================================
// MAKKAH LAUNDRY SERVICE
// FINAL SCRIPT.JS
// =========================================================

"use strict";

const WHATSAPP_NUMBER = "966550865064";


// =========================================================
// PAGE LOAD
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Makkah Laundry Service Loaded");


    // =====================================================
    // MOBILE MENU
    // =====================================================

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = mainNav.classList.toggle("active");

            if (isOpen) {

                menuToggle.textContent = "✕";
                menuToggle.setAttribute("aria-label", "Close Menu");

                document.body.classList.add("menu-open");

            } else {

                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Open Menu");

                document.body.classList.remove("menu-open");

            }

        });


        // Close menu after clicking navigation link

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Open Menu");

                document.body.classList.remove("menu-open");

            });

        });

    }


    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (!targetID || targetID === "#") {
                return;
            }

            const target = document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // =====================================================
    // BOOKING FORM → WHATSAPP
    // =====================================================

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const fullName =
                document.getElementById("fullName")?.value.trim() || "";

            const hotel =
                document.getElementById("hotelName")?.value || "";

            const roomInput =
                this.querySelector('input[placeholder="Room Number"]');

            const phoneInput =
                this.querySelector('input[placeholder="Mobile Number"]');

            const noteInput =
                this.querySelector("textarea");


            const room =
                roomInput ? roomInput.value.trim() : "";

            const phone =
                phoneInput ? phoneInput.value.trim() : "";

            const service =
                document.getElementById("service")?.value || "";

            const speed =
                document.getElementById("serviceSpeed")?.value || "";

            const pickupDate =
                document.getElementById("pickupDate")?.value || "";

            const pickupTime =
                document.getElementById("pickupTime")?.value || "";

            const clothes =
                document.getElementById("clothesType")?.value || "";

            const quantity =
                document.getElementById("clothQty")?.value || "1";

            const note =
                noteInput ? noteInput.value.trim() : "";


            const message =
`🧺 *NEW LAUNDRY ORDER*

👤 Name: ${fullName}

🏨 Hotel: ${hotel}

🚪 Room: ${room}

📱 Customer Phone: ${phone}

🧼 Service: ${service}

⚡ Speed: ${speed}

📅 Pickup Date: ${pickupDate}

🕒 Pickup Time: ${pickupTime}

👕 Clothes: ${clothes}

🔢 Quantity: ${quantity}

📝 Special Instructions:
${note || "None"}`;


            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(message);


            window.open(whatsappURL, "_blank");

        });

    }


    // =====================================================
    // ENGLISH / ARABIC
    // =====================================================

    const langBtn = document.getElementById("langBtn");

    if (langBtn) {

        let arabicMode = false;


        langBtn.addEventListener("click", function () {

            const heroTitle =
                document.querySelector(".hero h1");

            const heroText =
                document.querySelector(".hero p");


            if (!arabicMode) {

                if (heroTitle) {

                    heroTitle.innerHTML =
                        "خدمة غسيل الملابس بمكة<br>" +
                        "توصيل لجميع الفنادق القريبة من برج الساعة";

                }


                if (heroText) {

                    heroText.innerHTML =
                        "غسيل • كي • تنظيف جاف • استلام وتوصيل";

                }


                langBtn.textContent = "English";

                document.documentElement.lang = "ar";

                document.body.dir = "rtl";

                arabicMode = true;

            } else {

                if (heroTitle) {

                    heroTitle.innerHTML =
                        "Makkah Laundry Service Near Makkah Clock Tower";

                }


                if (heroText) {

                    heroText.innerHTML =
                        "Fast Laundry Pickup & Delivery • Wash & Fold • Ironing • Dry Cleaning";

                }


                langBtn.textContent = "العربية";

                document.documentElement.lang = "en";

                document.body.dir = "ltr";

                arabicMode = false;

            }

        });

    }


    // =====================================================
    // DARK MODE
    // =====================================================

    const darkBtn =
        document.getElementById("darkModeBtn");


    if (darkBtn) {

        darkBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");


            if (
                document.body.classList.contains("dark-mode")
            ) {

                darkBtn.textContent = "☀️";

            } else {

                darkBtn.textContent = "🌙";

            }

        });

    }


    // =====================================================
    // SET MINIMUM PICKUP DATE = TODAY
    // =====================================================

    const pickupDate =
        document.getElementById("pickupDate");


    if (pickupDate) {

        const today =
            new Date().toISOString().split("T")[0];

        pickupDate.min = today;

    }

});


// ===============================
// Price Calculator
// ===============================
function calculatePrice() {

    const serviceElement = document.getElementById("serviceType");
    const quantityElement = document.getElementById("quantity");
    const totalElement = document.getElementById("totalPrice");

    if (!serviceElement || !quantityElement || !totalElement) {
        console.error("Calculator elements not found.");
        return;
    }

    const price = Number(serviceElement.value);
    const quantity = Number(quantityElement.value);

    if (!Number.isFinite(quantity) || quantity < 1) {
        totalElement.textContent = "Please enter a valid quantity.";
        return;
    }

    const total = price * quantity;

    totalElement.textContent = "Total: " + total + " SAR";
}


// =========================================================
// ORDER TRACKING
// =========================================================

function trackOrder() {

    const orderInput =
        document.getElementById("orderID");

    const result =
        document.getElementById("trackingResult");


    if (!orderInput || !result) {

        return;

    }


    const orderID =
        orderInput.value
            .trim()
            .toUpperCase();


    if (!orderID) {

        result.textContent =
            "Please enter your Order ID.";

        return;

    }


    // Demo tracking information

    if (orderID === "MLS-1001") {

        result.textContent =
            "✅ Ready for Delivery";

    }

    else if (orderID === "MLS-1002") {

        result.textContent =
            "🧺 Washing in Progress";

    }

    else if (orderID === "MLS-1003") {

        result.textContent =
            "🚚 Out for Delivery";

    }

    else {

        result.textContent =
            "❌ Order ID Not Found";

    }

}


// =========================================================
// SERVICE WORKER
// =========================================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker
            .register("service-worker.js")
            .then(function () {

                console.log(
                    "Service Worker registered successfully."
                );

            })
            .catch(function (error) {

                console.log(
                    "Service Worker registration failed:",
                    error
                );

            });

    });

}

