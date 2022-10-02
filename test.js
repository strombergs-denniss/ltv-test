// C - commodity
// M - money
// v - variable capital
// c - constant capital
// s - surplus value

// Circulation of money in various forms
// C - M - C
// sell commodity, it transforms into money, buy other commodity from that money

// M - C - M
// buy commodity, sell commodity

// The result, in which the phases of the process vanish, is the exchange of money for money, M-M. If I purchase 2,000 lbs. of cotton for £100, and resell the 2,000 lbs. of cotton for £110, I have, in fact, exchanged £100 for £110, money for money.
// Now it is evident that the circuit M-C-M would be absurd and without meaning if the intention were to exchange by this means two equal sums of money
// Now it is evident that the circuit M-C-M would be absurd and without meaning if the intention were to exchange by this means two equal sums of money, £100 for £100. 

// M - C - M'
// C - M - sale
// M - C - purchase




// M' > M
// Buy - Produce - Sell - repeat

// M = c + v
// M' = c + v + s
// M' - M = s


// organic composition of capital
// rate of profit
// rate of surplus value


const c = 4

const v = 8
const s = 5
const value = v + s


const rateOfProfit = s / (c + v)
const organicCompositionOfCapital = c / v
const rateOfSurplusValue = s / v
const test = rateOfSurplusValue / (organicCompositionOfCapital + 1)

const output = {
    rateOfProfit,
    organicCompositionOfCapital,
    rateOfSurplusValue,
    test,
    c,
    v,
    s,
    value
}

console.log(output)

// each itteration happesn either buying or selling
// each itteration either money gets converted into commodity or commodity converted into money
// M - C, C - M


