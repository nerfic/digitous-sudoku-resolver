$(document).ready(function () {
    var allSudoku = [
        "000070040028000617000000090000000000000000000206004005182600073394000056765000000",
    ];

    var soduku = [
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
                soduku[i][j] = parseInt(allSudoku[dice][i * 9 + j])
            }
        }
    }

    function displaySudoku() {
        generateSudoku()
        $(sudokuGame).html(soduku.join('\<br>'))
    }


    function isRowValid(line, number) {
        for (var i = 0; i < 9; i++) {
            if (soduku[line][i] === number) {
                return false;
            }
        }
        return true;
    }

    function isColumnValid(column, number) {
        for (var i = 0; i < 9; i++) {
            if (soduku[i][column] === number) {
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
                console.log(soduku[i][j])
                if (soduku[i][j] === number) {
                    return false;
                }
            }
        }
        return true;
    }

    function isValid() {

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var randomNumber = Math.floor(Math.random() * 9 + 1)
                if (sudoku[i][j] === 0) {
                    if (isRowValid(j, randomNumber) === true) {

                    } else {

                    }
                } else {

                }
            }
        }
    }

    displaySudoku()

    $(newSudoku).click(function () {
        generateSudoku()
        displaySudoku()
    })

    console.log(isBlockValid(0, 3, 8))
})