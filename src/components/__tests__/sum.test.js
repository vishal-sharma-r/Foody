// First test case
/* 
 Syntax: test("funcName",function)


*/

import { sum } from "../sum";

test("Check sum of 2 pos number", () => {
  expect(sum(2, 5)).toBe(7);
});
