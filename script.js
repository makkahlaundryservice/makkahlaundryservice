"use strict";

/* =========================================================
   MAKKAH LAUNDRY SERVICE
   STABLE ARABIC / ENGLISH LANGUAGE SYSTEM
   ========================================================= */

const WHATSAPP_NUMBER = "966550865064";
const LANGUAGE_KEY = "makkahLaundryLanguage";

const ARABIC = "ar";
const ENGLISH = "en";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  "Laundry Support Available": "خدمة دعم الغسيل متاحة",

  "Home": "الرئيسية",
  "Services": "الخدمات",
  "Pricing": "الأسعار",
  "Book Pickup": "حجز الاستلام",
  "Hotels": "الفنادق",
  "FAQ": "الأسئلة الشائعة",
  "Contact": "اتصل بنا",

  "Order Now": "اطلب الآن",

  "Laundry Pickup & Delivery in Makkah":
    "استلام وتوصيل الملابس في مكة",

  "Makkah Laundry Service Near Makkah Clock Tower":
    "خدمة مغسلة ملابس في مكة بالقرب من برج الساعة",

  "Fast and convenient laundry pickup and delivery in Makkah for pilgrims, visitors, residents and hotel guests.":
    "خدمة سريعة ومريحة لاستلام وتوصيل الملابس في مكة للحجاج والزوار والمقيمين ونزلاء الفنادق.",

  "Wash & Fold • Ironing • Dry Cleaning • Hotel Pickup & Delivery":
    "غسيل وطي • كي الملابس • تنظيف جاف • استلام وتوصيل من الفنادق",

  "Order on WhatsApp": "اطلب عبر واتساب",
  "Call Now": "اتصل الآن",

  "📍 Serving Makkah, including central Makkah and areas around Makkah Clock Tower, subject to pickup availability.":
    "📍 نخدم مكة، بما في ذلك وسط مكة والمناطق المحيطة ببرج الساعة، حسب توفر خدمة الاستلام.",


  /* SERVICES */

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
    "نستلم ملابسك من الفنادق والمواقع المحددة ونعيدها إليك بعد إتمام الخدمة.",


  /* PRICING */

  "Laundry Prices in Makkah":
    "أسعار غسيل الملابس في مكة",

  "Simple starting prices. Final price may depend on quantity, garment type and service requirements.":
    "أسعار ابتدائية بسيطة. قد يختلف السعر النهائي حسب الكمية ونوع الملابس ومتطلبات الخدمة.",

  "Ironing":
    "كي الملابس",

  "Book Now":
    "احجز الآن",

  "From 15 SAR per bag":
    "ابتداءً من 15 ريال للكيس",

  "From 5 SAR per item":
    "ابتداءً من 5 ريال للقطعة",

  "From 12 SAR per item":
    "ابتداءً من 12 ريال للقطعة",


  /* ABOUT */

  "About Makkah Laundry Service":
    "عن خدمة مغسلة مكة",

  "Makkah Laundry Service is a convenient laundry pickup and delivery service in Makkah.":
    "مغسلة مكة هي خدمة مريحة لاستلام وتوصيل الملابس في مكة.",

  "We help hotel guests, pilgrims, visitors and residents arrange laundry collection and delivery without needing to search for a laundry shop.":
    "نساعد نزلاء الفنادق والحجاج والزوار والمقيمين على ترتيب استلام وتوصيل الملابس دون الحاجة للبحث عن مغسلة.",

  "Our services include wash & fold, ironing, dry cleaning and hotel laundry pickup and delivery.":
    "تشمل خدماتنا غسيل وطي الملابس، وكي الملابس، والتنظيف الجاف، واستلام وتوصيل الملابس من الفنادق.",

  "Check Pickup Availability":
    "تحقق من توفر خدمة الاستلام",


  /* BOOKING */

  "Book Laundry Pickup in Makkah":
    "احجز استلام الملابس في مكة",

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
    "غسيل وطي – ابتداءً من 15 ريال/كيس",

  "Ironing – From 5 SAR/item":
    "كي الملابس – ابتداءً من 5 ريال/قطعة",

  "Dry Cleaning – From 12 SAR/item":
    "التنظيف الجاف – ابتداءً من 12 ريال/قطعة",

  "Wash & Fold + Ironing":
    "غسيل وطي + كي",

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
    "ثوب، قميص، بنطال، ملابس متنوعة...",

  "Quantity":
    "الكمية",

  "Special Note":
    "ملاحظات خاصة",

  "Any special instructions?":
    "هل توجد تعليمات خاصة؟",

  "Send Booking on WhatsApp":
    "إرسال الحجز عبر واتساب",

  "Pickup availability may vary by location.":
    "قد يختلف توفر الاستلام حسب الموقع.",


  /* TRUST */

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
    "حجز سهل عبر واتساب",

  "Contact us directly with your hotel and laundry requirements.":
    "تواصل معنا مباشرة وأرسل اسم الفندق واحتياجات الغسيل.",

  "Makkah Service Area":
    "منطقة الخدمة في مكة",

  "Serving central Makkah and locations around Makkah Clock Tower.":
    "نخدم وسط مكة والمناطق المحيطة ببرج الساعة.",


  /* HOTELS */

  "Hotels Near Our Makkah Pickup Area":
    "الفنادق القريبة من منطقة الاستلام في مكة",

  "Pickup availability depends on hotel location, timing and order details.":
    "يعتمد توفر الاستلام على موقع الفندق والوقت وتفاصيل الطلب.",

  "Please contact us before ordering to confirm pickup availability from your exact hotel.":
    "يرجى التواصل معنا قبل الطلب للتأكد من توفر الاستلام من فندقك.",


  /* FAQ */

  "Frequently Asked Questions":
    "الأسئلة الشائعة",

  "Do you provide hotel laundry pickup in Makkah?":
    "هل توفرون خدمة استلام الملابس من الفنادق في مكة؟",

  "Yes. We provide pickup and delivery from selected hotels and locations in Makkah. Availability depends on location and order time.":
    "نعم. نوفر خدمة الاستلام والتوصيل من الفنادق والمواقع المحددة في مكة. يعتمد توفر الخدمة على الموقع ووقت الطلب.",

  "Do you provide laundry near Makkah Clock Tower?":
    "هل توفرون خدمة غسيل الملابس بالقرب من برج الساعة في مكة؟",

  "Yes. We serve central Makkah and areas around Makkah Clock Tower, subject to pickup availability.":
    "نعم. نخدم وسط مكة والمناطق المحيطة ببرج الساعة حسب توفر خدمة الاستلام.",

  "How much does laundry cost?":
    "كم تكلفة غسيل الملابس؟",

  "Wash & Fold starts from 15 SAR per bag. Ironing starts from 5 SAR per item. Dry Cleaning starts from 12 SAR per item.":
    "يبدأ غسيل وطي الملابس من 15 ريال للكيس. ويبدأ كي الملابس من 5 ريال للقطعة. ويبدأ التنظيف الجاف من 12 ريال للقطعة.",

  "Do you offer express laundry?":
    "هل توفرون خدمة الغسيل السريع؟",

  "Express service may be available depending on the order, location and workload. Please contact us on WhatsApp first.":
    "قد تتوفر الخدمة السريعة حسب الطلب والموقع وحجم العمل. يرجى التواصل معنا عبر واتساب أولاً.",

  "How can I order?":
    "كيف يمكنني الطلب؟",

  "Send us a WhatsApp message with your hotel name, room number, phone number and required laundry service.":
    "أرسل لنا رسالة عبر واتساب تحتوي على اسم الفندق ورقم الغرفة ورقم الهاتف وخدمة الغسيل المطلوبة.",

  "هل توجد خدمة غسيل ملابس في مكة؟":
    "هل توجد خدمة غسيل ملابس في مكة؟",

  "نعم، نوفر خدمة غسيل وكي الملابس مع الاستلام والتوصيل في مكة حسب الموقع والتوفر.":
    "نعم، نوفر خدمة غسيل وكي الملابس مع الاستلام والتوصيل في مكة حسب الموقع والتوفر.",


  /* LOCAL SEO */

  "Laundry Near Me in Makkah – Pickup & Delivery":
    "مغسلة ملابس قريبة مني في مكة – استلام وتوصيل",

  "Looking for a reliable":
    "هل تبحث عن",

  "laundry near me in Makkah":
    "مغسلة ملابس قريبة مني في مكة",

  "? Makkah Laundry Service provides convenient laundry pickup and delivery for hotel guests, pilgrims, visitors and residents.":
    "؟ تقدم خدمة مغسلة مكة خدمة مريحة لاستلام وتوصيل الملابس لنزلاء الفنادق والحجاج والزوار والمقيمين.",

  "Our service includes":
    "تشمل خدمتنا",

  "hotel laundry in Makkah":
    "غسيل ملابس الفنادق في مكة",

  "wash and fold":
    "غسيل وطي الملابس",

  "clothes ironing":
    "كي الملابس",

  "dry cleaning":
    "التنظيف الجاف",

  "and":
    "و",

  "laundry pickup and delivery":
    "استلام وتوصيل الملابس",

  "Hotel Laundry Near Makkah Clock Tower":
    "غسيل الملابس بالقرب من برج الساعة في مكة",

  "If you are staying near the Makkah Clock Tower or central Makkah, you can contact us on WhatsApp to check pickup availability. Send your hotel name, room number and required service.":
    "إذا كنت تقيم بالقرب من برج الساعة أو في وسط مكة، يمكنك التواصل معنا عبر واتساب للتحقق من توفر خدمة الاستلام. أرسل اسم الفندق ورقم الغرفة والخدمة المطلوبة.",

  "Laundry Service for Umrah Pilgrims":
    "خدمة غسيل الملابس لمعتمري مكة",

  "Pilgrims often need clean clothes during their stay in Makkah. Our laundry pickup and delivery service makes it easier to send your clothes for washing, ironing or dry cleaning without looking for a laundry shop yourself.":
    "غالبًا ما يحتاج الحجاج والمعتمرون إلى ملابس نظيفة أثناء إقامتهم في مكة. تجعل خدمة استلام وتوصيل الملابس لدينا إرسال ملابسك للغسيل أو الكي أو التنظيف الجاف أسهل دون الحاجة إلى البحث عن مغسلة بنفسك.",

  "How to Order Laundry in Makkah":
    "كيفية طلب خدمة غسيل الملابس في مكة",

  "Simply contact us on WhatsApp, tell us your hotel or location, room number and laundry requirement. We will confirm pickup availability and arrange the service.":
    "ما عليك سوى التواصل معنا عبر واتساب وإرسال اسم الفندق أو الموقع ورقم الغرفة واحتياجك من خدمة الغسيل. سنؤكد توفر الاستلام ونرتب الخدمة.",

  "🟢 Laundry Support Available":
    "🟢 خدمة دعم الغسيل متاحة",

  /* GALLERY */

  "Our Laundry Service":
    "خدمة الغسيل لدينا",

  "Washing, ironing, packing and delivery.":
    "غسيل وكي وتغليف وتوصيل الملابس.",


  /* HOURS */

  "Business Hours":
    "ساعات العمل",

  "Open 24 Hours:":
    "مفتوح 24 ساعة:",

  "Every day":
    "كل يوم",

  "Saturday – Thursday:":
    "السبت – الخميس:",

  "Friday:":
    "الجمعة:",

  "WhatsApp orders can be sent anytime. Response time may vary outside business hours.":
    "يمكن إرسال الطلبات عبر واتساب في أي وقت. قد يختلف وقت الرد خارج ساعات العمل.",


  /* QUICK ACTIONS */

  "WhatsApp":
    "واتساب",

  "Call":
    "اتصال",

  "Location":
    "الموقع",


  /* LOCATION */

  "Makkah Laundry Service Location":
    "موقع خدمة مغسلة مكة",

  "Serving Makkah and nearby central areas.":
    "نخدم مكة والمناطق المركزية القريبة.",


  /* CALCULATOR */

  "Laundry Price Calculator":
    "حاسبة أسعار الغسيل",

  "Calculate an estimated starting price.":
    "احسب السعر الابتدائي التقريبي.",

  "Estimated Price:":
    "السعر التقديري:",


  /* TRACKING */

  "Order Tracking":
    "تتبع الطلب",

  "If you have an order ID, enter it below.":
    "إذا كان لديك رقم طلب، أدخله أدناه.",

  "Enter Order ID":
    "أدخل رقم الطلب",

  "Track Order":
    "تتبع الطلب",


  /* WHY US */

  "Why Choose Makkah Laundry Service?":
    "لماذا تختار خدمة مغسلة مكة؟",

  "Makkah Focused":
    "متخصصون في خدمة مكة",

  "Our service is focused on customers staying in Makkah.":
    "نركز خدماتنا على العملاء المقيمين في مكة.",

  "Hotel Friendly":
    "مناسب لنزلاء الفنادق",

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


  /* CONTACT */

  "Contact Makkah Laundry Service":
    "اتصل بخدمة مغسلة مكة",

  "Contact us to check laundry pickup availability in Makkah.":
    "تواصل معنا للتحقق من توفر خدمة استلام الملابس في مكة.",

  "Email":
    "البريد الإلكتروني",

  "Service Area":
    "منطقة الخدمة",

  "Makkah, Saudi Arabia":
    "مكة، المملكة العربية السعودية",

  "Call Us":
    "اتصل بنا",


  /* CTA */

  "Need Laundry Pickup in Makkah?":
    "هل تحتاج إلى استلام الملابس في مكة؟",

  "Send us your hotel name and room number on WhatsApp.":
    "أرسل لنا اسم الفندق ورقم الغرفة عبر واتساب.",

  "Order Laundry on WhatsApp":
    "اطلب خدمة الغسيل عبر واتساب",


  /* FOOTER */

  "Laundry pickup and delivery service in Makkah.":
    "خدمة استلام وتوصيل الملابس في مكة.",

  "Quick Links":
    "روابط سريعة",

  "© 2026 Makkah Laundry Service. All Rights Reserved.":
    "© 2026 Makkah Laundry Service. جميع الحقوق محفوظة.",

  "Privacy Policy":
    "سياسة الخصوصية",

  "Terms & Conditions":
    "الشروط والأحكام"
};


