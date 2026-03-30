export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
}

export const PHONE = '(510) 806-7601'
export const EMAIL = "info@parsleymoving.com";
export const ADDRESS = "Bay Area, California";
export const YEAR = new Date().getFullYear();
export const WORKING_HOURS = [{ label: "Mon – Sun", hours: "9:00 AM – 9:00 PM" }];

export const NAV_LINKS = [
  {
    label: 'About Us',
    href: '#about',
    dropdown: [
      { label: 'Company',  href: '#about' },
      { label: 'Reviews',  href: '#reviews' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contacts', href: '#contact' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Local Moving',        href: '#local-moving' },
      { label: 'Apartment Moving',    href: '#apartment-moving' },
      { label: 'House Moving',        href: '#house-moving' },
      { label: 'Office Moving',       href: '#office-moving' },
      { label: 'Packing Services',    href: '#packing' },
      { label: 'Furniture Assembly',  href: '#furniture' },
    ],
  },
  { label: 'Moving Areas', href: '#areas' },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Shawn Duffy',
    rating: 5,
    date: 'October 2024',
    text: 'Nick, Ivan and the team were incredible. On-time, friendly, fast, clean and professional. I\'ll never use another moving company again. Strongly encourage folks moving to use these guys.',
  },
  {
    id: 2,
    name: 'Estelle Cimino',
    rating: 5,
    date: 'March 2025',
    text: 'We\'ve worked with Parsley Moving Company for three separate moves for our business over the past few months, and they have been consistently excellent every time! From start to finish, their team was timely, efficient, and incredibly easy to work with. Their pricing was transparent and fair, with no surprises.',
  },
  {
    id: 3,
    name: 'R Bernardin',
    rating: 5,
    date: 'July 2024',
    text: 'Ivan and the crew did an amazing job! We are very happy with how they took great care of our furniture and communicated the process clearly. From start to finish, it was a great experience. Highly recommend!',
  },
  {
    id: 4,
    name: 'Olsi Leka',
    rating: 5,
    date: 'October 2024',
    text: 'This is the second time we\'ve moved with Ivan and his crew and they exceed expectations every time! Everything is done very carefully with care to protect both furniture and walls. They\'re also fast. We had a lot of heavy furniture to be disassembled and reassembled and it barely took any time at all.',
  },
  {
    id: 7,
    name: 'Rachel Weaver',
    rating: 5,
    date: 'December 2024',
    text: 'Ivan and Nick were wonderful! Everything went smoothly and efficiently, both in the loading and unloading of my belongings. They are kind, professional, and neat. From start to finish, the entire process was painless. If I had to move again, I would definitely engage their services. Thanks guys!!',
  },
  {
    id: 8,
    name: 'Neelam Sigdel',
    rating: 5,
    date: 'May 2024',
    text: 'Had a great experience with Parsley Moving! Ivan and Nick were super professional and responsive. They listened to all my requests and made sure everything was done just the way I asked. Clear pricing, easy communication, and everything was moved quickly and safely. Highly recommend!',
  },
  {
    id: 9,
    name: 'Olga Brezhneva',
    rating: 5,
    date: 'December 2024',
    text: 'Parsley Moving helped us with both moving our furniture out of our condo and bringing everything back in afterward. Their team was incredibly efficient, friendly, and professional throughout the entire process. Everything was packed and moved with great care, and the job was completed quickly and smoothly.',
  },
  {
    id: 10,
    name: 'Zafarali Ahmed (Zaf)',
    rating: 5,
    date: 'July 2024',
    text: 'Recently did a pack and move with Parsley and the team that Ivan sent out (Nick, Alex and Vlad) were awesome. They showed up perfectly on time and communicated how long they estimated the move to take. Things were packed carefully and the price was fair. I\'d use them again!',
  },
]

import localMovingImg from '@assets/services/local-moving.png'
import packingServicesImg from '@assets/services/packing-services.png'
import residentialMovingImg from '@assets/services/residential-moving.png'
import commercialMovingImg from '@assets/services/commercial-moving.png'
import instateMovingImgImg from '@assets/services/instate-moving.png'
import furnitureMovingImg from '@assets/services/furniture-moving.png'

