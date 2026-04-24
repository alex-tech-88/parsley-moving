import { useParams } from 'react-router-dom'
import { ACCORDION_AREAS, SERVICES, ABOUT_BY_CITY, getPhotoBySlug, getExpectPhotosBySlug } from '@/constant'
import Hero       from '@components/sections/Hero'
import AboutUs    from '@components/sections/AboutUs'
import AreaExpect from '@components/sections/AreaExpect'
import AreaWhy    from '@components/sections/AreaWhy'
import AreaNearby from '@components/sections/AreaNearby'
import AreaFAQ    from '@components/sections/AreaFAQ'
import Services   from '@components/sections/Services'

const defaultImage = SERVICES.find((s) => s.id === 'local-moving')?.img

export default function AreaPage() {
  const { slug } = useParams()

  const city = ACCORDION_AREAS
    .flatMap((group) => group.cities)
    .find((c) => c.slug === slug)

  if (!city) {
    return (
      <>
        <Hero />
        <AboutUs />
      </>
    )
  }

  const expectPhotos = getExpectPhotosBySlug(slug)

  const cityData = ABOUT_BY_CITY[slug] ?? {
    intro1: `Looking for reliable movers in ${city.name}, CA? Parsley Moving provides professional local and long-distance moving services in ${city.name} and the surrounding Bay Area.`,
    intro2: `Whether you're moving from an apartment, house, or storage unit, our team is fully equipped to handle your move from start to finish.`,
    text1: `At Parsley Moving, we regularly handle moves in ${city.name} and nearby cities, keeping every job organized and on schedule.`,
    text2: `Our team knows the area well and works efficiently while protecting your belongings and avoiding unnecessary delays.`,
    text3: `We show up ready to work, stay organized throughout the move, and make sure everything is handled properly from start to finish.`,
    expect: [
      `Moving conditions in ${city.name} can vary by neighborhood and property type.`,
      `Our team plans ahead to account for parking, access, and any building-specific requirements.`,
      `We keep your move running efficiently regardless of the challenges your location presents.`,
    ],
  }

  return (
    <>
      <Hero
        title="Professional Moving"
        highlight={`in ${city.name}`}
        image={defaultImage}
      />
      <AboutUs
        title="Your Trusted"
        highlight={`${city.name} Moving Company`}
        location={`${city.name}, CA`}
        img={getPhotoBySlug(slug)}
        text1={cityData.text1}
        text2={cityData.text2}
        text3={cityData.text3}
      />
      <AreaExpect
        cityName={city.name}
        items={cityData.expect}
        photos={expectPhotos}
      />
      <Services cityName={city.name} />
      <AreaWhy city={city.name} />
      <AreaNearby slug={slug} />
      <AreaFAQ slug={slug} cityName={city.name} />
    </>
  )
}