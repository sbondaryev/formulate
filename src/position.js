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

export const  rectanglesInRectangleAll = (pos, rectangles) => {
  const [t, r, b, l] = pos
  return flow(
    filter(rec => !isEqual(rec, pos)),
    filter(([rt, rr, rb, rl]) => t <= rt && r >= rr && b >= rb && l <= rl)
  )(rectangles)
}

export const  rectanglesInRectangle = (pos, rectangles) => {
  const rcs = rectanglesInRectangleAll(pos, rectangles)
  return filter(r => !isEnclosing(r, rcs), rcs)
}

export const firstInRectangle = (pos, rectangles) => {
  const rects = rectanglesInRectangle(pos, rectangles)
  return flow(
    sortBy(([t]) => t),
    sortBy(([t, r, b, l]) => l),
    get([0])
  )(rects)
}


export const lastInRectangle = (pos, rectangles) => {
  const rects = rectanglesInRectangle(pos, rectangles)
  return flow(
    rectanglesInRectangle(pos),
    sortBy(([t]) => -t),
    sortBy(([t, r]) => r),
    get([0])
  )(rects)
}

export const firstRight = (pos, rectangles) => {
  const [t, r, b, l] = pos
  return flow(
    filter(rec => !isEqual(rec, pos)),
    filter(([rt, rr, rb, rl]) => rl >= r &&  rb >= t &&  rt <= b),
    sortBy(([t]) => t),
    sortBy(([t, r]) => r),
    get([0])
  )(rectangles)
}

export const firstLeft = (pos, rectangles) => {
  const [t, r, b, l] = pos
  return flow(
    filter(rec => !isEqual(rec, pos)),
    filter(([rt, rr, rb, rl]) =>  rr <= l && rb >= t && rt <= b),
    sortBy(([t]) => t),
    sortBy(([t, r]) => -r),
    get([0])
  )(rectangles)
}

export const firstBottom = (pos, rectangles) => {
  const [t, r, b, l] = pos
  return flow(
    filter(rec => !isEqual(rec, pos)),
    filter(([rt]) =>  rt > t),
    sortBy(([t]) => t),
    sortBy(([t, r]) => r),
    get([0])
  )(rectangles)
}

export const firstTop = (pos, rectangles) => {
  const [t, r, b, l] = pos
  return flow(
    filter(rec => !isEqual(rec, pos)),
    filter(([rt, rr, rb]) =>  rb < b),
    sortBy(([t]) => t),
    sortBy(([t, r]) => -r),
    get([0])
  )(rectangles)
}

export const distance = (x1, y1, x2, y2) => {
  const x = x2 - x1
  const y = y2 - y1
  return Math.sqrt(x*x+y*y)
}

export const closestTopR = (pos, rectangles) => {
  const [t, r, b, l] = pos
  const y = (t + b) / 2
  const x = (r + l) / 2
  return flow(
    filter(([rt, rr, rb, rl]) => t > rt && b > rb),
    sortBy(([rt, rr, rb, rl]) => distance(x, y, rr, rb)),
    get([0])
  )(rectangles)
}

export const closestTopL = (pos, rectangles) => {
  const [t, r, b, l] = pos
  const y = (t + b) / 2
  const x = (r + l) / 2
  return flow(
    filter(([rt, rr, rb, rl]) => t > rt && b > rb),
    sortBy(([rt, rr, rb, rl]) => distance(x, y, rl, rb)),
    get([0])
  )(rectangles)
}


export const closestTop = (pos, rectangles) => {
  const [t, r, b, l] = pos
  const y = (t + b) / 2
  const x = (r + l) / 2
  const recl = closestTopL(pos, rectangles)
  const recr = closestTopR(pos, rectangles)
  const [recl_t, recl_r, recl_b, recl_l] = recl
  const [recr_t, recr_r, recr_b, rect_l] = recr

  return distance(x, y, recl_l, recl_b) < distance(x, y, recr_r, recr_b)
    ? [recl, 'left']
    : [recr, 'right']
}

export const closestBottomR = (pos, rectangles) => {
  const [t, r, b, l] = pos
  const y = (t + b) / 2
  const x = (r + l) / 2
  return flow(
    filter(([rt, rr, rb, rl]) => t < rt && b < rb),
    sortBy(([rt, rr, rb, rl]) => distance(x, y, rr, rb)),
    get([0])
  )(rectangles)
}
