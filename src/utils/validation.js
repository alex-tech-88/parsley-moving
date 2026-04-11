// ── Address validation ───────────────────────────────────────────────

const ADDRESS_CODES = {
  required:   'Address is required',
  short:      'Please enter a full address',
  long:       'Address is too long',
  chars:      'Address can only contain letters, digits and , . - # / ()',
  number:     'Address should include a street number',
  digitsOnly: 'Address cannot consist of numbers only',
  xss:        'Address contains invalid characters',
}

export const validateAddress = (value) => {
  if (typeof value !== 'string') return 'required'
  const v = value.trim()
  if (!v)             return 'required'
  if (v.length < 5)   return 'short'
  if (v.length > 200) return 'long'
  if (/[<>"'`]|&#/.test(v)) return 'xss'
  if (!/^[A-Za-z0-9\s,.\-#/()]+$/.test(v)) return 'chars'
  if (!/\d/.test(v))        return 'number'
  if (!/[A-Za-z]/.test(v)) return 'digitsOnly'
  return ''
}

export const getAddressError = (value) =>
  ADDRESS_CODES[validateAddress(value)] ?? ''


// ── Personal fields ──────────────────────────────────────────────────

export const validatePersonal = (name, value) => {
  if (typeof value !== 'string') return 'Invalid input'
  const v = value.trim()

  if (name === 'firstName' || name === 'lastName') {
    const label = name === 'firstName' ? 'First name' : 'Last name'
    if (!v)                         return `${label} is required`
    if (/[<>"'`]|&#/.test(v))       return `${label} contains invalid characters`
    if (!/^[A-Za-z\s'-]+$/.test(v)) return `${label} can only contain letters (A–Z)`
    if (v.length < 2)               return `${label} must be at least 2 characters`
    if (v.length > 50)              return `${label} must be no longer than 50 characters`
  }

  if (name === 'phone') {
    if (!v)                                          return 'Phone number is required'
    if (/[<>"'`a-zA-Z]/.test(v))                     return 'Phone number contains invalid characters'
    if (!/^\+?[\d][\d\s\-()]*$/.test(v))             return 'Only digits, spaces, +, - and () allowed'
    if (v.replace(/\D/g, '').length < 7)             return 'Enter a valid phone number (min 7 digits)'
    if (v.replace(/\D/g, '').length > 15)            return 'Phone number is too long'
  }

  return ''
}


// ── Notes validation ─────────────────────────────────────────────────

export const validateNotes = (value) => {
  if (!value) return ''
  if (typeof value !== 'string') return 'Invalid input'
  const v = value.trim()
  if (v.length > 1000)       return 'Notes must be under 1000 characters'
  if (/[<>"'`]|&#/.test(v))  return 'Notes contain invalid characters'
  return ''
}


// ── Email validation ─────────────────────────────────────────────────

export const validateEmail = (value) => {
  if (typeof value !== 'string') return 'Email is required'
  const v = value.trim().toLowerCase()

  if (!v)             return 'Email is required'
  if (v.length > 200) return 'Email address is too long'

  if (/[<>"'`]|&#/.test(v))    return 'Email contains invalid characters'
  if (/[^\x20-\x7F]/.test(v))  return 'Email must contain only standard characters'

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