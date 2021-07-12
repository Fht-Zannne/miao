function chunk(array, n) {
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


function uniqBy(array, f) {
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


function flattenDeep(array) {




}