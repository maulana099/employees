import { TableColumnModel } from '../model/table-column.model';
import { TableRowModel } from '../model/table-row.model';
import { TableColumn } from './table-column';

export class TableRow {
  public columns: Array<TableColumn>;
  public position: number;
  constructor(public model: TableRowModel) {}
  public static create(model: TableRowModel, position: number): TableRow {
    const tableRow = new TableRow(model);
    tableRow.position = position;
    tableRow.columns = model.columns.map((column: TableColumnModel) =>
    TableColumn.create(column, model.record));
    return tableRow;   } }
