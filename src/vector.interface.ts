export default interface Vector<T> {
  magnitude(): number;

  add(vector: T): T;

  subtract(vector: T): T;

  multiplyScalar(scalar: number): T;

  dot(vector: T): number;
}
