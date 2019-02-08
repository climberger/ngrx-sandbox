import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {InsertValue} from '../../state-management/actions';
import {State} from '../../state-management/reducers';
import {Observable} from 'rxjs';

import * as demoSelectors from '../../state-management/selectors/demo.selectors';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss']
})
export class DemoContainerComponent implements OnInit {

  demoValue$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.demoValue$ = this.store.select(demoSelectors.getDemoValue);
  }

  onDispatch(demoValue: string) {
    this.store.dispatch(new InsertValue(demoValue));
  }

}
