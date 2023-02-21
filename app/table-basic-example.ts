import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {
  ngOnInit(): void {
    this.displayedColumns22 = this.heads.map((item) => {
      return item.name;
    });

    this.heads22 = this.heads.reduce((acc, obj) => {
      const field = obj.parentLable;

      //const name = obj.name;
      // acc[obj.label] = acc[obj.label];
      acc[field] = (acc[field] || 0) + 1;
      //console.log(acc);
      //acc['fff'] = (acc[field] || 0) + 1;
      //acc[name] = acc[name];

      return acc;
    }, {});
    console.log('heads22', this.heads22);

    const headsByOrder = Array.from(
      new Set(this.heads.map((item) => item.parentLable))
    );
    //.map(name => this.heads.find(item => item.parentLable === name));
    console.log('headsByOrder=', headsByOrder);
    //const nnn
    // this.heads33 = headsByOrder.map((item) => {
    //   return { label: item, cols: +this.heads22[item] };
    // });
    // console.log('nnn=', nnn);
    //console.log('heads33', this.heads33);
    this.heads33a = headsByOrder.map((item) => {
      return {
        label: item,
        cols: +this.heads22[item],
        rowspan: this.heads.find(({ parentLable }) => parentLable === item)
          .rowspan,
      };
    });
    // console.log('nnn=', nnn);
    console.log('heads33a', this.heads33a);

    this.heads44 = headsByOrder.map((item) => {
      return item;
    });

    console.log('heads22= ', this.heads22);
    console.table(this.heads22);
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns22: string[] = [];
  dataSource = ELEMENT_DATA;

  //heads22a = {};
  heads22 = {};
  //heads33 = [];
  heads33a = [];
  heads44 = [];
  heads = [
    {
      name: 'position',
      rowspan: 2,
      label: 'NO',
      parentLable: 'NO',
    },
    {
      name: 'name',
      rowspan: 1,
      label: 'Name',
      parentLable: 'Second group',
    },
    {
      name: 'weight',
      rowspan: 1,
      label: 'Weight',
      parentLable: 'Second group',
    },
    {
      name: 'symbol',
      label: 'Symbol',
      rowspan: 2,
      parentLable: 'SYMBOL',
    },
  ];
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
