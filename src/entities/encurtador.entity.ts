import { IEncurtador } from "../interfaces/encurtador.intercafes";

export abstract class EncurtadorEntity {
    private encurtador: IEncurtador;
    private constructor(originalUrl: string, shortUrl: string, accessCount: number) {
        this.encurtador = { originalUrl, shortUrl, accessCount };
    }

    public get OriginalUrl(): string {
        return this.encurtador.originalUrl;
    }

    public get ShortUrl(): string {
        return this.encurtador.shortUrl;
    }

    public get AccessCount(): number {
        return this.encurtador.accessCount;
    }

    public incrementAccessCount(): void {
        this.encurtador.accessCount++;
    }

    public decrementAccessCount(): void {
        if (this.encurtador.accessCount > 0) {
            this.encurtador.accessCount--;
        }
    }
}