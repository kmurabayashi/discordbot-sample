function fizzbuzz(input) {
    // return a === '3' ? 'fizz' : a
    let result = ''

    if (input % 3 === 0) {
        result += 'fizz'
    }
    if (input % 5 === 0) {
        result += 'buzz'
    }
    if (result === '') {
        result = input
    }
    if (isNaN(input)) {
        result = ''
    }

    return result;
}
module.exports = fizzbuzz;
