var NeedleFinder = function(needle, haystack) {

    for (let index = 0; index <= haystack.length - needle.length; index++) {
        if (haystack.substring(index, index + needle.length) === needle) {
        }
    }

    return -1
}