const windmill = require('./windmill');

describe('Windmill', () => {

    test("returns false when given a row that has more than one windmill",() => {
        const testWindmill = [['++,'],[',+,'],[',,,']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns false when given a row that has more than one windmill",() => {
        const testWindmill = [['++++'],[',,,,'],[',,,,'], [',,,,']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns false when given a column that has more than one windmill",() => {
        const testWindmill = [['+,,'],[',+,'],['+,,']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns false when given a column that has more than one windmill",() => {
        const testWindmill = [['+,,,'],['+,,,'],['+,,,'], ['+,,,']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns false when number of wind turbines does not equal `n` number of plots",() => {
        const testWindmill = [['+,,'],[',+,'],[',,,']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns false when windmill doesn't have a clear diagonal line of sigth",() => {
        const testWindmill = [['+,,,'],[',+,,'],[',,+,'], [',,,+']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns false when windmill doesn't have a clear diagonal line of sigth",() => {
        const testWindmill = [[',,,+'],[',,+,'],[',+,,'], ['+,,,']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns false when windmill doesn't have a clear diagonal line of sigth",() => {
        const testWindmill = [[',,,,+'],[',,,+,'],[',,+,,'], [',+,,,'], ['+,,,,']];
        expect(windmill(testWindmill)).toBe(false)
    })
    test("returns true when given a valid windmill farm",() => {
        const testWindmill = [[',+,,'],[',,,+'],['+,,,'], [',,+,']];
        expect(windmill(testWindmill)).toBe(true)
    })
})
