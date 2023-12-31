function checkStraightLine(coordinates) {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const initialSlope = (y1 - y0) / (x1 - x0);

  for (let i = 2; i < coordinates.length; i++) {
    const [xi, yi] = coordinates[i];
    const [xiMinus1, yiMinus1] = coordinates[i - 1];
    const slope = (yi - yiMinus1) / (xi - xiMinus1);

    if (slope !== initialSlope) {
      return false; 
    }
  }

  return true;
}

// Example usage:
const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
console.log(checkStraightLine(coordinates)); 