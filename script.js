"use strict";

/* =====================================================
   MAKKAH LAUNDRY SERVICE
   COMPLETE ENGLISH ↔ ARABIC SYSTEM
===================================================== */

const WHATSAPP_NUMBER = "966550865064";
const LANGUAGE_KEY = "makkahLaundryLanguage";


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

  en: {

    /* TOP */
    "🟢 Laundry Support Available": "🟢 Laundry Support Available",
    "WhatsApp": "WhatsApp",

    /* NAVIGATION */
    "Home": "Home",
    "Services": "Services",
    "Pricing": "Pricing",
    "Book Pickup": "Book Pickup",
    "Hotels": "Hotels",
    "FAQ": "FAQ",
    "Contact": "Contact",

    /* BUTTONS */
    "Order Now": "Order Now",
    "Order on WhatsApp": "Order on WhatsApp",
    "Call Now": "Call Now",
    "Book Now": "Book Now",
    "Check Pickup Availability": "Check Pickup Availability",
    "Send Booking on WhatsApp": "Send Booking on WhatsApp",
    "Track Order": "Track Order",
    "Call": "Call",
    "Location": "Location",
    "Order Laundry on WhatsApp": "Order Laundry on WhatsApp",
    "Call Us": "Call Us",
    "Email": "Email",

    /* HERO */
    "Laundry Pickup & Delivery in Makkah":
      "Laundry Pickup & Delivery in Makkah",

    "Makkah Laundry Service Near Makkah Clock Tower":
      "Makkah Laundry Service Near Makkah Clock Tower",

    "Fast and convenient laundry pickup and delivery in Makkah for pilgrims, visitors, residents and hotel guests.":
      "Fast and convenient laundry pickup and delivery in Makkah for pilgrims, visitors, residents and hotel guests.",

    "Wash & Fold • Ironing • Dry Cleaning • Hotel Pickup & Delivery":
      "Wash & Fold • Ironing • Dry Cleaning • Hotel Pickup & Delivery",

    "📍 Serving Makkah, including central Makkah and areas around Makkah Clock Tower, subject to pickup availability.":
      "📍 Serving Makkah, including central Makkah and areas around Makkah Clock Tower, subject to pickup availability.",

    /* SERVICES */
    "Laundry Services in Makkah":
      "Laundry Services in Makkah",

    "Convenient laundry solutions for hotel guests, pilgrims, visitors and residents in Makkah.":
      "Convenient laundry solutions for hotel guests, pilgrims, visitors and residents in Makkah.",

    "Wash & Fold":
      "Wash & Fold",

    "Professional washing and folding for everyday clothes.":
      "Professional washing and folding for everyday clothes.",

    "Ironing Service":
      "Ironing Service",

    "Clean and neat ironing for thobes, shirts, trousers and other clothes.":
      "Clean and neat ironing for thobes, shirts, trousers and other clothes.",

    "Dry Cleaning":
      "Dry Cleaning",

    "Dry cleaning service for suitable garments and special clothing.":
      "Dry cleaning service for suitable garments and special clothing.",

    "Hotel Pickup & Delivery":
      "Hotel Pickup & Delivery",

    "We collect your laundry from selected hotels and locations and return it after service.":
      "We collect your laundry from selected hotels and locations and return it after service.",

    /* PRICING */
    "Laundry Prices in Makkah":
      "Laundry Prices in Makkah",

    "Simple starting prices. Final price may depend on quantity, garment type and service requirements.":
      "Simple starting prices. Final price may depend on quantity, garment type and service requirements.",

    "From 15 SAR per bag":
      "From 15 SAR per bag",

    "From 5 SAR per item":
      "From 5 SAR per item",

    "From 12 SAR per item":
      "From 12 SAR per item",

    /* ABOUT */
    "About Makkah Laundry Service":
      "About Makkah Laundry Service",

    "Makkah Laundry Service is a convenient laundry pickup and delivery service in Makkah.":
      "Makkah Laundry Service is a convenient laundry pickup and delivery service in Makkah.",

    "We help hotel guests, pilgrims, visitors and residents arrange laundry collection and delivery without needing to search for a laundry shop.":
      "We help hotel guests, pilgrims, visitors and residents arrange laundry collection and delivery without needing to search for a laundry shop.",

    "Our services include wash & fold, ironing, dry cleaning and hotel laundry pickup and delivery.":
      "Our services include wash & fold, ironing, dry cleaning and hotel laundry pickup and delivery.",

    /* BOOKING */
    "Book Laundry Pickup in Makkah":
      "Book Laundry Pickup in Makkah",

    "Fill in your details and send your laundry request through WhatsApp.":
      "Fill in your details and send your laundry request through WhatsApp.",

    "Full Name":
      "Full Name",

    "Your name":
      "Your name",

    "Hotel / Location":
      "Hotel / Location",

    "Select Hotel / Location":
      "Select Hotel / Location",

    "Other Hotel / Location":
      "Other Hotel / Location",

    "Pickup availability may vary by location.":
      "Pickup availability may vary by location.",

    "Room Number":
      "Room Number",

    "Room number":
      "Room number",

    "WhatsApp / Phone":
      "WhatsApp / Phone",

    "Service":
      "Service",

    "Select Service":
      "Select Service",

    "Wash & Fold – From 15 SAR/bag":
      "Wash & Fold – From 15 SAR/bag",

    "Ironing – From 5 SAR/item":
      "Ironing – From 5 SAR/item",

    "Dry Cleaning – From 12 SAR/item":
      "Dry Cleaning – From 12 SAR/item",

    "Wash & Fold + Ironing":
      "Wash & Fold + Ironing",

    "Service Speed":
      "Service Speed",

    "Normal – 24h":
      "Normal – 24h",

    "Express – Subject to Availability":
      "Express – Subject to Availability",

    "Pickup Date":
      "Pickup Date",

    "Preferred Pickup Time":
      "Preferred Pickup Time",

    "Clothes Type":
      "Clothes Type",

    "Thobe, shirt, trousers, mixed clothes...":
      "Thobe, shirt, trousers, mixed clothes...",

    "Quantity":
      "Quantity",

    "Special Note":
      "Special Note",

    "Any special instructions?":
      "Any special instructions?",

    /* TRUST */
    "Why Customers Choose Our Laundry Service":
      "Why Customers Choose Our Laundry Service",

    "Convenient service designed for hotel guests and visitors in Makkah.":
      "Convenient service designed for hotel guests and visitors in Makkah.",

    "Hotel Pickup":
      "Hotel Pickup",

    "Convenient collection from selected hotels and nearby locations.":
      "Convenient collection from selected hotels and nearby locations.",

    "Flexible Service":
      "Flexible Service",

    "Choose normal service or ask about express availability.":
      "Choose normal service or ask about express availability.",

    "Easy WhatsApp Booking":
      "Easy WhatsApp Booking",

    "Contact us directly with your hotel and laundry requirements.":
      "Contact us directly with your hotel and laundry requirements.",

    "Makkah Service Area":
      "Makkah Service Area",

    "Serving central Makkah and locations around Makkah Clock Tower.":
      "Serving central Makkah and locations around Makkah Clock Tower.",

    /* HOTELS */
    "Hotels Near Our Makkah Pickup Area":
      "Hotels Near Our Makkah Pickup Area",

    "Pickup availability depends on hotel location, timing and order details.":
      "Pickup availability depends on hotel location, timing and order details.",

    "Please contact us before ordering to confirm pickup availability from your exact hotel.":
      "Please contact us before ordering to confirm pickup availability from your exact hotel.",

    /* FAQ */
    "Frequently Asked Questions":
      "Frequently Asked Questions",

    "Do you provide hotel laundry pickup in Makkah?":
      "Do you provide hotel laundry pickup in Makkah?",

    "Yes. We provide pickup and delivery from selected hotels and locations in Makkah. Availability depends on location and order time.":
      "Yes. We provide pickup and delivery from selected hotels and locations in Makkah. Availability depends on location and order time.",

    "Do you provide laundry near Makkah Clock Tower?":
      "Do you provide laundry near Makkah Clock Tower?",

    "Yes. We serve central Makkah and areas around Makkah Clock Tower, subject to pickup availability.":
      "Yes. We serve central Makkah and areas around Makkah Clock Tower, subject to pickup availability.",

    "How much does laundry cost?":
      "How much does laundry cost?",

    "Wash & Fold starts from 15 SAR per bag. Ironing starts from 5 SAR per item. Dry Cleaning starts from 12 SAR per item.":
      "Wash & Fold starts from 15 SAR per bag. Ironing starts from 5 SAR per item. Dry Cleaning starts from 12 SAR per item.",

    "Do you offer express laundry?":
      "Do you offer express laundry?",

    "Express service may be available depending on the order, location and workload. Please contact us on WhatsApp first.":
      "Express service may be available depending on the order, location and workload. Please contact us on WhatsApp first.",

    "How can I order?":
      "How can I order?",

    "Send us a WhatsApp message with your hotel name, room number, phone number and required laundry service.":
      "Send us a WhatsApp message with your hotel name, room number, phone number and required laundry service.",

    /* GALLERY */
    "Our Laundry Service":
      "Our Laundry Service",

    "Washing, ironing, packing and delivery.":
      "Washing, ironing, packing and delivery.",

    /* HOURS */
    "Business Hours":
      "Business Hours",

    "Saturday – Thursday:":
      "Saturday – Thursday:",

    "Friday:":
      "Friday:",

    "WhatsApp orders can be sent anytime. Response time may vary outside business hours.":
      "WhatsApp orders can be sent anytime. Response time may vary outside business hours.",

    /* LOCATION */
    "Makkah Laundry Service Location":
      "Makkah Laundry Service Location",

    "Serving Makkah and nearby central areas.":
      "Serving Makkah and nearby central areas.",

    /* CALCULATOR */
    "Laundry Price Calculator":
      "Laundry Price Calculator",

    "Calculate an estimated starting price.":
      "Calculate an estimated starting price.",

    "Estimated Price:":
      "Estimated Price:",

    /* TRACKING */
    "Order Tracking":
      "Order Tracking",

    "If you have an order ID, enter it below.":
      "If you have an order ID, enter it below.",

    "Enter Order ID":
      "Enter Order ID",

    /* WHY US */
    "Why Choose Makkah Laundry Service?":
      "Why Choose Makkah Laundry Service?",

    "Makkah Focused":
      "Makkah Focused",

    "Our service is focused on customers staying in Makkah.":
      "Our service is focused on customers staying in Makkah.",

    "Hotel Friendly":
      "Hotel Friendly",

    "Convenient pickup and delivery for hotel guests.":
      "Convenient pickup and delivery for hotel guests.",

    "Fast Communication":
      "Fast Communication",

    "Easy communication through WhatsApp.":
      "Easy communication through WhatsApp.",

    "Convenient Service":
      "Convenient Service",

    "Send your laundry request without searching for a shop.":
      "Send your laundry request without searching for a shop.",

    /* CONTACT */
    "Contact Makkah Laundry Service":
      "Contact Makkah Laundry Service",

    "Contact us to check laundry pickup availability in Makkah.":
      "Contact us to check laundry pickup availability in Makkah.",

    "Service Area":
      "Service Area",

    "Makkah, Saudi Arabia":
      "Makkah, Saudi Arabia",

    /* CTA */
    "Need Laundry Pickup in Makkah?":
      "Need Laundry Pickup in Makkah?",

    "Send us your hotel name and room number on WhatsApp.":
      "Send us your hotel name and room number on WhatsApp.",

    /* FOOTER */
    "Quick Links":
      "Quick Links",

    "Laundry pickup and delivery service in Makkah.":
      "Laundry pickup and delivery service in Makkah.",

    "Privacy Policy":
      "Privacy Policy",

    "Terms & Conditions":
      "Terms & Conditions",

    "All Rights Reserved.":
      "All Rights Reserved."
  },


  /* =====================================================
     ARABIC
  ===================================================== */

  ar: {

    "🟢 Laundry Support Available": "🟢 خدمة دعم الغسيل متاحة",
    "WhatsApp": "واتساب",

    "Home": "الرئيسية",
    "Services": "الخدمات",
    "Pricing": "الأسعار",
    "Book Pickup": "طلب الاستلام",
    "Hotels": "الفنادق",
    "FAQ": "الأسئلة الشائعة",
    "Contact": "اتصل بنا",

    "Order Now": "اطلب الآن",
    "Order on WhatsApp": "اطلب عبر واتساب",
    "Call Now": "اتصل الآن",
    "Book Now": "احجز الآن",
    "Check Pickup Availability": "تحقق من توفر الاستلام",
    "Send Booking on WhatsApp": "إرسال الطلب عبر واتساب",
    "Track Order": "تتبع الطلب",
    "Call": "اتصال",
    "Location": "الموقع",
    "Order Laundry on WhatsApp": "اطلب خدمة الغسيل عبر واتساب",
    "Call Us": "اتصل بنا",
    "Email": "البريد الإلكتروني",

    "Laundry Pickup & Delivery in Makkah":
      "خدمة استلام وتوصيل الملابس في مكة",

    "Makkah Laundry Service Near Makkah Clock Tower":
      "مغسلة ملابس في مكة بالقرب من برج الساعة",

    "Fast and convenient laundry pickup and delivery in Makkah for pilgrims, visitors, residents and hotel guests.":
      "خدمة سريعة ومريحة لاستلام وتوصيل الملابس في مكة للحجاج والزوار والمقيمين ونزلاء الفنادق.",

    "Wash & Fold • Ironing • Dry Cleaning • Hotel Pickup & Delivery":
      "غسيل وطي • كي الملابس • تنظيف جاف • استلام وتوصيل من الفنادق",

    "📍 Serving Makkah, including central Makkah and areas around Makkah Clock Tower, subject to pickup availability.":
      "📍 نخدم مكة، بما في ذلك المنطقة المركزية والمناطق المحيطة ببرج الساعة، حسب توفر خدمة الاستلام.",

    "Laundry Services in Makkah":
      "خدمات غسيل الملابس في مكة",

    "Convenient laundry solutions for hotel guests, pilgrims, visitors and residents in Makkah.":
      "حلول مريحة لغسيل الملابس لنزلاء الفنادق والحجاج والزوار والمقيمين في مكة.",

    "Wash & Fold":
      "غسيل وطي الملابس",

    "Professional washing and folding for everyday clothes.":
      "غسيل وطي احترافي للملابس اليومية.",

    "Ironing Service":
      "خدمة كي الملابس",

    "Clean and neat ironing for thobes, shirts, trousers and other clothes.":
      "كي نظيف ومرتب للثياب والقمصان والسراويل والملابس الأخرى.",

    "Dry Cleaning":
      "التنظيف الجاف",

    "Dry cleaning service for suitable garments and special clothing.":
      "خدمة التنظيف الجاف للملابس المناسبة والملابس الخاصة.",

    "Hotel Pickup & Delivery":
      "الاستلام والتوصيل من الفنادق",

    "We collect your laundry from selected hotels and locations and return it after service.":
      "نستلم ملابسك من الفنادق والمواقع المحددة ونعيدها إليك بعد الانتهاء من الخدمة.",

    "Laundry Prices in Makkah":
      "أسعار غسيل الملابس في مكة",

    "Simple starting prices. Final price may depend on quantity, garment type and service requirements.":
      "أسعار ابتدائية بسيطة. قد يختلف السعر النهائي حسب الكمية ونوع الملابس ومتطلبات الخدمة.",

    "From 15 SAR per bag":
      "ابتداءً من 15 ريال للكيس",

    "From 5 SAR per item":
      "ابتداءً من 5 ريال للقطعة",

    "From 12 SAR per item":
      "ابتداءً من 12 ريال للقطعة",

    "About Makkah Laundry Service":
      "عن مغسلة مكة",

    "Makkah Laundry Service is a convenient laundry pickup and delivery service in Makkah.":
      "مغسلة مكة هي خدمة مريحة لاستلام وتوصيل الملابس في مكة.",

    "We help hotel guests, pilgrims, visitors and residents arrange laundry collection and delivery without needing to search for a laundry shop.":
      "نساعد نزلاء الفنادق والحجاج والزوار والمقيمين على استلام وتوصيل الملابس دون الحاجة للبحث عن مغسلة.",

    "Our services include wash & fold, ironing, dry cleaning and hotel laundry pickup and delivery.":
      "تشمل خدماتنا غسيل وطي الملابس، وكي الملابس، والتنظيف الجاف، واستلام وتوصيل الملابس من الفنادق.",

    "Book Laundry Pickup in Makkah":
      "طلب استلام الملابس في مكة",

    "Fill in your details and send your laundry request through WhatsApp.":
      "أدخل بياناتك وأرسل طلب خدمة الغسيل عبر واتساب.",

    "Full Name":
      "الاسم الكامل",

    "Your name":
      "اسمك",

    "Hotel / Location":
      "الفندق / الموقع",

    "Select Hotel / Location":
      "اختر الفندق / الموقع",

    "Other Hotel / Location":
      "فندق / موقع آخر",

    "Pickup availability may vary by location.":
      "قد يختلف توفر الاستلام حسب الموقع.",

    "Room Number":
      "رقم الغرفة",

    "Room number":
      "رقم الغرفة",

    "WhatsApp / Phone":
      "واتساب / الهاتف",

    "Service":
      "الخدمة",

    "Select Service":
      "اختر الخدمة",

    "Wash & Fold – From 15 SAR/bag":
      "غسيل وطي – ابتداءً من 15 ريال للكيس",

    "Ironing – From 5 SAR/item":
      "كي الملابس – ابتداءً من 5 ريال للقطعة",

    "Dry Cleaning – From 12 SAR/item":
      "تنظيف جاف – ابتداءً من 12 ريال للقطعة",

    "Wash & Fold + Ironing":
      "غسيل وطي + كي الملابس",

    "Service Speed":
      "سرعة الخدمة",

    "Normal – 24h":
      "عادي – 24 ساعة",

    "Express – Subject to Availability":
      "سريع – حسب التوفر",

    "Pickup Date":
      "تاريخ الاستلام",

    "Preferred Pickup Time":
      "وقت الاستلام المفضل",

    "Clothes Type":
      "نوع الملابس",

    "Thobe, shirt, trousers, mixed clothes...":
      "ثوب، قميص، بنطلون، ملابس متنوعة...",

    "Quantity":
      "الكمية",

    "Special Note":
      "ملاحظة خاصة",

    "Any special instructions?":
      "هل لديك أي تعليمات خاصة؟",

    "Why Customers Choose Our Laundry Service":
      "لماذا يختار العملاء خدمة الغسيل لدينا؟",

    "Convenient service designed for hotel guests and visitors in Makkah.":
      "خدمة مريحة مصممة لنزلاء الفنادق والزوار في مكة.",

    "Hotel Pickup":
      "استلام من الفندق",

    "Convenient collection from selected hotels and nearby locations.":
      "استلام مريح من الفنادق المحددة والمواقع القريبة.",

    "Flexible Service":
      "خدمة مرنة",

    "Choose normal service or ask about express availability.":
      "اختر الخدمة العادية أو اسأل عن توفر الخدمة السريعة.",

    "Easy WhatsApp Booking":
      "طلب سهل عبر واتساب",

    "Contact us directly with your hotel and laundry requirements.":
      "تواصل معنا مباشرة وأرسل اسم الفندق ومتطلبات الغسيل.",

    "Makkah Service Area":
      "منطقة الخدمة في مكة",

    "Serving central Makkah and locations around Makkah Clock Tower.":
      "نخدم المنطقة المركزية في مكة والمناطق المحيطة ببرج الساعة.",

    "Hotels Near Our Makkah Pickup Area":
      "الفنادق القريبة من منطقة الاستلام في مكة",

    "Pickup availability depends on hotel location, timing and order details.":
      "يعتمد توفر الاستلام على موقع الفندق ووقت الطلب وتفاصيله.",

    "Please contact us before ordering to confirm pickup availability from your exact hotel.":
      "يرجى التواصل معنا قبل الطلب للتأكد من توفر الاستلام من فندقك.",

    "Frequently Asked Questions":
      "الأسئلة الشائعة",

    "Do you provide hotel laundry pickup in Makkah?":
      "هل توفرون استلام الملابس من الفنادق في مكة؟",

    "Yes. We provide pickup and delivery from selected hotels and locations in Makkah. Availability depends on location and order time.":
      "نعم، نوفر استلام وتوصيل الملابس من الفنادق والمواقع المحددة في مكة. يعتمد توفر الخدمة على الموقع ووقت الطلب.",

    "Do you provide laundry near Makkah Clock Tower?":
      "هل توفرون خدمة غسيل الملابس بالقرب من برج الساعة؟",

    "Yes. We serve central Makkah and areas around Makkah Clock Tower, subject to pickup availability.":
      "نعم، نخدم المنطقة المركزية والمناطق المحيطة ببرج الساعة في مكة حسب توفر خدمة الاستلام.",

    "How much does laundry cost?":
      "كم تكلفة غسيل الملابس؟",

    "Wash & Fold starts from 15 SAR per bag. Ironing starts from 5 SAR per item. Dry Cleaning starts from 12 SAR per item.":
      "تبدأ خدمة الغسيل والطي من 15 ريال للكيس، والكي من 5 ريال للقطعة، والتنظيف الجاف من 12 ريال للقطعة.",

    "Do you offer express laundry?":
      "هل توفرون خدمة الغسيل السريع؟",

    "Express service may be available depending on the order, location and workload. Please contact us on WhatsApp first.":
      "قد تتوفر الخدمة السريعة حسب الطلب والموقع وحجم العمل. يرجى التواصل معنا عبر واتساب أولاً.",

    "How can I order?":
      "كيف يمكنني الطلب؟",

    "Send us a WhatsApp message with your hotel name, room number, phone number and required laundry service.":
      "أرسل لنا رسالة عبر واتساب تحتوي على اسم الفندق ورقم الغرفة ورقم الهاتف والخدمة المطلوبة.",

    "Our Laundry Service":
      "خدمة الغسيل لدينا",

    "Washing, ironing, packing and delivery.":
      "الغسيل والكي والتغليف والتوصيل.",

    "Business Hours":
      "ساعات العمل",

    "Saturday – Thursday:":
      "السبت – الخميس:",

    "Friday:":
      "الجمعة:",

    "WhatsApp orders can be sent anytime. Response time may vary outside business hours.":
      "يمكن إرسال الطلبات عبر واتساب في أي وقت. قد يختلف وقت الرد خارج ساعات العمل.",

    "Makkah Laundry Service Location":
      "موقع خدمة مغسلة مكة",

    "Serving Makkah and nearby central areas.":
      "نخدم مكة والمناطق المركزية القريبة.",

    "Laundry Price Calculator":
      "حاسبة أسعار الغسيل",

    "Calculate an estimated starting price.":
      "احسب السعر التقديري المبدئي.",

    "Estimated Price:":
      "السعر التقديري:",

    "Order Tracking":
      "تتبع الطلب",

    "If you have an order ID, enter it below.":
      "إذا كان لديك رقم طلب، أدخله أدناه.",

    "Enter Order ID":
      "أدخل رقم الطلب",

    "Why Choose Makkah Laundry Service?":
      "لماذا تختار مغسلة مكة؟",

    "Makkah Focused":
      "متخصصون في مكة",

    "Our service is focused on customers staying in Makkah.":
      "خدمتنا مخصصة للعملاء المقيمين في مكة.",

    "Hotel Friendly":
      "مناسبة لنزلاء الفنادق",

    "Convenient pickup and delivery for hotel guests.":
      "استلام وتوصيل مريح لنزلاء الفنادق.",

    "Fast Communication":
      "تواصل سريع",

    "Easy communication through WhatsApp.":
      "تواصل سهل وسريع عبر واتساب.",

    "Convenient Service":
      "خدمة مريحة",

    "Send your laundry request without searching for a shop.":
      "أرسل طلب الغسيل الخاص بك دون الحاجة للبحث عن مغسلة.",

    "Contact Makkah Laundry Service":
      "تواصل مع مغسلة مكة",

    "Contact us to check laundry pickup availability in Makkah.":
      "تواصل معنا للتأكد من توفر خدمة استلام الملابس في مكة.",

    "Service Area":
      "منطقة الخدمة",

    "Makkah, Saudi Arabia":
      "مكة المكرمة، المملكة العربية السعودية",

    "Need Laundry Pickup in Makkah?":
      "هل تحتاج إلى خدمة استلام الملابس في مكة؟",

    "Send us your hotel name and room number on WhatsApp.":
      "أرسل لنا اسم الفندق ورقم الغرفة عبر واتساب.",

    "Quick Links":
      "روابط سريعة",

    "Laundry pickup and delivery service in Makkah.":
      "خدمة استلام وتوصيل الملابس في مكة.",

    "Privacy Policy":
      "سياسة الخصوصية",

    "Terms & Conditions":
      "الشروط والأحكام",

    "All Rights Reserved.":
      "جميع الحقوق محفوظة."
  }

};


