export const SITE = {
  name:        "Gorwal Oil Mill",
  owner:       "Saukat Ali",
  tagline:     "Pure Mustard Oil from the Heart of India",
  description: "Gorwal Oil Mill — trusted manufacturer and supplier of cold-pressed pure mustard oil and oil cake in India. FSSAI certified. Wholesale & retail supply across India.",
  url:         "https://saukatmill.com",
  phone:       "+91-9694929317",
  whatsapp:    "919694929317",
  email:       "saukatali5200@gmail.com",
  address:     "Khoh, Deeg, Bharatpur, Rajasthan, India — 321203",
  pincode:     "321203",
  city:        "Deeg, Bharatpur",
  state:       "Rajasthan",
  gst:         "XXXXXXXXXXXX",
  fssai:       "XXXXXXXXXXXXXXX",
  cin:         "N/A",
  maps:        "https://maps.google.com/?q=Khoh+Deeg+Bharatpur+Rajasthan",
} as const;

export const SOCIAL_LINKS = [
  {
    label:    "Facebook",
    href:     "https://facebook.com/saukatali5200",
    icon:     "facebook",
    color:    "#1877F2",
    handle:   "@saukatali5200",
  },
  {
    label:    "Instagram",
    href:     "https://instagram.com/saukatali5200",
    icon:     "instagram",
    color:    "#E1306C",
    handle:   "@saukatali5200",
  },
  {
    label:    "YouTube",
    href:     "https://youtube.com/@saukatali5200",
    icon:     "youtube",
    color:    "#FF0000",
    handle:   "@saukatali5200",
  },
  {
    label:    "WhatsApp",
    href:     `https://wa.me/919694929317`,
    icon:     "whatsapp",
    color:    "#25D366",
    handle:   "+91-9694929317",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home",        href: "/"           },
  { label: "About",       href: "/about"      },
  { label: "Products",    href: "/products"   },
  { label: "Price List",  href: "/price-list" },
  { label: "GST & Legal", href: "/legal"      },
  { label: "Contact",     href: "/contact"    },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home",       href: "/"           },
    { label: "Products",   href: "/products"   },
    { label: "Price List", href: "/price-list" },
    { label: "About Us",   href: "/about"      },
    { label: "Contact",    href: "/contact"    },
  ],
  legal: [
    { label: "GST & Legal Info", href: "/legal" },
  ],
};

export const STATES_OF_INDIA = [
  "Haryana","Madhya Pradesh","Maharashtra","Punjab","Rajasthan",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Delhi","Jammu and Kashmir"
];
