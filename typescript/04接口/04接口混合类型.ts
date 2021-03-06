interface Counter {
    (start: number): number;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { }
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;