export const SERVICES = [
  {
    id: 'local-moving',
    title: 'Local Moving',
    description: 'Our local moving crew handles apartment and home relocations across the Bay Area. We plan every detail in advance so your move runs smoothly and on schedule.',
    img: localMovingImg,
    href: '#local-moving',
  },
  {
    id: 'residential-moving',
    title: 'Residential Moving',
    description: 'We take full care of your home relocation — wrapping furniture, protecting floors, and securing fragile items so everything arrives exactly as it left.',
    img: residentialMovingImg,
    href: '#residential-moving',
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Moving',
    description: 'We relocate offices and businesses with minimal disruption. Our team works around your schedule — evenings, weekends, and holidays — to keep your downtime as short as possible.',
    img: commercialMovingImg,
    href: '#commercial-moving',
  },
    {
    id: 'in-state-moving',
    title: 'In-State Moving',
    description: 'Long distance moving services within California. We handle residential and apartment moves between cities across the state with careful loading, transportation and safe delivery.',
    img: instateMovingImgImg,
    href: '#in-state-moving',
  },
  {
    id: 'packing',
    title: 'Packing Services',
    description: 'Our team packs your entire home or just the fragile pieces — using quality materials to keep everything safe. We label and organize boxes so unpacking is easy.',
    img: packingServicesImg,
    href: '#packing',
  },
  {
    id: 'furniture',
    title: 'Furniture Moving',
    description: 'We wrap, pad, and secure every piece before it moves. Large sofas, antiques, or custom builds — we handle disassembly at pickup and reassembly at delivery.',
    img: furnitureMovingImg,
    href: '#furniture',
  },
]

export const MOVING_AREAS = [
  { label: "San Francisco", href: "#san-francisco" },
  { label: "San Jose", href: "#san-jose" },
  { label: "Oakland", href: "#oakland" },
  { label: "Berkeley", href: "#berkeley" },
  { label: "Fremont", href: "#fremont" },
  { label: "Palo Alto", href: "#palo-alto" },
];

export const ACCORDION_AREAS = [
  {
    id: "east-bay",
    label: "East Bay",
    cities: [
      { name: "Richmond", href: "#richmond" },
      { name: "Berkeley", href: "#berkeley" },
      { name: "Oakland", href: "#oakland" },
      { name: "Albany", href: "#albany" },
      { name: "El Cerrito", href: "#el-cerrito" },
      { name: "San Pablo", href: "#san-pablo" },
      { name: "Pinole", href: "#pinole" },
      { name: "Hercules", href: "#hercules" },
      { name: "San Leandro", href: "#san-leandro" },
      { name: "Hayward", href: "#hayward" },
      { name: "Alameda", href: "#alameda" },
      { name: "Castro Valley", href: "#castro-valley" },
    ],
  },
  {
    id: "contra-costa",
    label: "Contra Costa",
    cities: [
      { name: "Concord", href: "#concord" },
      { name: "Walnut Creek", href: "#walnut-creek" },
      { name: "Pleasant Hill", href: "#pleasant-hill" },
      { name: "Martinez", href: "#martinez" },
      { name: "Lafayette", href: "#lafayette" },
      { name: "Orinda", href: "#orinda" },
      { name: "Danville", href: "#danville" },
      { name: "San Ramon", href: "#san-ramon" },
      { name: "Dublin", href: "#dublin" },
      { name: "Pleasanton", href: "#pleasanton" },
    ],
  },
  {
    id: "peninsula",
    label: "Peninsula & SF",
    cities: [
      { name: "San Francisco", href: "#san-francisco" },
      { name: "Daly City", href: "#daly-city" },
      { name: "South San Francisco", href: "#south-san-francisco" },
      { name: "San Mateo", href: "#san-mateo" },
      { name: "Fremont", href: "#fremont" },
      { name: "Newark", href: "#newark" },
      { name: "Union City", href: "#union-city" },
    ],
  },
];