import { Injectable } from '@angular/core';
import {Board} from '../model/board';
import {Task} from '../model/task';
import {SubTask} from '../model/subtask';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  public Boards: Board[];

  constructor() { }

  public seedData() {
    const temptask: Task = new Task();
    const tempSubTask: SubTask =  new SubTask();
    const board: Board =  new Board();

    temptask.id = 1;
    temptask.title = 'Hello Task!!';
    temptask.taskheaderId = '1';

    tempSubTask.id = '1';
    tempSubTask.title = 'Hello Task Header!!';

    temptask.subtask = Array();
    temptask.subtask.push(tempSubTask);

    board.id = 1;
    board.title = 'Hello Seed Board';
    board.task = new Array();
    board.task.push(temptask);


    this.Boards = new Array();
    this.Boards.push(board);

    return board;

  }
}
