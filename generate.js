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

    displaySudoku()

    $(newSudoku).click(function () {
        generateSudoku()
        displaySudoku()
    })

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
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                console.log(soduku[line + i][column + j])
                if (soduku[line + i][column + j] === number) {
                    return false;
                }
            }
        }
        return true;
    }

    // console.log(isRowValid(8, 9))
    // console.log(isColumnValid(0, 8))
    console.log(isBlockValid(0, 0, 7))
})