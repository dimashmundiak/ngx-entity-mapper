export interface IMappingItem<TSource, TDest> {
    forMember<K extends keyof TDest>(destinationKey: K, targetPredicate: (destination: TSource) => any): IMappingItem<TSource, TDest>;
}