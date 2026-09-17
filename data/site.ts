export const site = {
  name: "Lots. Crème",
  wordmark: "Lots. Crème",
  tagline: "Patisserie & dessert studio",
  location: "Manjeri, Kerala",
  addressLines: [
    "SJ Century Complex",
    "Near GGHSS, Industrial Estate Road",
    "Manjeri, Kerala 676121",
  ],
  phoneDisplay: "+91 87143 71004",
  phoneTel: "+918714371004",
  hours: "10:00 am – 11:00 pm, daily",
  hoursShort: "10:00 am – 11:00 pm",
  whatsapp:
    "https://wa.me/918714371004?text=Hello%20Lots.%20Cr%C3%A8me%2C%20I%27d%20like%20to%20place%20an%20order.",
  whatsappCustom:
    "https://wa.me/918714371004?text=Hello%20Lots.%20Cr%C3%A8me%2C%20I%27d%20like%20to%20enquire%20about%20a%20custom%20cake.",
  instagram: "https://www.instagram.com/lots.creme/",
  instagramHandle: "@lots.creme",
  maps: "https://share.google/lLmkRymXcVtji1pfG",
  mapsEmbed:
    "https://maps.google.com/maps?q=Lots%20Creme%20SJ%20Century%20Complex%20Manjeri&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Cakes", href: "/cakes" },
  { label: "Custom cakes", href: "/custom-cakes" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
] as const;

export const images = {
  roseCake: {
    src: "/images/lots-creme/hero-cake-crop.jpg",
    alt: "A long cream cake finished with red roses",
  },
  heartCake: {
    src: "/images/lots-creme/floral-cake-crop.jpg",
    alt: "Heart-shaped chocolate cake with a cascade of red roses",
  },
  lilacCake: {
    src: "/images/lots-creme/wedding-cake-crop.jpg",
    alt: "Two-tier cake in white and lilac, with purple roses",
  },
  celebrationCake: {
    src: "/images/lots-creme/celebration-cake.jpg",
    alt: "A colourful celebration cake with butterflies and stars",
  },
  themeCake: {
    src: "/images/lots-creme/theme-cake.jpg",
    alt: "A custom theme cake with gold lettering",
  },
  cakeDisplay: {
    src: "/images/lots-creme/cake-display.jpg",
    alt: "Cakes on display at Lots. Crème",
  },
  pastryDessert: {
    src: "/images/lots-creme/pastry-dessert.jpg",
    alt: "Pastry and dessert from Lots. Crème",
  },
  storefront: {
    src: "/images/lots-creme/store-exterior.jpg",
    alt: "The Lots. Crème corner building in Manjeri, lit at night",
  },
  storeWide: {
    src: "/images/lots-creme/maps-interior-01.jpg",
    alt: "Lots. Crème storefront and courtyard",
  },
  terrace: {
    src: "/images/lots-creme/store-terrace.jpg",
    alt: "Covered terrace and outdoor seating at Lots. Crème",
  },
  storeClose: {
    src: "/images/lots-creme/maps-store-03.jpg",
    alt: "Close view of the teal façade and windows",
  },
  shopNight: {
    src: "/images/lots-creme/maps-display-01.jpg",
    alt: "Lots. Crème lit at night on Industrial Estate Road",
  },
  heroMenu: {
    src: "/images/lots-creme/hero-menu.png",
    alt: "Cakes and pastry in the case",
  },
  heroCakes: {
    src: "/images/lots-creme/hero-cakes.png",
    alt: "A cream cake finished with roses",
  },
  heroCustom: {
    src: "/images/lots-creme/hero-custom.png",
    alt: "A custom cake with red roses",
  },
  heroGallery: {
    src: "/images/lots-creme/hero-gallery.png",
    alt: "Finished cakes on the bench",
  },
  heroAbout: {
    src: "/images/lots-creme/hero-about.png",
    alt: "Inside the patisserie",
  },
  heroVisit: {
    src: "/images/lots-creme/hero-visit.png",
    alt: "The shop terrace in Manjeri",
  },
} as const;

export const menuSections = [
  {
    name: "Cakes",
    href: "/cakes",
    note: "Finished cakes from the case, and cakes made for a date.",
    image: images.roseCake.src,
  },
  {
    name: "Pastries",
    href: "/menu#pastries",
    note: "A rotating selection from the pastry case.",
    image: images.pastryDessert.src,
  },
  {
    name: "Cheesecakes",
    href: "/menu#cheesecakes",
    note: "Including seasonal flavours such as strawberry and mango.",
    image: images.heartCake.src,
  },
  {
    name: "Desserts",
    href: "/menu#desserts",
    note: "Smaller plates and sweet things for the table.",
    image: images.celebrationCake.src,
  },
  {
    name: "Waffles",
    href: "/menu#waffles",
    note: "Served in the cafe.",
    image: images.terrace.src,
  },
  {
    name: "Custom cakes",
    href: "/custom-cakes",
    note: "Birthdays, weddings, and cakes made for a date.",
    image: images.themeCake.src,
  },
] as const;

export const gallery = [
  { ...images.storefront, span: "wide" as const },
  { ...images.roseCake, span: "tall" as const },
  { ...images.heartCake, span: "tall" as const },
  { ...images.terrace, span: "wide" as const },
  { ...images.lilacCake, span: "tall" as const },
  { ...images.celebrationCake, span: "tall" as const },
  { ...images.storeClose, span: "wide" as const },
  { ...images.themeCake, span: "tall" as const },
  { ...images.cakeDisplay, span: "tall" as const },
  { ...images.pastryDessert, span: "tall" as const },
  { ...images.shopNight, span: "wide" as const },
] as const;
