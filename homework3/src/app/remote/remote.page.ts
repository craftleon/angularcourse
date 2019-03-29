import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../tabs/data.service'

@Component({
  selector: 'app-remote',
  templateUrl: './remote.page.html',
  styleUrls: ['./remote.page.scss'],
})
export class RemotePage implements OnInit {
  todoData:{userId:string, id:string, title:string, completed:boolean}[] = [];
  constructor(private dataSevice:TodoDataService, private route:Router) { }

  ngOnInit() {
    this.dataSevice.fetchRemoteTodoArray(this.todoData);
  }

  ionViewWillEnter() {
    this.todoData = this.dataSevice.getRemoteTodoArray();
  }

  navigateDetails(id:string) {
    this.route.navigateByUrl('tabs/remote/' + id + '/details');
  }

}
