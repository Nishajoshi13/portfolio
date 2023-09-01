import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  myForm=new FormGroup({
    'name': new FormControl(null, Validators.required),
    // 'movies': new FormControl([], [Validators.required]),
    'email': new FormControl(null, Validators.required),
    'contactNo': new FormControl(null, Validators.required),
    'message': new FormControl(null),
  });

//   onSubmit(){
//     this.http.post(' https://regres.in/api/users',this.myForm.value)
//     .subscribe(responseData => {
//       console.log(responseData);
//     });
// }
scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  }

