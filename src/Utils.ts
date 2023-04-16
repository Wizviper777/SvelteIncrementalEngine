export function canAfford(amount: number, cost: number) {
  return amount >= cost;
}

export function spend(amount: number, cost: number) {
    return amount - cost;
}

export function format(number: number) {
  return Math.trunc(number)
}