/* =====================================================
   HELPER
===================================================== */

function translateText(text, language) {
  const clean = text.trim();

  if (!clean) {
    return text;
  }

  const dictionary = translations[language];

  if (dictionary && Object.prototype.hasOwnProperty.call(dictionary, clean)) {
    return text.replace(clean, dictionary[clean]);
  }

  return text;
}


/* =====================================================
   TRANSLATE TEXT NODES
===================================================== */

function translateTextNodes(language) {

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {

        const parent = node.parentElement;

        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        const tag = parent.tagName.toLowerCase();

        if (
          tag === "script" ||
          tag === "style" ||
          tag === "noscript" ||
          tag === "iframe"
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        if (!node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes = [];

  let node;

  while ((node = walker.nextNode())) {
    nodes.push(node);
  }

  nodes.forEach(function (textNode) {

    const original =
      textNode.getAttribute &&
      textNode.getAttribute("data-original-text");

    if (original) {

      const translated =
        translations[language][original] || original;

      textNode.nodeValue =
        textNode.nodeValue.replace(
          textNode.nodeValue.trim(),
          translated
        );

      return;
    }

    const value = textNode.nodeValue.trim();

    if (
      translations[language] &&
      Object.prototype.hasOwnProperty.call(
        translations[language],
        value
      )
    ) {

      if (!textNode.dataset) {
        return;
      }

      textNode.dataset.originalText = value;

      textNode.nodeValue =
        textNode.nodeValue.replace(
          value,
          translations[language][value]
        );
    }

  });
}


/* =====================================================
   TRANSLATE PLACEHOLDERS
===================================================== */

const placeholderTranslations = {

  "Your name": "اسمك",
  "Room number": "رقم الغرفة",
  "+966...": "+966...",
  "Thobe, shirt, trousers, mixed clothes...":
    "ثوب، قميص، بنطلون، ملابس متنوعة...",
  "Quantity": "الكمية",
  "Any special instructions?":
    "هل لديك أي تعليمات خاصة؟",
  "Enter Order ID":
    "أدخل رقم الطلب"
};


function translatePlaceholders(language) {

  const inputs = document.querySelectorAll(
    "input, textarea"
  );

  inputs.forEach(function (element) {

    if (!element.dataset.originalPlaceholder) {

      element.dataset.originalPlaceholder =
        element.getAttribute("placeholder") || "";

    }

    const original =
      element.dataset.originalPlaceholder;

    if (language === "ar") {

      element.placeholder =
        placeholderTranslations[original] || original;

    } else {

      element.placeholder = original;

    }

  });
}


/* =====================================================
   SELECT OPTIONS
===================================================== */

const optionTranslations = {

  "Select Hotel / Location":
    "اختر الفندق / الموقع",

  "Other Hotel / Location":
    "فندق / موقع آخر",

  "Select Service":
    "اختر الخدمة",

  "Wash & Fold – From 15 SAR/bag":
    "غسيل وطي – ابتداءً من 15 ريال للكيس",

  "Ironing – From 5 SAR/item":
    "كي الملابس – ابتداءً من 5 ريال للقطعة",

  "Dry Cleaning – From 12 SAR/item":
    "تنظيف جاف – ابتداءً من 12 ريال للقطعة",

  "Wash & Fold + Ironing":
    "غسيل وطي + كي الملابس",

  "Normal – 24h":
    "عادي – 24 ساعة",

  "Express – Subject to Availability":
    "سريع – حسب التوفر",

  "Wash & Fold – 15 SAR":
    "غسيل وطي – 15 ريال",

  "Ironing – 5 SAR":
    "كي الملابس – 5 ريال",

  "Dry Cleaning – 12 SAR":
    "تنظيف جاف – 12 ريال"
};


function translateOptions(language) {

  const selects = document.querySelectorAll("select");

  selects.forEach(function (select) {

    select.querySelectorAll("option").forEach(function (option) {

      if (!option.dataset.originalText) {

        option.dataset.originalText =
          option.textContent.trim();

      }

      const original =
        option.dataset.originalText;

      if (language === "ar") {

        option.textContent =
          optionTranslations[original] || original;

      } else {

        option.textContent = original;

      }

    });

  });
}


/* =====================================================
   META TRANSLATION
===================================================== */

function updateMeta(language) {

  const title = document.querySelector("title");

  const description =
    document.querySelector('meta[name="description"]');

  const ogTitle =
    document.querySelector('meta[property="og:title"]');

  const ogDescription =
    document.querySelector('meta[property="og:description"]');

  const twitterTitle =
    document.querySelector('meta[name="twitter:title"]');

  const twitterDescription =
    document.querySelector('meta[name="twitter:description"]');

  if (language === "ar") {

    if (title) {
      title.textContent =
        "مغسلة ملابس في مكة | استلام وتوصيل من الفنادق بالقرب من الحرم";
    }

    if (description) {
      description.content =
        "مغسلة ملابس في مكة تقدم خدمة استلام وتوصيل الملابس من الفنادق بالقرب من المسجد الحرام وبرج الساعة. غسيل وطي، كي، تنظيف جاف وخدمة سريعة للحجاج والزوار والمقيمين.";
    }

    if (ogTitle) {
      ogTitle.content =
        "مغسلة ملابس في مكة | استلام وتوصيل من الفنادق";
    }

    if (ogDescription) {
      ogDescription.content =
        "خدمة غسيل واستلام وتوصيل الملابس في مكة للحجاج والزوار ونزلاء الفنادق.";
    }

    if (twitterTitle) {
      twitterTitle.content =
        "مغسلة ملابس في مكة | استلام وتوصيل";
    }

    if (twitterDescription) {
      twitterDescription.content =
        "خدمة غسيل الملابس واستلامها وتوصيلها من الفنادق في مكة بالقرب من الحرم.";
    }

  } else {

    if (title) {
      title.textContent =
        "Makkah Laundry Service | Hotel Laundry Pickup & Delivery Near Haram";
    }

    if (description) {
      description.content =
        "Makkah Laundry Service provides hotel laundry pickup and delivery near Masjid Al Haram and Makkah Clock Tower. Wash & fold, ironing, dry cleaning and express laundry for pilgrims, visitors and residents. Order by WhatsApp.";
    }

    if (ogTitle) {
      ogTitle.content =
        "Makkah Laundry Service | Hotel Laundry Pickup & Delivery Near Haram";
    }

    if (ogDescription) {
      ogDescription.content =
        "Laundry pickup and delivery in Makkah for hotels, pilgrims, visitors and residents. Wash & fold, ironing, dry cleaning and express service.";
    }

    if (twitterTitle) {
      twitterTitle.content =
        "Makkah Laundry Service | Laundry Pickup & Delivery";
    }

    if (twitterDescription) {
      twitterDescription.content =
        "Hotel laundry pickup and delivery in Makkah near Haram and Makkah Clock Tower.";
    }

  }
}


/* =====================================================
   LANGUAGE
===================================================== */

function applyLanguage(language) {

  if (language !== "ar" && language !== "en") {
    language = "en";
  }

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";

  document.body.dir =
    language === "ar" ? "rtl" : "ltr";

  document.body.classList.toggle(
    "arabic-mode",
    language === "ar"
  );

  translateTextNodes(language);
  translatePlaceholders(language);
  translateOptions(language);
  updateMeta(language);

  const langBtn =
    document.getElementById("langBtn");

  if (langBtn) {

    langBtn.textContent =
      language === "ar"
        ? "English"
        : "العربية";

    langBtn.setAttribute(
      "aria-label",
      language === "ar"
        ? "تغيير اللغة إلى الإنجليزية"
        : "Switch language"
    );
  }

  localStorage.setItem(
    LANGUAGE_KEY,
    language
  );

  window.currentLanguage = language;
}


/* =====================================================
   LANGUAGE BUTTON
===================================================== */

function setupLanguage() {

  const langBtn =
    document.getElementById("langBtn");

  const savedLanguage =
    localStorage.getItem(LANGUAGE_KEY) || "ar";

  applyLanguage(savedLanguage);

  if (!langBtn) {
    return;
  }

  langBtn.addEventListener(
    "click",
    function () {

      const current =
        localStorage.getItem(LANGUAGE_KEY) || "ar";

      const next =
        current === "ar"
          ? "en"
          : "ar";

      applyLanguage(next);

    }
  );
}


/* =====================================================
   MOBILE MENU
===================================================== */

function setupMobileMenu() {

  const menuToggle =
    document.getElementById("menuToggle");

  const mainNav =
    document.querySelector(".nav");

  if (!menuToggle || !mainNav) {
    return;
  }

  menuToggle.addEventListener(
    "click",
    function () {

      mainNav.classList.toggle("active");

    }
  );

  mainNav.querySelectorAll("a").forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {

          mainNav.classList.remove("active");

        }
      );

    }
  );
}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

