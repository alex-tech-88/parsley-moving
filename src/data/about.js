import aboutImg1 from "@assets/about-us-1.webp"
import aboutImg2 from "@assets/about-us-2.webp"
import aboutImg3 from "@assets/about-us-3.webp"
import aboutImg4 from "@assets/about-us-4.webp"
import aboutImg5 from "@assets/about-us-5.webp"
import packingImg from "@assets/packing.webp"

export const ABOUT_PHOTOS = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5, packingImg]

export function getPhotoBySlug(slug) {
  const index = slug
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % ABOUT_PHOTOS.length
  return ABOUT_PHOTOS[index]
}

export const ABOUT_BY_CITY = {

  // ── East Bay ──────────────────────────────────────────────────────────────

  "richmond": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Richmond",
    intro1: "Looking for reliable movers in Richmond, CA? Parsley Moving provides professional local and long-distance moving services throughout Richmond and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment, house, or storage unit, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Richmond and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartments near San Pablo Avenue and Macdonald Avenue to residential neighborhoods and hillside areas, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Richmond can vary depending on the neighborhood and location.",
      "Areas near San Pablo Avenue and Macdonald Avenue often have limited street parking, especially during busy hours, which can affect loading time if not planned ahead. Apartment complexes may also involve longer walking distances from the parking area to the unit.",
      "In residential neighborhoods and hillside areas, access can be more challenging due to narrow streets, sloped driveways, or limited space for large trucks.",
      "Our team is familiar with Richmond and nearby areas, so we know how to plan ahead and keep your move running efficiently.",
    ],
  },

  "berkeley": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Berkeley",
    intro1: "Looking for reliable movers in Berkeley, CA? Parsley Moving provides professional moving services throughout Berkeley and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from a small apartment near campus or a larger home in the hills, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Berkeley and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartments near UC Berkeley and Downtown to residential neighborhoods in North Berkeley, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Berkeley can vary significantly depending on the neighborhood.",
      "Areas near UC Berkeley and Southside are typically more crowded, with limited parking and stricter regulations, which can affect loading times if not planned ahead. Apartment buildings in these areas are often older and may not have elevators.",
      "In North Berkeley and residential neighborhoods, access is usually easier, but some homes may still involve stairs, narrow driveways, or longer walking distances from the truck.",
      "Proximity to BART stations and busy streets can also impact parking availability throughout the day.",
      "Our team is experienced with Berkeley moves and knows how to plan ahead and handle these situations efficiently.",
    ],
  },

  "oakland": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Oakland",
    intro1: "Looking for reliable movers in Oakland, CA? Parsley Moving provides professional moving services throughout Oakland and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from a downtown apartment, a condo, or a house in the hills, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Oakland and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartments in Downtown and Uptown to homes near Lake Merritt and hillside neighborhoods like Montclair, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Oakland often requires careful planning depending on the area.",
      "Downtown Oakland and Uptown neighborhoods typically involve apartment buildings with elevator reservations, designated loading zones, and strict move-in time windows. Parking can be limited, especially near busy areas like Lake Merritt and Jack London Square.",
      "In hillside neighborhoods such as Montclair, access can be more challenging due to narrow streets, steep driveways, and longer distances from the truck to the home.",
      "Our team has experience working throughout Oakland and knows how to handle these situations efficiently to keep your move on schedule.",
    ],
  },

  "albany": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Albany",
    intro1: "Looking for reliable movers in Albany, CA? Parsley Moving provides professional moving services throughout Albany and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment, condo, or house, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Albany and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartments near Solano Avenue to residential neighborhoods throughout Albany, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Albany is generally more straightforward, but there are still a few important details to consider.",
      "Areas near Solano Avenue and apartment buildings can have limited parking, especially during busy times of the day. In some cases, the distance from the truck to the unit may be longer, which can affect the total moving time.",
      "Residential streets are usually easier for access, but some homes may still require careful planning depending on driveway space and layout.",
      "Our team is familiar with Albany and nearby areas, so we know how to plan ahead and complete your move efficiently.",
    ],
  },

  "el-cerrito": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in El Cerrito",
    intro1: "Looking for reliable movers in El Cerrito, CA? Parsley Moving provides professional moving services throughout El Cerrito and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment near El Cerrito Plaza or a home in the hills, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in El Cerrito and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartments near El Cerrito Plaza and San Pablo Avenue to residential and hillside neighborhoods, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in El Cerrito can vary depending on the location.",
      "Areas closer to San Pablo Avenue and El Cerrito Plaza are generally easier for truck access, but parking can still be limited near apartment buildings and busier streets. In hillside neighborhoods, longer walking distances and stairs are more common, which can affect the total time of the move.",
      "Homes in certain parts of El Cerrito may also have narrow driveways or limited space for large moving trucks, requiring more careful planning on moving day.",
      "Our team is familiar with El Cerrito and nearby areas, so we know how to prepare for these situations and keep your move running smoothly.",
    ],
  },

  "san-pablo": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in San Pablo",
    intro1: "Looking for reliable movers in San Pablo, CA? Parsley Moving provides professional moving services throughout San Pablo and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment near San Pablo Avenue or a home in a residential neighborhood, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in San Pablo and surrounding areas. We understand how to plan moves efficiently based on the layout of each neighborhood and access conditions.",
    text2: "From apartment complexes along San Pablo Avenue to residential areas near Hilltop Mall, our team knows how to handle different types of moves while keeping everything organized and on schedule.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in San Pablo is generally more straightforward than in denser cities, but there are still a few important factors to consider.",
      "Apartment complexes along San Pablo Avenue and near Hilltop area can have limited parking and longer walking distances from the truck to the unit, especially during busy times of the day.",
      "Residential neighborhoods are typically easier for access, but some homes may still involve narrow driveways or layouts that require more careful positioning of the truck.",
      "Depending on the location, traffic and distance between pickup and delivery can also affect the overall timing of the move.",
      "Our team is familiar with San Pablo and nearby areas, so we know how to plan ahead and keep your move efficient and organized.",
    ],
  },

  "pinole": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Pinole",
    intro1: "Looking for reliable movers in Pinole, CA? Parsley Moving provides professional moving services throughout Pinole and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment near Fitzgerald Drive or a home in a quiet residential neighborhood, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Pinole and nearby cities. We understand how to plan moves efficiently based on neighborhood layout and access conditions.",
    text2: "From apartment communities near Pinole Valley Road to homes in more suburban areas, our team knows how to complete moves smoothly while protecting your belongings and staying on schedule.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Pinole is generally easier for moving compared to denser cities, but there are still a few things to consider.",
      "Most neighborhoods have good access for moving trucks, but some hillside homes and residential areas may involve longer walking distances or sloped driveways. Apartment complexes can also have limited parking depending on the location and time of day.",
      "Areas near shopping centers and busier streets like Fitzgerald Drive may require a bit more planning for parking and loading.",
      "Our team is familiar with Pinole and nearby areas, so we know how to plan ahead and keep your move running efficiently.",
    ],
  },

  "hercules": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Hercules",
    intro1: "Looking for reliable movers in Hercules, CA? Parsley Moving provides professional moving services throughout Hercules and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment near Sycamore Avenue or a home in a quiet residential neighborhood, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Hercules and nearby cities. We understand how to plan moves efficiently based on neighborhood layout and access conditions.",
    text2: "From homes near Refugio Valley Road to residential areas closer to the waterfront, our team knows how to complete moves smoothly while protecting your belongings and staying on schedule.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Hercules is mostly residential, which makes many moves more straightforward, but there are still a few important factors to consider.",
      "Some neighborhoods include hillside homes and properties with longer driveways, which can increase the distance between the truck and your front door. In certain areas, parking may be limited depending on the street layout.",
      "Newer developments often have better access, but planning ahead is still important to ensure everything runs smoothly on moving day.",
      "Our team is familiar with Hercules and nearby areas, so we know how to prepare for these situations and keep your move efficient.",
    ],
  },

  "alameda": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Alameda",
    intro1: "Looking for reliable movers in Alameda, CA? Parsley Moving provides professional moving services throughout Alameda and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment near Park Street or a home closer to the shoreline, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Alameda and nearby cities. We understand how the island layout and access routes can affect planning and timing.",
    text2: "From historic homes to apartment buildings and newer developments, our team knows how to work efficiently while protecting your belongings and keeping everything on schedule.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Alameda comes with a few unique considerations.",
      "As an island city, access is limited to bridges and tunnels, which can affect travel time depending on traffic conditions. Planning the route and timing is important to avoid delays, especially during peak hours.",
      "Many neighborhoods have limited street parking, particularly near popular areas like Park Street. Some older homes and apartment buildings may also have tighter access or stairs.",
      "Our team is experienced with Alameda moves and knows how to plan ahead to keep your move running smoothly from start to finish.",
    ],
  },

  "concord": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Concord",
    intro1: "Looking for reliable movers in Concord, CA? Parsley Moving provides professional moving services throughout Concord and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment near Downtown Concord or a home in a quiet residential neighborhood, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Concord and surrounding areas. We understand how to plan moves efficiently based on neighborhood layout, access conditions, and distance between locations.",
    text2: "From apartment communities near Todos Santos Plaza to residential areas closer to Clayton Road and Treat Boulevard, our team knows how to keep moves organized and on schedule.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Concord can vary depending on the type of neighborhood and property.",
      "Areas near Downtown Concord and around Todos Santos Plaza may have more limited parking and busier streets, especially during events or peak hours. Apartment complexes can also involve longer walking distances from the parking area to the unit.",
      "In residential neighborhoods and areas toward Clayton or the foothills of Mount Diablo, homes often have better access, but may include longer driveways, stairs, or sloped terrain that can affect loading time.",
      "Because Concord is more spread out, distance between locations and local traffic along roads like Treat Boulevard and Willow Pass Road can also impact the total duration of the move.",
      "Our team is familiar with Concord and nearby areas, so we know how to plan ahead and keep your move efficient from start to finish.",
    ],
  },

  // ── San Francisco ─────────────────────────────────────────────────────────

  "san-francisco": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in San Francisco",
    intro1: "Looking for reliable movers in San Francisco, CA? Parsley Moving provides professional local and long-distance moving services in San Francisco and the surrounding Bay Area. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from an apartment, house, or storage unit in SF, our team is fully equipped to handle your move from start to finish — including elevator reservations, parking permits, and building requirements.",
    text1: "San Francisco moves come with unique challenges — steep hills, tight parking on narrow streets, and strict building elevator rules. Our crew works in SF regularly and knows how to navigate the city without delays.",
    text2: "Whether you're moving into a Victorian flat in the Mission or a high-rise in SoMa, we handle every detail so your move stays on schedule.",
    text3: "We coordinate with building management, secure the necessary permits, and keep your belongings protected throughout every step of the move.",
    expect: [
      "San Francisco is one of the most logistically challenging cities to move in. Steep hills, one-way streets, and strict parking rules mean every move requires planning.",
      "Many buildings require advance elevator reservations and designated loading zones. We handle this coordination so you don't have to.",
      "Our crew is experienced with SF-specific requirements and keeps your move efficient regardless of the building type or neighborhood.",
    ],
  },

  // ── Diablo Valley / Tri-Valley ────────────────────────────────────────────

  "walnut-creek": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Walnut Creek",
    intro1: "Looking for reliable movers in Walnut Creek, CA? Parsley Moving provides professional moving services throughout Walnut Creek and the East Bay. We focus on efficient work, careful handling, and transparent pricing with no hidden fees.",
    intro2: "Whether you're moving from a downtown apartment or a home in a quiet residential neighborhood, our team is fully equipped to handle your move from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Walnut Creek and surrounding areas. We understand how to plan moves efficiently based on building requirements, neighborhood layout, and access conditions.",
    text2: "From upscale apartments near Broadway Plaza to homes in neighborhoods like Walnut Heights and Northgate, our team knows how to handle moves carefully while staying on schedule.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Walnut Creek can vary depending on the location and type of property.",
      "Downtown Walnut Creek and areas near Broadway Plaza often involve apartment buildings with controlled access, limited parking, and designated loading zones. Some buildings may require elevator reservations or have specific move-in time windows.",
      "In residential neighborhoods such as Walnut Heights, Northgate, and areas closer to Mount Diablo, access is generally easier, but homes may include longer driveways, stairs, or multi-level layouts that can affect the moving time.",
      "Because Walnut Creek is a busy and desirable area, traffic and congestion around downtown, especially near Main Street and Olympic Boulevard, can also impact the overall schedule.",
      "Our team is familiar with Walnut Creek and nearby areas, so we know how to plan ahead and keep your move running smoothly.",
    ],
  },

  "pleasant-hill": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Pleasant Hill",
    intro1: "Looking for movers in Pleasant Hill, CA? Parsley Moving handles local moves throughout the area, from apartment complexes to single-family homes.",
    intro2: "Most moves here are fairly straightforward, but the layout of the property and distance to the truck can make a noticeable difference in how long everything takes. Our team comes prepared to handle both quick moves and more complex setups without slowing things down.",
    text1: "At Parsley Moving, we regularly handle moves in Pleasant Hill and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartment communities along Contra Costa Boulevard to residential areas around Gregory Lane and Paso Nogal, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Pleasant Hill is generally easier to move in than denser cities like Oakland or Berkeley, but the layout of the area still plays a big role in how long a move takes.",
      "Apartment complexes can involve longer walks and limited parking depending on the time of day. Some buildings may also require moving items across courtyards or between structures.",
      "Homes are generally easier for truck access, but stairs, elevation changes, and larger layouts can still add time to loading and unloading.",
      "Traffic is not a major issue most of the time, but getting in and out of the area, especially near Highway 680, can affect scheduling between locations.",
      "Our team is familiar with Pleasant Hill and knows how to plan around these details to keep your move running efficiently.",
    ],
  },

  "martinez": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Martinez",
    intro1: "Looking for movers in Martinez, CA? Parsley Moving handles local moves throughout the area, from apartments near downtown to homes in quiet residential neighborhoods.",
    intro2: "Moves here are usually manageable, but the layout of the property and access to the truck can still affect how long everything takes. Our team is prepared to handle both simple and more detailed moves without delays.",
    text1: "At Parsley Moving, we regularly handle moves in Martinez and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From homes and apartments near Downtown Martinez and Alhambra Avenue to residential neighborhoods closer to the waterfront, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Martinez can vary depending on the location and type of property.",
      "Areas near Downtown Martinez and the waterfront often have older homes and buildings, which can mean stairs, tighter entryways, and limited parking. Streets in these areas can also be narrower, requiring careful truck positioning.",
      "In residential neighborhoods, access is generally more straightforward, but longer driveways, elevation changes, and multi-level homes can still affect how quickly the move goes.",
      "Traffic is usually not a major issue, but routes near Highway 4 and local roads can impact travel time between locations.",
      "Our team is familiar with Martinez and knows how to plan around these factors to keep your move running efficiently.",
    ],
  },

  "lafayette": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Lafayette",
    intro1: "Looking for movers in Lafayette, CA? Parsley Moving handles local moves throughout the area, from smaller homes near downtown to larger properties in hillside neighborhoods.",
    intro2: "Moves in Lafayette often require a bit more planning due to property layouts, but our team is used to working in these conditions and comes fully prepared.",
    text1: "At Parsley Moving, we regularly handle moves in Lafayette and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From homes near Mount Diablo Boulevard to hillside properties in neighborhoods like Happy Valley and Reliez Valley, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Lafayette is different from denser cities and usually involves more residential and hillside properties.",
      "In areas further from downtown, especially toward the hills, you may be dealing with narrow streets, steep driveways, and limited space for truck positioning. This can increase the time needed for loading and unloading.",
      "Homes are often larger and may include multiple floors, which adds to the overall workload. Even when parking is available, the distance from the truck to the entrance can still be a factor.",
      "Traffic is generally lighter than in central East Bay cities, but routes along Mount Diablo Boulevard and Highway 24 can affect timing, especially during commute hours.",
      "Our team is familiar with Lafayette and knows how to plan around these factors to keep your move efficient and well organized.",
    ],
  },

  "orinda": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Orinda",
    intro1: "Looking for movers in Orinda, CA? Parsley Moving handles local moves throughout the area, from homes near downtown to hillside properties with more complex access.",
    intro2: "Moves in Orinda often require planning due to terrain and property layout, and our team is used to working in these conditions.",
    text1: "At Parsley Moving, we regularly handle moves in Orinda and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From homes near Orinda Village and Moraga Way to hillside properties throughout the area, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Orinda is very different from moving in denser cities.",
      "Hillside locations are common, and many properties are accessed through narrow or winding roads. In some cases, trucks cannot be positioned directly next to the house, which increases the walking distance and overall moving time.",
      "Driveways can be steep or limited in space, and homes are often multi-level, requiring additional time for stairs and careful handling of furniture.",
      "Traffic is generally not heavy, but routes along Highway 24 and local roads can affect scheduling, especially during commute hours.",
      "Our team is familiar with Orinda and knows how to plan around these factors to keep your move efficient and well organized.",
    ],
  },

  "danville": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Danville",
    intro1: "Looking for movers in Danville, CA? Parsley Moving handles moves throughout the area, from homes near downtown to larger properties in residential communities.",
    intro2: "Moves here are usually smooth, but the size of homes and neighborhood layout can affect how long everything takes. Our team is used to working in these conditions and plans each move accordingly.",
    text1: "At Parsley Moving, we regularly handle moves in Danville and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From homes near Downtown Danville and Hartz Avenue to residential communities along Camino Tassajara, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Danville is typically more organized than in denser cities, but there are still a few important factors to keep in mind.",
      "Many neighborhoods include larger homes with multiple floors, which increases the time needed for carrying, disassembly, and careful placement of furniture. Gated communities and HOA-managed areas may also have specific rules for move-in times, truck access, or parking.",
      "Driveways are usually available, but depending on the layout, there can still be distance between the truck and the entrance.",
      "Traffic is generally light, but roads like Camino Tassajara and I-680 can affect timing, especially during peak hours.",
      "Our team is familiar with Danville and knows how to plan around these details to keep your move efficient and well organized.",
    ],
  },

  "san-ramon": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in San Ramon",
    intro1: "Looking for movers in San Ramon, CA? Parsley Moving handles moves throughout the area, from modern apartment complexes to larger homes in residential communities.",
    intro2: "Moves here are usually well organized, but building access, parking rules, and property layout can still affect how long everything takes. Our team is used to working in these environments and plans accordingly.",
    text1: "At Parsley Moving, we regularly handle moves in San Ramon and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartment communities near Bishop Ranch and Bollinger Canyon Road to residential neighborhoods like Windemere and Gale Ranch, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in San Ramon is generally more predictable than in older cities, but there are still a few details to keep in mind.",
      "Many apartment communities have structured layouts with designated parking, but access may be limited depending on the building and time of day. Some properties require moving items across courtyards or through multiple entry points.",
      "Homes in newer neighborhoods often have better truck access, but longer driveways, multi-level layouts, and HOA guidelines can still affect the moving process.",
      "Traffic is usually manageable, but areas around Bishop Ranch and I-680 can get busy during commute hours, which may impact timing between locations.",
      "Our team is familiar with San Ramon and knows how to plan around these factors to keep your move efficient and on schedule.",
    ],
  },

  "dublin": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Dublin",
    intro1: "Looking for movers in Dublin, CA? Parsley Moving handles moves throughout the area, from modern apartment complexes to single-family homes in newer neighborhoods.",
    intro2: "Moves in Dublin are usually straightforward, but building layouts, parking structures, and access points can still affect how long everything takes. Our team is used to working in these environments and plans accordingly.",
    text1: "At Parsley Moving, we regularly handle moves in Dublin and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartment communities near Dublin Boulevard and Hacienda Drive to residential neighborhoods like Dublin Ranch, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Dublin often involves newer buildings and planned communities, which come with their own logistics.",
      "Apartment buildings typically have elevators and structured layouts, but you may need to coordinate access, deal with parking garages, or move items across longer distances from the loading area to the unit.",
      "Homes in newer neighborhoods usually have good truck access, but multi-story layouts, garages, and HOA guidelines can still affect the moving process.",
      "Traffic around Dublin Boulevard, I-580, and I-680 can get busy during commute hours, which may impact travel time between locations.",
      "Our team is familiar with Dublin and knows how to plan around these factors to keep your move efficient and well organized.",
    ],
  },

  "pleasanton": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Pleasanton",
    intro1: "Looking for movers in Pleasanton, CA? Parsley Moving handles moves throughout the area, from apartments and townhomes to larger single-family houses.",
    intro2: "Moves in Pleasanton are usually well organized, but property size, layout, and access can still affect how long everything takes. Our team is used to working in these conditions and plans accordingly.",
    text1: "At Parsley Moving, we regularly handle moves in Pleasanton and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From homes near Downtown Pleasanton and Main Street to residential neighborhoods like Ruby Hill and Pleasanton Valley, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Pleasanton can vary depending on the location and type of property.",
      "Downtown areas near Main Street may require more planning due to street activity and parking limitations. In residential communities, access is generally easier, but larger homes, multi-level layouts, and garages can add time to the move.",
      "In higher-end neighborhoods like Ruby Hill, properties often involve longer driveways, gated access, and more distance between the truck and the entrance, which requires additional coordination.",
      "Traffic is usually manageable, but routes near I-580 and I-680 can get busy during commute hours, affecting travel time between locations.",
      "Our team is familiar with Pleasanton and knows how to plan around these factors to keep your move efficient and well organized.",
    ],
  },

  "san-leandro": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in San Leandro",
    intro1: "Looking for movers in San Leandro, CA? Parsley Moving handles moves throughout the area, from apartment buildings to single-family homes.",
    intro2: "Moves here can vary quite a bit depending on the location, so planning ahead makes a big difference in how smoothly everything goes.",
    text1: "At Parsley Moving, we regularly handle moves in San Leandro and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartments near East 14th Street and Downtown San Leandro to residential neighborhoods closer to Marina Boulevard and Washington Avenue, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in San Leandro can vary depending on the area, but most moves here are fairly straightforward with the right planning.",
      "In apartment areas near East 14th Street or downtown, parking can be more limited and sometimes involves a bit more walking distance from the truck to the unit. In these cases, we plan ahead to keep everything moving efficiently and avoid delays.",
      "In residential neighborhoods, access is usually easier, although stairs, garages, or larger layouts can still affect how long the move takes.",
      "San Leandro is a straightforward city to move in, and with the right planning, the process stays efficient and predictable from start to finish.",
    ],
  },

  // ── South East Bay ────────────────────────────────────────────────────────

  "hayward": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Hayward",
    intro1: "Looking for movers in Hayward, CA? Parsley Moving handles moves throughout the area, from apartment buildings to single-family homes.",
    intro2: "Moves in Hayward can vary depending on the neighborhood, but with the right planning, the process stays efficient and organized from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Hayward and nearby cities, so we know how to keep the process organized and on schedule from start to finish.",
    text2: "From apartments near Mission Boulevard and Downtown Hayward to hillside homes in the Hayward Hills, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Hayward includes a mix of apartment complexes, suburban neighborhoods, and hillside homes, so every move is slightly different.",
      "Apartment buildings may involve parking coordination and longer walking distances, especially in denser areas. In residential neighborhoods, access is usually more direct, although multi-level homes and garages can still add time to the move.",
      "Homes in the Hayward Hills often involve elevation, stairs, and more distance from the truck, but these moves are straightforward when properly planned.",
      "Traffic along Mission Boulevard, Industrial Parkway, and nearby freeways like I-880 and I-580 can affect timing between locations, especially during peak hours.",
      "Our team is familiar with Hayward and knows how to plan ahead so the move stays efficient and predictable.",
    ],
  },

  "castro-valley": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Castro Valley",
    intro1: "Looking for movers in Castro Valley, CA? Parsley Moving handles moves throughout the area, from apartments and townhomes to single-family houses.",
    intro2: "Most moves here are fairly straightforward, but property layout and distance to the truck can still affect how long everything takes. With proper planning, the process stays efficient and predictable.",
    text1: "At Parsley Moving, we regularly handle moves in Castro Valley and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From homes near Castro Valley Boulevard to residential and hillside neighborhoods, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Castro Valley is usually straightforward, especially compared to denser parts of the East Bay.",
      "Most neighborhoods are residential with good access for moving trucks, which helps keep the process efficient. Homes near Castro Valley Boulevard and central areas are typically easier to work with in terms of layout and parking.",
      "In hillside neighborhoods, properties may include longer driveways, stairs, or elevation changes, so planning ahead helps keep everything running smoothly.",
      "Travel between locations is generally simple, although timing can vary depending on traffic along I-580 and nearby roads.",
      "Overall, moves in Castro Valley tend to stay organized and predictable, especially when everything is planned properly in advance.",
    ],
  },

  "fremont": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Fremont",
    intro1: "Looking for movers in Fremont, CA? Parsley Moving handles moves throughout the area, from apartment complexes to single-family homes.",
    intro2: "Moves in Fremont can vary depending on the property, but with the right planning, everything stays organized and efficient from start to finish.",
    text1: "At Parsley Moving, we regularly handle moves in Fremont and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartment communities near Fremont Boulevard and Warm Springs to residential neighborhoods throughout the city, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in Fremont is generally smooth thanks to the mix of newer developments and well-planned residential neighborhoods.",
      "Many apartment complexes have structured layouts with designated parking and elevators, which helps keep the process organized. Depending on the building, there may be some walking distance from the truck to the unit, but this is something we plan for in advance.",
      "Homes in areas like Mission San Jose, Ardenwood, and Warm Springs are typically easier for truck access, although multi-level layouts and larger properties can still require additional time for careful handling.",
      "Fremont is a large city, so distance between locations and traffic along I-880, I-680, and local roads can affect timing, especially during peak hours.",
      "With proper planning, moves in Fremont stay efficient and predictable, and our team knows how to keep everything running smoothly.",
    ],
  },

  "newark": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Newark",
    intro1: "Looking for movers in Newark, CA? Parsley Moving handles moves throughout the area, from apartment communities to single-family homes.",
    intro2: "Most moves in Newark are straightforward, and with proper planning, the process stays efficient and well organized.",
    text1: "At Parsley Moving, we regularly handle moves in Newark and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartment complexes near Newark Boulevard and Thornton Avenue to residential neighborhoods throughout the city, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Newark is one of the more compact cities in the area, which often helps keep moves efficient and easier to plan from start to finish.",
      "Most neighborhoods are laid out in a straightforward way, so getting from the truck to the entrance is usually direct and predictable.",
      "Apartment communities around Newark Boulevard and Thornton Avenue are typically easy to navigate, with clear access points and consistent layouts. Depending on the building, there may be some walking distance involved, but it's something we account for when planning the move.",
      "Because Newark is located right next to Fremont and close to major freeways, coordinating pickup and delivery times is usually flexible and easy to manage.",
      "With the right setup, moves in Newark tend to stay smooth, well-paced, and under control throughout the entire process.",
    ],
  },

  "union-city": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Union City",
    intro1: "Looking for movers in Union City, CA? Parsley Moving handles moves throughout the area, from apartment communities to single-family homes.",
    intro2: "Most moves in Union City are straightforward, and with proper planning, everything stays organized and efficient.",
    text1: "At Parsley Moving, we regularly handle moves in Union City and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartment complexes near Alvarado-Niles Road and Union Landing to residential neighborhoods throughout the city, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Union City sits right between several busy Bay Area hubs, so most moves here benefit from relatively short travel distances and straightforward routing between locations.",
      "Many neighborhoods are made up of well-planned residential areas, which helps keep loading and unloading efficient. Homes typically allow for direct access, making the overall process faster compared to denser cities.",
      "Apartment communities around Union Landing and Alvarado-Niles Road are usually easy to navigate, with clear layouts and predictable access points. Depending on the building, there may be some distance between the parking area and the unit, but this is something we account for ahead of time.",
      "Because of Union City's central location, timing between pickup and delivery is often flexible, even when moving to or from nearby cities like Fremont, Hayward, or Newark.",
      "With proper planning, moves in Union City stay consistent and well paced, and our team knows how to keep everything running without interruptions.",
    ],
  },

  // ── San Francisco Peninsula ───────────────────────────────────────────────

  "san-francisco-2": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in San Francisco",
    intro1: "Looking for movers in San Francisco, CA? Parsley Moving handles moves throughout the city, from apartments and condos to multi-unit buildings and homes.",
    intro2: "Moving in San Francisco requires experience and planning, and our team knows how to handle it efficiently without unnecessary delays.",
    text1: "At Parsley Moving, we regularly handle moves across San Francisco, so we know how to keep the process organized and on schedule.",
    text2: "From apartment buildings in SoMa and Mission District to homes in neighborhoods like Sunset and Pacific Heights, our team knows how to work efficiently while protecting your belongings and keeping everything under control.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Moving in San Francisco is different from most other cities in the Bay Area, but with the right approach, everything stays structured and efficient.",
      "Many buildings have designated loading zones, time windows, and specific access requirements, so planning ahead helps keep the move on schedule. Our team coordinates these details in advance to avoid delays.",
      "Street parking and access can vary depending on the neighborhood, especially in denser areas, but we're used to working in these conditions and positioning the truck efficiently.",
      "Hills, stairs, and multi-level buildings are a normal part of moving in San Francisco. These setups are something we deal with regularly, and we plan the move so everything stays controlled and organized.",
      "Because of traffic and city layout, timing between locations can vary, but with proper scheduling, the entire process stays predictable.",
    ],
  },

  "daly-city": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in Daly City",
    intro1: "Looking for movers in Daly City, CA? Parsley Moving handles moves throughout the area, from apartment buildings to single-family homes.",
    intro2: "Most moves here stay straightforward, and with proper planning, everything runs efficiently and on schedule.",
    text1: "At Parsley Moving, we regularly handle moves in Daly City and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartments near Mission Street and Serramonte to residential neighborhoods throughout the city, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "Daly City combines dense residential areas with quieter neighborhoods, which keeps most moves consistent and easy to plan.",
      "Apartment buildings and multi-unit homes are common, especially near Mission Street and Serramonte, and are typically straightforward to navigate with clear access points.",
      "The city's layout and proximity to San Francisco mean routes are usually short and easy to manage, even when coordinating moves between nearby areas.",
      "Some neighborhoods include elevation and hillside streets, but these are part of the area and are easy to handle with proper planning.",
      "With the right setup, moves in Daly City stay efficient, steady, and well organized from start to finish.",
    ],
  },

  "south-san-francisco": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in South San Francisco",
    intro1: "Looking for movers in South San Francisco, CA? Parsley Moving handles moves throughout the area, from apartment buildings to single-family homes.",
    intro2: "Most moves here stay organized and efficient, especially with proper planning ahead of time.",
    text1: "At Parsley Moving, we regularly handle moves in South San Francisco and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartment communities near Grand Avenue and Oyster Point to residential neighborhoods throughout the city, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "South San Francisco has a mix of residential neighborhoods and business districts, which makes most moves predictable and easy to coordinate.",
      "Apartment buildings and newer developments are usually designed with clear access and parking, helping keep the move organized. In residential areas, homes are typically easy to work with and allow for direct loading and unloading.",
      "Because the city is located along Highway 101 and close to major routes, getting between locations is usually efficient, even when coordinating moves to or from nearby areas.",
      "Some areas include elevation and hillside streets, but these are common for the region and are handled smoothly with the right setup.",
      "With proper planning, moves in South San Francisco stay consistent, well paced, and under control throughout the process.",
    ],
  },

  "san-mateo": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in San Mateo",
    intro1: "Looking for movers in San Mateo, CA? Parsley Moving handles moves throughout the area, from apartment buildings and condos to single-family homes.",
    intro2: "Moves here are typically well organized, and with proper planning, everything runs efficiently and on schedule.",
    text1: "At Parsley Moving, we regularly handle moves in San Mateo and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartment buildings near Downtown San Mateo and El Camino Real to residential neighborhoods throughout the city, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "San Mateo offers a balanced mix of apartments, condos, and residential neighborhoods, which makes most moves straightforward and easy to plan.",
      "Buildings near downtown and along El Camino Real are typically well structured, with clear access and predictable layouts that help keep the move organized.",
      "Residential areas are generally easy to work with, and most homes allow for direct loading and unloading, which keeps the process efficient.",
      "Because San Mateo is centrally located along the Peninsula, travel between locations is usually simple to coordinate, even when moving to or from nearby cities.",
      "With the right planning, moves in San Mateo stay smooth, consistent, and well controlled throughout the process.",
    ],
  },

  "san-bruno": {
    heroTitle: "Reliable Moving Services",
    heroHighlight: "in San Bruno",
    intro1: "Looking for movers in San Bruno, CA? Parsley Moving handles moves throughout the area, from apartment buildings to single-family homes.",
    intro2: "Most moves here are straightforward, and with proper planning, everything runs efficiently and on schedule.",
    text1: "At Parsley Moving, we regularly handle moves in San Bruno and nearby cities, so we know how to keep the process organized and on schedule.",
    text2: "From apartment communities near San Bruno Avenue and Tanforan to residential neighborhoods throughout the city, our team knows how to work efficiently while protecting your belongings and avoiding unnecessary delays.",
    text3: "We show up ready to work, stay organized throughout the move, and make sure everything is handled properly without last-minute issues.",
    expect: [
      "San Bruno is a compact city, which makes most moves easier to coordinate and keeps travel time between locations relatively short.",
      "Apartment buildings and newer developments often have clear layouts and accessible parking, helping the move stay organized from the start. In residential neighborhoods, homes typically allow for direct access, which keeps loading and unloading efficient.",
      "The city's location near San Francisco International Airport and Highway 101 means routes are easy to plan, even when coordinating moves to nearby areas.",
      "Some neighborhoods include elevation and hillside streets, but these are common for the area and are handled smoothly with the right setup.",
      "With proper planning, moves in San Bruno stay consistent, efficient, and well paced throughout the process.",
    ],
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