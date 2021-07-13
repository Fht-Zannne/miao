var fht_zannne = function () {
    function chunk(array, size = 1) {
        var result = []
        var start = 0
        var a = size
        for (let i = 0; i < array.length; i += a) {
            result.push(array.slice(start, size))
            start = size
            size += a
        }
        return result
    }

    function compact(array) {
        var res = []
        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                res.push(array[i])
            }
        }
        return res
    }


    function uniq(array) {
        var log = []
        var res = []
        for (let i = 0; i < array.length; i++) {
            var temp = array[i]
            if (log[temp] == null) {
                res.push(temp)
                log[temp] = 1
            }
        }
        return res
    }

    function uniqBy(array, f) {
        var log = []
        var res = []
        for (let i = 0; i < array.length; i++) {
            if (typeof (f) == "function") {
                var temp = f(array[i])
            } else {
                var temp = array[i][f]
            }
            if (log[temp] == null) {
                res.push(array[i])
                log[temp] = 1
            }
        }
        console.log(log)
        return res
    }

    function flattenDeep(array) {
        var res = []
        for (let i = 0; i < array.length; i++) {
            var temp = array[i]
            if (Array.isArray(temp)) {
                res = res.concat(flattenDeep(temp))
            } else {
                res.push(array[i])
            }
        }
        return res
    }

    function flattenDepth(array, n) {
        var res = []
        for (let i = 0; i < array.length; i++) {
            debugger
            var temp = array[i]
            if (n > 0 && Array.isArray(temp)) {
                n--
                res = res.concat(flattenDepth(temp, n))
            } else {
                res.push(temp)
            }
        }
        return res
    }

    function groupBy(array, f) {
        var res = []
        for (let i = 0; i < array.length; i++) {

            if (typeof (f) == "function") {
                var temp = f(array[i]).toString()
            } else {
                var temp = array[i].f
            }
            if (res[temp] == null) {
                res[temp] = new Array
                res[temp].push(array[i])
            } else {
                res[temp].push(array[i])
            }
        }
        return res
    }


    function KeyBy(array, f) {
        var res = {}
        var check = typeof (f) == "function" ? true : false

        for (let i = 0; i < array.length; i++) {

            var temp = check ? f(array[i]) : array[i][f]

            res[temp] = array[i]
        }
        return res
    }



    function forEach(array, f) {
        for (let i = 0; i < array.length; i++) {
            f(array[i], i)
        }
        return array
    }



    function map(coll, f) {

    }


    function filter(coll, f) {
        var res = []
        if (typeof (f) == "function") {
            check = true
        } else {
            check = false
        }

        for (let i = 0; i < coll.length; i++) {
            if (check) {
                temp = f(coll[i])
            } else {
                temp = coll[i][f]
            }
        }
        return res
    }


    function keys(obj) {
        var res = []
        for (var i in obj) {
            res.push(i)
        }
        return res
    }


    function values(obj) {
        var res = []
        for (var i in obj) {
            res.push(obj[i])
        }
        return res
    }


    function every(coll, f) {



    }


    function fill(array, value = "", start = 0, end = array.length) {
        for (let i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }


    function isEqual(a, b) {
        //是否是同一对象
        if (a === b) {
            return true
        }

        //都是对象
        if (typeof (a) == "object" && typeof (b) == "object") {
            if (Object.keys(a).length != Object.keys(b).length) {
                return false
            }

            for (var i in a) {
                return isEqual(a[i], b[i])
            }
        }
        else {
            if (a.toString() != b.toString()) {
                return false
            }
        }
        return true
    }



    function reverse(array) {
        if (array.length <= 1) {
            return array
        }

        var res = []

        for (let i = array.length - 1; i >= 0; i--) {
            res.push(array[i])
        }
        return res
    }


    function countBy(coll, f) {

        var check = (typeof (f) == "function")
        var res = {}

        for (var i in coll) {
            var temp = check ? f(coll[i]) : coll[i][f]
            if (res[temp] == null) {
                res[temp] = []
            }
            res[temp].push(coll[i])
        }

        return res
    }


    function isNaN(val) {
        if (val !== val) {
            return true
        }

        if (val == null) {
            return false
        }

        if (val.valueOf() !== val.valueOf()) {
            return true
        }

        return false
    }


    function isNull(val) {
        return null === val
    }


    function isNil(val) {
        return val == undefined
    }


    function isUndefined(val) {
        return val === undefined
    }

    // 输入：toArray({"a":1,"b":2})
    // 输出/期望：[1,2]
    // =================
    // 输入：toArray("abc")
    // 输出/期望：["a","b","c"]
    // =================
    // 输入：toArray(1)
    // 输出/期望：[]
    // =================
    // 输入：toArray(null)
    // 输出/期望：[]
    function toArray(val) {
        var res = []
        if (typeof (val) == "object" || typeof (val) == "string") {
            for (var i in val) {
                res.push(val[i])
            }
        }
        return res
    }


    function sum(array) {
        var sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum
    }


    function sumBy(array, f) {
        var check = (typeof (f) == 'function')
        var sum = 0
        for (let i = 0; i < array.length; i++) {
            if (check) {
                sum += f(array[i])
            } else {
                sum += array[i][f]
            }
        }
        return sum
    }


    return {
        chunk: chunk,
        compact: compact,
        uniq: uniq,
        uniqBy: uniqBy,
        flattenDeep: flattenDeep,
        flattenDepth: flattenDepth,
        gruopBy: groupBy,
        keyBy: KeyBy,
        forEach: forEach,
        map: map,
        filter: filter,
        keys: keys,
        values: values,
        fill: fill,
        reverse: reverse,
        countBy: countBy,
        isNaN: isNaN,
        isNull: isNull,
        isNil: isNil,
        isUndefined: isUndefined,
        toArray: toArray,
        sum: sum,
        sumBy: sumBy,


    }
}()
