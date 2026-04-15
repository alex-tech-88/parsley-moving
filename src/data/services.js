import localMovingImg       from '@assets/services/local-moving.webp'
import packingServicesImg   from '@assets/services/packing-services.webp'
import residentialMovingImg from '@assets/services/residential-moving.webp'
import commercialMovingImg  from '@assets/services/commercial-moving.webp'
import instateMovingImgImg  from '@assets/services/instate-moving.webp'
import furnitureMovingImg   from '@assets/services/furniture-moving.webp'

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