class IdGenerator {
  private currentId: number;

  constructor(start: number = 0) {
    this.currentId = start;
  }

  public next(): number {
    return this.currentId++;
  }

  public reset(start: number = 0): void {
    this.currentId = start;
  }

  public peek(): number {
    return this.currentId;
  }
}

export const idGeneratorService = new IdGenerator(0);
