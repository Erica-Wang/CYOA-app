import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

	uri = 'http://localhost:4000';

	questionID = -1;
	gender = -1;

	questions = 
  	[
  		['question1','question2'],
  		['question2']
  	];
  	
  choices = 
  	[
  		[
  			['q1choice1','q2choice1'],
  			['q1choice2','q2choice2']
  		]
  	];
  endIndex = 
		[
			[1,0],
			[0,1]
		];
	results = 
  	[
  		['result1','result2'],
  		[]
  	]

  constructor(private http: HttpClient) { 

  }

  back(){
  }
}
