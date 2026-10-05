/**
 * Map a point given as % of an image to % of a frame that shows the image with
 * `object-fit: cover` and the given object-position. Returns null when the point is cropped out.
 */
export function coverPoint(
  x: number,
  y: number,
  img: { width: number; height: number },
  frameAspect: number, // width / height
  position = '50% 50%',
) {
  const [px, py] = position.split(' ').map((v) => parseFloat(v) / 100)
  const fw = frameAspect
  const fh = 1
  const s = Math.max(fw / img.width, fh / img.height)
  const dw = img.width * s
  const dh = img.height * s
  const ox = (dw - fw) * (Number.isFinite(px) ? px : 0.5)
  const oy = (dh - fh) * (Number.isFinite(py) ? py : 0.5)
  const fx = ((x / 100) * dw - ox) / fw
  const fy = ((y / 100) * dh - oy) / fh
  if (fx < 0.04 || fx > 0.96 || fy < 0.04 || fy > 0.96) return null
  return { x: fx * 100, y: fy * 100 }
}
