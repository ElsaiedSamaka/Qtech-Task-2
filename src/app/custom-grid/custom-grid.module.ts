import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { CustomTableComponent } from './custom-table/custom-table.component';

@NgModule({
  declarations: [CustomTableComponent, CustomPaginationComponent],
  imports: [CommonModule, FormsModule],
  exports: [CustomTableComponent],
})
export class CustomGridModule {}
