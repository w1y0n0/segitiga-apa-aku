const detectTriangle = (sideA, sideB, sideC) => {
    [sideA, sideB, sideC].forEach((side) => {
        if (side < 1) {
            throw new Error('Strange Triangle');
        }
    });
};

describe('Detect the triangle', () => {
    it('Should fail if the sides are less than 1', () => {
        expect(() => detectTriangle(-1, 2, 2)).toThrowError('Strange Triangle');
        expect(() => detectTriangle(1, -2, 2)).toThrowError('Strange Triangle');
        expect(() => detectTriangle(1, 2, -2)).toThrowError('Strange Triangle');
    });
});