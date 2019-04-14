import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuestionService {

	uri = "http://localhost:4000/engisp";

  name = "";
	questionID = -1;
	gender = -1;

	questions = 
  	[
  		[
        "You hear rebels from the direction of your village. What do you do?", 
        "You escape into the woods and begin wondering. Food is running out and you are swallowed by hunger. On the left, you see a coconut tree that is too high for you to climb; on your right, there is a main road. Which way do you go?",
        "Miraculously, you manage to climb the tree. While your friends and you enjoy the coconuts, a local villager captures you. He is convinced that you and your friends are rebel soldiers looting the area. Which object do you present to convince him that you are not a rebel?",
        "The village leader lets you go and provides you with some necessities. You meet your former neighbour on a road. To your excitement, he knows where you parents are and agree to take you there. When you are almost there, you see that rebels have invaded the village. What do you do?",
        "After the rebels leave, you enter the city only to find that your parents have been killed. You mourn but have no choice but to move onto the next village. Unfortunately, rebels have taken over that village and asks you if you want to become a soldier. What do you say?",
        "After becoming proficient in shooting, you enter your first village-looting mission. While ravaging through villagers' possession, a child appear on the street. The commander orders you to shoot him. What do you to?",
        "After two years being in the rebel army, you get sent on a bus that landed in a rehabilitation centre in Freetown. You began having nightmares about drug-induced killing sprees. Just as you begin to move past that chapter of your life, you receive and invitation to travel to the US to recount your story. Do you accept it?",
        "After the interview, you return to Sierra Leone to live with your remaining family in Freetown. A few weeks later, rebels take over Freetown and life inside the city becomes extremely dangerous. What do you do?",
        "You hear from your previous interviewer who invites you to go live with her family in the US.  You manage to escape from the rebels to get on a bus to Guinea, where the flight will take off. On the border, the bus gets checked by an official who announces that all those who don't have the necessary documents must now reveal themselves. If you do, you get to stay here; if you get caught, you will get sent back to Freetown where rebels have taken over. What do you do?"
      ],
      [
        "You see a soldier standing at the entrance of the village, staring directly at you. He orders you to go towards him. Do you obey or run away?",
        "He ties you up and proceeds to kill your neighbours one by one. After shooting your little cousin in front of you, he asks if you like what you see. What do you say?",
        "He nods in satisfaction and tells you to help out with the girls in the rebel camp. A few days later, you see an opportunity to escape and decide to take it. Just as you are about to escape, a soldier spots you and orders you to stop. What do you do?",
        "A boy soldier about your age uses a machete to cut off both your hands and left you to die on the ground. You wake up hungry, weak, and most importantly, lost as to where the hospital is. After a few hours of walking, you see a man in uniform nearby. What do you do?",
        "Luckily, he is not a rebel. You receive direction to the nearest hospital and proceed towards that direction. When you ask for assistance at a village near the hospital, two women harshly tells you to get lost, thinking you are rebels' bait. What do you do?",
        "You faint and wake up to the two women helping you towards the hospital. After medical treatment, you get sent to the amputees' camp in Freetown. You soon learn that you are pregnant with a child of a rapist. You hate the unborn child but the only abortion option is extremely unsafe. What do you do?",
        "The food portion decreases again after you give birth. Both you and your baby is starving. When your uncle brings over the last portion of rice, who should eat it?",
        "Your child dies of malnutrition a few days later which becomes a permanent trauma. Some children in the amputees' camp began begging for additional money but you find it distasteful. Do you join them?",
        "While begging, you meet a news reporter who provides you with an opportunity to travel to Canada. You think your friend may be more qualified for the requirements. Do you tell her?"
      ]
  	];


  choices = 
    [
      [
        [
          "Go towards the village to find you parents",
          "Coconut Tree",
          "Remaining money",
          "Rush over to save your parents",
          "Yes",
          "Shoot the child",
          "Yes",
          "Stay in Freetown",
          "Stand up",
        ],
        [
          "Run away",
          "Road",
          "Rap cassette tapes",
          "Hide to protect yourself",
          "No",
          "Ignore the order",
          "No",
          "Go to countryside with your uncle",
          "Stay seated",
        ]
      ],
      [
        [
          "Obey",
          "Yes",
          "Keep running",
          "Approach him",
          "Continue begging",
          "Have the child",
          "You",
          "Yes",
          "Yes",
        ],
        [
          "Run away",
          "No",
          "Stop",
          "Walk away",
          "Walk away",
          "Perform abortion",
          "Your child",
          "No",
          "No",
        ]
      ]
    ];
  
  endIndex = 
    [
      [0,1,0,0,1,1,1,1,0],
      [1,1,0,1,1,1,1,1,0]
    ];
  
  results = 
    [
      [
        "You enter the village and see burning houses and rebels capturing your neighbours. They lock you and your parents inside a house and set it on fire.",
        "You walk onto the main road and immediately face a rebel soldier. As you begin to run away, he shoots you from the back.",
        "The villager scoffs and claims that you stole it from nearby villages. He ties you up and sends you to his leader who orders your execution by stone.",
        "You rush into the village and manage to find your parents hiding behind a building. Before you have a chance to hug your mother, rebels capture you and your parents. They proceed to lock you inside a house with many others and set it on fire.",
        "The soldier shoots you without hesitation.",
        "The commander waits for you to take action. After a few seconds, he walks over, shoots the child, then shoots you.",
        "After a few months, you exit the rehabilitation centre and moves in with your uncle's family. As Freetown soon gets invaded by the rebel, you escape with them to another village.",
        "You leave with your uncle's family and settled down in a small village with his family. You soon get married and become the breadwinner of the family.",
        "You stand up and exit the bus, which quickly disappears into the woods. You enter the woods once again and eventually settle down in a small village on the border.",
        "You keep your head down and the official walk by you without raising suspicion. A day later, you hop on a plane headed for United States of America... THE END"
      ],
      [
        "The soldier shoots you from the back. You die while seeing you home burn to the ground.",
        "He shakes his head disapprovingly and another soldiers proceeds to shoot you.",
        "A boy soldier about your age catches up to you and kills you with a machete.",
        "You wonder around in the forest for another day. Your wound becomes terribly infected and you die painfully in the bushes.",
        "After another day of walking, you die of malnutrition and wound infection.",
        "Unsanitary equipment combined with the previous performance of female genital mutilation caused you to die painfully on the operation table.",
        "A few days later, you die of malnutrition with you child in your arms.",
        "You become weaker everyday as food portions drop. Before you find another relative who could support you, you die of malnutrition.",
        "Your friend qualifies for the opportunity and soon leaves Sierra Leone on a flight. You eventually get released from the camp with your friends and go on another journey to find a means of survival.",
        "You soon confirm to travel to Canada and there, you will receive a formal education."
      ]
    ];

  	

  isAlive = 
    [7,9];
  alive = false;

  constructor(private http: HttpClient) { }

  back(){

    if (this.questionID>=this.isAlive[this.gender]){
      this.alive = true;
    }else{
      this.alive = false;
    }

    var genderString = "";
    if(this.gender==0){
      genderString = "Boy";
    }else{
      genderString = "Girl";
    }

    const obj = {
      name: this.name,
      gender: genderString,
      failed_question: this.questionID,
      is_alive: this.alive
    };
    console.log(obj);
    this.http.post(`${this.uri}/finish`, obj).subscribe(res => console.log('Done'));
  }
}
