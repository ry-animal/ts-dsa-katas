const a: number[] = [];
// ^ arraylist under the hood

function time(fn: () => void): number {
    const start = Date.now();
    fn();
    return Date.now() - start;
}

function unshift(number: number) {
    for (let i = 0; i < number; ++i) {
        a.unshift(Math.random());
    }
}

function shift(number: number) {
    for (let i = 0; i < number; ++i) {
        a.shift();
    }
}

function push(number: number) {
    for (let i = 0; i < number; ++i) {
        a.push(Math.random());
    }
}

function pop(number: number) {
    for (let i = 0; i < number; ++i) {
        a.pop();
    }
}

function get(idx: number) {
    return function () {
        return a[idx];
    };
}

function push_arr(count: number) {
    return function () {
        push(count);
    };
}

function pop_arr(count: number) {
    return function () {
        pop(count);
    };
}

function unshift_arr(count: number) {
    return function () {
        unshift(count);
    };
}

function shift_arr(count: number) {
    return function () {
        shift(count);
    };
}

const tests = [10, 100, 1000, 10_000, 100_000, 1_000_000, 10_000_000];
console.log("Testing get");
tests.forEach((t) => {
    a.length = 0;
    push(t);
    console.log(t, time(get(t - 1)));
});

console.log("Testing push");
tests.forEach((t) => {
    a.length = 0;
    push(t);
    console.log(t, time(push_arr(1000)));
});

console.log("Testing pop");
tests.forEach((t) => {
    a.length = 0;
    push(t);
    console.log(t, time(pop_arr(1000)));
});

console.log("Testing unshift");
tests.forEach((t) => {
    a.length = 0;
    push(t);
    console.log(t, time(unshift_arr(1000)));
});

console.log("Testing shift");
tests.forEach((t) => {
    a.length = 0;
    push(t);
    console.log(t, time(shift_arr(1000)));
});
