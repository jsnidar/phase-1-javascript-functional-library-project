function standardizer(collection) {
    let collectionArr = []
    if (Array.isArray(collection) === false) {
        collectionArr = Object.values(collection)
    }else{
        collectionArr = collection.slice()
    }
    return collectionArr;
}
function myEach (collection, callback) {
    const collectionArr = standardizer(collection)
    for (const i of collectionArr) {
        callback(i)
    }
    return collection
}

function myMap(collection, callback) {
    const collectionArr = standardizer(collection)
    const newArr = []
    for (const i of collectionArr) {
       newArr.push(callback(i))
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    let collectionArr = standardizer(collection)
    if(!acc) {
        acc = collectionArr[0]
        collectionArr = collectionArr.slice(1)
    }

    for(let i = 0; i < collectionArr.length; i++) {
        acc = callback(acc, collectionArr[i], collectionArr)
    }
    return acc;
}

function myFind(collection, predicate) {
    let collectionArr = standardizer(collection)
    for (let i = 0; i < collectionArr.length; i++) {
        if(predicate(collectionArr[i]) === true) {
            return collectionArr[i];
        }else{
            continue;
        }
    }
}

function myFilter(collection, predicate) {
    let collectionArr = standardizer(collection)
    let newArr = []
    for (let i = 0; i < collectionArr.length; i++) {
        if(predicate(collectionArr[i]) === true) {
            newArr = [...newArr, collectionArr[i]]
        }
    }
    return newArr
}

function mySize(collection) {
    const collectionArr = standardizer(collection)
    return collectionArr.length
}

function myFirst(collection, n) {
    const collectionArr = standardizer(collection)
    if(!n) {
        return collectionArr[0]
    }else{
        return collectionArr.slice(0, n)
    }
}

function myLast(collection, n) {
    const collectionArr = standardizer(collection)
    if(!n) {
        return collectionArr[collectionArr.length - 1]
    }else{
        const start = collectionArr.length - n
        return collectionArr.slice(start)
    }
}

function myKeys(object) {
    let keys = []
    for (let key in object) {
        keys.push(key)
    }
    return keys
}

function myValues(object) {
    let values = []
    for (let key in object) {
        values.push(object[key])
    }
    return values
}

function mySortBy(array, callback) {
    const newArray = [...array]
    return newArray.sort(function (a, b) {
        if(callback(a) > callback(b)) {
            return 1
        }else if(callback(a) < callback(b)) {
            return -1;
        }else{
            return 0;
        }
    })
}