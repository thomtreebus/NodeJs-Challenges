
/**
 * 
 * REFACTORING
 * 
 * After having fixed the typos from the file 'challenge_1.js',
 * please refactor the file
 * 
 * DIFFICULTY: Medium
 * 
 */

const MatrixA =
[
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6]
];

const MatrixB =
[
    [2, 3, 1],
    [0, 0, 0],
    [1, 5, 3]
];

// Assuming the matrices passed are both 3x3 in size
let multiplyMatrices = (a, b) =>
  a.map((row, i) =>
    b[0].map((_, j) =>
      row.reduce((acc, _, n) =>
        acc + a[i][n] * b[n][j], 0
      )
    )
  )

console.log(multiplyMatrices (MatrixA, MatrixB));