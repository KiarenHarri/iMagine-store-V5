const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

export const IMAGES = {
  hero: img("photo-1727093493864-0bcbd16c7e6d"),
  iphone17promax: img("photo-1759203302534-c6e71c93e886"),
  iphone17pro: img("photo-1758186361602-c3f23037eb95"),
  iphone17: img("photo-1758467700578-7491a5c7eedd"),
  iphone16pro: img("photo-1727093493864-0bcbd16c7e6d"),
  iphone15pro: img("photo-1773414422103-7aa2623de1fa"),
  iphonePreOwned: img("photo-1663408261842-016bae520a0c"),
  storefront: "https://images.unsplash.com/photo-1621768216002-5ac171876625?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  macbookAirM4: img("photo-1767097587570-206837933fe0"),
  macbook: img("photo-1611186871348-b1ce696e52c9"),
  macbookAlt: img("photo-1517336714731-489689fd1ca8"),
  macMini: img("photo-1717632464003-eac734ef76d9"),
  imacLineup: "https://www.imaginestore.co.za/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-18-at-15.53.25-PhotoRoom.png-PhotoRoom.png",
  watch: img("photo-1616353329366-b5546ca70b1a"),
  watchS10: img("photo-1546868871-7041f2a55e12"),
  watchUltra: "https://www.imaginestore.co.za/wp-content/uploads/brizy/imgs/WhatsApp_Image_2023-05-18_at_15.53.47-removebg-preview-490x196x4x0x483x196x1684704024.png",
  watchSE: img("photo-1570791086173-1f3c8fec4a07"),
  watchAlt: img("photo-1434493789847-2f02dc6ca35d"),
  ipadPro: img("photo-1585786463769-8e46e2639b57"),
  ipadAir: img("photo-1744215328316-3e3a79b20d28"),
  ipad: img("photo-1544244015-9c72fd9c866d"),
  ipadMini: img("photo-1557825835-74a0a4f14a52"),
  ipadPencil: img("photo-1544244015-0df4b3ffc6b0"),
  iphoneAlt: img("photo-1510557880182-3d4d3cba35a5"),
  iphoneBlue: img("photo-1616348436168-de43ad0db179"),
  airpods: img("photo-1600294037681-c80b4cb5b434"),
  airpodsPro: img("photo-1770292170233-5d9e235ec739"),
  headphones: img("photo-1505740420928-5e560c06d30e"),
  headphonesDark: img("photo-1583394838336-acd977736f90"),
  earbuds: img("photo-1590658268037-6bf12165a8df"),
  laptopDesk: img("photo-1496181133206-80ce9b88a853"),
  desk: img("photo-1541807084-5c52b6b3adef"),
  watchStudio: img("photo-1523275335684-37898b6baf30"),
  ecosystem: "https://www.imaginestore.co.za/wp-content/uploads/brizy/imgs/WhatsApp_Image_2023-05-18_at_15.53.48-removebg-preview-382x160x0x1x382x158x1684711884.png",
};

export const BRAND = {
  name: "iMagine Store",
  legal: "iMagine Store (Pty) Ltd",
  role: "Apple Reseller & Apple Service Centre",
  established: "2014",
  location: "Westville, Durban, KwaZulu-Natal, South Africa",
  philosophy: "Educate. Innovate. Entertain.",
  facebook: "https://www.facebook.com/imaginestoreza/",
  website: "https://www.imaginestore.co.za",
  phone: "+27 83 777 3051",
  email: "seni@imaginestore.co.za",
  hours: "Monday – Friday: 09:00 – 16:30 · Saturday & Sunday: Closed",
};

export const MARQUEE_ITEMS = [
  "Apple Reseller",
  "Est. 2014",
  "Educate · Innovate · Entertain",
  "Apple Service Centre — Westville",
  "New Devices",
  "Pre-Owned Devices",
  "Reliable Repairs",
  "Software Development",
  "Consulting Services",
];

