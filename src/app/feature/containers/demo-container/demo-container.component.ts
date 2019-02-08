import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {InsertValue} from '../../state-management/actions';
import {State} from '../../state-management/reducers';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss']
})
export class DemoContainerComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {

  }

  dispatch() {
    this.store.dispatch(new InsertValue('blumenkohl'));
  }

}
