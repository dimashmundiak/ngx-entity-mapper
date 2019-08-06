import { IMappingItem } from './mapping-item.interface';

export interface IMapping<TSource> {
    createMapTo<TDest>(source: new () => TSource, dest: new () => TDest): IMappingItem<TSource, TDest>
}