/* =========================================================
   HOTEL TRANSLATIONS
   ========================================================= */

const hotelArabic = {

  "Select Hotel / Location":
    "اختر الفندق / الموقع",

  "Swissôtel Makkah":
    "سويس أوتيل مكة",

  "Swissôtel Al Maqam":
    "سويس أوتيل المقام",

  "Pullman ZamZam Makkah":
    "بولمان زمزم مكة",

  "Fairmont Makkah Clock Royal Tower":
    "فيرمونت مكة برج الساعة",

  "Raffles Makkah Palace":
    "رافلز مكة بالاس",

  "Mövenpick Hajar Tower":
    "موفنبيك برج هاجر",

  "Address Jabal Omar":
    "العنوان جبل عمر",

  "Conrad Makkah":
    "كونراد مكة",

  "Anjum Hotel":
    "فندق أنجم",

  "Hilton Suites Makkah":
    "أجنحة هيلتون مكة",

  "Other Hotel / Location":
    "فندق / موقع آخر"
};


/* =========================================================
   PLACEHOLDERS
   ========================================================= */

const placeholderArabic = {

  "Your name":
    "اسمك",

  "Room number":
    "رقم الغرفة",

  "Thobe, shirt, trousers, mixed clothes...":
    "ثوب، قميص، بنطال، ملابس متنوعة...",

  "Any special instructions?":
    "هل توجد تعليمات خاصة؟",

  "Enter Order ID":
    "أدخل رقم الطلب"
};


