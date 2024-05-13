import { Injectable } from '@angular/core';
import { IVirtualDatabase } from '../interfaces/ivirtual-database.interface';
import { VirtualDatabase } from '../models/virtual-database.model';
import { SessionService } from './session.service';
import { IDictionary } from '../interfaces/idictionary.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

    private db: IVirtualDatabase = new VirtualDatabase();

    public readonly database: IVirtualDatabase = this.db;

    constructor(private sessionService: SessionService) {
        /* VERIFY IF DATABASE IS INTO THE BROWSER SESSION */
        const databaseInSession = this.sessionService.getItem("database");
        if (databaseInSession){      
            this.database = databaseInSession;
        }

    }

    /* DATABASE :: SAVE */
    saveDatabase(): void {
        this.sessionService.setItem("database",this.db);
    }

    /* DATABASE :: DOWNLOAD */

    private saveText(text: string, filename: string): void {
        var a = document.createElement('a');
        a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
        a.setAttribute('download', filename);
        a.click()
    }

    public downloadDatabase(): void {
        this.saveText( JSON.stringify(this.db), "lab-webapp-pwa-base.andremesquita.com.json");
    }

    /* DATABASE :: LOAD */

    uploadDatabase(file: File) {    
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            const conteudo = fileReader.result as string;
            this.db = JSON.parse(conteudo?.toString());
            this.saveDatabase();
            console.log('database uploaded');
            window.location.href = window.location.href;
        }
        fileReader.readAsText(file);
    }

    /* DATABASE :: CRUD */

    insert(obj: any) {
        if (obj && typeof(obj) === typeof(this.db.table)) {
            this.db.table.push(obj);
            this.saveDatabase();
        }
    }

    update(obj: any) {
        if (obj && typeof(obj) === typeof(this.db.table)) {
            this.db.table.forEach( (item: IDictionary, index) => {
                this.db.table[index] = item;
                if (item.id === obj.id) {
                    //item = obj;
                    this.db.table[index] = item;
                    this.saveDatabase();
                }
            });
        }
    }

    delete(obj: any) {
        if (obj && typeof(obj) === typeof(this.db.table)) {
            const index = this.db.table.findIndex(i=> i.id == obj.id );
            const deleted = this.db.table.splice(index,1);
            this.saveDatabase();
        }
    }

    



}