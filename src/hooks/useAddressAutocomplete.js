import { useState, useCallback, useRef } from 'react'

const MAPBOX_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places'

// California bounding box: [minLng, minLat, maxLng, maxLat]
const CA_BBOX = '-124.482,32.528,-114.131,42.009'

// SF Bay Area coordinates for result prioritization
const SF_PROXIMITY = '-122.431,37.773'

export function useAddressAutocomplete() {
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading]         = useState(false)
  const debounceRef = useRef(null)

  const fetchSuggestions = useCallback((query) => {
    clearTimeout(debounceRef.current)

    if (!query || query.trim().length < 3) {
      setSuggestions([])
      return
    }

    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      try {
        const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
        const url   = `${MAPBOX_URL}/${encodeURIComponent(query)}.json`
          + `?access_token=${token}`
          + `&country=us`
          + `&types=address,place`
          + `&autocomplete=true`
          + `&limit=5`
          + `&bbox=${CA_BBOX}`
          + `&proximity=${SF_PROXIMITY}`

        const res  = await fetch(url)
        const data = await res.json()

        // Client-side safety filter — drops any result not tagged as California
        const caOnly = (data.features || []).filter(f =>
          f.context?.some(c => c.short_code === 'US-CA')
        )

        setSuggestions(caOnly)
      } catch {
        setSuggestions([])
      } finally {
        setLoading(false)
      }
    }, 300)
  }, [])

  const clear = useCallback(() => {
    setSuggestions([])
    clearTimeout(debounceRef.current)
  }, [])

  return { suggestions, loading, fetchSuggestions, clear }
}