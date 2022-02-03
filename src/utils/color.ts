function generateRandomHexColor() {
  return Math.floor(Math.random() * 16777215).toString(16)
}

function changeColor(col: string, amt = 20) {
  const hexNumber = parseInt(col, 16)
  return (
    ((hexNumber & 0x0000ff) + amt) |
    ((((hexNumber >> 8) & 0x00ff) + amt) << 8) |
    (((hexNumber >> 16) + amt) << 16)
  ).toString(16)
}

export { changeColor, generateRandomHexColor }
