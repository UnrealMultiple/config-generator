export type RgbTuple = [number, number, number]

export function isRgbTuple(value: unknown): value is RgbTuple {
  return (
    Array.isArray(value) &&
    value.length === 3 &&
    value.every(
      (channel) =>
        typeof channel === 'number' &&
        Number.isInteger(channel) &&
        channel >= 0 &&
        channel <= 255,
    )
  )
}

export function rgbTupleToCss(value: RgbTuple): string {
  return `rgb(${value.join(', ')})`
}

export function cssToRgbTuple(value: string): RgbTuple | null {
  const match = value.match(
    /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
  )

  if (!match) return null

  const rgb = match.slice(1).map(Number)
  return isRgbTuple(rgb) ? rgb : null
}
