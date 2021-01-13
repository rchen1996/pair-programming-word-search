const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  if (letters.length === 0) {
    return "not searchable";
  }
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const reverseHorizontal = [];
  for (let h of horizontalJoin) {
    reverseHorizontal.push(h.split("").reverse().join(""));
  }

  for (let rh of reverseHorizontal) {
    if (rh.includes(word)) {
      return true;
    }
  }

  const transpose = (matrix) => {

    let grid = [];
    let rowLength = matrix.length;
    let columnLength = matrix[0].length;
    for (let x = 0; x < columnLength; x++) {
      grid[x] = [];
    }
    for (let y = 0; y < rowLength; y++) {
      for (let x = 0; x < columnLength; x++) {
        grid[x][y] = matrix[y][x];
      }
    }
    return grid;
  };

  let verticalArrayCheck = transpose(letters);

  const verticalCheck = verticalArrayCheck.map(vc => vc.join(''));

  for (let v of verticalCheck) {
    if (v.includes(word)) {
      return true;
    }
  }

  const reverseVertical = [];

  for (let vw of verticalCheck) {
    reverseVertical.push(vw.split("").reverse().join(""));
  }

  for (let rv of reverseVertical) {
    if (rv.includes(word)) {
      return true;
    }
  }

  const diagonalArray = [];

  let count = 0;

  let horizontalLength = letters.length;
  let verticalLength = letters[0].length;

  let diagonalWord = "";
  for (let i = 0; i < horizontalLength; i++) {
    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < letters[j].length; k++) {
        if (j === k + count) {
          diagonalWord += letters[j][k];
    
          // console.log(diagonalWord);
        }
      }
    
    }
    diagonalArray.push(diagonalWord);
    diagonalWord = "";
    count++;
  }

  count = 1;
    
  let diagonalWordTwo = "";
  for (let i = 0; i < verticalLength - 1; i++) {
    for (let j = 0; j < letters.length; j++) {
      for (let k = 1; k < letters[j].length; k++) {
        if (j + count === k) {
          diagonalWordTwo += letters[j][k];
        }
      }
    
    }
    diagonalArray.push(diagonalWordTwo);
    diagonalWordTwo = "";
    count++;
  }

  for (let d of diagonalArray) {
    if (d.includes(word)) {
      return true;
    }
  }
  return false;
};


module.exports = wordSearch;

// ================================

// const transpose = (matrix) => {

//     let grid = [];
//     let rowLength = matrix.length
//     let columnLength = matrix[0].length
//     for (let x = 0; x < columnLength; x++) {
//       grid[x] = []
//     }
//     for (let y = 0; y < rowLength; y++) {
//       for (let x = 0; x < columnLength; x++) {
//         grid[x][y] = matrix[y][x]
//       }
//     }
//     return grid;
//   }

// =====================================

/*const transpose = function(matrix) {
    // final output
    let transposedArray = [];
    // need to do this the same number of times as the length of each nested array
    for (let i = 0; i < matrix[0].length; i++) {
      // each time, you are creating a new inner array
      const newArray = [];
      // for each array inside the outer array
      // take the element at index i and push it to the new array
      // slices off the value at the same index in each nested arr and pushes it to the new index
      // each time it does this, the index increases by 1 - slicing the next value in each array to be transposed
      // will keep going until it reaches the end of the array and there are no more values to be transposed
      for (const array of matrix) {
        let firstVal = array.slice(i, i + 1);
        newArray.push(firstVal[0]);
      }
      transposedArray.push(newArray);
    }
    return transposedArray;
  };
  */