import { InjectionToken } from '@angular/core';
import { Mapping } from './mapping';

export const MAPPING_ITEM = new InjectionToken<Array<Mapping<any>>>('ngx-entity-mapper: Mapping Item');