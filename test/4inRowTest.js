/**
 *@author Dhruv Choudhary <dhruv.1si12cs038@gmail.com>
 @created 2019-29-6
 */


const chai = require('chai');
const expect = chai.expect;

let game = require('../app/4inRow')


describe("Testing 4 in Row Game", () => {
  
/**
 * we will verify our code using 2D array, which will take three three inputs
 * 0 : no Winner
 * 1 : player2
 * 2 : player2
 */
    
    it("verify player1 wins with horizontal match ", () => {
       
        let testHorizontal = [
            [1, 1, 1, 1, 0, 0],
            [2, 2, 2, 0, 2, 0], // Last placed piece is the last "2" [1][4]
            [1, 1, 2, 1, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];

        let winner  = game.Winner(testHorizontal)
        expect(winner).to.equal(1)
        
    })

    it("verify player2 wins with horizontal match ", () => {
       
        let testHorizontal = [
            [1, 1, 1, 0, 0, 0],
            [2, 2, 2, 2, 2, 0], // Last placed piece is the last "2" [1][4]
            [1, 1, 2, 1, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        
        let winner  = game.Winner(testHorizontal)
        expect(winner).to.equal(2)
    })

    it("verify player 1 wins with vertical match ", () => {
       
        let testVertical = [
            [1, 1, 1, 0, 0, 0],
            [1, 2, 2, 0, 2, 0], // Last placed piece is the last "2" [1][4]
            [1, 1, 2, 1, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        let winner  = game.Winner(testVertical)
        expect(winner).to.equal(1)
        
    })

    it("verify player 2 wins with vertical match ", () => {
       
        var testVertical = [
            [1, 1, 1, 0, 0, 0],
            [0, 2, 2, 0, 2, 0], // Last placed piece is the last "2" [1][4]
            [1, 2, 2, 1, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [0, 2, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        let winner  = game.Winner(testVertical)
        expect(winner).to.equal(2)
        
    })

    it("verify player 1 wins with daigonal match  ", () => {

        let testDiagonal = [
            [1, 1, 1, 1, 2, 0],
            [1, 1, 1, 0, 2, 0],
            [2, 1, 2, 2, 0, 0],
            [1, 2, 2, 0, 0, 0], 
            [1, 2, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0]
        ];
        let winner  = game.Winner(testDiagonal)
        expect(winner).to.equal(1)
    })

    it("verify player 2 with daigonal match  ", () => {

        let testDiagonal = [
            [1, 1, 1, 2, 2, 0],
            [1, 1, 1, 2, 2, 0],
            [2, 1, 2, 2, 0, 0],
            [1, 2, 2, 0, 0, 0], // Last placed piece is the last "2" [3][2]
            [1, 2, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0]
        ];
        let winner  = game.Winner(testDiagonal)
        expect(winner).to.equal(2)
    })


    it("verify there is no winner ", () => {
        let testNoWinner = [
            [1, 1, 1, 2, 2, 0],
            [1, 2, 1, 1, 2, 2],
            [2, 1, 2, 2, 0, 0],
            [1, 2, 1, 0, 0, 1], // Last placed piece is the last "2" [3][2]
            [1, 2, 0, 0, 1, 0],
            [2, 0, 0, 2, 0, 0]
        ];
        let winner  = game.Winner(testNoWinner)
        expect(winner).to.equal(0)
    })

})