export const categories = [
  { slug: "iphone", name: "iPhone", tagline: "Pro cameras. ProMotion. Pure power.", image: IMAGES.iphone16pro },
  { slug: "mac", name: "Mac", tagline: "Apple silicon. Silent speed.", image: IMAGES.macbookAirM4 },
  { slug: "ipad", name: "iPad", tagline: "A canvas that goes anywhere.", image: IMAGES.ipadPro },
  { slug: "watch", name: "Watch", tagline: "Health, fitness and focus on your wrist.", image: IMAGES.watchS10 },
  { slug: "accessories", name: "Accessories", tagline: "Finish the ecosystem.", image: IMAGES.airpodsPro },
];

export const products = [
  { id: "ip18promax", name: "iPhone 18 Pro Max", category: "iphone", tagline: "A20 Pro. The ultimate iPhone.", image: IMAGES.iphone17promax, specs: ["A20 Pro chip", "Variable aperture camera", "The biggest Pro display"] },
  { id: "ip18pro", name: "iPhone 18 Pro", category: "iphone", tagline: "A20 Pro power, perfectly sized.", image: IMAGES.iphone17pro, specs: ["A20 Pro chip", "48MP Fusion cameras", "ProMotion 120Hz"] },
  { id: "ip17promax", name: "iPhone 17 Pro Max", category: "iphone", tagline: "Cosmic Orange. Unibody design.", image: IMAGES.iphone17promax, specs: ["A19 Pro", "Full-width camera plateau", "Great battery life"] },
  { id: "ip17pro", name: "iPhone 17 Pro", category: "iphone", tagline: "Deep blue. Unibody aluminium.", image: IMAGES.iphone17pro, specs: ["A19 Pro", "48MP Fusion cameras", "Vapor chamber"] },
  { id: "ipair", name: "iPhone Air", category: "iphone", tagline: "Impossibly thin. Unmistakably iPhone.", image: IMAGES.iphoneAlt, specs: ["Ultra-thin design", "Pro-level camera", "All-day battery"] },
  { id: "ip17", name: "iPhone 17", category: "iphone", tagline: "Lavender. ProMotion for everyone.", image: IMAGES.iphone17, specs: ["A19", "120Hz ProMotion", "Dual Fusion camera"] },
  { id: "ip16", name: "iPhone 16", category: "iphone", tagline: "Camera Control. All-day battery.", image: IMAGES.iphoneBlue, specs: ["A18", "Camera Control", "USB-C"] },
  { id: "ip-pre", name: "Pre-Owned iPhone", category: "iphone", tagline: "Certified pre-owned, graded & checked.", image: IMAGES.iphonePreOwned, specs: ["Quality graded", "Battery health checked", "Warranty options"] },
  { id: "mbair", name: "MacBook Air", category: "mac", tagline: "Impossibly thin. Apple silicon.", image: IMAGES.macbookAirM4, specs: ["M4 chip", "13-inch or 15-inch", "Up to 18h battery"] },
  { id: "mbpro", name: "MacBook Pro", category: "mac", tagline: "For pro workflows, anywhere.", image: IMAGES.macbookAlt, specs: ["M4, M4 Pro or M4 Max", "14-inch or 16-inch XDR", "Pro I/O"] },
  { id: "imac", name: "iMac", category: "mac", tagline: "An all-in-one statement.", image: IMAGES.imacLineup, specs: ["24-inch 4.5K", "M4 chip", "Seven colours"] },
  { id: "macmini", name: "Mac mini", category: "mac", tagline: "Tiny footprint. Huge capability.", image: IMAGES.macMini, specs: ["M-series chip", "Compact design", "Gigabit Ethernet"] },
  { id: "macstudio", name: "Mac Studio", category: "mac", tagline: "A workstation in miniature.", image: IMAGES.macMini, specs: ["M5 Max or M5 Ultra", "Pro-grade I/O", "Whisper quiet"] },
  { id: "ipp", name: "iPad Pro", category: "ipad", tagline: "The ultimate iPad experience.", image: IMAGES.ipadPro, specs: ["M5 chip", "Ultra Retina XDR", "Apple Pencil Pro"] },
  { id: "ipa", name: "iPad Air", category: "ipad", tagline: "Serious power, light carry.", image: IMAGES.ipadAir, specs: ["M4 chip", "11-inch or 13-inch", "5G option"] },
  { id: "ipd", name: "iPad", category: "ipad", tagline: "Lovable. Capable. Everyday essential.", image: IMAGES.ipad, specs: ["A16 chip", "11-inch display", "USB-C"] },
  { id: "ipm", name: "iPad mini", category: "ipad", tagline: "Full iPad, pocket size.", image: IMAGES.ipadMini, specs: ["A17 Pro chip", "8.3-inch display", "Apple Pencil support"] },
  { id: "aws12", name: "Apple Watch Series 12", category: "watch", tagline: "New Readiness app. Ambient sensing.", image: IMAGES.watchS10, specs: ["Readiness app", "Ambient sensing", "watchOS"] },
  { id: "awu4", name: "Apple Watch Ultra 4", category: "watch", tagline: "Built for the extremes.", image: IMAGES.watchUltra, specs: ["Titanium case", "Multi-day battery", "Precision GPS"] },
  { id: "awse", name: "Apple Watch SE", category: "watch", tagline: "Essentials, beautifully done.", image: IMAGES.watchSE, specs: ["Retina display", "Sleep tracking", "Family Setup"] },
];

