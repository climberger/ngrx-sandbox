import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {MyEntity} from '../../models/my-entity';
import {State} from '../../state-management/reducers';

import * as myEntitiesSelectors from '../../state-management/selectors/my-entities.selectors';
import * as myEntitiesActions from '../../state-management/actions/my-entities.actions';
import {EntityService} from '../../services/entity.service';

@Component({
  selector: 'app-my-entities-container',
  templateUrl: './my-entities-container.component.html',
  styleUrls: ['./my-entities-container.component.scss']
})
export class MyEntitiesContainerComponent implements OnInit {

  myEntities$: Observable<MyEntity[]>;

  constructor(private store: Store<State>,
              private entityService: EntityService) { }

  ngOnInit() {
    this.myEntities$ = this.store.select(myEntitiesSelectors.getAllEntities);
    // dispatch load entites
  }

  // TODO: move service call in an extra effect
  onAddEntity(entityName: string) {
    this.entityService.addEntity(entityName)
      .subscribe((createdEntity) => this.store.dispatch(new myEntitiesActions.AddEntity(createdEntity)));
  }

  onDeleteEntity(entityId: string) {
    this.store.dispatch(new myEntitiesActions.DeleteEntity(entityId));
  }

}
