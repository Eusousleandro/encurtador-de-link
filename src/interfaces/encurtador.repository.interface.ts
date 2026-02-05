import { EncurtadorEntity } from "../entities/encurtador.entity";

export interface IEncurtadorRepository {
    list(): Promise<EncurtadorEntity[]>; 
    listByShortUrl(shortUrl: string): Promise<EncurtadorEntity | null>;
    create(encurtador: EncurtadorEntity): Promise<EncurtadorEntity>;
    update(encurtador: EncurtadorEntity): Promise<EncurtadorEntity>;
    delete(id: string): Promise<void>;
}