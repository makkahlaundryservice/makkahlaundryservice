// =========================================================
// MAKKAH LAUNDRY SERVICE
// COMPLETE BILINGUAL ENGLISH / ARABIC SYSTEM
// =========================================================

"use strict";

const WHATSAPP_NUMBER = "966550865064";
const LANGUAGE_STORAGE_KEY = "makkahLaundryLanguage";


// =========================================================
// TRANSLATIONS
// =========================================================

const translations = {

    // =====================================================
    // ENGLISH
    // =====================================================

    en: {

        // Top
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
            "If you are staying near the Makkah Clock Tower or central Makkah, contact us on WhatsApp to check pickup availability.",

        seoPilgrimTitle:
            "Laundry Service for Umrah Pilgrims",
        seoPilgrimText:
            "Pilgrims and visitors often need clean clothes during their stay in Makkah. Our pickup and delivery service makes laundry easier.",

        seoOrderTitle:
            "How to Order Laundry in Makkah",
        seoOrderText:
            "Contact us on WhatsApp and send your hotel or location, room number and laundry requirement. We will confirm pickup availability.",

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
        hotelsTitle:
            "Hotels Near Our Makkah Pickup Area",

        hotelsText:
            "Pickup availability depends on hotel location, timing and order details.",

        hotelNote:
            "Please contact us before ordering to confirm pickup availability from your exact hotel.",

        // FAQ
        faqTitle:
            "Frequently Asked Questions",

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
            "Is laundry service available in Makkah?",

        faq6Answer:
            "Yes. We provide laundry, ironing, pickup and delivery service in Makkah, subject to location availability.",

        // Gallery
        galleryTitle: "Our Laundry Service",
        galleryText:
            "Washing, ironing, packing and delivery.",

        // Hours
        hoursTitle: "Business Hours",
        saturdayThursday: "Saturday – Thursday",
        friday: "Friday",
        hoursText:
            "WhatsApp orders can be sent anytime. Response time may vary outside business hours.",

        // Quick actions
        location: "Location",
        call: "Call",

        // Location
        locationTitle:
            "Makkah Laundry Service Location",

        locationText:
            "Serving Makkah and nearby central areas.",

        // Calculator
        calculatorTitle:
            "Laundry Price Calculator",

        calculatorText:
            "Calculate an estimated starting price.",

        calculatorService: "Service",
        calculatorQuantity: "Quantity",
        estimatedPrice: "Estimated Price:",

        // Tracking
        trackingTitle: "Order Tracking",
        trackingText:
            "If you have an order ID, enter it below.",

        orderIdPlaceholder:
            "Enter Order ID",

        trackOrder: "Track Order",

        // Why choose us
        whyChooseTitle:
            "Why Choose Makkah Laundry Service?",

        makkahFocused:
            "Makkah Focused",

        makkahFocusedText:
            "Our service is focused on customers staying in Makkah.",

        hotelFriendly:
            "Hotel Friendly",

        hotelFriendlyText:
            "Convenient pickup and delivery for hotel guests.",

        fastCommunication:
            "Fast Communication",

        fastCommunicationText:
            "Easy communication through WhatsApp.",

        convenientService:
            "Convenient Service",

        convenientServiceText:
            "Send your laundry request without searching for a shop.",

        // Contact
        contactTitle:
            "Contact Makkah Laundry Service",

        contactText:
            "Contact us to check laundry pickup availability in Makkah.",

        whatsappTitle: "WhatsApp",
        callTitle: "Call",
        emailTitle: "Email",
        serviceAreaTitle: "Service Area",

        // CTA
        finalTitle:
            "Need Laundry Pickup in Makkah?",

        finalText:
            "Send us your hotel name and room number on WhatsApp.",

        finalButton:
            "Order Laundry on WhatsApp",

        // Footer
        quickLinks: "Quick Links",

        footerText:
            "Laundry pickup and delivery service in Makkah.",

        privacy:
            "Privacy Policy",

        terms:
            "Terms & Conditions",

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
            "❌ Order ID Not Found",

        // Meta
        metaTitle:
            "Makkah Laundry Service | Laundry Pickup & Delivery Near Haram",

        metaDescription:
            "Makkah Laundry Service provides laundry pickup, washing, ironing, dry cleaning and hotel delivery in Makkah for pilgrims, visitors and hotel guests."
    },


    // =====================================================
    // ARABIC
    // =====================================================

    ar: {

        support: "🟢 خدمة غسيل الملابس متاحة",
        whatsapp: "واتساب",

        home: "الرئيسية",
        services: "الخدمات",
        pricing: "الأسعار",
        bookPickup: "حجز الاستلام",
        hotels: "الفنادق",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا",
        orderNow: "اطلب الآن",

        eyebrow:
            "خدمة استلام وتوصيل الملابس في مكة",

        heroTitle:
            "مغسلة ملابس في مكة بالقرب من برج الساعة",

        heroText:
            "خدمة سريعة ومريحة لغسيل الملابس مع الاستلام والتوصيل في مكة للحجاج والمعتمرين والزوار والمقيمين ونزلاء الفنادق.",

        heroServices:
            "غسيل وطي • كي الملابس • تنظيف جاف • استلام وتوصيل من الفندق",

        orderWhatsApp:
            "اطلب عبر واتساب",

        callNow:
            "اتصل الآن",

        locationNote:
            "📍 نخدم مكة، بما في ذلك وسط مكة والمناطق القريبة من برج الساعة حسب توفر خدمة الاستلام.",

        servicesTitle:
            "خدمات غسيل الملابس في مكة",

        servicesText:
            "حلول مريحة لغسيل الملابس لنزلاء الفنادق والحجاج والمعتمرين والزوار والمقيمين في مكة.",

        washFold:
            "غسيل وطي الملابس",

        washFoldText:
            "غسيل وطي احترافي للملابس اليومية.",

        ironing:
            "خدمة كي الملابس",

        ironingText:
            "كي مرتب ونظيف للثياب والقمصان والبناطيل وغيرها من الملابس.",

        dryCleaning:
            "تنظيف جاف",

        dryCleaningText:
            "خدمة تنظيف جاف للملابس المناسبة والملابس الخاصة.",

        hotelPickup:
            "استلام وتوصيل من الفندق",

        hotelPickupText:
            "نستلم ملابسك من الفنادق والمواقع المحددة ونعيدها بعد انتهاء الخدمة.",

        seoTitle:
            "مغسلة ملابس في مكة – استلام وتوصيل",

        seoText1:
            "هل تبحث عن مغسلة ملابس في مكة؟ نقدم خدمة استلام وتوصيل الملابس لنزلاء الفنادق والحجاج والمعتمرين والزوار والمقيمين.",

        seoText2:
            "تشمل خدماتنا غسيل الملابس في مكة، الغسيل والطي، كي الملابس، التنظيف الجاف واستلام وتوصيل الملابس.",

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

        pricingTitle:
            "أسعار غسيل الملابس في مكة",

        pricingText:
            "أسعار تبدأ من الأسعار الموضحة. قد يختلف السعر النهائي حسب الكمية ونوع الملابس والخدمة المطلوبة.",

        from15:
            "يبدأ من 15 ريال للكيس",

        from5:
            "يبدأ من 5 ريال للقطعة",

        from12:
            "يبدأ من 12 ريال للقطعة",

        bookNow:
            "احجز الآن",

        aboutTitle:
            "عن خدمة غسيل الملابس في مكة",

        aboutText1:
            "خدمة غسيل الملابس في مكة هي خدمة مريحة لاستلام وتوصيل الملابس في مكة.",

        aboutText2:
            "نساعد نزلاء الفنادق والحجاج والمعتمرين والزوار والمقيمين على إرسال واستلام ملابسهم دون الحاجة للبحث عن مغسلة.",

        aboutText3:
            "تشمل خدماتنا الغسيل والطي، كي الملابس، التنظيف الجاف واستلام وتوصيل الملابس من الفنادق.",

        checkAvailability:
            "تحقق من توفر الاستلام",

        bookingTitle:
            "حجز استلام الملابس في مكة",

        bookingText:
            "أدخل بياناتك وأرسل طلب غسيل الملابس عبر واتساب.",

        fullName:
            "الاسم الكامل",

        fullNamePlaceholder:
            "اكتب اسمك",

        hotelLocation:
            "الفندق / الموقع",

        selectHotel:
            "اختر الفندق / الموقع",

        roomNumber:
            "رقم الغرفة",

        roomPlaceholder:
            "رقم الغرفة",

        phone:
            "رقم واتساب / الهاتف",

        phonePlaceholder:
            "+966...",

        service:
            "الخدمة",

        selectService:
            "اختر الخدمة",

        washFoldOption:
            "غسيل وطي – يبدأ من 15 ريال/كيس",

        ironingOption:
            "كي الملابس – يبدأ من 5 ريال/قطعة",

        dryCleaningOption:
            "تنظيف جاف – يبدأ من 12 ريال/قطعة",

        washIronOption:
            "غسيل وطي + كي",

        serviceSpeed:
            "سرعة الخدمة",

        normal:
            "عادي – 24 ساعة",

        express:
            "سريع – حسب التوفر",

        pickupDate:
            "تاريخ الاستلام",

        pickupTime:
            "وقت الاستلام المفضل",

        clothesType:
            "نوع الملابس",

        clothesPlaceholder:
            "ثوب، قميص، بنطال، ملابس متنوعة...",

        quantity:
            "الكمية",

        quantityPlaceholder:
            "الكمية",

        specialNote:
            "ملاحظة خاصة",

        specialPlaceholder:
            "هل لديك تعليمات خاصة؟",

        sendBooking:
            "إرسال الطلب عبر واتساب",

        pickupAvailability:
            "قد يختلف توفر الاستلام حسب الموقع.",

        whyCustomers:
            "لماذا يختار العملاء خدمة غسيل الملابس لدينا؟",

        whyCustomersText:
            "خدمة مريحة مصممة لنزلاء الفنادق والزوار في مكة.",

        hotelPickupTitle:
            "استلام من الفندق",

        hotelPickupDescription:
            "استلام مريح من الفنادق والمواقع القريبة المحددة.",

        flexibleTitle:
            "خدمة مرنة",

        flexibleDescription:
            "اختر الخدمة العادية أو اسأل عن توفر الخدمة السريعة.",

        easyWhatsAppTitle:
            "حجز سهل عبر واتساب",

        easyWhatsAppDescription:
            "تواصل معنا مباشرة وأرسل اسم الفندق وطلب الغسيل.",

        makkahAreaTitle:
            "منطقة الخدمة في مكة",

        makkahAreaDescription:
            "نخدم وسط مكة والمناطق القريبة من برج الساعة.",

        hotelsTitle:
            "الفنادق القريبة من منطقة الاستلام في مكة",

        hotelsText:
            "يعتمد توفر الاستلام على موقع الفندق والوقت وتفاصيل الطلب.",

        hotelNote:
            "يرجى التواصل معنا قبل الطلب لتأكيد توفر الاستلام من الفندق.",

        faqTitle:
            "الأسئلة الشائعة",

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

        galleryTitle:
            "خدمة غسيل الملابس لدينا",

        galleryText:
            "غسيل، كي، تغليف وتوصيل.",

        hoursTitle:
            "ساعات العمل",

        saturdayThursday:
            "السبت – الخميس",

        friday:
            "الجمعة",

        hoursText:
            "يمكن إرسال طلبات واتساب في أي وقت. قد يختلف وقت الرد خارج ساعات العمل.",

        location:
            "الموقع",

        call:
            "اتصال",

        locationTitle:
            "موقع خدمة غسيل الملابس في مكة",

        locationText:
            "نخدم مكة والمناطق القريبة في وسط المدينة.",

        calculatorTitle:
            "حاسبة سعر غسيل الملابس",

        calculatorText:
            "احسب السعر التقديري المبدئي.",

        calculatorService:
            "الخدمة",

        calculatorQuantity:
            "الكمية",

        estimatedPrice:
            "السعر التقديري:",

        trackingTitle:
            "تتبع الطلب",

        trackingText:
            "إذا كان لديك رقم طلب، أدخله أدناه.",

        orderIdPlaceholder:
            "أدخل رقم الطلب",

        trackOrder:
            "تتبع الطلب",

        whyChooseTitle:
            "لماذا تختار خدمة غسيل الملابس في مكة؟",

        makkahFocused:
            "متخصصون في مكة",

        makkahFocusedText:
            "خدمتنا مخصصة للعملاء المقيمين والزائرين في مكة.",

        hotelFriendly:
            "مناسب للفنادق",

        hotelFriendlyText:
            "استلام وتوصيل مريح لنزلاء الفنادق.",

        fastCommunication:
            "تواصل سريع",

        fastCommunicationText:
            "تواصل سهل وسريع عبر واتساب.",

        convenientService:
            "خدمة مريحة",

        convenientServiceText:
            "أرسل طلب الغسيل دون الحاجة للبحث عن مغسلة.",

        contactTitle:
            "تواصل مع خدمة غسيل الملابس في مكة",

        contactText:
            "تواصل معنا لمعرفة توفر خدمة استلام الملابس في مكة.",

        whatsappTitle:
            "واتساب",

        callTitle:
            "اتصال",

        emailTitle:
            "البريد الإلكتروني",

        serviceAreaTitle:
            "منطقة الخدمة",

        finalTitle:
            "تحتاج خدمة استلام الملابس في مكة؟",

        finalText:
            "أرسل اسم الفندق ورقم الغرفة عبر واتساب.",

        finalButton:
            "اطلب غسيل الملابس عبر واتساب",

        quickLinks:
            "روابط سريعة",

        footerText:
            "خدمة استلام وتوصيل الملابس في مكة.",

        privacy:
            "سياسة الخصوصية",

        terms:
            "الشروط والأحكام",

        rights:
            "© 2026 خدمة غسيل الملابس في مكة. جميع الحقوق محفوظة.",

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
            "❌ رقم الطلب غير موجود",

        metaTitle:
            "مغسلة ملابس مكة | استلام وتوصيل الملابس بالقرب من الحرم",

        metaDescription:
            "خدمة غسيل الملابس في مكة مع الاستلام والتوصيل، الغسيل والطي، كي الملابس والتنظيف الجاف للحجاج والمعتمرين والزوار ونزلاء الفنادق."
    }
};


