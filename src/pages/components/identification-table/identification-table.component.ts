import { Component } from '@angular/core';

@Component({
  selector: 'app-identification-table',
  templateUrl: './identification-table.component.html',
  styleUrls: ['./identification-table.component.scss']
})

// This component consists of creating a table of identification
// and filling it with the data sent from the identification component.
export class IdentificationTableComponent {


  columns: any[] = [ 'code','name', 'sugefCode'];
  dataSource: any[] = [];
  

  onGetIdentification(data: any[]) {
    this.dataSource = data;
   
  }
  
}
