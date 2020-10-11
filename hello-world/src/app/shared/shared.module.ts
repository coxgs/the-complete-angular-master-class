import { NgModule } from '@angular/core';

import { SummaryPipe } from '../summary.pipe';

@NgModule({
  declarations: [
    SummaryPipe
  ],
  exports: [
    SummaryPipe
  ]
})
export class SharedModule { }