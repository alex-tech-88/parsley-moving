// ─────────────────────────────────────────────────────────────────────────────
// Navigation tabs for the Moving Areas section (used in the main page header)
// ─────────────────────────────────────────────────────────────────────────────
export const MOVING_AREAS = [
  { label: "East Bay",                       href: "#areas", areaId: "east-bay" },
  { label: "Tri-Valley & Walnut Creek Area", href: "#areas", areaId: "tri-valley" },
  { label: "Fremont Area",                   href: "#areas", areaId: "fremont-area" },
  { label: "San Francisco",                  href: "#areas", areaId: "san-francisco" },
  { label: "Peninsula",                      href: "#areas", areaId: "peninsula" },
]

// ─────────────────────────────────────────────────────────────────────────────
// Accordion groups with all city slugs/hrefs (used on the main Moving Areas page)
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// Block 5 — "Why Choose Parsley Moving in [City]"
// Identical bullet points for every city page; only the heading changes
// ─────────────────────────────────────────────────────────────────────────────
export const AREA_WHY_ITEMS = [
  "Experienced and professional movers",
  "Fully equipped trucks with all materials included",
  "Transparent hourly pricing with no hidden fees",
  "Careful handling of all furniture and belongings",
  "Reliable scheduling and clear communication",
]

// ─────────────────────────────────────────────────────────────────────────────
// Block 7 — City-specific parking FAQ answers (Q2 only)
// Q1 (cost) and Q3 (duration) are generated dynamically in AreaFAQ component
// Keyed by city slug
// ─────────────────────────────────────────────────────────────────────────────
export const AREA_PARKING_FAQ = {
  // ── East Bay ──────────────────────────────────────────────────────────────
  richmond:           "In many areas, yes. Having parking close to your building can significantly reduce moving time and cost.",
  berkeley:           "In many parts of Berkeley, especially near campus, parking is limited and may require planning in advance to avoid delays.",
  oakland:            "In many areas, yes. Downtown buildings may require elevator reservations and designated loading zones, while residential areas may have limited street parking.",
  albany:             "In some areas, parking can be limited, especially near apartment buildings. Having a spot close to your home can help reduce moving time.",
  "el-cerrito":       "In some areas, especially near San Pablo Avenue and apartment complexes, parking may be limited. Having a spot close to your home can help reduce moving time and cost.",
  "san-pablo":        "In some areas, especially near apartment complexes and main streets like San Pablo Avenue, parking may be limited. Having a spot close to your home can help reduce moving time.",
  pinole:             "In most residential areas parking is easier, but some apartment complexes and busier streets may still require planning ahead.",
  hercules:           "In most residential areas parking is usually manageable, but some neighborhoods and street layouts may still require planning ahead.",
  alameda:            "In many areas, especially near Park Street and apartment buildings, parking can be limited. Planning ahead can help reduce delays on moving day.",

  // ── Tri-Valley & Walnut Creek ─────────────────────────────────────────────
  concord:            "In most residential areas parking is easier, but apartment complexes and busier streets near downtown may still require planning ahead.",
  "walnut-creek":     "In downtown areas and apartment buildings, parking and loading zones may require planning in advance. Residential neighborhoods are typically easier but can still vary depending on the property.",
  "pleasant-hill":    "In apartment complexes and some busier areas, it's better to plan parking in advance. In residential neighborhoods, access is usually easier but still depends on the property.",
  martinez:           "Near downtown and older neighborhoods, parking may be limited and require planning ahead. In residential areas, access is usually easier but still depends on the property.",
  lafayette:          "In most cases parking is available, but hillside properties and narrow streets may require planning ahead for truck access.",
  orinda:             "Parking is usually available, but narrow roads and hillside access may require planning ahead for proper truck positioning.",
  danville:           "In most areas parking is available, but gated communities and HOA rules may require planning ahead for access and scheduling.",
  "san-ramon":        "In apartment complexes and managed communities, parking and access may require coordination in advance. Residential areas are usually easier but still depend on the property.",
  dublin:             "In apartment complexes, parking garages and access rules may require planning ahead. Residential neighborhoods are usually easier but still depend on the property.",
  pleasanton:         "In downtown areas parking may require planning ahead. In residential neighborhoods access is usually easier, but gated communities may have specific requirements.",

  // ── Fremont Area ──────────────────────────────────────────────────────────
  "san-leandro":      "In apartment complexes and busier streets, having parking close to your home is recommended. Residential neighborhoods are usually easier to access.",
  hayward:            "Near downtown and in busier apartment complexes, parking can be limited. Having a spot reserved near your entrance can reduce moving time significantly.",
  "castro-valley":    "In most residential areas parking is manageable. However, hillside homes and some neighborhoods may have limited space for large moving trucks — planning ahead is always helpful.",
  fremont:            "In apartment complexes and newer developments, parking access may require coordination. Most residential neighborhoods have good truck access, but planning ahead is always recommended.",
  newark:             "Most areas in Newark have good parking availability, but apartment communities may have specific access rules. Checking in advance is always a good idea.",
  "union-city":       "In some apartment complexes and residential communities, parking may be limited. Having a spot close to your entrance can help keep the move on schedule.",

  // ── San Francisco ─────────────────────────────────────────────────────────
  "san-francisco":    "Yes, in most cases. San Francisco has strict parking rules and limited street space. We strongly recommend securing a parking permit or reserved spot near your building before moving day.",

  // ── Peninsula ─────────────────────────────────────────────────────────────
  "daly-city":           "In many neighborhoods, especially near apartment buildings and busier streets, having a parking spot close to your home is recommended to avoid delays.",
  "south-san-francisco": "In some areas, especially near industrial and mixed-use corridors, parking may be limited. Residential streets are usually more accessible, but planning ahead is always helpful.",
  "san-mateo":           "Near downtown and in apartment-dense areas, street parking can be limited. Having a reserved spot near your building helps keep the move efficient and on schedule.",
  "san-bruno":           "In most areas parking is manageable, but near apartment buildings and busier streets it's worth planning ahead to avoid any delays on moving day.",
}