const detectTriangle = (sideA, sideB, sideC) => {
    [sideA, sideB, sideC].forEach((side) => {
        if (side < 1) {
            throw new Error('Strange Triangle');
        }
    });

    // B. Kita terapkan secara bertahap dan dengan kode seperlunya saja
    // 2. sideA, 4. sideB, 6. sideC
    if (!Number.isInteger(sideA) || !Number.isInteger(sideB) || !Number.isInteger(sideC)) {
        throw new Error('Sides have to be Integer');
    }
};

describe('Detect the triangle', () => {
    it('Should fail if the sides are less than 1', () => {
        expect(() => detectTriangle(-1, 2, 2)).toThrowError('Strange Triangle');
        expect(() => detectTriangle(1, -2, 2)).toThrowError('Strange Triangle');
        expect(() => detectTriangle(1, 2, -2)).toThrowError('Strange Triangle');
    });

    // A. kita buat tesnya terlebih dahulu
    it('Should fail if the sides are not integer', () => {
        // 1. Test for sideA
        expect(() => detectTriangle('a', 2, 2)).toThrowError('Sides have to be Integer');
        // 3. Test for sideB
        expect(() => detectTriangle(1, 'b', 2)).toThrowError('Sides have to be Integer');
        // 5. Test for sideC
        expect(() => detectTriangle(1, 2, 'c')).toThrowError('Sides have to be Integer');
    });
});