module.exports = function reverse (n) {
    const reveredNumber = n.toString().split('').reverse().join('')
        const rn = parseInt(reveredNumber)*Math.sign(n)
            const result = Math.abs(rn)
                return result
}
