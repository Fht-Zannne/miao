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
                var temp = array[i].f
            }
            if (log[temp] == null) {
                res.push(array[i])
                log[temp] = 1
            }
        }
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
    }
}()
















