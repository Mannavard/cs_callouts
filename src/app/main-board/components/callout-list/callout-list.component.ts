import { Component } from '@angular/core';

import { CalloutItem } from '../../structures';
import { CALLOUT_LIST } from '../../types';


@Component({
  selector: 'callout-list',
  templateUrl: './callout-list.component.html',
  styleUrls: ['./callout-list.less']
})

export class CalloutListComponent {

  calloutList: Array<CalloutItem>;


  constructor() {
    this.calloutList = CALLOUT_LIST;
  }


  alertCallouts(item: CalloutItem) {
    alert(`Callout: ${item.name}`);
  }


  onMouseOver(event: any) {
    console.log(event);
  }

}
