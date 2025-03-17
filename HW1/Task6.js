const quadraticEquation = (a, b, c) => {
    const D = b ** 2 - 4 * a * c;

    if (D < 0) return [];

    if (D == 0) {
        return [(-b + Math.sqrt(D)) / 2];
    }

    if (D > 0) {
        return [(-b + Math.sqrt(D)) / 2, (-b - Math.sqrt(D)) / 2];
    }
}

console.log(quadraticEquation(1, -8 , 72));
console.log(quadraticEquation(1, 12, 36));
console.log(quadraticEquation(1, 6, 1));