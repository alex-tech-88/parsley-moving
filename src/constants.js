export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
}

export const PHONE = '(510) 806-7601'

export const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Local Moving',         href: '#local-moving' },
      { label: 'Apartment Moving',     href: '#apartment-moving' },
      { label: 'House Moving',         href: '#house-moving' },
      { label: 'Office Moving',        href: '#office-moving' },
      { label: 'Packing Services',     href: '#packing' },
      { label: 'Loading & Unloading',  href: '#loading' },
      { label: 'Furniture Assembly',   href: '#furniture' },
    ],
  },
  { label: 'Moving Areas', href: '#areas' },
]
