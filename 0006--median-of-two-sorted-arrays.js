/**
 * @param {number[]} longArr
 * @param {number[]} shortArr
 * @return {number}
 */
var findMedianSortedArrays = function (longArr, shortArr) {
  const longLength = longArr.length;
  const shortLength = shortArr.length;
  const totalLength = longLength + shortLength;

  // If the first array is longer than the second one,
  // swap them to make sure the first array is always the longer one.
  if (shortLength > longLength) {
    return findMedianSortedArrays(shortArr, longArr);
  }

  let minIndex = 0;
  let maxIndex = shortLength * 2;

  while (minIndex <= maxIndex) {
    const shortDivisionIndex = Math.floor((minIndex + maxIndex) / 2);
    const longDivisionIndex = totalLength - shortDivisionIndex;

    // if there's no element on the left side of the division, set the left element to -Infinity
    let shortLeft =
      shortDivisionIndex === 0
        ? -Infinity
        : shortArr[Math.floor((shortDivisionIndex - 1) / 2)];
    let longLeft =
      longDivisionIndex === 0
        ? -Infinity
        : longArr[Math.floor((longDivisionIndex - 1) / 2)];

    // if there's no element on the right side of the division, set the right element to Infinity
    let shortRight =
      shortDivisionIndex === shortLength * 2
        ? Infinity
        : shortArr[Math.floor(shortDivisionIndex / 2)];
    let longRight =
      longDivisionIndex === longLength * 2
        ? Infinity
        : longArr[Math.floor(longDivisionIndex / 2)];

    if (shortLeft > longRight) {
      // the left side of the short array is too big
      // move the division to the left
      maxIndex = shortDivisionIndex - 1;
    } else if (longLeft > shortRight) {
      // the left side of the long array is too big
      // move the division to the right
      minIndex = shortDivisionIndex + 1;
    }
    // the left side of both arrays are small enough
    // the right side of both arrays are big enough
    // therefore, the division is correct and we can calculate the median
    else {
      let left = Math.max(shortLeft, longLeft);
      let right = Math.min(shortRight, longRight);
      return (left + right) / 2;
    }
  }

  return -1;
};
