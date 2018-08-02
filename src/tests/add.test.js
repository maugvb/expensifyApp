const add = (a, b) => a + b;
const generateGreeting = (name) => `Name: ${name}`

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test('should create greeting from name', () => {
    const greeting = generateGreeting('Pepe')

    expect(greeting).toBe('Name: Pepe')
});