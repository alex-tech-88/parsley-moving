import aboutImg1 from "@assets/about-us-1.webp"
import aboutImg2 from "@assets/about-us-2.webp"
import aboutImg3 from "@assets/about-us-3.webp"
import aboutImg4 from "@assets/about-us-4.webp"
import packingImg from "@assets/packing.webp"

export const ABOUT_PHOTOS = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, packingImg]

export function getPhotoBySlug(slug) {
  const index = slug
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % ABOUT_PHOTOS.length
  return ABOUT_PHOTOS[index]
}

export const ABOUT_BY_CITY = {
  "san-francisco": {
    text1: "San Francisco moves come with unique challenges — steep hills, tight parking on narrow streets, and strict building elevator rules. Our crew works in SF regularly and knows how to navigate the city without delays.",
    text2: "Whether you're moving into a Victorian flat in the Mission or a high-rise in SoMa, we handle every detail so your move stays on schedule.",
  },
  "oakland": {
    text1: "Oakland is one of our most active service areas. From the hills to the flatlands, we move families and businesses across every neighborhood in the city.",
    text2: "Our team knows Oakland's streets, parking restrictions, and building access requirements, so we plan your move accordingly and avoid surprises.",
  },
  "berkeley": {
    text1: "Berkeley moves often involve multi-story homes, tight driveways, and university housing with specific move-in windows. We work around all of it.",
    text2: "From the Berkeley Hills to the flatlands near the bay, our team handles local moves with the care and efficiency the area demands.",
  },
}

export const ABOUT_BY_SERVICE = {
  "local-moving": {
    title: "Your Local",
    highlight: "Moving Experts",
    text1: "At Parsley Moving, our local moving crew handles apartment and home relocations across the Bay Area. We show up on time, work efficiently, and treat your belongings with the same care we'd give our own.",
    text2: "From studio apartments to large family homes, we've done it all. Every local move includes full furniture wrapping, floor protection, and careful placement at your new address with no shortcuts and no rushed work.",
  },
  "residential-moving": {
    title: "Your Residential",
    highlight: "Moving Experts",
    text1: "Moving your home is one of the most stressful life events. Our job is to make it simple. Our residential moving team handles everything from protecting fragile items to disassembling and reassembling furniture.",
    text2: "We communicate clearly throughout the entire process, so you always know what to expect. At Parsley Moving, we treat every home with care and respect, just like it's our own.",
  },
  "commercial-moving": {
    title: "Your Commercial",
    highlight: "Moving Experts",
    text1: "Business relocations require precision and speed. We move offices, retail spaces, and commercial equipment while keeping downtime to a minimum.",
    text2: "Our team can work evenings and weekends to fit your schedule. We coordinate with building management, handle desks, large furniture, and equipment, and make sure everything is set up for a smooth return to work.",
  },
  "in-state-moving": {
    title: "Your In-State",
    highlight: "Moving Experts",
    text1: "Planning a move within California? Parsley Moving handles long-distance in-state relocations with the same level of care as local moves.",
    text2: "From the Bay Area to Los Angeles or anywhere in between, we plan the route, secure your items properly, and keep you updated throughout the process so there are no surprises.",
  },
  "packing": {
    title: "Your Packing",
    highlight: "Services Experts",
    text1: "Professional packing makes a big difference in how safe and organized your move will be. We use quality boxes, bubble wrap, and packing paper to protect everything from everyday items to fragile belongings.",
    text2: "Every box is clearly labeled to make unpacking easier. Whether you need full packing or just help with specific items, our team at Parsley Moving has you covered.",
  },
  "furniture": {
    title: "Your Furniture",
    highlight: "Moving Experts",
    text1: "Large sofas, antique dressers, heavy beds — we handle it all. Every item is carefully wrapped in moving blankets and secured before transport.",
    text2: "We disassemble furniture when needed and reassemble it at your new location. No scratches, no damage, no excuses. Just careful and professional handling.",
  },
}