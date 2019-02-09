import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyEntity} from '../../models/my-entity';

@Component({
  selector: 'app-my-entities',
  templateUrl: './my-entities.component.html',
  styleUrls: ['./my-entities.component.scss']
})
export class MyEntitiesComponent implements OnInit {

  @Input()
  myEntities: MyEntity[];

  @Output()
  addEntity: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  deleteEntity: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddEntity(entityName: string) {
    this.addEntity.emit(entityName);
  }

  onDeleteEntity(entityId: string) {
    this.deleteEntity.emit(entityId);
  }

}
