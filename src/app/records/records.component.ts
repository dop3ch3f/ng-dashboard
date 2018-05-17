import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
}

@Component({
    selector: 'records-cmp',
    moduleId: module.id,
    templateUrl: 'records.component.html',
    styleUrls: ['records.component.css']
})

export class RecordsComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: any[];
    ngOnInit() {
        this.tableData1 = {
            headerRow: ['Status', 'Main Category', 'Sub Category', 'Brand', 'Item Name', 'Type', 'Initial Stock',
             'Current Stock', 'Price', 'Action'],
        };

        this.tableData2 = [
            {status: 'ti-face-smile icon-big icon-success', mc: 'Groceries', sc: 'Non-alcoholized Beverages', b: 'Peak',
             n: 'Peak Milk', t: 'Evaporated', is: 300 , cs: 100 , price: 1, id: '' },
            {status: 'ti-face-sad icon-big icon-warning', mc: 'Groceries', sc: 'Non-alcoholized Beverages', b: 'Nestle',
             n: 'Milo', t: '500g Pack', is: 150, cs: 30, price: 1.5, id: ''},
            {status: 'ti-face-sad icon-big icon-danger', mc: 'Groceries', sc: 'Non-alcoholized Beverages', b: 'Cad-bury',
             n: 'Bournvita', t: '500g Pack', is: 150, cs: 10, price: 2.0, id: ''}
        ];
    }
}
