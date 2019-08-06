import { Injectable, Inject, Type, Optional } from '@angular/core';
import { MAPPING_ITEM } from './ngx-entity-mapper.tokens';
import { Mapping } from './mapping';

@Injectable()
export class NgxEntityMapperService {
    constructor(
        @Inject(MAPPING_ITEM) mappings: Array<Mapping<any, any>>,
    ) { }
}
