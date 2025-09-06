class RandomNumberService {
  public generateDigits(n: number): number {
    if (n <= 0) throw new Error('Use the positive number');

    const min = 10 ** (n - 1);
    const max = 10 ** n - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export const randomNumberService = new RandomNumberService();
