import { IMappingItem } from './interfaces/mapping-item.interface';

export class MappingItem<TSource, TDest> implements IMappingItem<TSource, TDest> {
    protected mappingCondition: { [key: string]: Function };

    constructor(source: new () => TSource, dest: new () => TDest) {
        const s = new source();
        const d = new dest();

        Object.keys(s)
            .forEach((sourceKey: string) => {
                if (d[sourceKey] !== undefined) {
                    this.forMember(sourceKey as keyof TDest, (p: any) => p[sourceKey]);
                }
            });
    }

    forMember<K extends keyof TDest>(destinationKey: K, targetPredicate: (destination: TSource) => any): IMappingItem<TSource, TDest> {
        this.mappingCondition[destinationKey as string] = targetPredicate;
        return this;
    }
}