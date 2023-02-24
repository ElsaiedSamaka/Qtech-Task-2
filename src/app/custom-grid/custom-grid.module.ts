import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { CustomTableComponent } from './custom-table/custom-table.component';

@NgModule({
  declarations: [CustomTableComponent, CustomPaginationComponent],
  imports: [CommonModule],
  exports: [CustomTableComponent],
})
export class CustomGridModule {}
