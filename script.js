// =========================================================
// MAKKAH LAUNDRY SERVICE
// BILINGUAL ENGLISH / ARABIC SCRIPT
// =========================================================

"use strict";

const WHATSAPP_NUMBER = "966550865064";


// =========================================================
// TRANSLATIONS
// =========================================================

const translations = {

    en: {

        // Top bar
        support: "🟢 Laundry Support Available",
        whatsapp: "WhatsApp",

        // Navigation
        home: "Home",
        services: "Services",
        pricing: "Pricing",
        bookPickup: "Book Pickup",
        hotels: "Hotels",
        faq: "FAQ",
        contact: "Contact",
        orderNow: "Order Now",

        // Hero
        eyebrow: "Laundry Pickup & Delivery in Makkah",
        heroTitle: "Makkah Laundry Service Near Makkah Clock Tower",
        heroText:
            "Fast and convenient laundry pickup and delivery in Makkah for pilgrims, visitors, residents and hotel guests.",
        heroServices:
            "Wash & Fold • Ironing • Dry Cleaning • Hotel Pickup & Delivery",
        orderWhatsApp: "Order on WhatsApp",
        callNow: "Call Now",
        locationNote:
            "📍 Serving Makkah, including central Makkah and areas around Makkah Clock Tower, subject to pickup availability.",

        // Services
        servicesTitle: "Laundry Services in Makkah",
        servicesText:
            "Convenient laundry solutions for hotel guests, pilgrims, visitors and residents in Makkah.",

        washFold: "Wash & Fold",
        washFoldText:
            "Professional washing and folding for everyday clothes.",

        ironing: "Ironing Service",
        ironingText:
            "Clean and neat ironing for thobes, shirts, trousers and other clothes.",

        dryCleaning: "Dry Cleaning",
        dryCleaningText:
            "Dry cleaning service for suitable garments and special clothing.",

        hotelPickup: "Hotel Pickup & Delivery",
        hotelPickupText:
            "We collect your laundry from selected hotels and locations and return it after service.",

        // SEO
        seoTitle: "Laundry Near Me in Makkah – Pickup & Delivery",
        seoText1:
            "Looking for a reliable laundry near me in Makkah? Makkah Laundry Service provides convenient laundry pickup and delivery for hotel guests, pilgrims, visitors and residents.",
        seoText2:
            "Our service includes hotel laundry in Makkah, wash and fold, clothes ironing, dry cleaning and laundry pickup and delivery.",
        seoHotelTitle:
            "Hotel Laundry Near Makkah Clock Tower",
        seoHotelText:
            "If you are staying near the Makkah Clock Tower or central Makkah, you can contact us on WhatsApp to check pickup availability.",
        seoPilgrimTitle:
            "Laundry Service for Umrah Pilgrims",
        seoPilgrimText:
            "Pilgrims often need clean clothes during their stay in Makkah. Our laundry pickup and delivery service makes it easier to send your clothes for washing, ironing or dry cleaning.",
        seoOrderTitle:
            "How to Order Laundry in Makkah",
        seoOrderText:
            "Simply contact us on WhatsApp, tell us your hotel or location, room number and laundry requirement. We will confirm pickup availability.",

        // Pricing
        pricingTitle: "Laundry Prices in Makkah",
        pricingText:
            "Simple starting prices. Final price may depend on quantity, garment type and service requirements.",

        from15: "From 15 SAR per bag",
        from5: "From 5 SAR per item",
        from12: "From 12 SAR per item",
        bookNow: "Book Now",

        // About
        aboutTitle: "About Makkah Laundry Service",
        aboutText1:
            "Makkah Laundry Service is a convenient laundry pickup and delivery service in Makkah.",
        aboutText2:
            "We help hotel guests, pilgrims, visitors and residents arrange laundry collection and delivery without needing to search for a laundry shop.",
        aboutText3:
            "Our services include wash & fold, ironing, dry cleaning and hotel laundry pickup and delivery.",
        checkAvailability: "Check Pickup Availability",

        // Booking
        bookingTitle: "Book Laundry Pickup in Makkah",
        bookingText:
            "Fill in your details and send your laundry request through WhatsApp.",

        fullName: "Full Name",
        fullNamePlaceholder: "Your name",

        hotelLocation: "Hotel / Location",
        selectHotel: "Select Hotel / Location",

        roomNumber: "Room Number",
        roomPlaceholder: "Room number",

        phone: "WhatsApp / Phone",
        phonePlaceholder: "+966...",

        service: "Service",
        selectService: "Select Service",

        washFoldOption: "Wash & Fold – From 15 SAR/bag",
        ironingOption: "Ironing – From 5 SAR/item",
        dryCleaningOption: "Dry Cleaning – From 12 SAR/item",
        washIronOption: "Wash & Fold + Ironing",

        serviceSpeed: "Service Speed",
        normal: "Normal – 24h",
        express: "Express – Subject to Availability",

        pickupDate: "Pickup Date",
        pickupTime: "Preferred Pickup Time",

        clothesType: "Clothes Type",
        clothesPlaceholder:
            "Thobe, shirt, trousers, mixed clothes...",

        quantity: "Quantity",
        quantityPlaceholder: "Quantity",

        specialNote: "Special Note",
        specialPlaceholder:
            "Any special instructions?",

        sendBooking: "Send Booking on WhatsApp",

        pickupAvailability:
            "Pickup availability may vary by location.",

        // Trust
        whyCustomers:
            "Why Customers Choose Our Laundry Service",
        whyCustomersText:
            "Convenient service designed for hotel guests and visitors in Makkah.",

        hotelPickupTitle: "Hotel Pickup",
        hotelPickupDescription:
            "Convenient collection from selected hotels and nearby locations.",

        flexibleTitle: "Flexible Service",
        flexibleDescription:
            "Choose normal service or ask about express availability.",

        easyWhatsAppTitle: "Easy WhatsApp Booking",
        easyWhatsAppDescription:
            "Contact us directly with your hotel and laundry requirements.",

        makkahAreaTitle: "Makkah Service Area",
        makkahAreaDescription:
            "Serving central Makkah and locations around Makkah Clock Tower.",

        // Hotels
        hotelsTitle: "Hotels Near Our Makkah Pickup Area",
        hotelsText:
            "Pickup availability depends on hotel location, timing and order details.",
        hotelNote:
            "Please contact us before ordering to confirm pickup availability from your exact hotel.",

        // FAQ
        faqTitle: "Frequently Asked Questions",

        faq1Question:
            "Do you provide hotel laundry pickup in Makkah?",
        faq1Answer:
            "Yes. We provide pickup and delivery from selected hotels and locations in Makkah. Availability depends on location and order time.",

        faq2Question:
            "Do you provide laundry near Makkah Clock Tower?",
        faq2Answer:
            "Yes. We serve central Makkah and areas around Makkah Clock Tower, subject to pickup availability.",

        faq3Question:
            "How much does laundry cost?",
        faq3Answer:
            "Wash & Fold starts from 15 SAR per bag. Ironing starts from 5 SAR per item. Dry Cleaning starts from 12 SAR per item.",

        faq4Question:
            "Do you offer express laundry?",
        faq4Answer:
            "Express service may be available depending on the order, location and workload. Please contact us on WhatsApp first.",

        faq5Question:
            "How can I order?",
        faq5Answer:
            "Send us a WhatsApp message with your hotel name, room number, phone number and required laundry service.",

        faq6Question:
            "هل توجد خدمة غسيل ملابس في مكة؟",
        faq6Answer:
            "نعم، نوفر خدمة غسيل وكي الملابس مع الاستلام والتوصيل في مكة حسب الموقع والتوفر.",

        // Gallery
        galleryTitle: "Our Laundry Service",
        galleryText:
            "Washing, ironing, packing and delivery.",

        // Hours
        hoursTitle: "Business Hours",
        saturdayThursday: "Saturday – Thursday:",
        friday: "Friday:",
        hoursText:
            "WhatsApp orders can be sent anytime. Response time may vary outside business hours.",

        // Quick actions
        location: "Location",
        call: "Call",

        // Location
        locationTitle: "Makkah Laundry Service Location",
        locationText:
            "Serving Makkah and nearby central areas.",

        // Calculator
        calculatorTitle: "Laundry Price Calculator",
        calculatorText:
            "Calculate an estimated starting price.",
        calculatorService: "Service",
        calculatorQuantity: "Quantity",
        estimatedPrice: "Estimated Price:",

        // Tracking
        trackingTitle: "Order Tracking",
        trackingText:
            "If you have an order ID, enter it below.",
        orderIdPlaceholder: "Enter Order ID",
        trackOrder: "Track Order",

        // Why choose us
        whyChooseTitle: "Why Choose Makkah Laundry Service?",
        makkahFocused: "Makkah Focused",
        makkahFocusedText:
            "Our service is focused on customers staying in Makkah.",

        hotelFriendly: "Hotel Friendly",
        hotelFriendlyText:
            "Convenient pickup and delivery for hotel guests.",

        fastCommunication: "Fast Communication",
        fastCommunicationText:
            "Easy communication through WhatsApp.",

        convenientService: "Convenient Service",
        convenientServiceText:
            "Send your laundry request without searching for a shop.",

        // Contact
        contactTitle: "Contact Makkah Laundry Service",
        contactText:
            "Contact us to check laundry pickup availability in Makkah.",
        whatsappTitle: "WhatsApp",
        callTitle: "Call",
        emailTitle: "Email",
        serviceAreaTitle: "Service Area",

        // Final CTA
        finalTitle: "Need Laundry Pickup in Makkah?",
        finalText:
            "Send us your hotel name and room number on WhatsApp.",
        finalButton: "Order Laundry on WhatsApp",

        // Footer
        quickLinks: "Quick Links",
        footerText:
            "Laundry pickup and delivery service in Makkah.",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        rights:
            "© 2026 Makkah Laundry Service. All Rights Reserved.",

        // Messages
        invalidQuantity:
            "Please enter a valid quantity.",
        enterOrderId:
            "Please enter your Order ID.",
        readyDelivery:
            "✅ Ready for Delivery",
        washing:
            "🧺 Washing in Progress",
        outDelivery:
            "🚚 Out for Delivery",
        notFound:
            "❌ Order ID Not Found"

    },


    ar: {

        // Top bar
        support: "🟢 خدمة غسيل الملابس متاحة",
        whatsapp: "واتساب",

        // Navigation
        home: "الرئيسية",
        services: "الخدمات",
        pricing: "الأسعار",
        bookPickup: "حجز الاستلام",
        hotels: "الفنادق",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا",
        orderNow: "اطلب الآن",

        // Hero
        eyebrow: "خدمة استلام وتوصيل الملابس في مكة",
        heroTitle:
            "خدمة غسيل الملابس في مكة بالقرب من برج الساعة",
        heroText:
            "خدمة سريعة ومريحة لغسيل الملابس مع الاستلام والتوصيل في مكة للحجاج والزوار والمقيمين ونزلاء الفنادق.",
        heroServices:
            "غسيل وطي • كي الملابس • تنظيف جاف • استلام وتوصيل من الفندق",
        orderWhatsApp: "اطلب عبر واتساب",
        callNow: "اتصل الآن",
        locationNote:
            "📍 نخدم مكة، بما في ذلك وسط مكة والمناطق القريبة من برج الساعة حسب توفر خدمة الاستلام.",

        // Services
        servicesTitle: "خدمات غسيل الملابس في مكة",
        servicesText:
            "حلول مريحة لغسيل الملابس لنزلاء الفنادق والحجاج والزوار والمقيمين في مكة.",

        washFold: "غسيل وطي الملابس",
        washFoldText:
            "غسيل وطي احترافي للملابس اليومية.",

        ironing: "خدمة كي الملابس",
        ironingText:
            "كي مرتب ونظيف للثياب والقمصان والبناطيل وغيرها من الملابس.",

        dryCleaning: "تنظيف جاف",
        dryCleaningText:
            "خدمة تنظيف جاف للملابس المناسبة.",

        hotelPickup: "استلام وتوصيل من الفندق",
        hotelPickupText:
            "نستلم الملابس من الفنادق والمواقع المحددة ونعيدها بعد انتهاء الخدمة.",

        // SEO
        seoTitle: "مغسلة ملابس في مكة – استلام وتوصيل",
        seoText1:
            "هل تبحث عن مغسلة ملابس في مكة؟ نقدم خدمة استلام وتوصيل الملابس لنزلاء الفنادق والحجاج والزوار والمقيمين.",
        seoText2:
            "تشمل خدماتنا غسيل الملابس في مكة، الغسيل والطي، كي الملابس، التنظيف الجاف واستلام وتسليم الملابس.",
        seoHotelTitle:
            "مغسلة ملابس بالقرب من برج الساعة",
        seoHotelText:
            "إذا كنت تقيم بالقرب من برج الساعة أو في وسط مكة، يمكنك التواصل معنا عبر واتساب لمعرفة توفر خدمة الاستلام.",
        seoPilgrimTitle:
            "خدمة غسيل ملابس للحجاج والمعتمرين",
        seoPilgrimText:
            "يحتاج الحجاج والمعتمرون إلى ملابس نظيفة أثناء إقامتهم في مكة. نوفر خدمة الاستلام والتوصيل للغسيل والكي والتنظيف الجاف.",
        seoOrderTitle:
            "كيف تطلب خدمة غسيل الملابس في مكة؟",
        seoOrderText:
            "تواصل معنا عبر واتساب وأرسل اسم الفندق أو الموقع ورقم الغرفة ونوع الخدمة المطلوبة، وسنؤكد توفر الاستلام.",

        // Pricing
        pricingTitle: "أسعار غسيل الملابس في مكة",
        pricingText:
            "أسعار تبدأ من الأسعار الموضحة. قد يختلف السعر النهائي حسب الكمية ونوع الملابس والخدمة المطلوبة.",

        from15: "يبدأ من 15 ريال للكيس",
        from5: "يبدأ من 5 ريال للقطعة",
        from12: "يبدأ من 12 ريال للقطعة",
        bookNow: "احجز الآن",

        // About
        aboutTitle: "عن خدمة غسيل الملابس في مكة",
        aboutText1:
            "مغسلة مكة هي خدمة مريحة لاستلام وتوصيل الملابس في مكة.",
        aboutText2:
            "نساعد نزلاء الفنادق والحجاج والزوار والمقيمين على إرسال واستلام ملابسهم دون الحاجة للبحث عن مغسلة.",
        aboutText3:
            "تشمل خدماتنا الغسيل والطي، كي الملابس، التنظيف الجاف واستلام وتوصيل الملابس من الفنادق.",
        checkAvailability: "تحقق من توفر الاستلام",

        // Booking
        bookingTitle: "حجز استلام الملابس في مكة",
        bookingText:
            "أدخل بياناتك وأرسل طلب غسيل الملابس عبر واتساب.",

        fullName: "الاسم الكامل",
        fullNamePlaceholder: "اكتب اسمك",

        hotelLocation: "الفندق / الموقع",
        selectHotel: "اختر الفندق / الموقع",

        roomNumber: "رقم الغرفة",
        roomPlaceholder: "رقم الغرفة",

        phone: "رقم واتساب / الهاتف",
        phonePlaceholder: "+966...",

        service: "الخدمة",
        selectService: "اختر الخدمة",

        washFoldOption: "غسيل وطي – يبدأ من 15 ريال/كيس",
        ironingOption: "كي الملابس – يبدأ من 5 ريال/قطعة",
        dryCleaningOption: "تنظيف جاف – يبدأ من 12 ريال/قطعة",
        washIronOption: "غسيل وطي + كي",

        serviceSpeed: "سرعة الخدمة",
        normal: "عادي – 24 ساعة",
        express: "سريع – حسب التوفر",

        pickupDate: "تاريخ الاستلام",
        pickupTime: "وقت الاستلام المفضل",

        clothesType: "نوع الملابس",
        clothesPlaceholder:
            "ثوب، قميص، بنطال، ملابس متنوعة...",

        quantity: "الكمية",
        quantityPlaceholder: "الكمية",

        specialNote: "ملاحظة خاصة",
        specialPlaceholder:
            "هل لديك تعليمات خاصة؟",

        sendBooking: "إرسال الطلب عبر واتساب",

        pickupAvailability:
            "قد يختلف توفر الاستلام حسب الموقع.",

        // Trust
        whyCustomers:
            "لماذا يختار العملاء خدمة غسيل الملابس لدينا؟",
        whyCustomersText:
            "خدمة مريحة مصممة لنزلاء الفنادق والزوار في مكة.",

        hotelPickupTitle: "استلام من الفندق",
        hotelPickupDescription:
            "استلام مريح من الفنادق والمواقع القريبة المحددة.",

        flexibleTitle: "خدمة مرنة",
        flexibleDescription:
            "اختر الخدمة العادية أو اسأل عن توفر الخدمة السريعة.",

        easyWhatsAppTitle: "حجز سهل عبر واتساب",
        easyWhatsAppDescription:
            "تواصل معنا مباشرة وأرسل اسم الفندق وطلب الغسيل.",

        makkahAreaTitle: "منطقة الخدمة في مكة",
        makkahAreaDescription:
            "نخدم وسط مكة والمناطق القريبة من برج الساعة.",

        // Hotels
        hotelsTitle: "الفنادق القريبة من منطقة الاستلام في مكة",
        hotelsText:
            "يعتمد توفر الاستلام على موقع الفندق والوقت وتفاصيل الطلب.",
        hotelNote:
            "يرجى التواصل معنا قبل الطلب لتأكيد توفر الاستلام من الفندق.",

        // FAQ
        faqTitle: "الأسئلة الشائعة",

        faq1Question:
            "هل توفرون استلام الملابس من الفنادق في مكة؟",
        faq1Answer:
            "نعم، نوفر الاستلام والتوصيل من الفنادق والمواقع المحددة في مكة حسب الموقع ووقت الطلب.",

        faq2Question:
            "هل توجد خدمة غسيل ملابس بالقرب من برج الساعة؟",
        faq2Answer:
            "نعم، نخدم وسط مكة والمناطق القريبة من برج الساعة حسب توفر خدمة الاستلام.",

        faq3Question:
            "كم أسعار غسيل الملابس؟",
        faq3Answer:
            "يبدأ الغسيل والطي من 15 ريال للكيس، والكي من 5 ريال للقطعة، والتنظيف الجاف من 12 ريال للقطعة.",

        faq4Question:
            "هل توجد خدمة غسيل سريعة؟",
        faq4Answer:
            "قد تتوفر الخدمة السريعة حسب الطلب والموقع وضغط العمل. يرجى التواصل معنا عبر واتساب أولاً.",

        faq5Question:
            "كيف يمكنني طلب الخدمة؟",
        faq5Answer:
            "أرسل لنا عبر واتساب اسم الفندق ورقم الغرفة ورقم الهاتف ونوع خدمة الغسيل المطلوبة.",

        faq6Question:
            "هل توجد خدمة غسيل ملابس في مكة؟",
        faq6Answer:
            "نعم، نوفر خدمة غسيل وكي الملابس مع الاستلام والتوصيل في مكة حسب الموقع والتوفر.",

        // Gallery
        galleryTitle: "خدمة غسيل الملابس لدينا",
        galleryText:
            "غسيل، كي، تغليف وتوصيل.",

        // Hours
        hoursTitle: "ساعات العمل",
        saturdayThursday: "السبت – الخميس:",
        friday: "الجمعة:",
        hoursText:
            "يمكن إرسال طلبات واتساب في أي وقت. قد يختلف وقت الرد خارج ساعات العمل.",

        // Quick actions
        location: "الموقع",
        call: "اتصال",

        // Location
        locationTitle: "موقع خدمة غسيل الملابس في مكة",
        locationText:
            "نخدم مكة والمناطق القريبة في وسط المدينة.",

        // Calculator
        calculatorTitle: "حاسبة سعر غسيل الملابس",
        calculatorText:
            "احسب السعر التقديري المبدئي.",
        calculatorService: "الخدمة",
        calculatorQuantity: "الكمية",
        estimatedPrice: "السعر التقديري:",

        // Tracking
        trackingTitle: "تتبع الطلب",
        trackingText:
            "إذا كان لديك رقم طلب، أدخله أدناه.",
        orderIdPlaceholder: "أدخل رقم الطلب",
        trackOrder: "تتبع الطلب",

        // Why choose us
        whyChooseTitle: "لماذا تختار خدمة غسيل الملابس في مكة؟",
        makkahFocused: "متخصصون في مكة",
        makkahFocusedText:
            "خدمتنا مخصصة للعملاء المقيمين والزائرين في مكة.",

        hotelFriendly: "مناسب للفنادق",
        hotelFriendlyText:
            "استلام وتوصيل مريح لنزلاء الفنادق.",

        fastCommunication: "تواصل سريع",
        fastCommunicationText:
            "تواصل سهل عبر واتساب.",

        convenientService: "خدمة مريحة",
        convenientServiceText:
            "أرسل طلب الغسيل دون الحاجة للبحث عن مغسلة.",

        // Contact
        contactTitle: "تواصل مع خدمة غسيل الملابس في مكة",
        contactText:
            "تواصل معنا لمعرفة توفر خدمة استلام الملابس في مكة.",
        whatsappTitle: "واتساب",
        callTitle: "اتصال",
        emailTitle: "البريد الإلكتروني",
        serviceAreaTitle: "منطقة الخدمة",

        // Final CTA
        finalTitle: "تحتاج خدمة استلام الملابس في مكة؟",
        finalText:
            "أرسل اسم الفندق ورقم الغرفة عبر واتساب.",
        finalButton: "اطلب غسيل الملابس عبر واتساب",

        // Footer
        quickLinks: "روابط سريعة",
        footerText:
            "خدمة استلام وتوصيل الملابس في مكة.",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
        rights:
            "© 2026 خدمة غسيل الملابس في مكة. جميع الحقوق محفوظة.",

        // Messages
        invalidQuantity:
            "يرجى إدخال كمية صحيحة.",
        enterOrderId:
            "يرجى إدخال رقم الطلب.",
        readyDelivery:
            "✅ جاهز للتوصيل",
        washing:
            "🧺 جاري غسل الملابس",
        outDelivery:
            "🚚 خرج للتوصيل",
        notFound:
            "❌ رقم الطلب غير موجود"

    }

};


