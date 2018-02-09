import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns = ['order', 'name', 'checked'];
  taskList = [
    { order: 1, name: 'test', checked: false },
    { order: 1, name: 'test', checked: false },
    { order: 1, name: 'test', checked: false },
    { order: 1, name: 'test', checked: false },
    { order: 1, name: 'test', checked: false },
    { order: 1, name: 'test', checked: false },
    { order: 1, name: 'test', checked: false },
    { order: 1, name: 'test', checked: false },
  ];
  constructor() { }

  ngOnInit() {
  }

}
