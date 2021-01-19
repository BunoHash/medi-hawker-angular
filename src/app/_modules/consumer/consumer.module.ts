import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './consumer.route';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';




import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng';
import { ConsumerDashboardComponent } from './consumer-dashboard.component/dashboarddemo.component';



@NgModule({
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
    CardModule,
    InputTextModule,
    ListboxModule,
    DropdownModule,
    TableModule,
    SelectButtonModule,
    PanelModule,
    FileUploadModule,
    MessageModule,
    TabViewModule,
    AutoCompleteModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],

  declarations: [ConsumerDashboardComponent],
  providers:[],
  bootstrap: [ConsumerDashboardComponent]
})
export class ConsumerModule { 

  constructor(){
    console.log("Consumer Module initiated!");
  }
}