// =========================================================
// DOM READY
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Makkah Laundry Service Loaded");

    setupMobileMenu();
    setupSmoothScroll();
    setupBookingForm();
    setupLanguage();
    setupDarkMode();
    setupPickupDate();
    setupCalculator();
    setupTracking();

});


// =========================================================
// MOBILE MENU
// =========================================================

function setupMobileMenu() {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen =
            mainNav.classList.toggle("active");

        if (isOpen) {

            menuToggle.textContent = "✕";
            menuToggle.setAttribute(
                "aria-label",
                "Close Menu"
            );

            document.body.classList.add("menu-open");

        } else {

            menuToggle.textContent = "☰";
            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

            document.body.classList.remove("menu-open");

        }

    });


    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });

}


// =========================================================
// SMOOTH SCROLL
// =========================================================

function setupSmoothScroll() {

    const smoothLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                this.getAttribute("href");

            if (!targetID || targetID === "#") {
                return;
            }

            const target =
                document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}


// =========================================================
// BOOKING FORM → WHATSAPP
// =========================================================

function setupBookingForm() {

    const bookingForm =
        document.getElementById("bookingForm");

    if (!bookingForm) {
        return;
    }


    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const fullName =
                document.getElementById(
                    "fullName"
                )?.value.trim() || "";


            const hotel =
                document.getElementById(
                    "hotelName"
                )?.value || "";


            const room =
                document.getElementById(
                    "roomNumber"
                )?.value.trim() || "";


            const phone =
                document.getElementById(
                    "customerPhone"
                )?.value.trim() || "";


            const service =
                document.getElementById(
                    "service"
                )?.value || "";


            const speed =
                document.getElementById(
                    "serviceSpeed"
                )?.value || "";


            const pickupDate =
                document.getElementById(
                    "pickupDate"
                )?.value || "";


            const pickupTime =
                document.getElementById(
                    "pickupTime"
                )?.value || "";


            const clothes =
                document.getElementById(
                    "clothesType"
                )?.value || "";


            const quantity =
                document.getElementById(
                    "clothQty"
                )?.value || "1";


            const note =
                document.getElementById(
                    "specialNote"
                )?.value.trim() || "";


            const currentLanguage =
                document.documentElement.lang === "ar"
                    ? "ar"
                    : "en";


            let message;


            if (currentLanguage === "ar") {

                message =
`🧺 *طلب غسيل ملابس جديد*

👤 الاسم: ${fullName}

🏨 الفندق: ${hotel}

🚪 رقم الغرفة: ${room}

📱 رقم العميل: ${phone}

🧼 الخدمة: ${service}

⚡ سرعة الخدمة: ${speed}

📅 تاريخ الاستلام: ${pickupDate}

🕒 وقت الاستلام: ${pickupTime}

👕 نوع الملابس: ${clothes}

🔢 الكمية: ${quantity}

📝 ملاحظات:
${note || "لا توجد"}`;

            } else {

                message =
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

            }


            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


// =========================================================
// LANGUAGE SYSTEM
// =========================================================

function setupLanguage() {

    const langBtn =
        document.getElementById("langBtn");

    if (!langBtn) {
        return;
    }


    let currentLanguage =
        localStorage.getItem(
            "makkahLaundryLanguage"
        ) || "en";


    applyLanguage(currentLanguage);


    langBtn.addEventListener(
        "click",
        function () {

            currentLanguage =
                currentLanguage === "en"
                    ? "ar"
                    : "en";


            localStorage.setItem(
                "makkahLaundryLanguage",
                currentLanguage
            );


            applyLanguage(
                currentLanguage
            );

        }
    );

}


// =========================================================
// APPLY LANGUAGE
// =========================================================

function applyLanguage(language) {

    const t =
        translations[language];

    if (!t) {
        return;
    }


    const isArabic =
        language === "ar";


    document.documentElement.lang =
        language;


    document.documentElement.dir =
        isArabic
            ? "rtl"
            : "ltr";


    document.body.dir =
        isArabic
            ? "rtl"
            : "ltr";


    const langBtn =
        document.getElementById("langBtn");


    if (langBtn) {

        langBtn.textContent =
            isArabic
                ? "English"
                : "العربية";

    }


    // -----------------------------------------------------
    // HELPER FUNCTIONS
    // -----------------------------------------------------

    function text(selector, value) {

        const element =
            document.querySelector(selector);

        if (element) {
            element.textContent = value;
        }

    }


    function html(selector, value) {

        const element =
            document.querySelector(selector);

        if (element) {
            element.innerHTML = value;
        }

    }


    function placeholder(selector, value) {

        const element =
            document.querySelector(selector);

        if (element) {
            element.placeholder = value;
        }

    }


    function allText(selector, values) {

        const elements =
            document.querySelectorAll(selector);

        elements.forEach(
            function (element, index) {

                if (values[index] !== undefined) {
                    element.textContent =
                        values[index];
                }

            }
        );

    }


    // -----------------------------------------------------
    // TOP BAR
    // -----------------------------------------------------

    const topBarSpans =
        document.querySelectorAll(
            ".top-bar .container > span"
        );

    if (topBarSpans[0]) {
        topBarSpans[0].textContent =
            t.support;
    }


    // -----------------------------------------------------
    // NAVIGATION
    // -----------------------------------------------------

    const navLinks =
        document.querySelectorAll(
            ".nav a"
        );


    if (navLinks.length >= 7) {

        navLinks[0].textContent = t.home;
        navLinks[1].textContent = t.services;
        navLinks[2].textContent = t.pricing;
        navLinks[3].textContent = t.bookPickup;
        navLinks[4].textContent = t.hotels;
        navLinks[5].textContent = t.faq;
        navLinks[6].textContent = t.contact;

    }


    const orderButton =
        document.querySelector(
            ".header-actions .btn"
        );

    if (orderButton) {
        orderButton.textContent =
            t.orderNow;
    }


    // -----------------------------------------------------
    // HERO
    // -----------------------------------------------------

    text(
        ".hero .eyebrow",
        t.eyebrow
    );


    html(
        ".hero h1",
        t.heroTitle
    );


    const heroParagraphs =
        document.querySelectorAll(
            ".hero-content > p"
        );


    if (heroParagraphs[1]) {
        heroParagraphs[1].textContent =
            t.heroText;
    }


    if (heroParagraphs[2]) {
        heroParagraphs[2].textContent =
            t.heroServices;
    }


    if (heroParagraphs[3]) {
        heroParagraphs[3].textContent =
            t.locationNote;
    }


    const heroButtons =
        document.querySelectorAll(
            ".hero-buttons .btn"
        );


    if (heroButtons[0]) {

        heroButtons[0].innerHTML =
            '<i class="fa-brands fa-whatsapp"></i> ' +
            t.orderWhatsApp;

    }


    if (heroButtons[1]) {

        heroButtons[1].innerHTML =
            '<i class="fa-solid fa-phone"></i> ' +
            t.callNow;

    }


    // -----------------------------------------------------
    // SERVICES
    // -----------------------------------------------------

    text(
        "#services .section-heading h2",
        t.servicesTitle
    );


    text(
        "#services .section-heading p",
        t.servicesText
    );


    const serviceCards =
        document.querySelectorAll(
            "#services .service-card"
        );


    if (serviceCards.length >= 4) {

        serviceCards[0].querySelector("h3").textContent =
            t.washFold;

        serviceCards[0].querySelector("p").textContent =
            t.washFoldText;


        serviceCards[1].querySelector("h3").textContent =
            t.ironing;

        serviceCards[1].querySelector("p").textContent =
            t.ironingText;


        serviceCards[2].querySelector("h3").textContent =
            t.dryCleaning;

        serviceCards[2].querySelector("p").textContent =
            t.dryCleaningText;


        serviceCards[3].querySelector("h3").textContent =
            t.hotelPickup;

        serviceCards[3].querySelector("p").textContent =
            t.hotelPickupText;

    }


    // -----------------------------------------------------
    // SEO CONTENT
    // -----------------------------------------------------

    const seoSections =
        document.querySelectorAll(
            ".seo-content"
        );


    if (seoSections[0]) {

        seoSections[0].querySelector("h2").textContent =
            t.seoTitle;


        const paragraphs =
            seoSections[0].querySelectorAll("p");


        if (paragraphs[0])
            paragraphs[0].textContent =
                t.seoText1;


        if (paragraphs[1])
            paragraphs[1].textContent =
                t.seoText2;


        const headings =
            seoSections[0].querySelectorAll("h3");


        if (headings[0])
            headings[0].textContent =
                t.seoHotelTitle;


        if (paragraphs[2])
            paragraphs[2].textContent =
                t.seoHotelText;


        if (headings[1])
            headings[1].textContent =
                t.seoPilgrimTitle;


        if (paragraphs[3])
            paragraphs[3].textContent =
                t.seoPilgrimText;


        if (headings[2])
            headings[2].textContent =
                t.seoOrderTitle;


        if (paragraphs[4])
            paragraphs[4].textContent =
                t.seoOrderText;

    }


    // -----------------------------------------------------
    // ARABIC SEO SECTION
    // -----------------------------------------------------

    const arabicSeo =
        document.querySelector(
            ".arabic-seo"
        );


    if (arabicSeo) {

        if (language === "ar") {

            arabicSeo.style.display =
                "block";

        } else {

            arabicSeo.style.display =
                "none";

        }

    }


    // -----------------------------------------------------
    // PRICING
    // -----------------------------------------------------

    text(
        "#pricing .section-heading h2",
        t.pricingTitle
    );


    text(
        "#pricing .section-heading p",
        t.pricingText
    );


    const priceCards =
        document.querySelectorAll(
            "#pricing .price-card"
        );


    if (priceCards.length >= 3) {

        priceCards[0].querySelector("h3").textContent =
            t.washFold;

        priceCards[0].querySelector("p").textContent =
            t.from15;

        priceCards[0].querySelector("a").textContent =
            t.bookNow;


        priceCards[1].querySelector("h3").textContent =
            t.ironing;

        priceCards[1].querySelector("p").textContent =
            t.from5;

        priceCards[1].querySelector("a").textContent =
            t.bookNow;


        priceCards[2].querySelector("h3").textContent =
            t.dryCleaning;

        priceCards[2].querySelector("p").textContent =
            t.from12;

        priceCards[2].querySelector("a").textContent =
            t.bookNow;

    }


    // -----------------------------------------------------
    // ABOUT
    // -----------------------------------------------------

    text(
        "#about h2",
        t.aboutTitle
    );


    const aboutParagraphs =
        document.querySelectorAll(
            "#about p"
        );


    if (aboutParagraphs[0])
        aboutParagraphs[0].textContent =
            t.aboutText1;


    if (aboutParagraphs[1])
        aboutParagraphs[1].textContent =
            t.aboutText2;


    if (aboutParagraphs[2])
        aboutParagraphs[2].textContent =
            t.aboutText3;


    const aboutButton =
        document.querySelector(
            "#about .btn"
        );


    if (aboutButton)
        aboutButton.textContent =
            t.checkAvailability;


    // -----------------------------------------------------
    // BOOKING
    // -----------------------------------------------------

    text(
        "#booking .section-heading h2",
        t.bookingTitle
    );


    text(
        "#booking .section-heading p",
        t.bookingText
    );


    const bookingLabels =
        document.querySelectorAll(
            "#bookingForm label"
        );


    if (bookingLabels.length >= 10) {

        bookingLabels[0].textContent =
            t.fullName;

        bookingLabels[1].textContent =
            t.hotelLocation;

        bookingLabels[2].textContent =
            t.roomNumber;

        bookingLabels[3].textContent =
            t.phone;

        bookingLabels[4].textContent =
            t.service;

        bookingLabels[5].textContent =
            t.serviceSpeed;

        bookingLabels[6].textContent =
            t.pickupDate;

        bookingLabels[7].textContent =
            t.pickupTime;

        bookingLabels[8].textContent =
            t.clothesType;

        bookingLabels[9].textContent =
            t.quantity;

    }


    const specialNoteLabel =
        document.querySelector(
            'label[for="specialNote"]'
        );


    if (specialNoteLabel) {
        specialNoteLabel.textContent =
            t.specialNote;
    }


    placeholder(
        "#fullName",
        t.fullNamePlaceholder
    );


    placeholder(
        "#roomNumber",
        t.roomPlaceholder
    );


    placeholder(
        "#customerPhone",
        t.phonePlaceholder
    );


    placeholder(
        "#clothesType",
        t.clothesPlaceholder
    );


    placeholder(
        "#clothQty",
        t.quantityPlaceholder
    );


    placeholder(
        "#specialNote",
        t.specialPlaceholder
    );


    // Hotel select
    const hotelSelect =
        document.getElementById(
            "hotelName"
        );


    if (hotelSelect) {

        hotelSelect.options[0].text =
            t.selectHotel;

    }


    // Service select
    const serviceSelect =
        document.getElementById(
            "service"
        );


    if (serviceSelect) {

        serviceSelect.options[0].text =
            t.selectService;

        if (serviceSelect.options[1])
            serviceSelect.options[1].text =
                t.washFoldOption;

        if (serviceSelect.options[2])
            serviceSelect.options[2].text =
                t.ironingOption;

        if (serviceSelect.options[3])
            serviceSelect.options[3].text =
                t.dryCleaningOption;

        if (serviceSelect.options[4])
            serviceSelect.options[4].text =
                t.washIronOption;

    }


    // Speed select
    const speedSelect =
        document.getElementById(
            "serviceSpeed"
        );


    if (speedSelect) {

        if (speedSelect.options[0])
            speedSelect.options[0].text =
                t.normal;

        if (speedSelect.options[1])
            speedSelect.options[1].text =
                t.express;

    }


    const pickupAvailabilityText =
        document.querySelector(
            "#hotelName + .hotel-note"
        );


    if (pickupAvailabilityText) {
        pickupAvailabilityText.textContent =
            t.pickupAvailability;
    }


    const bookingButton =
        document.querySelector(
            "#bookingForm button[type='submit']"
        );


    if (bookingButton) {

        bookingButton.innerHTML =
            '<i class="fa-brands fa-whatsapp"></i> ' +
            t.sendBooking;

    }


    // -----------------------------------------------------
    // WHY CUSTOMERS
    // -----------------------------------------------------

    const trustHeading =
        document.querySelector(
            ".section-heading h2"
        );


    // Find section by its cards instead of generic heading
    const allSections =
        document.querySelectorAll(
            "section"
        );


    allSections.forEach(
        function (section) {

            const heading =
                section.querySelector(
                    ".section-heading h2"
                );

            if (!heading) {
                return;
            }


            if (
                heading.textContent.includes(
                    "Why Customers"
                ) ||
                heading.textContent.includes(
                    "لماذا يختار"
                )
            ) {

                heading.textContent =
                    t.whyCustomers;

                const p =
                    section.querySelector(
                        ".section-heading p"
                    );

                if (p) {
                    p.textContent =
                        t.whyCustomersText;
                }

            }

        }
    );


    // -----------------------------------------------------
    // HOTELS
    // -----------------------------------------------------

    text(
        "#hotels .section-heading h2",
        t.hotelsTitle
    );


    text(
        "#hotels .section-heading p",
        t.hotelsText
    );


    const hotelNote =
        document.querySelector(
            "#hotels .hotel-note"
        );


    if (hotelNote) {
        hotelNote.textContent =
            t.hotelNote;
    }


    // -----------------------------------------------------
    // FAQ
    // -----------------------------------------------------

    text(
        "#faq .section-heading h2",
        t.faqTitle
    );


    const faqDetails =
        document.querySelectorAll(
            "#faq details"
        );


    const faqQuestions = [
        t.faq1Question,
        t.faq2Question,
        t.faq3Question,
        t.faq4Question,
        t.faq5Question,
        t.faq6Question
    ];


    const faqAnswers = [
        t.faq1Answer,
        t.faq2Answer,
        t.faq3Answer,
        t.faq4Answer,
        t.faq5Answer,
        t.faq6Answer
    ];


    faqDetails.forEach(
        function (detail, index) {

            if (faqQuestions[index]) {

                const summary =
                    detail.querySelector(
                        "summary"
                    );

                if (summary) {
                    summary.textContent =
                        faqQuestions[index];
                }

            }


            if (faqAnswers[index]) {

                const answer =
                    detail.querySelector(
                        "p"
                    );

                if (answer) {
                    answer.textContent =
                        faqAnswers[index];
                }

            }

        }
    );


    // -----------------------------------------------------
    // GALLERY
    // -----------------------------------------------------

    text(
        "#gallery .section-heading h2",
        t.galleryTitle
    );


    text(
        "#gallery .section-heading p",
        t.galleryText
    );


    // -----------------------------------------------------
    // HOURS
    // -----------------------------------------------------

    const hoursSection =
        document.querySelector(
            ".hours"
        );


    if (hoursSection) {

        const paragraphs =
            hoursSection.querySelectorAll(
                "p"
            );


        if (paragraphs[0]) {

            paragraphs[0].innerHTML =
                "<strong>" +
                t.saturdayThursday.replace(
                    ":",
                    ""
                ) +
                ":</strong> 08:00 – 23:00";

        }


        if (paragraphs[1]) {

            paragraphs[1].innerHTML =
                "<strong>" +
                t.friday.replace(
                    ":",
                    ""
                ) +
                ":</strong> 14:00 – 23:00";

        }


        if (paragraphs[2]) {
            paragraphs[2].textContent =
                t.hoursText;
        }

    }


    // -----------------------------------------------------
    // QUICK ACTIONS
    // -----------------------------------------------------

    const quickButtons =
        document.querySelectorAll(
            ".quick-actions .btn"
        );


    if (quickButtons.length >= 3) {

        quickButtons[0].innerHTML =
            '<i class="fa-brands fa-whatsapp"></i> ' +
            t.whatsapp;

        quickButtons[1].innerHTML =
            '<i class="fa-solid fa-phone"></i> ' +
            t.call;

        quickButtons[2].innerHTML =
            '<i class="fa-solid fa-location-dot"></i> ' +
            t.location;

    }


    // -----------------------------------------------------
    // LOCATION
    // -----------------------------------------------------

    text(
        "#location .section-heading h2",
        t.locationTitle
    );


    text(
        "#location .section-heading p",
        t.locationText
    );


    // -----------------------------------------------------
    // CALCULATOR
    // -----------------------------------------------------

    text(
        "#calculator .section-heading h2",
        t.calculatorTitle
    );


    text(
        "#calculator .section-heading p",
        t.calculatorText
    );


    const calculatorLabels =
        document.querySelectorAll(
            "#calculator label"
        );


    if (calculatorLabels[0])
        calculatorLabels[0].textContent =
            t.calculatorService;


    if (calculatorLabels[1])
        calculatorLabels[1].textContent =
            t.calculatorQuantity;


    const calculatorResult =
        document.querySelector(
            ".calculator-result"
        );


    if (calculatorResult) {

        calculatorResult.innerHTML =
            t.estimatedPrice +
            ' <strong><span id="calcResult">15</span> SAR</strong>';

    }


    // -----------------------------------------------------
    // TRACKING
    // -----------------------------------------------------

    text(
        "#tracking .section-heading h2",
        t.trackingTitle
    );


    text(
        "#tracking .section-heading p",
        t.trackingText
    );


    placeholder(
        "#orderId",
        t.orderIdPlaceholder
    );


    const trackButton =
        document.getElementById(
            "trackOrder"
        );


    if (trackButton) {
        trackButton.textContent =
            t.trackOrder;
    }


    // -----------------------------------------------------
    // WHY CHOOSE US
    // -----------------------------------------------------

    const whySection =
        document.getElementById(
            "why-us"
        );


    if (whySection) {

        const heading =
            whySection.querySelector(
                ".section-heading h2"
            );

        if (heading) {
            heading.textContent =
                t.whyChooseTitle;
        }


        const cards =
            whySection.querySelectorAll(
                ".service-card"
            );


        const data = [

            [
                t.makkahFocused,
                t.makkahFocusedText
            ],

            [
                t.hotelFriendly,
                t.hotelFriendlyText
            ],

            [
                t.fastCommunication,
                t.fastCommunicationText
            ],

            [
                t.convenientService,
                t.convenientServiceText
            ]

        ];


        cards.forEach(
            function (card, index) {

                if (!data[index]) {
                    return;
                }

                const h3 =
                    card.querySelector("h3");

                const p =
                    card.querySelector("p");


                if (h3)
                    h3.textContent =
                        data[index][0];


                if (p)
                    p.textContent =
                        data[index][1];

            }
        );

    }


    // -----------------------------------------------------
    // CONTACT
    // -----------------------------------------------------

    text(
        "#contact .section-heading h2",
        t.contactTitle
    );


    text(
        "#contact .section-heading p",
        t.contactText
    );


    const contactItems =
        document.querySelectorAll(
            "#contact .contact-item"
        );


    const contactData = [

        t.whatsappTitle,
        t.callTitle,
        t.emailTitle,
        t.serviceAreaTitle

    ];


    contactItems.forEach(
        function (item, index) {

            const h3 =
                item.querySelector("h3");

            if (h3 && contactData[index]) {
                h3.textContent =
                    contactData[index];
            }

        }
    );


    // -----------------------------------------------------
    // FINAL CTA
    // -----------------------------------------------------

    text(
        ".final-cta h2",
        t.finalTitle
    );


    text(
        ".final-cta p",
        t.finalText
    );


    const finalButton =
        document.querySelector(
            ".final-cta .btn"
        );


    if (finalButton) {

        finalButton.innerHTML =
            '<i class="fa-brands fa-whatsapp"></i> ' +
            t.finalButton;

    }


    // -----------------------------------------------------
    // FOOTER
    // -----------------------------------------------------

    const footer =
        document.querySelector(
            ".footer"
        );


    if (footer) {

        const footerParagraph =
            footer.querySelector(
                ".footer-content > div:first-child p"
            );

        if (footerParagraph) {
            footerParagraph.textContent =
                t.footerText;
        }


        const footerHeadings =
            footer.querySelectorAll(
                ".footer-content h3"
            );


        if (footerHeadings[0])
            footerHeadings[0].textContent =
                t.quickLinks;


        if (footerHeadings[1])
            footerHeadings[1].textContent =
                t.contact;


        const footerBottom =
            footer.querySelector(
                ".footer-bottom"
            );


        if (footerBottom) {

            const copyright =
                footerBottom.querySelector(
                    "p"
                );

            if (copyright) {
                copyright.textContent =
                    t.rights;
            }


            const footerLinks =
                footerBottom.querySelectorAll(
                    "a"
                );


            if (footerLinks[0])
                footerLinks[0].textContent =
                    t.privacy;


            if (footerLinks[1])
                footerLinks[1].textContent =
                    t.terms;

        }

    }


    // -----------------------------------------------------
    // UPDATE IMAGE ALT TEXT
    // -----------------------------------------------------

    const images =
        document.querySelectorAll(
            "#gallery img"
        );


    if (isArabic) {

        if (images[0])
            images[0].alt =
                "غسيل الملابس في مكة";

        if (images[1])
            images[1].alt =
                "كي الثوب في مكة";

        if (images[2])
            images[2].alt =
                "استلام وتوصيل الملابس في مكة";

        if (images[3])
            images[3].alt =
                "تنظيف جاف للملابس في مكة";

    } else {

        if (images[0])
            images[0].alt =
                "Laundry washing service in Makkah";

        if (images[1])
            images[1].alt =
                "Thobe ironing service in Makkah";

        if (images[2])
            images[2].alt =
                "Laundry pickup and delivery in Makkah";

        if (images[3])
            images[3].alt =
                "Dry cleaning service in Makkah";

    }


    // -----------------------------------------------------
    // DOCUMENT TITLE
    // -----------------------------------------------------

    if (isArabic) {

        document.title =
            "مغسلة ملابس مكة | استلام وتوصيل الملابس بالقرب من الحرم";

    } else {

        document.title =
            "Makkah Laundry Service | Hotel Laundry Pickup & Delivery Near Haram";

    }

}


// =========================================================
// DARK MODE
// =========================================================

function setupDarkMode() {

    const darkBtn =
        document.getElementById(
            "darkModeBtn"
        );


    if (!darkBtn) {
        return;
    }


    darkBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                darkBtn.textContent =
                    "☀️";

            } else {

                darkBtn.textContent =
                    "🌙";

            }

        }
    );

}


