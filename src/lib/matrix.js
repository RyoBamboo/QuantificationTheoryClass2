/***
 * matrix.js
 * 基本的な配列操作を行うライブラリ
 */

function Matrix() {};

Matrix.prototype = {

    /*
    * 配列を初期化する
    */
    initMatrix: function(row, col) {
        var array = new Array(row);
        for (var i = 0; i < col; i++) {
            array[i] = new Array(col).fill(0);
        }

        return array;
    },


    /*
    * 行数を取得する
    */
    countRow: function(arr) {
        return arr.length;
    },


    /*
    * 列数を取得する
    */
    countCol: function(arr) {
        return arr[0].length;
    },


    /*
    * 加算
    */
    sum: function(arrLeft, arrRight) {
        var rowCount = this.countCol(arrLeft);
        var colCount = this.countRow(arrLeft);
        var resultArr = this.initMatrix(rowCount, colCount);

        for(var i = 0; i < rowCount; i++) {
            for (var j = 0; j < colCount; j++) {
                resultArr[i][j] = arrLeft[i][j] + arrRight[i][j];
            }
        }

        return resultArr;
    },


    /*
    * 減算
    */
    subtraction: function(arrLeft, arrRight) {
        var rowCount = this.countRow(arrLeft);
        var colCount = this.countCol(arrLeft);
        var resultArr = this.initMatrix(rowCount, colCount);

        for(var i = 0; i < rowCount; i++) {
            for (var j = 0; j < colCount; j++) {
                resultArr[i][j] = arrLeft[i][j] - arrRight[i][j];
            }
        }

        return resultArr;

    },


    /*
    * 乗算
    */
    multiple: function(arrLeft, arrRight) {
        var rowCountFromLeft = this.countRow(arrLeft);
        var colCountFromRight = this.countCol(arrRight);
        var resultArr = this.initMatrix(rowCountFromLeft, colCountFromRight); // 行列の乗算結果の行列数は(左行列の行数, 右行列の列数）

        var colCountFromLeft = this.countCol(arrLeft);
        for (var i = 0; i < rowCountFromLeft; i++) {
            for (var j = 0; j < colCountFromRight; j++) {
                for (var k = 0; k < colCountFromLeft; k++) {
                    // 乗算結果の行列のi行j列 += 左行列のi行k番目 * 右行列のj列k番目の要素
                    resultArr[i][j] += arrLeft[i][k] * arrRight[k][j];
                }
            }
        }

        return resultArr;
    }


};

