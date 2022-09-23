import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableModel } from '../ngid-table/model/table.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public tableModel: TableModel<any>

  private moduleCode = 'admin';
  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.buildTableModel
  }

  private buildTableModel(): void {
    this.tableModel = new TableModel(this.moduleCode, [
      {
        field: 'username',
        header: 'Username',
      },
      {
        field: 'firstname',
        header: 'firstname',
      },
      {
        field: 'lastname',
        header: 'lastname',
      },
      {
        field: 'basicsalary',
        header: 'basicsalary',
      },
      {
        field: 'status',
        header: 'status',
      },
      {
        field: 'description',
        header: 'description',
      },
      {
        field: 'birthdate',
        header: 'birthdate',
      },
    ]);
  }

  public handleView(record: any): void {
    console.log('INFO: Come from handleView');
    console.log(record);
  }

  public handleEdit(record: any): void {
    console.log('INFO: Come from handleEdit');
    console.log(record);
  }

  public handleDelete(record: any): void {
    console.log('INFO: Come from handleDelete');
    console.log(record);
  }

}
