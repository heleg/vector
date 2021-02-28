import Vector3D from "../vector3D";

describe("Vector3D", () => {
  test("length", () => {
    const vector = new Vector3D(3, 2, 6);
    expect(vector.magnitude()).toBe(7);
  });

  test("add", () => {
    const vector1 = new Vector3D(3, 2, 6);
    const vector2 = new Vector3D(7, 4, 8);
    const expected = new Vector3D(10, 6, 14);
    expect(vector1.add(vector2)).toEqual(expected);
  });

  test("subtract", () => {
    const vector1 = new Vector3D(3, 2, 6);
    const vector2 = new Vector3D(7, 4, 8);
    const expected = new Vector3D(-4, -2, -2);
    expect(vector1.subtract(vector2)).toEqual(expected);
  });

  test("multiplyScalar", () => {
    const vector = new Vector3D(3, 2, 6);
    expect(vector.multiplyScalar(4)).toEqual(new Vector3D(12, 8, 24));
  });

  test("dot", () => {
    const vector1 = new Vector3D(3, 2, 6);
    const vector2 = new Vector3D(7, 4, 8);
    expect(vector1.dot(vector2)).toEqual(77);
  });

  test("cross", () => {
    const vector1 = new Vector3D(3, 2, 6);
    const vector2 = new Vector3D(7, 4, 8);
    const expected = new Vector3D(-8, 18, -2);
    expect(vector1.cross(vector2)).toEqual(expected);
  });
});
