// ─── Breakpoints ─────────────────────────────────────────────────────────────

export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
}

// ─── Company Info ─────────────────────────────────────────────────────────────

export const PHONE = '(510) 806-7601'
export const EMAIL = "info@parsleymoving.com"
export const ADDRESS = "Bay Area, California"
export const YEAR = new Date().getFullYear()
export const WORKING_HOURS = [{ label: "7 days a week", hours: "9:00 AM – 9:00 PM" }]

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  {
    label: 'About Us',
    href: '#about',
    dropdown: [
      { label: 'Company',  href: '#about' },
      { label: 'Reviews',  href: '#reviews' },
      { label: 'Gallery',  href: '#gallery' },
      { label: 'Contacts', href: '#contact' },
    ],
  },
  {
    label: 'Services',
    href: '/services/local-moving',
    dropdown: [
      { label: 'Local Moving',       href: '/services/local-moving' },
      { label: 'Residential Moving', href: '/services/residential-moving' },
      { label: 'Commercial Moving',  href: '/services/commercial-moving' },
      { label: 'In-State Moving',    href: '/services/in-state-moving' },
      { label: 'Packing Services',   href: '/services/packing' },
      { label: 'Furniture Moving',   href: '/services/furniture' },
    ],
  },
  {
    label: 'Moving Areas',
    href: '#areas',
    groups: [
      {
        label: 'East Bay',
        cities: [
          { label: 'Richmond',      href: '/areas/richmond' },
          { label: 'Berkeley',      href: '/areas/berkeley' },
          { label: 'Oakland',       href: '/areas/oakland' },
          { label: 'Albany',        href: '/areas/albany' },
          { label: 'El Cerrito',    href: '/areas/el-cerrito' },
          { label: 'San Pablo',     href: '/areas/san-pablo' },
          { label: 'Pinole',        href: '/areas/pinole' },
          { label: 'Hercules',      href: '/areas/hercules' },
          { label: 'Alameda',       href: '/areas/alameda' },
        ],
      },
      {
        label: 'Tri-Valley & Walnut Creek Area',
        cities: [
          { label: 'Concord',       href: '/areas/concord' },
          { label: 'Walnut Creek',  href: '/areas/walnut-creek' },
          { label: 'Pleasant Hill', href: '/areas/pleasant-hill' },
          { label: 'Martinez',      href: '/areas/martinez' },
          { label: 'Lafayette',     href: '/areas/lafayette' },
          { label: 'Orinda',        href: '/areas/orinda' },
          { label: 'Danville',      href: '/areas/danville' },
          { label: 'San Ramon',     href: '/areas/san-ramon' },
          { label: 'Dublin',        href: '/areas/dublin' },
          { label: 'Pleasanton',    href: '/areas/pleasanton' },
        ],
      },
      {
        label: 'Fremont Area',
        cities: [
          { label: 'San Leandro',   href: '/areas/san-leandro' },
          { label: 'Hayward',       href: '/areas/hayward' },
          { label: 'Castro Valley', href: '/areas/castro-valley' },
          { label: 'Fremont',       href: '/areas/fremont' },
          { label: 'Newark',        href: '/areas/newark' },
          { label: 'Union City',    href: '/areas/union-city' },
        ],
      },
      {
        label: 'San Francisco',
        cities: [
          { label: 'San Francisco', href: '/areas/san-francisco' },
        ],
      },
      {
        label: 'Peninsula',
        cities: [
          { label: 'Daly City',           href: '/areas/daly-city' },
          { label: 'South San Francisco', href: '/areas/south-san-francisco' },
          { label: 'San Mateo',           href: '/areas/san-mateo' },
          { label: 'San Bruno',           href: '/areas/san-bruno' },
        ],
      },
    ],
  },
]

// ─── Reviews ──────────────────────────────────────────────────────────────────

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

// ─── Services ─────────────────────────────────────────────────────────────────

import localMovingImg       from '@assets/services/local-moving.png'
import packingServicesImg   from '@assets/services/packing-services.png'
import residentialMovingImg from '@assets/services/residential-moving.png'
import commercialMovingImg  from '@assets/services/commercial-moving.png'
import instateMovingImgImg  from '@assets/services/instate-moving.png'
import furnitureMovingImg   from '@assets/services/furniture-moving.png'

