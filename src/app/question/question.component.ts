import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

	public questions;
	public choices;
	public endIndex;

	public gender;
	public questionID;

  constructor(private qs: QuestionService, private router: Router) {}

  ngOnInit() {

  	this.questions = this.qs.questions;
  	this.choices = this.qs.choices;
  	this.endIndex = this.qs.endIndex;

  	console.log('question component init');
  	this.gender = this.qs.gender;
  	this.questionID = this.qs.questionID;

  }

  next(index){
  	console.log('next',index,this.questionID);
  	if(index==this.endIndex[this.gender][this.questionID]){
      this.router.navigate(['final']);
      console.log('a');
      this.qs.questionID = this.questionID;
  	}else if(this.questionID==8){
      this.qs.questionID = 9;
      this.router.navigate(['final']);
      console.log('b');
    }
    else{
      this.questionID++;
      console.log('c');
  	}
  }

}