// =========================================================
// MINIMUM PICKUP DATE
// =========================================================

function setupPickupDate() {

    const pickupDate =
        document.getElementById(
            "pickupDate"
        );


    if (!pickupDate) {
        return;
    }


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    pickupDate.min =
        today;

}


// =========================================================
// PRICE CALCULATOR
// =========================================================

function setupCalculator() {

    const serviceElement =
        document.getElementById(
            "calcService"
        );

    const quantityElement =
        document.getElementById(
            "calcQuantity"
        );

    const totalElement =
        document.getElementById(
            "calcResult"
        );


    if (
        !serviceElement ||
        !quantityElement ||
        !totalElement
    ) {

        return;

    }


    function calculate() {

        const price =
            Number(
                serviceElement.value
            );


        const quantity =
            Number(
                quantityElement.value
            );


        if (
            !Number.isFinite(quantity) ||
            quantity < 1
        ) {

            totalElement.textContent =
                "0";

            return;

        }


        const total =
            price * quantity;


        totalElement.textContent =
            total;

    }


    serviceElement.addEventListener(
        "change",
        calculate
    );


    quantityElement.addEventListener(
        "input",
        calculate
    );


    calculate();

}


// =========================================================
// ORDER TRACKING
// =========================================================

function setupTracking() {

    const trackButton =
        document.getElementById(
            "trackOrder"
        );


    if (!trackButton) {
        return;
    }


    trackButton.addEventListener(
        "click",
        trackOrder
    );

}


