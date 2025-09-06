class StatisticService {
  quickselect(arr: number[], k: number): number {
    if (arr.length === 1) return arr[0];

    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const lows = arr.filter((x) => x < pivot);
    const highs = arr.filter((x) => x > pivot);
    const pivots = arr.filter((x) => x === pivot);

    if (k < lows.length) {
      return this.quickselect(lows, k);
    } else if (k < lows.length + pivots.length) {
      return pivot;
    } else {
      return this.quickselect(highs, k - lows.length - pivots.length);
    }
  }
  percentile(arr: number[], p: number): number {
    if (arr.length === 0) throw new Error('Array is empty');
    if (p < 0 || p > 100) throw new Error('Percentile should be from 0 to 100');

    const n = arr.length;
    const rank = (p / 100) * (n - 1);
    const lower = Math.floor(rank);
    const upper = Math.ceil(rank);

    const lowerValue = this.quickselect([...arr], lower);
    const upperValue = this.quickselect([...arr], upper);

    if (lower === upper) return lowerValue;

    const weight = rank - lower;
    return lowerValue * (1 - weight) + upperValue * weight;
  }
}

export const statisticService = new StatisticService();
