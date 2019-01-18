import flow from "lodash/fp/flow"
import filter from "lodash/fp/filter"
import sortBy from "lodash/fp/sortBy"
import get from "lodash/fp/get"
import find from "lodash/fp/find"
import isEqual from "lodash/fp/isEqual"

const enclosingRectangles = (pos, rectangles) => {
  const [t, r, b, l] = pos
  return flow(
    filter(rec => !isEqual(rec, pos)),
    filter(([rt, rr, rb, rl]) => t >= rt && r <= rr && b <= rb && l >= rl),
    sortBy(([t, r, b, l]) => (r - l) * (b - t)),
  )(rectangles)
}

export const findClosestRectangle = (pos, rectangles) =>
  get([0], enclosingRectangles(pos, rectangles))


export const findClosestRectangle2 = (pos, rectangles) =>
  get([1], enclosingRectangles(pos, rectangles))

export const isEnclosing = (pos, rectangles) => {
  const [t, r, b, l] = pos
  const rcs = filter(r => !isEqual(r, pos), rectangles)
  return !!find(([rt, rr, rb, rl]) =>
    t >=  rt && r <= rr && b <= rb && l >= rl, rcs)
}
