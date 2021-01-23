class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
let p: Point = { x: 22, y: 33 };
console.log(point3d);
console.log(p)