export const accessories = [
  { id: "app2", name: "AirPods Pro 3", tagline: "The world's best in-ear noise cancellation.", image: IMAGES.airpodsPro, group: "Audio" },
  { id: "ap", name: "AirPods 5", tagline: "Effortless listening, all day.", image: IMAGES.earbuds, group: "Audio" },
  { id: "beats", name: "Beats Headphones", tagline: "Big sound, bold style.", image: IMAGES.headphonesDark, group: "Audio" },
  { id: "pencil", name: "Apple Pencil Pro", tagline: "Pixel-perfect precision.", image: IMAGES.ipadPencil, group: "iPad" },
  { id: "mk", name: "Magic Keyboard", tagline: "A floating cantilever design.", image: IMAGES.ipadPro, group: "iPad" },
  { id: "magsafe", name: "MagSafe Chargers & Cases", tagline: "Snap. Charge. Go.", image: IMAGES.iphoneBlue, group: "iPhone" },
  { id: "straps", name: "Watch Straps", tagline: "Change your look in a click.", image: IMAGES.watchStudio, group: "Watch" },
  { id: "cables", name: "Cables & Adapters", tagline: "Genuine connectivity.", image: IMAGES.desk, group: "Essentials" },
];

export const repairServices = [
  "In-warranty & out-of-warranty Apple repairs",
  "Mac desktop & laptop servicing and upgrades",
  "iPhone, iPad, iPod, Apple Watch & Beats service",
  "Screen, battery & board-level diagnostics",
  "On-site fleet support for schools & business",
  "Quick training options in our service centre",
];

export const repairDevices = ["Mac", "iPhone", "iPad", "Apple Watch", "iPod", "Beats"];

export const chapters = [
  { n: "01", title: "New Devices", body: "The latest Apple hardware — iPhone, Mac, iPad and Watch — through an authorised South African reseller." },
  { n: "02", title: "Pre-Owned Devices", body: "Carefully graded pre-owned Apple devices, checked by certified technicians before they reach the shelf." },
  { n: "03", title: "Reliable Repairs", body: "A leading KwaZulu-Natal Apple Service Provider. Warranty and out-of-warranty repairs by certified technicians." },
  { n: "04", title: "Software & Consulting", body: "Application development, IT consultancy and managed services for enterprises, education and professionals." },
];

export const STATUS_FLOWS = {
  product: ["Received", "Quoting", "Quote sent", "Confirmed", "Completed"],
  repair: ["Received — awaiting assessment", "Assessing", "Quote sent", "Approved — in repair", "Ready for collection", "Completed"],
};

