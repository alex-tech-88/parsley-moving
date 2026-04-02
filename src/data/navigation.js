export const NAV_LINKS = [
  {
    label: 'About Us',
    href: '#about',
    dropdown: [
      { label: 'Company',  href: '#about' },
      { label: 'Reviews',  href: '#reviews' },
      { label: 'Gallery',  href: '#gallery' },
      { label: 'Contacts', href: '#contact' },
    ],
  },
  {
    label: 'Services',
    href: '/services/local-moving',
    dropdown: [
      { label: 'Local Moving',       href: '/services/local-moving' },
      { label: 'Residential Moving', href: '/services/residential-moving' },
      { label: 'Commercial Moving',  href: '/services/commercial-moving' },
      { label: 'In-State Moving',    href: '/services/in-state-moving' },
      { label: 'Packing Services',   href: '/services/packing' },
      { label: 'Furniture Moving',   href: '/services/furniture' },
    ],
  },
  {
    label: 'Moving Areas',
    href: '#areas',
    groups: [
      {
        label: 'East Bay',
        cities: [
          { label: 'Richmond',      href: '/areas/richmond' },
          { label: 'Berkeley',      href: '/areas/berkeley' },
          { label: 'Oakland',       href: '/areas/oakland' },
          { label: 'Albany',        href: '/areas/albany' },
          { label: 'El Cerrito',    href: '/areas/el-cerrito' },
          { label: 'San Pablo',     href: '/areas/san-pablo' },
          { label: 'Pinole',        href: '/areas/pinole' },
          { label: 'Hercules',      href: '/areas/hercules' },
          { label: 'Alameda',       href: '/areas/alameda' },
        ],
      },
      {
        label: 'Tri-Valley & Walnut Creek Area',
        cities: [
          { label: 'Concord',       href: '/areas/concord' },
          { label: 'Walnut Creek',  href: '/areas/walnut-creek' },
          { label: 'Pleasant Hill', href: '/areas/pleasant-hill' },
          { label: 'Martinez',      href: '/areas/martinez' },
          { label: 'Lafayette',     href: '/areas/lafayette' },
          { label: 'Orinda',        href: '/areas/orinda' },
          { label: 'Danville',      href: '/areas/danville' },
          { label: 'San Ramon',     href: '/areas/san-ramon' },
          { label: 'Dublin',        href: '/areas/dublin' },
          { label: 'Pleasanton',    href: '/areas/pleasanton' },
        ],
      },
      {
        label: 'Fremont Area',
        cities: [
          { label: 'San Leandro',   href: '/areas/san-leandro' },
          { label: 'Hayward',       href: '/areas/hayward' },
          { label: 'Castro Valley', href: '/areas/castro-valley' },
          { label: 'Fremont',       href: '/areas/fremont' },
          { label: 'Newark',        href: '/areas/newark' },
          { label: 'Union City',    href: '/areas/union-city' },
        ],
      },
      {
        label: 'San Francisco',
        cities: [
          { label: 'San Francisco', href: '/areas/san-francisco' },
        ],
      },
      {
        label: 'Peninsula',
        cities: [
          { label: 'Daly City',           href: '/areas/daly-city' },
          { label: 'South San Francisco', href: '/areas/south-san-francisco' },
          { label: 'San Mateo',           href: '/areas/san-mateo' },
          { label: 'San Bruno',           href: '/areas/san-bruno' },
        ],
      },
    ],
  },
]