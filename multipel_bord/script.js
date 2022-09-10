let size = 10;
let multiple_board = [];
let board = [];
for (let x = 1; x <= size; x++) {
  for (let y = 1; y <= size; y++) {
    multiple_board.push(x * y);
  }
  board.push(multiple_board);
  multiple_board = [];
}
console.log(board);
// }
// console.log(multiple_board);
