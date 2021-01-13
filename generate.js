$(document).ready(function () {
    var allSudoku = [
        "176.8.243.286.1957...27.8162.13......8........................................195",
        "3..7.85..79.3..42..5....873..7.43.5.2...7.6....1.8.9.7..6.1......................",
    ];

    var sudoku = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    function generateSudoku() {
        var dice = Math.floor(Math.random() * allSudoku.length)
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (allSudoku[dice][i * 9 + j] === "0" || allSudoku[dice][i * 9 + j] === ".") {
                    sudoku[i][j] = " ";
                } else {
                    sudoku[i][j] = parseInt(allSudoku[dice][i * 9 + j])
                }
            }
        }
    }

    // function displaySudoku2() {
    //     generateSudoku()
    //     $(sudokuGame).html(sudoku.join('\<br>'))
    // }

    function displaySudoku() {

        generateSudoku();

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                $(`#${i}-${j}`).html(sudoku[i][j])
            }
        }
    }

    function isRowValid(line, number) {
        for (var i = 0; i < 9; i++) {
            if (sudoku[line][i] === number) {
                return false;
            }
        }
        return true;
    }

    function isColumnValid(column, number) {
        for (var i = 0; i < 9; i++) {
            if (sudoku[i][column] === number) {
                return false;
            }
        }
        return true;
    }

    function isBlockValid(line, column, number) {
        var startI = 0;
        var startJ = 0;

        if (line === 0 || line === 1 || line === 2) {
            startI = 0
        } else if (line === 3 || line === 4 || line === 5) {
            startI = 3
        } else if (line === 6 || line === 7 || line === 8) {
            startI = 6
        } else {
            console.log("Error")
        }

        if (column === 0 || column === 1 || column === 2) {
            startJ = 0
        } else if (column === 3 || column === 4 || column === 5) {
            startJ = 3
        } else if (column === 6 || column === 7 || column === 8) {
            startJ = 6
        } else {
            console.log("Error")
        }

        for (var i = startI; i < startI + 3; i++) {
            for (var j = startJ; j < startJ + 3; j++) {
                console.log(sudoku[i][j])
                if (sudoku[i][j] === number) {
                    return false;
                }
            }
        }
        return true;
    }

    function isValid(line, column, number) {
        if (isRowValid(line, number) && isColumnValid(column, number) && isBlockValid(line, column, number)) {
            return true;
        } else {
            return false;
        }
    }

    // function solve() {
    //     for (var i = 0; i < 9; i++) {
    //         for (var j = 0; j < 9; j++) {
    //             var randomNumber = Math.floor(Math.random() * 9 + 1)

    //             if (sudoku[i][j] === 0) {
    //                 if (isValid(i, j, randomNumber)) {
    //                     sudoku[i][j] = randomNumber;
    //                     console.log("Je lui ai attribué", randomNumber)
    //                 } else {
    //                     j--;
    //                 }
    //             } else {
    //                 console.log("Je peux rien faire ici")
    //             }
    //         }
    //     }
    // }
    // solve()
    displaySudoku()

    $(newSudoku).click(function () {
        generateSudoku()
        displaySudoku()
    })

    console.log(isValid(0, 0, 5))
})