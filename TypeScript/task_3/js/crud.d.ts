import { RowID } from "./interface";
import { RowElement } from "./interface";

declare function insertRow(row: RowElement): number;

declare function deleteRow(rowId: RowID): void;

declare function updateRow(rowId: RowID, row: RowElement): RowID;

export { insertRow, deleteRow, updateRow };
