import Vector from "./vector.interface";

export default class Vector2D implements Vector<Vector2D> {
  constructor(readonly x: number, readonly y: number) {}

  magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  add(vector: Vector2D): Vector2D {
    return new Vector2D(this.x + vector.x, this.y + vector.y);
  }

  subtract(vector: Vector2D): Vector2D {
    return new Vector2D(this.x - vector.x, this.y - vector.y);
  }

  multiplyScalar(scalar: number): Vector2D {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  dot(vector: Vector2D): number {
    return this.x * vector.x + this.y * vector.y;
  }

  // ? cross product for 2d vectors is useless? https://www.quora.com/Can-you-cross-product-2D-vectors
  cross(vector: Vector2D): number {
    return this.x * vector.y - this.y * vector.x;
  }
}
