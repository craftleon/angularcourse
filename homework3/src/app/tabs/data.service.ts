import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

type toDoItem = {userId:string, id:string, title:string, completed:boolean};

@Injectable()
export class TodoDataService {
    private remoteTodoArray;
    private localTodoArray:toDoItem[] = []; //using Array<{userId:string, id:string, title:string, completed:boolean}> does not work in production
    
    constructor(private httpC:HttpClient, private storage: Storage) { }

    fetchRemoteTodoArray(array) {
        this.httpC.get('https://jsonplaceholder.typicode.com/todos').subscribe(
            data => {
                this.remoteTodoArray = data;
                array = data;
            },
            error => {
                alert(error);
            }
        );
    }

    getRemoteTodoArray() {
        return this.remoteTodoArray;
    }

    getLocalTodoArray() {
        return this.localTodoArray;
    }

    addLocalTodoArray(item:toDoItem) {
        let newItem = Object.assign({}, item);  // create new instance to push into array
        newItem.id = (this.localTodoArray.length + 1).toString();
        this.localTodoArray.push(newItem);
        this.saveLocalTodoArray();
        return this.localTodoArray;
    }

    resetLocalTodoArray() {
        this.localTodoArray = [];
        this.saveLocalTodoArray();
        return this.localTodoArray;
    }

    saveLocalTodoArray() {
        this.storage.set("localTodo", JSON.stringify(this.localTodoArray));
    }

    loadLocalTodoArray(array) {
        this.storage.get("localTodo").then(
            val => {
                array = JSON.parse(val);
                this.localTodoArray = array;
            }
        );
    }
}