/* =========================================================
   ALT TEXT
   ========================================================= */

const altArabic = {

  "Makkah Laundry Service logo":
    "شعار خدمة مغسلة مكة",

  "Laundry washing service in Makkah":
    "خدمة غسيل الملابس في مكة",

  "Thobe ironing service in Makkah":
    "خدمة كي الثياب في مكة",

  "Laundry pickup and delivery in Makkah":
    "استلام وتوصيل الملابس في مكة",

  "Dry cleaning service in Makkah":
    "خدمة التنظيف الجاف في مكة",

  "Makkah Laundry Service":
    "خدمة مغسلة مكة"
};


/* =========================================================
   ARIA
   ========================================================= */

const ariaArabic = {

  "Switch language":
    "تغيير اللغة",

  "Main Navigation":
    "القائمة الرئيسية",

  "Contact Makkah Laundry Service on WhatsApp":
    "تواصل مع خدمة مغسلة مكة عبر واتساب",

  "Call Makkah Laundry Service":
    "اتصل بخدمة مغسلة مكة",

  "Makkah Clock Tower location":
    "موقع برج الساعة في مكة"
};


/* =========================================================
   REVERSE MAPS
   ========================================================= */

const reverseTranslations = {};
const reverseHotels = {};
const reversePlaceholders = {};
const reverseAlt = {};
const reverseAria = {};


