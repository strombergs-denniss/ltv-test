

function compute(c, v, s) {
    const inM = c + v
    // Output money in form of capital
    const outM = inM + s
    // Rate of profit
    const profitRate = s / inM
    // Organic composition of capital
    const capitalOrganicComposition = c / v
    // Rate of surplus value | Rate of exploitation
    const surplusValueRate = s / v
    // Another formula for expressing profit rate
    const alternativeProfitRate = surplusValueRate / (capitalOrganicComposition + 1)

    console.log({
        inM,
        profitRate,
        capitalOrganicComposition,
        surplusValueRate
    })

    return outM
}

// Constant capital (materials, means of production, etc.)
const c = 0
// Variable capital (labor power)
const v = 0
// Surplus value
const s = 0

compute(50, 100, 200)
compute(100, 100, 200)
compute(200, 100, 200)
compute(300, 100, 200)
compute(400, 100, 200)

