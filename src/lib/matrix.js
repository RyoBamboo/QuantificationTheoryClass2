/***
 * matrix.js
 * 基本的な配列操作を行うライブラリ
 */

function Matrix() {};

Matrix.prototype = {

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
        // TODO: ここから配列の初期化法を考える
        var resultArr = [
            [0, 0],
            [0, 0]
        ];

        for(var i = 0; i < rowCount; i++) {
            for (var j = 0; j < colCount; j++) {
                resultArr[i][j] = arrLeft[i][j] + arrRight[i][j];
            }
        }

        return resultArr;
    }


    /*
    * 加算
    */


    /*
    * 加算
    */


};