Object.keys(translations).forEach(function (english) {

  const arabic = translations[english];

  if (
    arabic &&
    arabic !== english &&
    !reverseTranslations[arabic]
  ) {
    reverseTranslations[arabic] = english;
  }

});


Object.keys(hotelArabic).forEach(function (english) {

  const arabic = hotelArabic[english];

  if (
    arabic &&
    arabic !== english
  ) {
    reverseHotels[arabic] = english;
  }

});


Object.keys(placeholderArabic).forEach(function (english) {

  const arabic = placeholderArabic[english];

  if (
    arabic &&
    arabic !== english
  ) {
    reversePlaceholders[arabic] = english;
  }

});


Object.keys(altArabic).forEach(function (english) {

  const arabic = altArabic[english];

  if (
    arabic &&
    arabic !== english
  ) {
    reverseAlt[arabic] = english;
  }

});


Object.keys(ariaArabic).forEach(function (english) {

  const arabic = ariaArabic[english];

  if (
    arabic &&
    arabic !== english
  ) {
    reverseAria[arabic] = english;
  }

});


/* =========================================================
   ORIGINAL CONTENT STORAGE
   ========================================================= */

const originalText = new WeakMap();
const originalPlaceholders = new WeakMap();
const originalAlt = new WeakMap();
const originalAria = new WeakMap();
const originalOptions = new WeakMap();


