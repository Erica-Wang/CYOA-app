import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

	public results;

	public gender;
	public questionID;

  constructor(private qs: QuestionService, private router: Router) { }

  ngOnInit() {

  	this.results = this.qs.results;

  	this.gender = this.qs.gender;
  	this.questionID = this.qs.questionID;
  }

  back(){
  	this.router.navigate(['gender']);
  }

}
