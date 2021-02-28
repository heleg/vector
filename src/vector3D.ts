import Vector from "./vector.interface";

export default class Vector3D implements Vector<Vector3D> {
  constructor(readonly x: number, readonly y: number, readonly z: number) {}

  magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  add(vector: Vector3D): Vector3D {
    return new Vector3D(
      this.x + vector.x,
      this.y + vector.y,
      this.z + vector.z
    );
  }

  subtract(vector: Vector3D): Vector3D {
    return new Vector3D(
      this.x - vector.x,
      this.y - vector.y,
      this.z - vector.z
    );
  }

  multiplyScalar(scalar: number): Vector3D {
    return new Vector3D(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  dot(vector: Vector3D): number {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  cross(vector: Vector3D): Vector3D {
    return new Vector3D(
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x
    );
  }
}
