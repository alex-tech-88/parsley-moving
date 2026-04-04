import img1 from '@assets/what-to-expect-1.webp'
import img2 from '@assets/what-to-expect-2.webp'
import img3 from '@assets/what-to-expect-3.webp'
import img4 from '@assets/what-to-expect-4.webp'
import img5 from '@assets/what-to-expect-5.webp'

const EXPECT_PHOTOS = [img1, img2, img3, img4, img5]

export function getExpectPhotosBySlug(slug) {
  const seed = slug
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)

  const len = EXPECT_PHOTOS.length
  const i1 = seed % len
  const i2 = (i1 + 1 + (seed % (len - 1))) % len

  return [EXPECT_PHOTOS[i1], EXPECT_PHOTOS[i2]]
}