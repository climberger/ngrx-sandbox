import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {MyEntity} from '../models/my-entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private count = 0;

  constructor() { }

  addEntity(entityName: string): Observable<MyEntity> {
    this.count++;
    return of({id: this.count.toString(), name: entityName});
  }

}