function setupSmoothScroll() {

  document.querySelectorAll(
    'a[href^="#"]'
  ).forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });
}


/* =====================================================
   BOOKING
===================================================== */

function setupBooking() {

  const form =
    document.getElementById("bookingForm");

  if (!form) {
    return;
  }

  form.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const language =
        localStorage.getItem(LANGUAGE_KEY) || "ar";

      const name =
        document.getElementById("fullName")?.value || "";

      const hotel =
        document.getElementById("hotelName")?.value || "";

      const room =
        document.getElementById("roomNumber")?.value || "";

      const phone =
        document.getElementById("customerPhone")?.value || "";

      const service =
        document.getElementById("service")?.value || "";

      const speed =
        document.getElementById("serviceSpeed")?.value || "";

      const date =
        document.getElementById("pickupDate")?.value || "";

      const time =
        document.getElementById("pickupTime")?.value || "";

      const clothes =
        document.getElementById("clothesType")?.value || "";

      const quantity =
        document.getElementById("clothQty")?.value || "";

      const note =
        document.getElementById("specialNote")?.value || "";

      let message = "";

      if (language === "ar") {

        message =
`السلام عليكم، أريد طلب خدمة غسيل الملابس.

الاسم: ${name}
الفندق / الموقع: ${hotel}
رقم الغرفة: ${room}
رقم الهاتف / واتساب: ${phone}
الخدمة: ${service}
سرعة الخدمة: ${speed}
تاريخ الاستلام: ${date}
وقت الاستلام: ${time}
نوع الملابس: ${clothes}
الكمية: ${quantity}
ملاحظة: ${note}

يرجى تأكيد توفر خدمة الاستلام.`;

      } else {

        message =
`Hello, I would like to book laundry pickup.

Name: ${name}
Hotel / Location: ${hotel}
Room Number: ${room}
Phone / WhatsApp: ${phone}
Service: ${service}
Service Speed: ${speed}
Pickup Date: ${date}
Pickup Time: ${time}
Clothes Type: ${clothes}
Quantity: ${quantity}
Special Note: ${note}

Please confirm pickup availability.`;

      }

      const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

      window.open(
        url,
        "_blank",
        "noopener"
      );

    }
  );
}


