import { dispatchTableAction } from './actions/dispatch-table.action';
import * as tableAction from './actions/table.action';
import { Table } from './domain/table';
import { TableModel } from './model/table.model';
export class NgidTableService {
  private state: Table;
  public setState(model: TableModel<any>, stringUrl: string): Table {
    this.state = Table.create(model, stringUrl);
    return this.state;
  }

  public dispatch(action: tableAction.AllTableAction): void {
    this.state.setStateLoading();
    dispatchTableAction(this.state, action);
  }
}