export const CANCEL_STATUS = "Cancelled";

export const TRADE_IN = {
  iPhone: [
    { label: "iPhone 16 / 17 series", base: [10000, 16000] },
    { label: "iPhone 14 / 15 series", base: [6000, 10000] },
    { label: "iPhone 12 / 13 series", base: [3000, 6000] },
    { label: "iPhone 11 or older", base: [800, 3000] },
  ],
  Mac: [
    { label: "Apple-silicon MacBook Pro", base: [9000, 16000] },
    { label: "Apple-silicon MacBook Air", base: [7000, 12000] },
    { label: "Intel Mac / iMac", base: [2500, 6000] },
    { label: "Mac mini / older desktops", base: [1500, 4500] },
  ],
  iPad: [
    { label: "iPad Pro (M-series)", base: [5000, 9000] },
    { label: "iPad Air / iPad mini", base: [3000, 5500] },
    { label: "Standard / older iPad", base: [1000, 3000] },
  ],
  "Apple Watch": [
    { label: "Ultra / Series 10 – 12", base: [2500, 5500] },
    { label: "Series 6 – 9 / SE", base: [1200, 2500] },
    { label: "Series 5 or older", base: [400, 1200] },
  ],
};

export const CONDITION_MULTIPLIERS = [
  { id: "like-new", label: "Like new", desc: "No marks, battery healthy, box & accessories", m: 1 },
  { id: "good", label: "Good", desc: "Light wear, fully working", m: 0.85 },
  { id: "fair", label: "Fair", desc: "Visible wear or ageing battery", m: 0.7 },
  { id: "damaged", label: "Damaged", desc: "Cracks, faults or heavy wear", m: 0.4 },
];

const C = (name, hex) => ({ name, hex });

