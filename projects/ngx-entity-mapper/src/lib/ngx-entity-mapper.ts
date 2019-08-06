import { ModuleWithProviders, Type } from '@angular/core';
import { MAPPING_ITEM } from './ngx-entity-mapper.tokens';
import { NgxEntityMapperService } from './ngx-entity-mapper.service';
import { EntityMapperModule } from './ngx-entity-mapper.module';
import { Mapping } from './mapping';

export class NgxEntityMapperModule {
    static configure(config: Array<Mapping<any>>): ModuleWithProviders {
        return {
            ngModule: EntityMapperModule,
            providers: [
                NgxEntityMapperService,
                {
                    provide: MAPPING_ITEM,
                    useValue: config,
                },
            ]
        }
    }
}