module.exports = function toReadable (number) {
    let arr = Array.from(String(number))
    let result = ``
   
    if (arr.length === 3) {
        result = result + message[arr[0]] + ' hundred '
        arr.shift()
       
        if (arr[0] === '0' && arr[1] === '0') {
            return result
        }
       
        if (arr[0] === '0' && arr[1] !== '0') {
            result = result + message[arr[1]]
            return result
        }
       
    }
   
    if ((arr[0] === '1' && arr.length === 2) || (arr.length === 2 && arr[1] === '0')) {
        result = result + message[(arr[0]) + (arr[1])]
        return result
    }
   
    if (arr.length === 2) {
        result = result + message[arr[0] + '0'] + ' '
        arr.shift()
    }
   
    if (arr.length === 1) {
        result = result + message[arr[0]]
        return result
    }
}
