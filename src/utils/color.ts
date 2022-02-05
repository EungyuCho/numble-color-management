function generateRandomHexColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

function changeColor(col: string, amt = 50) {
  const colArray = col.split("");
  const colors = colArray
    .reduce(
      (next, cur) => {
        if (next[next.length - 1].length === 2) {
          return [...next, [cur]];
        }

        next[next.length - 1].push(cur);
        return next;
      },
      [[]]
    )
    .map((color) => color.join(""))
    .map((color) => parseInt(color, 16));

  const colorChangeIndex = Math.floor(Math.random() * 3);

  const changeTarget = colors[colorChangeIndex];

  if (changeTarget + amt > 255) {
    colors[colorChangeIndex] -= amt;
  } else {
    colors[colorChangeIndex] += amt;
  }

  return colors.map((color) => color.toString(16).padStart(2, "0")).join("");
}

export { changeColor, generateRandomHexColor };
