// Blue Oasis 5512 — All Property Content Constants

export const PROPERTY = {
  name: "Blue Oasis 5512",
  fullName: "Blue Oasis Retreat, Your Private Getaway",
  address: "5512 21st St Ct W",
  city: "Bradenton",
  state: "FL",
  zip: "34207",
  fullAddress: "5512 21st St Ct W, Bradenton, FL 34207",
  lat: 27.4425237,
  lng: -82.58322009999999,
  bookingUrl: "https://rent.fairly.com/listing/13860451",
  checkin: "4:00 PM",
  checkout: "10:00 AM",
  guests: 8,
  bedrooms: 3,
  bathrooms: 2,
  description: `Enjoy relaxed, sun-filled days at this dog-friendly home just 9 minutes to the beach by car. Nearby horseback riding, restaurants, riverwalk, and outdoor music venues will certainly entertain you and your accompanying guests.

Lounge by the private pool, fire up the grill, or unwind with movie nights on one of the 4 Smart TVs. When you're ready to explore, stroll the Riverwalk, visit the Bishop Museum of Science and Nature, or spend the day on miles of beautiful white-sand beaches. After a fun day out, gather for dinner on the patio or onsite fire pit.`,
  tagline: "Your Private Oasis in Bradenton, Florida",
  subTagline: "Sun. Pool. Peace. Just 9 minutes to the beach.",
};

export const PHOTOS = [
  { src: "/images/main.webp", alt: "Blue Oasis 5512 - Private Pool and Outdoor Retreat" },
  { src: "/images/IMG_9193.JPG", alt: "Blue Oasis 5512 - Exterior View" },
  { src: "/images/IMG_9194.JPG", alt: "Blue Oasis 5512 - Pool Area" },
  { src: "/images/IMG_9196.JPG", alt: "Blue Oasis 5512 - Outdoor Living Space" },
  { src: "/images/IMG_9197.JPG", alt: "Blue Oasis 5512 - Patio and Fire Pit Area" },
  { src: "/images/IMG_9200.JPG", alt: "Blue Oasis 5512 - Interior Living Room" },
  { src: "/images/IMG_9202.JPG", alt: "Blue Oasis 5512 - Kitchen" },
  { src: "/images/IMG_9204.JPG", alt: "Blue Oasis 5512 - Master Bedroom" },
  { src: "/images/IMG_9224.JPG", alt: "Blue Oasis 5512 - Guest Bedroom" },
  { src: "/images/IMG_9228.JPG", alt: "Blue Oasis 5512 - Additional Bedroom" },
];

export const BEDROOMS = [
  {
    name: "King Suite",
    description: "Spacious master bedroom with a plush king-size bed.",
    icon: "👑",
    bed: "1 King Bed",
  },
  {
    name: "Queen Room",
    description: "Comfortable queen bedroom perfect for couples or solo travelers.",
    icon: "🌿",
    bed: "1 Queen Bed",
  },
  {
    name: "Twin Room",
    description: "Flexible twin bedroom — also includes a Pack 'n Play for little ones.",
    icon: "🌙",
    bed: "2 Twin Beds + Pack 'n Play",
  },
  {
    name: "Living Room",
    description: "The living room features a full sleeper sofa for additional guests.",
    icon: "🛋️",
    bed: "1 Full Sleeper Sofa",
  },
];

export const AMENITY_CATEGORIES = [
  {
    label: "Outdoor",
    icon: "Sun",
    items: [
      "Private pool (pool fence available)",
      "Lanai & covered patio",
      "Fully furnished patio",
      "Gas grill",
      "Fire pit",
      "Outdoor shower",
      "Fenced yard",
    ],
  },
  {
    label: "Indoor",
    icon: "Sofa",
    items: [
      "4 Smart TVs",
      "Board games",
      "Dining table & breakfast bar",
      "Step-free access",
      "Central A/C",
    ],
  },
  {
    label: "Kitchen",
    icon: "CookingPot",
    items: [
      "Stove/Oven",
      "Full refrigerator",
      "Dishwasher",
      "Microwave",
      "Coffee maker",
      "Toaster & blender",
      "Crockpot",
      "Full cookware & dishware",
    ],
  },
  {
    label: "Essentials",
    icon: "WifiHigh",
    items: [
      "Free WiFi",
      "Washer & dryer",
      "Linens & towels",
      "Toiletries",
      "High chair (booster)",
      "Hangers & paper goods",
    ],
  },
  {
    label: "Parking",
    icon: "Car",
    items: [
      "Tandem driveway",
      "2 cars or 1 RV",
      "Keyless entry",
    ],
  },
  {
    label: "Pet Friendly",
    icon: "PawPrint",
    items: [
      "Dogs welcome",
      "$50 pet fee",
      "Fenced yard",
    ],
  },
];

export const HOUSE_RULES = [
  { icon: "ProhibitInset", text: "No smoking anywhere on property" },
  { icon: "PawPrint", text: "Pet-friendly — $50 pet fee applies" },
  { icon: "Party", text: "No parties or large gatherings" },
  { icon: "IdentificationBadge", text: "Must be 25+ to book" },
  { icon: "Moon", text: "Quiet hours: 10:00 PM – 8:00 AM" },
  { icon: "SignIn", text: "Government ID required before check-in" },
  { icon: "Camera", text: "1 exterior security camera at front entry" },
];

export const NEARBY = [
  { name: "Beach", detail: "9 min by car", icon: "Waves" },
  { name: "Riverwalk", detail: "Bradenton Riverwalk", icon: "TreePalm" },
  { name: "Bishop Museum", detail: "Science & Nature", icon: "Buildings" },
  { name: "Horseback Riding", detail: "Nearby stables", icon: "Horse" },
  { name: "Restaurants & Music", detail: "Live outdoor venues", icon: "MusicNote" },
];

export const QUICK_STATS = [
  { value: "3", label: "Bedrooms", icon: "Door" },
  { value: "2", label: "Bathrooms", icon: "Shower" },
  { value: "8", label: "Guests Max", icon: "Users" },
  { value: "9 min", label: "To Beach", icon: "Waves" },
];
