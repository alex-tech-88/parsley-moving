import { useState, useCallback, useRef } from 'react'

const MAPBOX_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places'

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
        const token = import.meta.env.VITE_MAPBOX_TOKEN
        const url   = `${MAPBOX_URL}/${encodeURIComponent(query)}.json`
          + `?access_token=${token}`
          + `&country=us`
          + `&types=address,place`
          + `&autocomplete=true`
          + `&limit=5`
        const res  = await fetch(url)
        const data = await res.json()
        setSuggestions(data.features || [])
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