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
    }


    /*
    * 減算
    */


    /*
    * 加算
    */


};

