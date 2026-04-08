// ── Address validation ───────────────────────────────────────────────

const ADDRESS_CODES = {
  required: 'Address is required',
  short:    'Please enter a full address',
  long:     'Address is too long',
  latin:    'Address can only contain letters (A–Z) and digits',
  number:   'Address should include a street number',
  digitsOnly:  'Address cannot consist of numbers only',
}

/** Returns an error code string or '' if valid. */
export const validateAddress = (value) => {
  const v = value.trim()
  if (!v)             return 'required'
  if (v.length < 5)   return 'short'
  if (v.length > 200) return 'long'
  if (!/^[A-Za-z0-9\s,.\-#/()]+$/.test(v)) return 'latin'
  if (!/\d/.test(v))  return 'number'
  if (!/[A-Za-z]/.test(v)) return 'digitsOnly' 
  return ''
}

/** Returns a human-readable message or '' if valid. */
export const getAddressError = (value) =>
  ADDRESS_CODES[validateAddress(value)] ?? ''


// ── Personal fields ──────────────────────────────────────────────────

export const validatePersonal = (name, value) => {
  const v = value.trim()

  if (name === 'firstName' || name === 'lastName') {
    const label = name === 'firstName' ? 'First name' : 'Last name'
    if (!v)                          return `${label} is required`
    if (!/^[A-Za-z\s'-]+$/.test(v)) return `${label} can only contain letters (A–Z)`
    if (v.length < 2)                return `${label} must be at least 2 characters`
    if (v.length > 50)               return `${label} must be no longer than 50 characters`
  }

  if (name === 'phone') {
    if (!v)                               return 'Phone number is required'
    if (!/^\+?[\d\s\-()]+$/.test(v))      return 'Only digits, spaces, +, - and () allowed'
    if (v.replace(/\D/g, '').length < 7)  return 'Enter a valid phone number (min 7 digits)'
    if (v.replace(/\D/g, '').length > 15) return 'Phone number is too long'
  }

  return ''
}


// ── Email validation ─────────────────────────────────────────────────

export const validateEmail = (value) => {
  const v = value.trim()

  if (!v) return 'Email is required'

  const parts = v.split('@')
  if (parts.length !== 2) return 'Please enter a valid email address'

  const [local, domain] = parts

  if (!local)                           return 'Please enter a valid email address'
  if (local.startsWith('.'))            return 'Email address cannot start with a dot before @'
  if (local.endsWith('.'))              return 'Email address cannot end with a dot before @'
  if (v.includes('..'))                 return 'Email address cannot contain consecutive dots'
  if (!domain || !domain.includes('.')) return 'Please enter a valid email address'

  const tld = domain.split('.').pop()
  if (tld.length < 2) return 'Email domain must have a valid extension (e.g. .com)'

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
    return 'Please enter a valid email address'

  return ''
}