// =========================================================
// PAGE LOAD
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
    setupWhatsAppButtons();

    // Apply saved language
    const savedLanguage =
        localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";

    applyLanguage(savedLanguage);
});


// =========================================================
// MOBILE MENU
// =========================================================

function setupMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen =
            mainNav.classList.toggle("active");

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close Menu" : "Open Menu"
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );
    });

    mainNav.querySelectorAll("a").forEach(function (link) {

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

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {
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
            }
        );
    });
}


// =========================================================
// LANGUAGE BUTTON
// =========================================================

function setupLanguage() {

    const langBtn =
        document.getElementById("langBtn");

    if (!langBtn) {
        console.warn(
            "Language button #langBtn not found."
        );
        return;
    }

    langBtn.addEventListener(
        "click",
        function () {

            const current =
                document.documentElement.lang === "ar"
                    ? "ar"
                    : "en";

            const newLanguage =
                current === "ar"
                    ? "en"
                    : "ar";

            localStorage.setItem(
                LANGUAGE_STORAGE_KEY,
                newLanguage
            );

            applyLanguage(newLanguage);
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

    // -----------------------------------------------------
    // HTML LANGUAGE
    // -----------------------------------------------------

    document.documentElement.lang =
        language;

    document.documentElement.dir =
        isArabic ? "rtl" : "ltr";

    document.body.dir =
        isArabic ? "rtl" : "ltr";

    document.body.classList.toggle(
        "arabic-mode",
        isArabic
    );

    // -----------------------------------------------------
    // LANGUAGE BUTTON
    // -----------------------------------------------------

    const langBtn =
        document.getElementById("langBtn");

    if (langBtn) {

        langBtn.textContent =
            isArabic
                ? "English"
                : "العربية";

        langBtn.setAttribute(
            "aria-label",
            isArabic
                ? "Switch to English"
                : "التبديل إلى العربية"
        );
    }

    // -----------------------------------------------------
    // TOP BAR
    // -----------------------------------------------------

    const topSpan =
        document.querySelector(
            ".top-bar .container > span"
        );

    if (topSpan) {
        topSpan.textContent =
            t.support;
    }

    // -----------------------------------------------------
    // NAVIGATION
    // -----------------------------------------------------

    const navLinks =
        document.querySelectorAll(
            "#mainNav a, .nav a"
        );

    const navTexts = [
        t.home,
        t.services,
        t.pricing,
        t.bookPickup,
        t.hotels,
        t.faq,
        t.contact
    ];

    navLinks.forEach(function (link, index) {

        if (navTexts[index]) {
            link.textContent =
                navTexts[index];
        }

    });

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

    setText(
        ".hero .eyebrow",
        t.eyebrow
    );

    setText(
        ".hero h1",
        t.heroTitle
    );

    const heroParagraphs =
        document.querySelectorAll(
            ".hero-content > p"
        );

    if (heroParagraphs[0]) {
        heroParagraphs[0].textContent =
            t.heroText;
    }

    if (heroParagraphs[1]) {
        heroParagraphs[1].textContent =
            t.heroServices;
    }

    if (heroParagraphs[2]) {
        heroParagraphs[2].textContent =
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

    setText(
        "#services .section-heading h2",
        t.servicesTitle
    );

    setText(
        "#services .section-heading p",
        t.servicesText
    );

    const serviceCards =
        document.querySelectorAll(
            "#services .service-card"
        );

    const serviceData = [

        [
            t.washFold,
            t.washFoldText
        ],

        [
            t.ironing,
            t.ironingText
        ],

        [
            t.dryCleaning,
            t.dryCleaningText
        ],

        [
            t.hotelPickup,
            t.hotelPickupText
        ]
    ];

    serviceCards.forEach(
        function (card, index) {

            if (!serviceData[index]) {
                return;
            }

            const h3 =
                card.querySelector("h3");

            const p =
                card.querySelector("p");

            if (h3) {
                h3.textContent =
                    serviceData[index][0];
            }

            if (p) {
                p.textContent =
                    serviceData[index][1];
            }
        }
    );

    // -----------------------------------------------------
    // SEO
    // -----------------------------------------------------

    const seo =
        document.querySelector(
            ".seo-content"
        );

    if (seo) {

        const h2 =
            seo.querySelector("h2");

        const h3 =
            seo.querySelectorAll("h3");

        const p =
            seo.querySelectorAll("p");

        if (h2) {
            h2.textContent =
                t.seoTitle;
        }

        if (p[0]) {
            p[0].textContent =
                t.seoText1;
        }

        if (p[1]) {
            p[1].textContent =
                t.seoText2;
        }

        if (h3[0]) {
            h3[0].textContent =
                t.seoHotelTitle;
        }

        if (p[2]) {
            p[2].textContent =
                t.seoHotelText;
        }

        if (h3[1]) {
            h3[1].textContent =
                t.seoPilgrimTitle;
        }

        if (p[3]) {
            p[3].textContent =
                t.seoPilgrimText;
        }

        if (h3[2]) {
            h3[2].textContent =
                t.seoOrderTitle;
        }

        if (p[4]) {
            p[4].textContent =
                t.seoOrderText;
        }
    }

    // -----------------------------------------------------
    // PRICING
    // -----------------------------------------------------

    setText(
        "#pricing .section-heading h2",
        t.pricingTitle
    );

    setText(
        "#pricing .section-heading p",
        t.pricingText
    );

    const priceCards =
        document.querySelectorAll(
            "#pricing .price-card"
        );

    const priceData = [

        [
            t.washFold,
            t.from15
        ],

        [
            t.ironing,
            t.from5
        ],

        [
            t.dryCleaning,
            t.from12
        ]
    ];

    priceCards.forEach(
        function (card, index) {

            if (!priceData[index]) {
                return;
            }

            const h3 =
                card.querySelector("h3");

            const p =
                card.querySelector("p");

            const a =
                card.querySelector("a");

            if (h3) {
                h3.textContent =
                    priceData[index][0];
            }

            if (p) {
                p.textContent =
                    priceData[index][1];
            }

            if (a) {
                a.textContent =
                    t.bookNow;
            }
        }
    );

    // -----------------------------------------------------
    // ABOUT
    // -----------------------------------------------------

    setText(
        "#about h2",
        t.aboutTitle
    );

    const aboutP =
        document.querySelectorAll(
            "#about p"
        );

    if (aboutP[0])
        aboutP[0].textContent =
            t.aboutText1;

    if (aboutP[1])
        aboutP[1].textContent =
            t.aboutText2;

    if (aboutP[2])
        aboutP[2].textContent =
            t.aboutText3;

    setText(
        "#about .btn",
        t.checkAvailability
    );

    // -----------------------------------------------------
    // BOOKING FORM
    // -----------------------------------------------------

    setText(
        "#booking .section-heading h2",
        t.bookingTitle
    );

    setText(
        "#booking .section-heading p",
        t.bookingText
    );

    const bookingLabels =
        document.querySelectorAll(
            "#bookingForm label"
        );

    const labels = [

        t.fullName,
        t.hotelLocation,
        t.roomNumber,
        t.phone,
        t.service,
        t.serviceSpeed,
        t.pickupDate,
        t.pickupTime,
        t.clothesType,
        t.quantity
    ];

    bookingLabels.forEach(
        function (label, index) {

            if (labels[index]) {
                label.textContent =
                    labels[index];
            }
        }
    );

    setText(
        'label[for="specialNote"]',
        t.specialNote
    );

    setPlaceholder(
        "#fullName",
        t.fullNamePlaceholder
    );

    setPlaceholder(
        "#roomNumber",
        t.roomPlaceholder
    );

    setPlaceholder(
        "#customerPhone",
        t.phonePlaceholder
    );

    setPlaceholder(
        "#clothesType",
        t.clothesPlaceholder
    );

    setPlaceholder(
        "#clothQty",
        t.quantityPlaceholder
    );

    setPlaceholder(
        "#specialNote",
        t.specialPlaceholder
    );

    // -----------------------------------------------------
    // HOTEL SELECT
    // -----------------------------------------------------

    const hotelSelect =
        document.getElementById(
            "hotelName"
        );

    if (hotelSelect) {

        if (hotelSelect.options[0]) {

            hotelSelect.options[0].text =
                t.selectHotel;
        }
    }

    // -----------------------------------------------------
    // SERVICE SELECT
    // -----------------------------------------------------

    const serviceSelect =
        document.getElementById(
            "service"
        );

    if (serviceSelect) {

        const options = [

            t.selectService,
            t.washFoldOption,
            t.ironingOption,
            t.dryCleaningOption,
            t.washIronOption
        ];

        options.forEach(
            function (value, index) {

                if (
                    serviceSelect.options[index]
                ) {

                    serviceSelect.options[index].text =
                        value;
                }
            }
        );
    }

    // -----------------------------------------------------
    // SPEED SELECT
    // -----------------------------------------------------

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

    // -----------------------------------------------------
    // BOOKING NOTE
    // -----------------------------------------------------

    const bookingNote =
        document.querySelector(
            "#bookingForm .hotel-note, " +
            "#hotelName + .hotel-note"
        );

    if (bookingNote) {
        bookingNote.textContent =
            t.pickupAvailability;
    }

    // -----------------------------------------------------
    // BOOKING BUTTON
    // -----------------------------------------------------

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
    // HOTELS
    // -----------------------------------------------------

    setText(
        "#hotels .section-heading h2",
        t.hotelsTitle
    );

    setText(
        "#hotels .section-heading p",
        t.hotelsText
    );

    setText(
        "#hotels .hotel-note",
        t.hotelNote
    );

    // -----------------------------------------------------
    // FAQ
    // -----------------------------------------------------

    setText(
        "#faq .section-heading h2",
        t.faqTitle
    );

    const faqDetails =
        document.querySelectorAll(
            "#faq details"
        );

    const questions = [

        t.faq1Question,
        t.faq2Question,
        t.faq3Question,
        t.faq4Question,
        t.faq5Question,
        t.faq6Question
    ];

    const answers = [

        t.faq1Answer,
        t.faq2Answer,
        t.faq3Answer,
        t.faq4Answer,
        t.faq5Answer,
        t.faq6Answer
    ];

    faqDetails.forEach(
        function (detail, index) {

            const summary =
                detail.querySelector(
                    "summary"
                );

            const answer =
                detail.querySelector(
                    "p"
                );

            if (summary && questions[index]) {
                summary.textContent =
                    questions[index];
            }

            if (answer && answers[index]) {
                answer.textContent =
                    answers[index];
            }
        }
    );

    // -----------------------------------------------------
    // GALLERY
    // -----------------------------------------------------

    setText(
        "#gallery .section-heading h2",
        t.galleryTitle
    );

    setText(
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
                t.saturdayThursday +
                ":</strong> 08:00 – 23:00";
        }

        if (paragraphs[1]) {

            paragraphs[1].innerHTML =
                "<strong>" +
                t.friday +
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

    if (quickButtons[0]) {

        quickButtons[0].innerHTML =
            '<i class="fa-brands fa-whatsapp"></i> ' +
            t.whatsapp;
    }

    if (quickButtons[1]) {

        quickButtons[1].innerHTML =
            '<i class="fa-solid fa-phone"></i> ' +
            t.call;
    }

    if (quickButtons[2]) {

        quickButtons[2].innerHTML =
            '<i class="fa-solid fa-location-dot"></i> ' +
            t.location;
    }

    // -----------------------------------------------------
    // LOCATION
    // -----------------------------------------------------

    setText(
        "#location .section-heading h2",
        t.locationTitle
    );

    setText(
        "#location .section-heading p",
        t.locationText
    );

    // -----------------------------------------------------
    // CALCULATOR
    // -----------------------------------------------------

    setText(
        "#calculator .section-heading h2",
        t.calculatorTitle
    );

    setText(
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

        const currentResult =
            document.getElementById(
                "calcResult"
            )?.textContent || "15";

        calculatorResult.innerHTML =
            t.estimatedPrice +
            ' <strong><span id="calcResult">' +
            currentResult +
            '</span> SAR</strong>';
    }

    // -----------------------------------------------------
    // TRACKING
    // -----------------------------------------------------

    setText(
        "#tracking .section-heading h2",
        t.trackingTitle
    );

    setText(
        "#tracking .section-heading p",
        t.trackingText
    );

    setPlaceholder(
        "#orderId",
        t.orderIdPlaceholder
    );

    setText(
        "#trackOrder",
        t.trackOrder
    );

    // -----------------------------------------------------
    // WHY CHOOSE US
    // -----------------------------------------------------

    const whySection =
        document.getElementById(
            "why-us"
        );

    if (whySection) {

        setText(
            "#why-us .section-heading h2",
            t.whyChooseTitle
        );

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

    setText(
        "#contact .section-heading h2",
        t.contactTitle
    );

    setText(
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

            if (
                h3 &&
                contactData[index]
            ) {

                h3.textContent =
                    contactData[index];
            }
        }
    );

    // -----------------------------------------------------
    // FINAL CTA
    // -----------------------------------------------------

    setText(
        ".final-cta h2",
        t.finalTitle
    );

    setText(
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

        const footerP =
            footer.querySelector(
                ".footer-content > div:first-child p"
            );

        if (footerP) {
            footerP.textContent =
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
    // IMAGE ALT
    // -----------------------------------------------------

    const images =
        document.querySelectorAll(
            "#gallery img"
        );

    const englishAlt = [

        "Laundry washing service in Makkah",
        "Thobe ironing service in Makkah",
        "Laundry pickup and delivery in Makkah",
        "Dry cleaning service in Makkah"
    ];

    const arabicAlt = [

        "غسيل الملابس في مكة",
        "كي الثوب في مكة",
        "استلام وتوصيل الملابس في مكة",
        "تنظيف جاف للملابس في مكة"
    ];

    images.forEach(
        function (image, index) {

            if (isArabic) {

                if (arabicAlt[index]) {
                    image.alt =
                        arabicAlt[index];
                }

            } else {

                if (englishAlt[index]) {
                    image.alt =
                        englishAlt[index];
                }
            }
        }
    );

    // -----------------------------------------------------
    // PAGE TITLE
    // -----------------------------------------------------

    document.title =
        t.metaTitle;

    // -----------------------------------------------------
    // META DESCRIPTION
    // -----------------------------------------------------

    updateMeta(
        "description",
        t.metaDescription
    );

    // -----------------------------------------------------
    // OG TITLE
    // -----------------------------------------------------

    updateMeta(
        "og:title",
        t.metaTitle,
        "property"
    );

    // -----------------------------------------------------
    // OG DESCRIPTION
    // -----------------------------------------------------

    updateMeta(
        "og:description",
        t.metaDescription,
        "property"
    );

    // -----------------------------------------------------
    // TWITTER TITLE
    // -----------------------------------------------------

    updateMeta(
        "twitter:title",
        t.metaTitle,
        "name"
    );

    // -----------------------------------------------------
    // TWITTER DESCRIPTION
    // -----------------------------------------------------

    updateMeta(
        "twitter:description",
        t.metaDescription,
        "name"
    );

    // -----------------------------------------------------
    // SAVE LANGUAGE
    // -----------------------------------------------------

    localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        language
    );

    console.log(
        "Language applied:",
        language
    );
}


// =========================================================
// HELPER: TEXT
// =========================================================

function setText(selector, value) {

    const element =
        document.querySelector(selector);

    if (element && value !== undefined) {
        element.textContent = value;
    }
}


// =========================================================
// HELPER: PLACEHOLDER
// =========================================================

function setPlaceholder(selector, value) {

    const element =
        document.querySelector(selector);

    if (element && value !== undefined) {
        element.placeholder = value;
    }
}


// =========================================================
// META UPDATE
// =========================================================

function updateMeta(
    key,
    value,
    attribute = "name"
) {

    let meta =
        document.querySelector(
            `meta[${attribute}="${key}"]`
        );

    if (!meta) {

        meta =
            document.createElement(
                "meta"
            );

        meta.setAttribute(
            attribute,
            key
        );

        document.head.appendChild(
            meta
        );
    }

    meta.setAttribute(
        "content",
        value
    );
}


// =========================================================
// BOOKING FORM → WHATSAPP
// =========================================================

function setupBookingForm() {

    const bookingForm =
        document.getElementById(
            "bookingForm"
        );

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

            const language =
                document.documentElement.lang === "ar"
                    ? "ar"
                    : "en";

            let message;

            // -------------------------------------------------
            // ARABIC WHATSAPP MESSAGE
            // -------------------------------------------------

            if (language === "ar") {

                message =
                    `🧺 *طلب غسيل ملابس جديد*

👤 الاسم: ${fullName}

🏨 الفندق / الموقع: ${hotel}

🚪 رقم الغرفة: ${room}

📱 رقم العميل: ${phone}

🧼 الخدمة: ${service}

⚡ سرعة الخدمة: ${speed}

📅 تاريخ الاستلام: ${pickupDate}

🕒 وقت الاستلام: ${pickupTime}

👕 نوع الملابس: ${clothes}

🔢 الكمية: ${quantity}

📝 ملاحظات: ${note || "لا توجد"}

📍 *Makkah Laundry Service*`;

            }

            // -------------------------------------------------
            // ENGLISH WHATSAPP MESSAGE
            // -------------------------------------------------

            else {

                message =
                    `🧺 *NEW LAUNDRY ORDER*

👤 Name: ${fullName}

🏨 Hotel / Location: ${hotel}

🚪 Room: ${room}

📱 Customer Phone: ${phone}

🧼 Service: ${service}

⚡ Speed: ${speed}

📅 Pickup Date: ${pickupDate}

🕒 Pickup Time: ${pickupTime}

👕 Clothes: ${clothes}

🔢 Quantity: ${quantity}

📝 Special Instructions: ${note || "None"}

📍 *Makkah Laundry Service*`;
            }

            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(
                    message
                );

            window.open(
                whatsappURL,
                "_blank"
            );
        }
    );
}


// =========================================================
// WHATSAPP BUTTONS
// =========================================================

function setupWhatsAppButtons() {

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    '[href*="wa.me"], .whatsapp-btn'
                );

            if (!button) {
                return;
            }

            // If existing href already contains
            // a WhatsApp number, don't replace it.
            if (
                button.getAttribute("href") &&
                button
                    .getAttribute("href")
                    .includes("wa.me")
            ) {
                return;
            }

            event.preventDefault();

            window.open(
                "https://wa.me/" +
                WHATSAPP_NUMBER,
                "_blank"
            );
        }
    );
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

            const darkMode =
                document.body.classList.contains(
                    "dark-mode"
                );

            darkBtn.textContent =
                darkMode
                    ? "☀️"
                    : "🌙";

            localStorage.setItem(
                "makkahLaundryDarkMode",
                darkMode
                    ? "1"
                    : "0"
            );
        }
    );

    // Restore
    const saved =
        localStorage.getItem(
            "makkahLaundryDarkMode"
        );

    if (saved === "1") {

        document.body.classList.add(
            "dark-mode"
        );

        darkBtn.textContent =
            "☀️";
    }
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
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    pickupDate.min =
        `${year}-${month}-${day}`;
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

        totalElement.textContent =
            price * quantity;
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
        document.documentElement.lang === "ar"
            ? "ar"
            : "en";

    const t =
        translations[language];

    if (!orderID) {

        result.textContent =
            t.enterOrderId;

        return;
    }

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
