const parOuImpar = require ('./parOuImpar');

test('Verifica se 2 Par', () =>{
    expect(parOuImpar(2)).toBe('Par');
});