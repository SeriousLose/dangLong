import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attractions-evaluation',
  templateUrl: './attractions-evaluation.component.html',
  styleUrls: ['./attractions-evaluation.component.less']
})
export class AttractionsEvaluationComponent implements OnInit {
  edit: any=``;
  public list=[];
  constructor() { }

  ngOnInit() {
  }

  addedit(){
    this.list.push(this.edit)
  }
}
