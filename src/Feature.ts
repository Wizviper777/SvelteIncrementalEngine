export abstract class Feature {
    abstract saveKey: string;
    abstract data: any
    update(deltaT: number): void {}
    reset(): void {}
}