/* =====================================================
   DATE
===================================================== */

function setupDate() {

  const date =
    document.getElementById("pickupDate");

  if (!date) {
    return;
  }

  const today =
    new Date().toISOString().split("T")[0];

  date.min = today;

  if (!date.value) {
    date.value = today;
  }
}


/* =====================================================
   CALCULATOR
===================================================== */

function setupCalculator() {

  const service =
    document.getElementById("calcService");

  const quantity =
    document.getElementById("calcQuantity");

  const result =
    document.getElementById("calcResult");

  if (!service || !quantity || !result) {
    return;
  }

  function calculate() {

    const price =
      parseFloat(service.value) || 0;

    const qty =
      parseInt(quantity.value) || 1;

    result.textContent =
      price * qty;

  }

  service.addEventListener(
    "change",
    calculate
  );

  quantity.addEventListener(
    "input",
    calculate
  );

  calculate();
}


/* =====================================================
   ORDER TRACKING
===================================================== */

function setupTracking() {

  const button =
    document.getElementById("trackOrder");

  const input =
    document.getElementById("orderId");

  const result =
    document.getElementById("trackingResult");

  if (!button || !input || !result) {
    return;
  }

  button.addEventListener(
    "click",
    function () {

      const language =
        localStorage.getItem(LANGUAGE_KEY) || "ar";

      const orderId =
        input.value.trim();

      if (!orderId) {

        result.textContent =
          language === "ar"
            ? "يرجى إدخال رقم الطلب."
            : "Please enter your order ID.";

        return;
      }

      result.textContent =
        language === "ar"
          ? "تم استلام رقم الطلب. يرجى التواصل معنا عبر واتساب لمعرفة حالة الطلب."
          : "Order ID received. Please contact us on WhatsApp for the latest order status.";

    }
  );
}


/* =====================================================
   SERVICE WORKER
===================================================== */

function setupServiceWorker() {

  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener(
    "load",
    function () {

      navigator.serviceWorker
        .register(
          "service-worker.js?v=20260913"
        )
        .then(function () {

          console.log(
            "Service Worker registered."
          );

        })
        .catch(function (error) {

          console.log(
            "Service Worker registration failed:",
            error
          );

        });

    }
  );
}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    console.log(
      "Makkah Laundry Service Loaded"
    );

    setupLanguage();
    setupMobileMenu();
    setupSmoothScroll();
    setupBooking();
    setupDate();
    setupCalculator();
    setupTracking();
    setupServiceWorker();

  }
);
