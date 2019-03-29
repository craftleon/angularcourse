import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../tabs/data.service'

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
  todoData:{userId:string, id:string, title:string, completed:boolean}[] = [];
  todoItem = {userId:'', id:'', title:'', completed:false};

  constructor(private dataSevice:TodoDataService, private route:Router) { }

  ngOnInit() {
    this.dataSevice.loadLocalTodoArray(this.todoData);
  }

  ionViewWillEnter() {
    this.todoData = this.dataSevice.getLocalTodoArray();
  }

  navigateDetails(id:string) {
    this.route.navigateByUrl('tabs/local/' + id + '/details');
  }

  addTodoItem() {
    this.todoData = this.dataSevice.addLocalTodoArray(this.todoItem);
  }

  clearTodoItem() {
    this.todoData = this.dataSevice.resetLocalTodoArray();
  }
}
