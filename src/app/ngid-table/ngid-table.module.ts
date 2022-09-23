import { NgModule } from '@angular/core';
import { DefaultModule } from './component/default/default.module';
import { SimplrTableModule } from './component/simplr-table/simplr-table.module';

@NgModule({
  imports: [SimplrTableModule, DefaultModule],
  exports: [SimplrTableModule, DefaultModule],
})
export class NgidTableModule {}
