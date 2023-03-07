// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) return s;

  let rowIndex = 0;
  let strIndex = 0;

  let rows = Array.from(Array(numRows), () => []);

  while (strIndex < s.length) {
    if (rowIndex === 0) {
      strIndex = fillRows(strIndex);
      rowIndex = numRows - 2;
    } else {
      rows[rowIndex].push(s[strIndex]);
      rowIndex--;
      strIndex++;
    }
  }

  function fillRows(strIndex) {
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      if (strIndex >= s.length) return strIndex;
      rows[rowIndex].push(s[strIndex]);

      strIndex++;
    }

    return strIndex;
  }

  return rows.reduce((str, row) => str.concat(row.join("")), "");
};