function normalizeText(text) {

  return String(text)
    .replace(/\s+/g, " ")
    .trim();

}


/* =========================================================
   SAVE ORIGINAL PAGE CONTENT
   ========================================================= */

function saveOriginalContent() {

  /* TEXT NODES */

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  const nodes = [];

  while (walker.nextNode()) {

    const node = walker.currentNode;

    if (!node.parentElement) {
      continue;
    }

    const tag = node.parentElement.tagName;

    if (
      tag === "SCRIPT" ||
      tag === "STYLE" ||
      tag === "NOSCRIPT"
    ) {
      continue;
    }

    if (normalizeText(node.nodeValue)) {
      nodes.push(node);
    }

  }


  nodes.forEach(function (node) {

    if (!originalText.has(node)) {
      originalText.set(node, node.nodeValue);
    }

  });


  /* PLACEHOLDERS */

  document
    .querySelectorAll(
      "input[placeholder], textarea[placeholder]"
    )
    .forEach(function (element) {

      if (!originalPlaceholders.has(element)) {

        originalPlaceholders.set(
          element,
          element.getAttribute("placeholder")
        );

      }

    });


  /* ALT */

  document
    .querySelectorAll("img[alt]")
    .forEach(function (element) {

      if (!originalAlt.has(element)) {

        originalAlt.set(
          element,
          element.getAttribute("alt")
        );

      }

    });


  /* ARIA */

  document
    .querySelectorAll("[aria-label]")
    .forEach(function (element) {

      if (!originalAria.has(element)) {

        originalAria.set(
          element,
          element.getAttribute("aria-label")
        );

      }

    });


  /* OPTIONS */

  document
    .querySelectorAll("select option")
    .forEach(function (option) {

      if (!originalOptions.has(option)) {

        originalOptions.set(
          option,
          option.textContent
        );

      }

    });

}


/* =========================================================
   TRANSLATE TEXT
   ========================================================= */

function translateText(language) {

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  const nodes = [];

  while (walker.nextNode()) {

    const node = walker.currentNode;

    if (!node.parentElement) {
      continue;
    }

    const tag = node.parentElement.tagName;

    if (
      tag === "SCRIPT" ||
      tag === "STYLE" ||
      tag === "NOSCRIPT"
    ) {
      continue;
    }

    if (originalText.has(node)) {
      nodes.push(node);
    }

  }


  nodes.forEach(function (node) {

    const saved = originalText.get(node);

    const clean = normalizeText(saved);

    if (!clean) {
      return;
    }

    let translated = clean;


    if (language === ARABIC) {

      if (translations[clean]) {
        translated = translations[clean];
      }

      if (hotelArabic[clean]) {
        translated = hotelArabic[clean];
      }

    } else {

      if (reverseTranslations[clean]) {
        translated = reverseTranslations[clean];
      }

      if (reverseHotels[clean]) {
        translated = reverseHotels[clean];
      }

    }


    const leading =
      saved.match(/^\s*/)?.[0] || "";

    const trailing =
      saved.match(/\s*$/)?.[0] || "";

    node.nodeValue =
      leading +
      translated +
      trailing;

  });

}