// iPhone X through iPhone 18 Pro Max — model-specific colours and storage (per Apple specs).
// NOTE: iPhone 18 Pro colours are provisional (carried from 17 Pro) — confirm against Apple's spec page and adjust.
export const IPHONE_MODELS = [
  { name: "iPhone 18 Pro Max", storage: ["256GB", "512GB", "1TB", "2TB"], colors: [C("Silver", "#E3E4E6"), C("Cosmic Orange", "#C75B1E"), C("Deep Blue", "#31435A")] },
  { name: "iPhone 18 Pro", storage: ["256GB", "512GB", "1TB"], colors: [C("Silver", "#E3E4E6"), C("Cosmic Orange", "#C75B1E"), C("Deep Blue", "#31435A")] },
  { name: "iPhone 17 Pro Max", storage: ["256GB", "512GB", "1TB", "2TB"], colors: [C("Silver", "#E3E4E6"), C("Cosmic Orange", "#C75B1E"), C("Deep Blue", "#31435A")] },
  { name: "iPhone 17 Pro", storage: ["256GB", "512GB", "1TB"], colors: [C("Silver", "#E3E4E6"), C("Cosmic Orange", "#C75B1E"), C("Deep Blue", "#31435A")] },
  { name: "iPhone Air", storage: ["256GB", "512GB", "1TB"], colors: [C("Sky Blue", "#A7C5E3"), C("Light Gold", "#E8DCC8"), C("Cloud White", "#F2F1EC"), C("Space Black", "#3B3B3D")] },
  { name: "iPhone 17", storage: ["256GB", "512GB"], colors: [C("Black", "#3C3C3D"), C("White", "#F5F5F0"), C("Mist Blue", "#A9BFD3"), C("Sage", "#B7BFA5"), C("Lavender", "#C5B8D4")] },
  { name: "iPhone 16e", storage: ["128GB", "256GB", "512GB"], colors: [C("Black", "#3C3C3D"), C("White", "#F5F5F0")] },
  { name: "iPhone 16 Pro Max", storage: ["256GB", "512GB", "1TB"], colors: [C("Black Titanium", "#3F3F42"), C("White Titanium", "#E8E8E3"), C("Natural Titanium", "#B8B3A8"), C("Desert Titanium", "#BFA48F")] },
  { name: "iPhone 16 Pro", storage: ["128GB", "256GB", "512GB", "1TB"], colors: [C("Black Titanium", "#3F3F42"), C("White Titanium", "#E8E8E3"), C("Natural Titanium", "#B8B3A8"), C("Desert Titanium", "#BFA48F")] },
  { name: "iPhone 16 Plus", storage: ["128GB", "256GB", "512GB"], colors: [C("Black", "#3C3C3D"), C("White", "#F5F5F0"), C("Pink", "#E8AEBF"), C("Teal", "#6D9E9B"), C("Ultramarine", "#4A5E9E")] },
  { name: "iPhone 16", storage: ["128GB", "256GB", "512GB"], colors: [C("Black", "#3C3C3D"), C("White", "#F5F5F0"), C("Pink", "#E8AEBF"), C("Teal", "#6D9E9B"), C("Ultramarine", "#4A5E9E")] },
  { name: "iPhone 15 Pro Max", storage: ["256GB", "512GB", "1TB"], colors: [C("Black Titanium", "#3F3F42"), C("White Titanium", "#E8E8E3"), C("Blue Titanium", "#3E4A5C"), C("Natural Titanium", "#B8B3A8")] },
  { name: "iPhone 15 Pro", storage: ["128GB", "256GB", "512GB", "1TB"], colors: [C("Black Titanium", "#3F3F42"), C("White Titanium", "#E8E8E3"), C("Blue Titanium", "#3E4A5C"), C("Natural Titanium", "#B8B3A8")] },
  { name: "iPhone 15 Plus", storage: ["128GB", "256GB", "512GB"], colors: [C("Black", "#3C4043"), C("Blue", "#A7BDD1"), C("Green", "#C9D6C0"), C("Yellow", "#E8D9A8"), C("Pink", "#E3B7C4")] },
  { name: "iPhone 15", storage: ["128GB", "256GB", "512GB"], colors: [C("Black", "#3C4043"), C("Blue", "#A7BDD1"), C("Green", "#C9D6C0"), C("Yellow", "#E8D9A8"), C("Pink", "#E3B7C4")] },
  { name: "iPhone 14 Pro Max", storage: ["128GB", "256GB", "512GB", "1TB"], colors: [C("Deep Purple", "#5A5566"), C("Gold", "#E9DCC5"), C("Silver", "#E3E4E6"), C("Space Black", "#3A3A3C")] },
  { name: "iPhone 14 Pro", storage: ["128GB", "256GB", "512GB", "1TB"], colors: [C("Deep Purple", "#5A5566"), C("Gold", "#E9DCC5"), C("Silver", "#E3E4E6"), C("Space Black", "#3A3A3C")] },
  { name: "iPhone 14 Plus", storage: ["128GB", "256GB", "512GB"], colors: [C("Midnight", "#31353B"), C("Purple", "#B8B5D1"), C("Starlight", "#F0E8DB"), C("(PRODUCT)RED", "#C81E2B"), C("Blue", "#A2B9CE"), C("Yellow", "#F2E3A1")] },
  { name: "iPhone 14", storage: ["128GB", "256GB", "512GB"], colors: [C("Midnight", "#31353B"), C("Purple", "#B8B5D1"), C("Starlight", "#F0E8DB"), C("(PRODUCT)RED", "#C81E2B"), C("Blue", "#A2B9CE"), C("Yellow", "#F2E3A1")] },
  { name: "iPhone 13 Pro Max", storage: ["128GB", "256GB", "512GB", "1TB"], colors: [C("Sierra Blue", "#9FB4C7"), C("Silver", "#E3E4E6"), C("Gold", "#E9DCC5"), C("Graphite", "#54524E"), C("Alpine Green", "#57624E")] },
  { name: "iPhone 13 Pro", storage: ["128GB", "256GB", "512GB", "1TB"], colors: [C("Sierra Blue", "#9FB4C7"), C("Silver", "#E3E4E6"), C("Gold", "#E9DCC5"), C("Graphite", "#54524E"), C("Alpine Green", "#57624E")] },
  { name: "iPhone 13", storage: ["128GB", "256GB", "512GB"], colors: [C("Midnight", "#31353B"), C("Starlight", "#F0E8DB"), C("Blue", "#44789A"), C("Pink", "#E8C3C9"), C("Green", "#3E5240"), C("(PRODUCT)RED", "#C81E2B")] },
  { name: "iPhone 13 mini", storage: ["128GB", "256GB", "512GB"], colors: [C("Midnight", "#31353B"), C("Starlight", "#F0E8DB"), C("Blue", "#44789A"), C("Pink", "#E8C3C9"), C("Green", "#3E5240"), C("(PRODUCT)RED", "#C81E2B")] },
  { name: "iPhone 12 Pro Max", storage: ["128GB", "256GB", "512GB"], colors: [C("Silver", "#E3E4E6"), C("Graphite", "#54524E"), C("Gold", "#E9DCC5"), C("Pacific Blue", "#2F4858")] },
  { name: "iPhone 12 Pro", storage: ["128GB", "256GB", "512GB"], colors: [C("Silver", "#E3E4E6"), C("Graphite", "#54524E"), C("Gold", "#E9DCC5"), C("Pacific Blue", "#2F4858")] },
  { name: "iPhone 12", storage: ["64GB", "128GB", "256GB"], colors: [C("Black", "#2A2A2A"), C("White", "#F5F3EE"), C("(PRODUCT)RED", "#C81E2B"), C("Green", "#CBDCCE"), C("Blue", "#2E3A55"), C("Purple", "#B7AEC9")] },
  { name: "iPhone 12 mini", storage: ["64GB", "128GB", "256GB"], colors: [C("Black", "#2A2A2A"), C("White", "#F5F3EE"), C("(PRODUCT)RED", "#C81E2B"), C("Green", "#CBDCCE"), C("Blue", "#2E3A55"), C("Purple", "#B7AEC9")] },
  { name: "iPhone 11 Pro Max", storage: ["64GB", "256GB", "512GB"], colors: [C("Midnight Green", "#39443A"), C("Silver", "#E3E4E6"), C("Space Gray", "#4A4B4F"), C("Gold", "#E9DCC5")] },
  { name: "iPhone 11 Pro", storage: ["64GB", "256GB", "512GB"], colors: [C("Midnight Green", "#39443A"), C("Silver", "#E3E4E6"), C("Space Gray", "#4A4B4F"), C("Gold", "#E9DCC5")] },
  { name: "iPhone 11", storage: ["64GB", "128GB", "256GB"], colors: [C("Black", "#2A2A2A"), C("Green", "#A9C1A8"), C("Yellow", "#E8D58A"), C("Purple", "#C3B5CD"), C("(PRODUCT)RED", "#C81E2B"), C("White", "#F5F3EE")] },
  { name: "iPhone XS Max", storage: ["64GB", "256GB", "512GB"], colors: [C("Gold", "#E9DCC5"), C("Silver", "#E3E4E6"), C("Space Gray", "#4A4B4F")] },
  { name: "iPhone XS", storage: ["64GB", "256GB", "512GB"], colors: [C("Gold", "#E9DCC5"), C("Silver", "#E3E4E6"), C("Space Gray", "#4A4B4F")] },
  { name: "iPhone XR", storage: ["64GB", "128GB", "256GB"], colors: [C("Black", "#2A2A2A"), C("White", "#F5F3EE"), C("(PRODUCT)RED", "#C81E2B"), C("Yellow", "#E8CE5C"), C("Blue", "#5A8FBF"), C("Coral", "#E07B5A")] },
  { name: "iPhone X", storage: ["64GB", "256GB"], colors: [C("Silver", "#E3E4E6"), C("Space Gray", "#4A4B4F")] },
];

export const OLDER_IPHONE = "iPhone 8 or older";
