---
layout: lesson
lesson: 5 - Class Compatibility
parent: TS-5
---

### Class Compatibility:

Classes in TypeScript are also structurally typed. Compatibility is determined by the instance members, not the constructors or static members.

#### Example:

```ts twoslash
// @errors: 2741
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class ThreeDPoint {
  x: number;
  y: number;
  z: number; // new property

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

let point: Point = new Point(7, 9);
let threeDPoint: ThreeDPoint = new ThreeDPoint(22, 67, 45);

// ThreeDPoint is compatible with Point
point = threeDPoint; // This works because ThreeDPoint has all the properties of Point

// Point is not compatible with ThreeDPoint
threeDPoint = point; // Error
```