/* =========================================================
   PLACEHOLDERS
   ========================================================= */

function translatePlaceholders(language) {

  document
    .querySelectorAll(
      "input[placeholder], textarea[placeholder]"
    )
    .forEach(function (element) {

      const original =
        originalPlaceholders.get(element);

      if (!original) {
        return;
      }

      const clean =
        normalizeText(original);

      let value = clean;


      if (language === ARABIC) {

        if (placeholderArabic[clean]) {
          value = placeholderArabic[clean];
        }

      } else {

        if (reversePlaceholders[clean]) {
          value = reversePlaceholders[clean];
        }

      }


      element.setAttribute(
        "placeholder",
        value
      );

    });

}


/* =========================================================
   OPTIONS
   ========================================================= */

function translateOptions(language) {

  document
    .querySelectorAll("select option")
    .forEach(function (option) {

      const original =
        originalOptions.get(option);

      if (typeof original !== "string") {
        return;
      }

      const clean =
        normalizeText(original);

      let value = clean;


      if (language === ARABIC) {

        if (translations[clean]) {
          value = translations[clean];
        }

        if (hotelArabic[clean]) {
          value = hotelArabic[clean];
        }

      } else {

        if (reverseTranslations[clean]) {
          value = reverseTranslations[clean];
        }

        if (reverseHotels[clean]) {
          value = reverseHotels[clean];
        }

      }


      option.textContent = value;

    });

}


/* =========================================================
   ALT TEXT
   ========================================================= */

function translateAlt(language) {

  document
    .querySelectorAll("img[alt]")
    .forEach(function (img) {

      const original =
        originalAlt.get(img);

      if (!original) {
        return;
      }

      const clean =
        normalizeText(original);

      let value = clean;


      if (language === ARABIC) {

        if (altArabic[clean]) {
          value = altArabic[clean];
        }

      } else {

        if (reverseAlt[clean]) {
          value = reverseAlt[clean];
        }

      }


      img.setAttribute("alt", value);

    });

}


/* =========================================================
   ARIA
   ========================================================= */

function translateAria(language) {

  document
    .querySelectorAll("[aria-label]")
    .forEach(function (element) {

      const original =
        originalAria.get(element);

      if (!original) {
        return;
      }

      const clean =
        normalizeText(original);

      let value = clean;


      if (language === ARABIC) {

        if (ariaArabic[clean]) {
          value = ariaArabic[clean];
        }

      } else {

        if (reverseAria[clean]) {
          value = reverseAria[clean];
        }

      }


      element.setAttribute(
        "aria-label",
        value
      );

    });

}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

function updateLanguageButton(language) {

  const button =
    document.getElementById("langBtn");

  if (!button) {
    return;
  }


  if (language === ARABIC) {

    button.textContent = "English";

    button.setAttribute(
      "aria-label",
      "تغيير اللغة"
    );

  } else {

    button.textContent = "العربية";

    button.setAttribute(
      "aria-label",
      "Switch language"
    );

  }

}


/* =========================================================
   SEO
   ========================================================= */

