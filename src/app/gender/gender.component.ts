import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

	constructor(private route: ActivatedRoute,
							private router: Router,
							private qs: QuestionService){}

	toQuestion(gender){
		console.log('toquestion');
		this.qs.gender = gender;
		this.qs.questionID = 0;
		this.router.navigate(['question']);
	}

  ngOnInit() {
  }

}
