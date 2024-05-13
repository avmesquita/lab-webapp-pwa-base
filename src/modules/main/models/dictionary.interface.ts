import { v4 as uuidv4 } from 'uuid';

import { IDictionary } from "../interfaces/idictionary.interface";

export class Dictionary implements IDictionary {
    id: string;
    name: string;
    value: string;
    date: Date;
    obj?: any;

    constructor() {
        this.id = uuidv4;
        this.name = '';
        this.value = '';
        this.date = new Date();
        //this.obj
    }
}