export const site = {
  name: "Lots. Crème",
  wordmark: "Lots. Crème",
  mark: "lots.crème",
  tagline: "Pâtisserie cafe",
  location: "Manjeri, Kerala",
  addressLines: [
    "Kovilamkundu",
    "Chengana Bypass, Kacherippadi",
    "Manjeri",
  ],
  phoneDisplay: "+91 87143 71004",
  phoneTel: "+918714371004",
  hours: "10:00 am – 11:00 pm, daily",
  hoursShort: "10:00 am – 11:00 pm",
  hoursDaily: "Open daily, 10 am to 11 pm",
  whatsapp:
    "https://wa.me/918714371004?text=Hello%20Lots.%20Cr%C3%A8me%2C%20I%27d%20like%20to%20place%20an%20order.",
  whatsappCustom:
    "https://wa.me/918714371004?text=Hello%20Lots.%20Cr%C3%A8me%2C%20I%27d%20like%20to%20enquire%20about%20a%20custom%20cake.",
  instagram: "https://www.instagram.com/lots.creme/",
  instagramHandle: "@lots.creme",
  maps: "https://www.google.com/maps/search/?api=1&query=Lots%20Creme%20Kovilamkundu%20Chengana%20Bypass%20Kacherippadi%20Manjeri",
  mapsEmbed:
    "https://maps.google.com/maps?q=Lots%20Creme%20Kovilamkundu%20Chengana%20Bypass%20Kacherippadi%20Manjeri&t=&z=16&ie=UTF8&iwloc=&output=embed",
  whatsappParty:
    "https://wa.me/918714371004?text=Hello%20Lots.%20Cr%C3%A8me%2C%20I%27d%20like%20to%20enquire%20about%20the%20party%20hall.",
  partyHall: {
    title: "Party hall available",
    events: ["Birthday party", "Wedding anniversary", "Corporate events"],
  },
} as const;

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Cakes", href: "/cakes" },
  { label: "Custom cakes", href: "/custom-cakes" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
] as const;

const asset = (src: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;

const photo = (src: string, alt: string) => ({
  src: asset(src),
  alt,
});

export const images = {
  logo: photo("/images/lots-creme/logo.jpg", "Lots. Crème mark"),
  tableSpread: photo(
    "/images/lots-creme/table-spread.jpg",
    "Cheesecake, waffle and chocolate sauce on a table at Lots. Crème",
  ),
  tableSauce: photo(
    "/images/lots-creme/table-sauce.jpg",
    "Cheesecake with chocolate sauce on a lots.crème plate",
  ),
  tableWindow: photo(
    "/images/lots-creme/table-window.jpg",
    "A cafe table of pastry, drinks and waffle by the window",
  ),
  wafflePink: photo(
    "/images/lots-creme/waffle-pink.jpg",
    "Pink cheesecake and a waffle at the table",
  ),
  wafflePlate: photo(
    "/images/lots-creme/waffle-plate.jpg",
    "A waffle with sprinkles and caramel at Lots. Crème",
  ),
  heroAtmosphere: photo(
    "/images/lots-creme/hero-atmosphere.jpg",
    "The powder-blue terrace at Lots. Crème",
  ),
  ctaTerrace: photo(
    "/images/lots-creme/cta-terrace.jpg",
    "Tables on the terrace at Lots. Crème",
  ),
  cafeRoom: photo(
    "/images/lots-creme/cafe-room.jpg",
    "A table by the window inside Lots. Crème",
  ),
  caseClear: photo(
    "/images/lots-creme/case-clear.jpg",
    "Cheesecake and cakes in the pastry case",
  ),
  oreoSundae: photo(
    "/images/lots-creme/oreo-sundae.jpg",
    "A plated dessert with ice cream and chocolate",
  ),
  rainbowCake: photo(
    "/images/lots-creme/rainbow-cake.jpg",
    "A celebration cake with stars and butterflies",
  ),
  bearCake: photo(
    "/images/lots-creme/bear-cake.jpg",
    "A custom blue celebration cake",
  ),
  whiteRoseCake: photo(
    "/images/lots-creme/white-rose-cake.jpg",
    "A white cake finished with red roses",
  ),
  roseSlab: photo(
    "/images/lots-creme/rose-slab.jpg",
    "A long cream cake finished with red roses",
  ),
  storefrontDay: photo(
    "/images/lots-creme/storefront-day.jpg",
    "The Lots. Crème cafe in daylight at Kovilamkundu",
  ),
  terraceDay: photo(
    "/images/lots-creme/terrace-day.jpg",
    "Outdoor tables on the terrace at Lots. Crème",
  ),
  pastryCase: photo(
    "/images/lots-creme/pastry-case.jpg",
    "Pastries and cake slices in the case",
  ),
  heroPoster: photo(
    "/images/lots-creme/hero-poster.jpg",
    "Pastry being served at the table",
  ),
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
    "Close view of the facade and windows",
  ),
  shopNight: photo(
    "/images/lots-creme/maps-display-01.jpg",
    "Lots. Crème lit at night in Manjeri",
  ),
  interior: photo(
    "/images/lots-creme/maps-interior-02.jpg",
    "Inside the cafe at Lots. Crème",
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

export const films = {
  table: asset("/images/lots-creme/films/hero-table.mp4"),
  bite: asset("/images/lots-creme/films/hero-bite.mp4"),
  spread: asset("/images/lots-creme/films/hero-spread.mp4"),
} as const;

export const heroFilms = [films.table, films.bite, films.spread] as const;

export const shopMosaic = [
  images.tableSpread,
  images.wafflePink,
  images.tableWindow,
  images.oreoSundae,
] as const;

export const menuSections = [
  {
    name: "Cakes",
    href: "/cakes",
    note: "Finished cakes from the case, and cakes made for a date.",
    image: images.roseSlab.src,
  },
  {
    name: "Pastries",
    href: "/menu#pastries",
    note: "From the case, to eat in or take home.",
    image: images.tableSauce.src,
  },
  {
    name: "Cheesecakes",
    href: "/menu#cheesecakes",
    note: "Cheesecake from the case.",
    image: images.tableSauce.src,
  },
  {
    name: "Desserts",
    href: "/menu#desserts",
    note: "Smaller plates and sweet things for the table.",
    image: images.oreoSundae.src,
  },
  {
    name: "Waffles",
    href: "/menu#waffles",
    note: "Served in the cafe.",
    image: images.wafflePlate.src,
  },
  {
    name: "Custom cakes",
    href: "/custom-cakes",
    note: "Birthdays, weddings, and cakes made for a date.",
    image: images.bearCake.src,
  },
] as const;

export const galleryGroups = [
  {
    title: "Desserts",
    text: "Waffles, cheesecake, and plates from the table.",
    wide: false,
    items: [
      images.wafflePlate,
      images.tableSauce,
      images.oreoSundae,
      images.tableSpread,
      images.tableWindow,
      images.wafflePink,
    ],
  },
  {
    title: "Outdoors",
    text: "The terrace, and the front of the shop.",
    wide: true,
    items: [images.storefrontDay, images.terraceDay],
  },
  {
    title: "The shop",
    text: "The room, and the case.",
    wide: true,
    items: [images.cafeRoom, images.caseClear],
  },
  {
    title: "Cakes",
    text: "Celebration cakes from the bench.",
    wide: false,
    items: [images.whiteRoseCake, images.roseSlab, images.rainbowCake, images.bearCake],
  },
] as const;
