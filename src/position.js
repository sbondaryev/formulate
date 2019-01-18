import flow from "lodash/fp/flow"
import filter from "lodash/fp/filter"
import sortBy from "lodash/fp/sortBy"
import first from "lodash/fp/first"

export const findClosestRectangle = (pos, rectangles) => {
  const [t, r, b, l] = pos
  return flow(
    filter(rec => rec != pos),
    filter(([rt, rr, rb, rl]) => t >= rt && r <= rr && b <= rb && l >= rl),
    sortBy(([r, l, b, t]) => (r - l) * (b - t)),
    first
  )(rectangles)
}