function updateSEO(language) {

  const title =
    document.querySelector("title");

  const description =
    document.querySelector(
      'meta[name="description"]'
    );

  const ogTitle =
    document.querySelector(
      'meta[property="og:title"]'
    );

  const ogDescription =
    document.querySelector(
      'meta[property="og:description"]'
    );

  const twitterTitle =
    document.querySelector(
      'meta[name="twitter:title"]'
    );

  const twitterDescription =
    document.querySelector(
      'meta[name="twitter:description"]'
    );

  const ogLocale =
    document.querySelector(
      'meta[property="og:locale"]'
    );


  if (language === ARABIC) {

    if (title) {
      title.textContent =
        "مغسلة ملابس في مكة | استلام وتوصيل الملابس | مغسلة مكة";
    }

    if (description) {
      description.setAttribute(
        "content",
        "خدمة غسيل وكي وتنظيف جاف للملابس في مكة مع الاستلام والتوصيل من الفنادق والمواقع القريبة من الحرم وبرج الساعة."
      );
    }

    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "مغسلة ملابس في مكة | استلام وتوصيل الملابس"
      );
    }

    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "خدمة غسيل الملابس واستلام وتوصيلها في مكة للحجاج والزوار ونزلاء الفنادق."
      );
    }

    if (twitterTitle) {
      twitterTitle.setAttribute(
        "content",
        "مغسلة ملابس في مكة | استلام وتوصيل"
      );
    }

    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "خدمة غسيل واستلام وتوصيل الملابس في مكة بالقرب من الحرم وبرج الساعة."
      );
    }

    if (ogLocale) {
      ogLocale.setAttribute(
        "content",
        "ar_SA"
      );
    }

  } else {

    if (title) {
      title.textContent =
        "Makkah Laundry Service | Hotel Laundry Pickup & Delivery Near Haram";
    }

    if (description) {
      description.setAttribute(
        "content",
        "Makkah Laundry Service provides hotel laundry pickup and delivery near Masjid Al Haram and Makkah Clock Tower. Wash & fold, ironing, dry cleaning and express laundry for pilgrims, visitors and residents. Order by WhatsApp."
      );
    }

    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Makkah Laundry Service | Hotel Laundry Pickup & Delivery Near Haram"
      );
    }

    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Laundry pickup and delivery in Makkah for hotels, pilgrims, visitors and residents. Wash & fold, ironing, dry cleaning and express service."
      );
    }

    if (twitterTitle) {
      twitterTitle.setAttribute(
        "content",
        "Makkah Laundry Service | Laundry Pickup & Delivery"
      );
    }

    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "Hotel laundry pickup and delivery in Makkah near Haram and Makkah Clock Tower."
      );
    }

    if (ogLocale) {
      ogLocale.setAttribute(
        "content",
        "en_SA"
      );
    }

  }

}


/* =========================================================
   WHATSAPP LINKS
   ========================================================= */

function updateWhatsAppLinks(language) {

  const links =
    document.querySelectorAll(
      'a[href*="wa.me"]'
    );


  links.forEach(function (link) {

    const message =
      language === ARABIC
        ? "السلام عليكم، أريد خدمة غسيل الملابس في مكة."
        : "Hello, I need laundry pickup in Makkah.";


    link.setAttribute(
      "href",
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message)
    );

  });

}


/* =========================================================
   BOOKING FORM
   ========================================================= */

function setupBookingForm() {

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
        document.documentElement.lang === "ar"
          ? ARABIC
          : ENGLISH;


      const name =
        document.getElementById("fullName")?.value.trim() || "";

      const hotel =
        document.getElementById("hotelName")?.value || "";

      const room =
        document.getElementById("roomNumber")?.value.trim() || "";

      const phone =
        document.getElementById("customerPhone")?.value.trim() || "";

      const service =
        document.getElementById("service")?.value || "";

      const speed =
        document.getElementById("serviceSpeed")?.value || "";

      const date =
        document.getElementById("pickupDate")?.value || "";

      const time =
        document.getElementById("pickupTime")?.value || "";

      const clothes =
        document.getElementById("clothesType")?.value.trim() || "";

      const quantity =
        document.getElementById("clothQty")?.value || "";

      const note =
        document.getElementById("specialNote")?.value.trim() || "";


      let message;


      if (language === ARABIC) {

        message =
          "السلام عليكم، أريد حجز خدمة غسيل الملابس في مكة.\n\n" +

          "الاسم: " + name + "\n" +
          "الفندق / الموقع: " + hotel + "\n" +
          "رقم الغرفة: " + room + "\n" +
          "رقم الهاتف / واتساب: " + phone + "\n" +
          "الخدمة: " + service + "\n" +
          "سرعة الخدمة: " + speed + "\n" +
          "تاريخ الاستلام: " + date + "\n" +
          "وقت الاستلام: " + time + "\n" +
          "نوع الملابس: " + clothes + "\n" +
          "الكمية: " + quantity + "\n" +
          "ملاحظات: " + note;

      } else {

        message =
          "Hello, I would like to book laundry pickup in Makkah.\n\n" +

          "Name: " + name + "\n" +
          "Hotel / Location: " + hotel + "\n" +
          "Room Number: " + room + "\n" +
          "Phone / WhatsApp: " + phone + "\n" +
          "Service: " + service + "\n" +
          "Service Speed: " + speed + "\n" +
          "Pickup Date: " + date + "\n" +
          "Pickup Time: " + time + "\n" +
          "Clothes Type: " + clothes + "\n" +
          "Quantity: " + quantity + "\n" +
          "Special Note: " + note;

      }


      const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


      window.open(
        url,
        "_blank"
      );

    }
  );

}


