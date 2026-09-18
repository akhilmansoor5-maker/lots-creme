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

const photo = (src: string, alt: string) => ({
  src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`,
  alt,
});

export const images = {
  roseCake: photo(
    "/images/lots-creme/hero-cake-crop.jpg",
    "A long cream cake finished with red roses",
  ),
  heartCake: photo(
    "/images/lots-creme/floral-cake-crop.jpg",
    "Heart-shaped chocolate cake with a cascade of red roses",
  ),
  lilacCake: photo(
    "/images/lots-creme/wedding-cake-crop.jpg",
    "Two-tier cake in white and lilac, with purple roses",
  ),
  celebrationCake: photo(
    "/images/lots-creme/celebration-cake.jpg",
    "A colourful celebration cake with butterflies and stars",
  ),
  themeCake: photo(
    "/images/lots-creme/theme-cake.jpg",
    "A custom theme cake with gold lettering",
  ),
  cakeDisplay: photo(
    "/images/lots-creme/cake-display.jpg",
    "Cakes on display at Lots. Crème",
  ),
  pastryDessert: photo(
    "/images/lots-creme/pastry-dessert.jpg",
    "Pastry and dessert from Lots. Crème",
  ),
  storefront: photo(
    "/images/lots-creme/store-exterior.jpg",
    "The Lots. Crème corner building in Manjeri, lit at night",
  ),
  storeWide: photo(
    "/images/lots-creme/maps-interior-01.jpg",
    "Lots. Crème storefront and courtyard",
  ),
  terrace: photo(
    "/images/lots-creme/store-terrace.jpg",
    "Covered terrace and outdoor seating at Lots. Crème",
  ),
  storeClose: photo(
    "/images/lots-creme/maps-store-03.jpg",
    "Close view of the teal façade and windows",
  ),
  shopNight: photo(
    "/images/lots-creme/maps-display-01.jpg",
    "Lots. Crème lit at night on Industrial Estate Road",
  ),
  heroMenu: photo("/images/lots-creme/hero-menu.png", "Cakes and pastry in the case"),
  heroCakes: photo("/images/lots-creme/hero-cakes.png", "A cream cake finished with roses"),
  heroCustom: photo("/images/lots-creme/hero-custom.png", "A custom cake with red roses"),
  heroGallery: photo("/images/lots-creme/hero-gallery.png", "Finished cakes on the bench"),
  heroAbout: photo("/images/lots-creme/hero-about.png", "Inside the patisserie"),
  heroVisit: photo("/images/lots-creme/hero-visit.png", "The shop terrace in Manjeri"),
  waffles: photo(
    "/images/lots-creme/waffles.png",
    "A waffle served with ice cream and berries",
  ),
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
    image: images.waffles.src,
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
