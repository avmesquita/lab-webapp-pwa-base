import { IDictionary } from "../interfaces/idictionary.interface";
import { IVirtualDatabase } from "../interfaces/ivirtual-database.interface";

export class VirtualDatabase implements IVirtualDatabase {

    table: IDictionary[];

    constructor() {
        this.table = [];
    }
        
}