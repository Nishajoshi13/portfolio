import { Component } from '@angular/core';
import { trigger, transition, style, state,animate } from '@angular/animations';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css'],
  animations: [
    trigger('progressAnimation', [
      transition('* => *', [
        style({ width: '0%' }), // Initial style
        animate('2000ms ease-out', style('*')), // Animation to '100%'
      ]),
    ]),
  ,

    trigger('flip', [
      state('front', style({ transform: 'translateX(0)', opacity: 1 })),
      state('back', style({ transform: 'translateX(-100%)', opacity: 0 })),
      transition('front => back', [
       animate('1000ms')
  ]),
  transition('back => front', [
    animate('1000ms')
  ])
])
]
})

export class AboutComponent {
  skills =[
    { name:'HTML', level:70},
    { name:'CSS',  level:65},
    { name:'JavaScript',level:40},
    { name:'Angular',level:45},
  ]

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

}