/* =========================================================
   CALCULATOR
   ========================================================= */

function setupCalculator() {

  const service =
    document.getElementById("calcService");

  const quantity =
    document.getElementById("calcQuantity");

  const result =
    document.getElementById("calcResult");


  if (
    !service ||
    !quantity ||
    !result
  ) {
    return;
  }


  function calculate() {

    const price =
      parseFloat(service.value) || 0;

    const qty =
      Math.max(
        1,
        parseInt(quantity.value) || 1
      );


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


/* =========================================================
   TRACKING
   ========================================================= */

function setupTracking() {

  const button =
    document.getElementById("trackOrder");

  const input =
    document.getElementById("orderId");

  const result =
    document.getElementById("trackingResult");


  if (
    !button ||
    !input ||
    !result
  ) {
    return;
  }


  button.addEventListener(
    "click",
    function () {

      const orderId =
        input.value.trim();


      const language =
        document.documentElement.lang === "ar"
          ? ARABIC
          : ENGLISH;


      if (!orderId) {

        result.textContent =
          language === ARABIC
            ? "يرجى إدخال رقم الطلب."
            : "Please enter your order ID.";

        return;
      }


      result.textContent =
        language === ARABIC
          ? "سيتم تأكيد حالة الطلب عبر واتساب. يرجى التواصل معنا وإرسال رقم الطلب."
          : "Order status will be confirmed through WhatsApp. Please contact us and send your order ID.";

    }
  );

}


/* =========================================================
   LANGUAGE APPLICATION
   ========================================================= */

function applyLanguage(language) {

  if (
    language !== ARABIC &&
    language !== ENGLISH
  ) {
    language = ARABIC;
  }


  const html =
    document.documentElement;


  html.lang =
    language;

  html.dir =
    language === ARABIC
      ? "rtl"
      : "ltr";


  if (document.body) {

    document.body.dir =
      language === ARABIC
        ? "rtl"
        : "ltr";

  }


  translateText(language);

  translatePlaceholders(language);

  translateOptions(language);

  translateAlt(language);

  translateAria(language);

  updateLanguageButton(language);

  updateSEO(language);

  updateWhatsAppLinks(language);


  localStorage.setItem(
    LANGUAGE_KEY,
    language
  );

}


/* =========================================================
   LANGUAGE TOGGLE
   ========================================================= */

function setupLanguageToggle() {

  const button =
    document.getElementById("langBtn");


  if (!button) {
    return;
  }


  button.addEventListener(
    "click",
    function (event) {

      event.preventDefault();


      const current =
        document.documentElement.lang;


      const next =
        current === ARABIC
          ? ENGLISH
          : ARABIC;


      applyLanguage(next);

    }
  );

}


/* =========================================================
   PICKUP DATE
   ========================================================= */

function setupPickupDate() {

  const date =
    document.getElementById("pickupDate");


  if (!date) {
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


  date.min =
    year + "-" +
    month + "-" +
    day;

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    console.log(
      "Makkah Laundry Service Loaded"
    );

/*
      IMPORTANT:
      Save the ORIGINAL English page
      before doing ANY translation.
    */

    saveOriginalContent();


    setupLanguageToggle();

    setupMobileMenu();
     
    setupBookingForm();

    setupCalculator();

    setupTracking();

    setupPickupDate();


    /*
      FIRST VISIT = ENGLISH
      RETURNING USER = SAVED LANGUAGE
    */

    const savedLanguage =
      localStorage.getItem(
        LANGUAGE_KEY
      );


    const language =
      savedLanguage === ARABIC
        ? ARABIC
        : ENGLISH;


    applyLanguage(language);

  }
);

/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (!menuToggle || !mainNav) {
        return;
    }

    const menuIcon = menuToggle.querySelector("i");

    function openMenu() {

        mainNav.classList.add("active");
        document.body.classList.add("menu-open");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close menu");

        if (menuIcon) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        }
    }

    function closeMenu() {

        mainNav.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");

        if (menuIcon) {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    }

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    /* Close after clicking a navigation link */
    const navLinks = mainNav.querySelectorAll("a[href^='#']");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            closeMenu();
        });

    });

    /* Close with ESC */
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    /* Close if screen becomes desktop */
    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {
            closeMenu();
        }

    });

}
