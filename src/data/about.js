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
    text1: "Our local moving crew handles apartment and home relocations across the Bay Area. We show up on time, work efficiently, and treat your belongings with the same care we'd give our own.",
    text2: "From studio apartments to large family homes, we've done it all. Every local move includes full wrapping of furniture, floor protection, and careful placement at your new address.",
  },
  "residential-moving": {
    title: "Your Residential",
    highlight: "Moving Experts",
    text1: "Moving your home is one of the most stressful life events — we're here to take that weight off your shoulders. Our residential team handles everything from packing fragile items to reassembling furniture.",
    text2: "We work carefully and communicate clearly throughout the process, so you always know what's happening. Your home deserves a team that treats it like their own.",
  },
  "commercial-moving": {
    title: "Your Commercial",
    highlight: "Moving Experts",
    text1: "Business relocations require precision and speed. We move offices, retail spaces, and commercial equipment with minimal disruption to your operations.",
    text2: "Our team works evenings and weekends to fit your schedule. We coordinate with building management, handle large furniture and IT equipment, and make sure everything is ready for your first day back.",
  },
  "in-state-moving": {
    title: "Your In-State",
    highlight: "Moving Experts",
    text1: "Moving within California but across cities? We handle long-distance in-state relocations with the same care as a local move — careful loading, secured transport, and safe delivery.",
    text2: "Whether you're moving from the Bay Area to Los Angeles or from Sacramento to San Diego, our team plans the route, wraps everything properly, and keeps you updated throughout.",
  },
  "packing": {
    title: "Your Packing",
    highlight: "Services Experts",
    text1: "Professional packing makes a real difference. We use quality boxes, bubble wrap, and packing paper to protect everything from your everyday dishes to your most fragile keepsakes.",
    text2: "Every box is labeled clearly so unpacking is organized and easy. We can pack your entire home or just the items you'd rather not tackle yourself.",
  },
  "furniture": {
    title: "Your Furniture",
    highlight: "Moving Experts",
    text1: "Large sofas, antique dressers, custom shelving — we've moved it all. Every piece is wrapped in moving blankets and secured before it leaves the door.",
    text2: "We disassemble what needs to come apart and reassemble it at your new place. No scratches, no damage, no excuses.",
  },
}