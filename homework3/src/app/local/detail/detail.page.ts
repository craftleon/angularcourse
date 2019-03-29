import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoDataService } from '../../tabs/data.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public todoItem = {userId:'', id:'', title:'', completed:false};
  constructor(private dataService:TodoDataService, private route:ActivatedRoute) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id;
    let array = [];
    this.route.params.forEach((params: Params) => {
      id = params['id'];
    });
    array = this.dataService.getLocalTodoArray();
    this.todoItem = array[id - 1];
  }
}
