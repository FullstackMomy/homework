let size = 8;
let ChessBoard = [];
let BoardRow = [];
for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      BoardRow.push("black");
    } else {
      BoardRow.push("white");
    }
  }
  ChessBoard.push(BoardRow);
  BoardRow = [];
}
console.log(ChessBoard);
