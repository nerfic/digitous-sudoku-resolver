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

    var temp = null;

    function solve() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var hasPossibilitie = false;
                var sudokuCopy = sudoku.map(function (arr) {
                    return arr.slice();
                });
                for (var k = 1; k < 10; k++) {
                    if (sudoku[i][j] === " ") {
                        if (isValid(i, j, k)) {
                            sudoku[i][j] = k;
                            console.log("Je lui ai attribué", k, "au coordonnée", i, j)
                            hasPossibilitie = true;
                            if (solve()) {
                                return true;
                            } else {
                                temp = sudokuCopy.map(function (arr) {
                                    return arr.slice();
                                })
                            }
                        } else {
                            console.log("Pas possible d'attribuer", k, "au coordonnée", i, j)
                        }
                    } else {
                        console.log("Il y a déjà une chiffre ici", "au coordonnée", i, j)
                    }
                }
                if (!hasPossibilitie) {
                    return false;
                } else {

                }
            }
        }
        return true;
    }


    displaySudoku()

    $(solveSudoku).click(function () {
        solve()
    });

    $(newSudoku).click(function () {
        displaySudoku();
    });

    console.log(isValid(0, 0, 5));
})