function trackOrder() {

    const orderInput =
        document.getElementById(
            "orderId"
        );


    const result =
        document.getElementById(
            "trackingResult"
        );


    if (
        !orderInput ||
        !result
    ) {

        return;

    }


    const orderID =
        orderInput.value
            .trim()
            .toUpperCase();


    const language =
        document.documentElement.lang;


    const t =
        translations[
            language === "ar"
                ? "ar"
                : "en"
        ];


    if (!orderID) {

        result.textContent =
            t.enterOrderId;

        return;

    }


    // Existing demo tracking IDs

    if (orderID === "MLS-1001") {

        result.textContent =
            t.readyDelivery;

    }

    else if (orderID === "MLS-1002") {

        result.textContent =
            t.washing;

    }

    else if (orderID === "MLS-1003") {

        result.textContent =
            t.outDelivery;

    }

    else {

        result.textContent =
            t.notFound;

    }

}


// =========================================================
// SERVICE WORKER
// =========================================================

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker
                .register(
                    "service-worker.js"
                )
                .then(
                    function () {

                        console.log(
                            "Service Worker registered successfully."
                        );

                    }
                )
                .catch(
                    function (error) {

                        console.log(
                            "Service Worker registration failed:",
                            error
                        );

                    }
                );

        }
    );

}
