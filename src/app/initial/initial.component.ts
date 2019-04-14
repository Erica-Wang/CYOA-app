import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor(private router: Router, private qs: QuestionService) { 
  }

  ngOnInit() {
  }

  enter(name){
  	this.qs.name = name;
  	this.router.navigate(['gender']);
  }

}
