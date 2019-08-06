import { IMapping } from './interfaces/mapping.interface';
import { IMappingItem } from './interfaces/mapping-item.interface';
import { MappingItem } from './mapping-item';

export abstract class Mapping<TSource> implements IMapping<TSource> {
    createMapTo<TDest>(source: new () => TSource, dest: new () => TDest): IMappingItem<TSource, TDest> {
        return new MappingItem<TSource, TDest>(source, dest);
    }
}