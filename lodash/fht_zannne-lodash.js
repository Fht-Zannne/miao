
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

    return {
        chunk: chunk,
        compact: compact
    }
}()
















