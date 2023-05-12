import { Component } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
training=[{
  img:'../../assets/train.jpg',
  head:'Its Time to lice up',
},{
  img:'../../assets/blue.jpg',
  head:'power up your performance',
},{
  img:'../../assets/yoga.jpg',
  head:'stretch it out',
}]
}
