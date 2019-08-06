import { Mapping } from "./mapping";
import { Map } from './map.decorator';


class Source {
    id: number;
    name: string;
    age: number;
}

class Dest {
    id: number;
    firstName: string;
    userAge: number;
}

class Dest1 {
    id: number;
    firstName: string;
    userage: number;
}

class SourceMapping extends Mapping<Source> {
    @Map() test = this.createMapTo<Dest>(Source, Dest)
        .forMember('userAge', p => p.age);

    @Map() test1 = this.createMapTo<Dest1>(Source, Dest1)
        .forMember('userage', d => d.age);
}