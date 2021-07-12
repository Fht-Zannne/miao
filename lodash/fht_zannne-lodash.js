
var foobar = {

    chunk: function (array, n) {
        var temp = 0
        var arr = []
        var result = []
        var count = 0
        while (temp < array.length) {
            for (let i = 0; i < n; i++) {
                temp++
                if (temp = array.length) {
                    break
                }
                arr[i] = array[temp]
            }
            result[count++] = arr[i]
            arr = []
        }

        return result
    }

    ,

    compact: function (array) {
        var res = []
        for (let i = 0; i < array.length; i++) {

            if (array[i]) {
                res.push(array[i])
            }
        }
        return res
    }

    ,


    uniq: function (array) {
        var log = []
        var res = []
        for (let i = 0; i < array.length; i++) {
            temp = array[i]
            if (log[temp] == null) {
                res.push(temp)
                log[temp] = 1
            } else {
                continue
            }
        }
        return res
    }

    ,

    uniqBy: function (array, f) {
        var log = []
        var res = []
        for (let i = 0; i < array.length; i++) {
            var temp = array[i]
            if (flog[f(temp)] == null) {
                res.push(temp)
                log[f(temp)] = 1
            } else {
                continue
            }
        }
        return res
    }

    ,

    flattenDeep: function (array) {




    }


}













