import Vector2D from "../vector2D";

describe("Vector2D", () => {
  test("length", () => {
    const vector = new Vector2D(6, 8);
    expect(vector.magnitude()).toBe(10);
  });

  test("add", () => {
    const vector1 = new Vector2D(6, 8);
    const vector2 = new Vector2D(18, 2);
    const expected = new Vector2D(24, 10);
    expect(vector1.add(vector2)).toEqual(expected);
  });

  test("subtract", () => {
    const vector1 = new Vector2D(6, 8);
    const vector2 = new Vector2D(18, 2);
    const expected = new Vector2D(-12, 6);
    expect(vector1.subtract(vector2)).toEqual(expected);
  });

  test("multiplyScalar", () => {
    const vector = new Vector2D(6, 8);
    expect(vector.multiplyScalar(4)).toEqual(new Vector2D(24, 32));
  });

  test("dot", () => {
    const vector1 = new Vector2D(6, 8);
    const vector2 = new Vector2D(18, 2);
    expect(vector1.dot(vector2)).toEqual(124);
  });

  test("cross", () => {
    const vector1 = new Vector2D(6, 8);
    const vector2 = new Vector2D(18, 2);
    expect(vector1.cross(vector2)).toEqual(-132);
  });
});
