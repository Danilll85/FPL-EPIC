const isDeepEqual = (a, b) => {
    if (a === b) return true;

    if (a === null || b === null) return false;

    if (typeof a !== "object" || typeof b !== "object") return false;

    const isArrA = Array.isArray(a);
    const isArrB = Array.isArray(b);

    if (isArrA !== isArrB) return false;

    if (isArrA && isArrB) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!isDeepEqual(a[i], b[i])) return false;
        }
        return true;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    keysA.sort();
    keysB.sort();

    for (let i = 0; i < keysA.length; i++) {
        if (keysA[i] !== keysB[i]) return false;
    }

    for (const key of keysA) {
        if (!isDeepEqual(a[key], b[key])) return false;
    }

    return true;
};

const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const b = { list: [1, 2, 3], o: { x: 2 } };

console.log(isDeepEqual(a, b));

b.prop1 = 1;

console.log(isDeepEqual(a, b));
console.log(isDeepEqual({ a: { b: { c: { n: 90 } } } }, { a: { b: { c: { n: 90 } } } }));
console.log(isDeepEqual([1, 2, 3], [4, 7, 3]));
console.log(isDeepEqual([1, 2, 3], [1, 2, 3]));
console.log(isDeepEqual([1, 5, 6, 7], [1, 5, [6], [7]]));
console.log(
    isDeepEqual([1, { a: 3, b: 5 }, [6], [7]], [1, { a: 3, b: 5 }, [6], [7]])
);
