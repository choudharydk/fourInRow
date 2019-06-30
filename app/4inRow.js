/**
 *@author Dhruv Choudhary <dhruv.1si12cs038@gmail.com>
 @created 2019-29-6
 */

module.exports = {

    /**
     * implementation of four in row game
     * @param {*} board a board of m*n size
     * @return winner name ( 1 or 2 ) if any or 0 if no winner found
     */
    Winner: function (board) {
        let totalRowNumber = board.length;
        let totalColumnNumber = board[0].length;



        console.log("height of board", totalRowNumber, "width  of board", totalColumnNumber)
        let emptyBox = 0;
        /**
         * Loop once, and check all around each element. Assuming the loops move along the board bottom to top & left to right, 
         * you would only need to check each position for a win by looking up, up+right, up+left, and right.
         */
        for (let row = 0; row < totalRowNumber; row++) { // iterate rows, bottom to top
            for (let column = 0; column < totalColumnNumber; column++) { // iterate columns, left to right
                let playerName = board[row][column];
                // console.log("column+3",column+3)
                // console.log("board[row][column+1]", board[row][column+1])
                // console.log("board[row][column+2]", board[row][column+2])
                // console.log("board[row][column+3]", board[row][column+3])
                // console.log(column + 3 < totalColumnNumber && playerName === board[row][column+1] && playerName === board[row][column+2] && playerName === board[row][column+3]);

                if (playerName === emptyBox) {
                    //skip if empty box found
                    continue;
                }

                else if (column + 3 < totalColumnNumber && playerName === board[row][column + 1] && playerName === board[row][column + 2] && playerName === board[row][column + 3]) {
                    //console.log("pyaler is ", playerName)
                    return playerName;
                }


                else if (row + 3 < totalRowNumber) {
                    if (playerName === board[row + 1][column] && playerName === board[row + 2][column] && playerName === board[row + 3][column]) {
                        // console.log("pyaler is ", playerName)
                        return playerName;
                    }

                    if (column + 3 < totalColumnNumber && playerName === board[row + 1][column + 1] && playerName === board[row + 2][column + 2] && playerName === board[row + 3][column + 3]) {
                        // console.log("pyaler is ", playerName)
                        return playerName;
                    }

                    if (column - 3 >= 0 && playerName == board[row + 1][column - 1] && playerName == board[row + 2][column - 2] && playerName == board[row + 3][column - 3]) {
                        // console.log("pyaler is ", playerName)
                        return playerName;
                    }

                }
            }
        }

        return emptyBox; // no winner found
    }

}



