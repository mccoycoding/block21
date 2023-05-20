const { Car, ElectricCar } = require('./index');
const TeslaModelS = new ElectricCar("Tesla", "Model S", 2019, 300);
const FordFocus = new Car("Ford", "Focus", 2002);

const testString = `A Tesla Model S from 2019. It has a range of 300 miles.`;
const testString2 = "A Ford Focus from 2002."

test('Returns the description of a Tesla Model S', () => {
    expect(TeslaModelS.getDescription()).toBe(testString);
});
test('Returns the description of a Ford Focus', () => {
    expect(FordFocus.getDescription()).toBe(testString2);
})