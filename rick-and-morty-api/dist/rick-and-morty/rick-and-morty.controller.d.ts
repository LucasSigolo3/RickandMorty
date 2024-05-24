import { RickAndMortyService } from './rick-and-morty.service';
import { Character } from './character.interface';
export declare class RickAndMortyController {
    private readonly rickAndMortyService;
    constructor(rickAndMortyService: RickAndMortyService);
    fetchAndSaveCharacter(id: number): Promise<Character>;
    findAll(): Promise<Character[]>;
}