export const SERVICES = [
  {
    id: "local-moving",
    title: "Local Moving",
    description: "Our local moving crew handles apartment and home relocations across the Bay Area. We plan every detail in advance so your move runs smoothly and on schedule.",
    img: localMovingImg,
    href: "/services/local-moving",
  },
  {
    id: "residential-moving",
    title: "Residential Moving",
    description: "We take full care of your home relocation — wrapping furniture, protecting floors, and securing fragile items so everything arrives exactly as it left.",
    img: residentialMovingImg,
    href: "/services/residential-moving",
  },
  {
    id: "commercial-moving",
    title: "Commercial Moving",
    description: "We relocate offices and businesses with minimal disruption. Our team works around your schedule — evenings, weekends, and holidays — to keep your downtime as short as possible.",
    img: commercialMovingImg,
    href: "/services/commercial-moving",
  },
  {
    id: "in-state-moving",
    title: "In-State Moving",
    description: "Long distance moving services within California. We handle residential and apartment moves between cities across the state with careful loading, transportation and safe delivery.",
    img: instateMovingImgImg,
    href: "/services/in-state-moving",
  },
  {
    id: "packing",
    title: "Packing Services",
    description: "Our team packs your entire home or just the fragile pieces — using quality materials to keep everything safe. We label and organize boxes so unpacking is easy.",
    img: packingServicesImg,
    href: "/services/packing",
  },
  {
    id: "furniture",
    title: "Furniture Moving",
    description: "We wrap, pad, and secure every piece before it moves. Large sofas, antiques, or custom builds — we handle disassembly at pickup and reassembly at delivery.",
    img: furnitureMovingImg,
    href: "/services/furniture",
  },
]

// ─── Moving Areas — Hero/Footer quick links ───────────────────────────────────

export const MOVING_AREAS = [
  { label: "San Francisco", href: "/areas/san-francisco" },
  { label: "San Jose",      href: "/areas/san-jose" },
  { label: "Oakland",       href: "/areas/oakland" },
  { label: "Berkeley",      href: "/areas/berkeley" },
  { label: "Fremont",       href: "/areas/fremont" },
  { label: "Palo Alto",     href: "/areas/palo-alto" },
]

// ─── Moving Areas — Accordion (Areas page) ────────────────────────────────────

export const ACCORDION_AREAS = [
  {
    id: "east-bay",
    label: "East Bay",
    cities: [
      { name: "Richmond",      slug: "richmond",      href: "/areas/richmond" },
      { name: "Berkeley",      slug: "berkeley",      href: "/areas/berkeley" },
      { name: "Oakland",       slug: "oakland",       href: "/areas/oakland" },
      { name: "Albany",        slug: "albany",        href: "/areas/albany" },
      { name: "El Cerrito",    slug: "el-cerrito",    href: "/areas/el-cerrito" },
      { name: "San Pablo",     slug: "san-pablo",     href: "/areas/san-pablo" },
      { name: "Pinole",        slug: "pinole",        href: "/areas/pinole" },
      { name: "Hercules",      slug: "hercules",      href: "/areas/hercules" },
      { name: "Alameda",       slug: "alameda",       href: "/areas/alameda" },
    ],
  },
  {
    id: "tri-valley",
    label: "Tri-Valley & Walnut Creek Area",
    cities: [
      { name: "Concord",       slug: "concord",       href: "/areas/concord" },
      { name: "Walnut Creek",  slug: "walnut-creek",  href: "/areas/walnut-creek" },
      { name: "Pleasant Hill", slug: "pleasant-hill", href: "/areas/pleasant-hill" },
      { name: "Martinez",      slug: "martinez",      href: "/areas/martinez" },
      { name: "Lafayette",     slug: "lafayette",     href: "/areas/lafayette" },
      { name: "Orinda",        slug: "orinda",        href: "/areas/orinda" },
      { name: "Danville",      slug: "danville",      href: "/areas/danville" },
      { name: "San Ramon",     slug: "san-ramon",     href: "/areas/san-ramon" },
      { name: "Dublin",        slug: "dublin",        href: "/areas/dublin" },
      { name: "Pleasanton",    slug: "pleasanton",    href: "/areas/pleasanton" },
    ],
  },
  {
    id: "fremont-area",
    label: "Fremont Area",
    cities: [
      { name: "San Leandro",   slug: "san-leandro",   href: "/areas/san-leandro" },
      { name: "Hayward",       slug: "hayward",       href: "/areas/hayward" },
      { name: "Castro Valley", slug: "castro-valley", href: "/areas/castro-valley" },
      { name: "Fremont",       slug: "fremont",       href: "/areas/fremont" },
      { name: "Newark",        slug: "newark",        href: "/areas/newark" },
      { name: "Union City",    slug: "union-city",    href: "/areas/union-city" },
    ],
  },
  {
    id: "san-francisco",
    label: "San Francisco",
    cities: [
      { name: "San Francisco", slug: "san-francisco", href: "/areas/san-francisco" },
    ],
  },
  {
    id: "peninsula",
    label: "Peninsula",
    cities: [
      { name: "Daly City",           slug: "daly-city",           href: "/areas/daly-city" },
      { name: "South San Francisco", slug: "south-san-francisco", href: "/areas/south-san-francisco" },
      { name: "San Mateo",           slug: "san-mateo",           href: "/areas/san-mateo" },
      { name: "San Bruno",           slug: "san-bruno",           href: "/areas/san-bruno" },
    ],
  },
]