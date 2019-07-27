const MAX_CENT = 1e9

function toNumber(Value: { SumCOIN: number; SumCENT: number; }) {
  return (Value.SumCOIN * MAX_CENT + Value.SumCENT) / MAX_CENT;
}
export default {
  MAX_CENT,
  toNumber
}
