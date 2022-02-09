import * as R from 'ramda'

export const evolveN = R.compose(
  R.partial(R.unapply(R.converge(R.merge)), [R.nthArg(1)]),
  R.applySpec,
)
