import { Component, OnInit } from '@angular/core';
//To validate reactive forms import validators from @angular/forms
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reactiveForms';

  submitted =  false;
  //form group property
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    
    // new FormGroup constructor takes a Javascript Object as its argument
    //Create Form controls using key value pairs - the value is of FormControl type
    // Connect the form controls to the template by using form group directive
    // and assign the FormGroup property (reactiveForm) in the form tag
    // use the formControlName directive to assign the property name

    this.reactiveForm = new FormGroup({
      surname: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      repassword: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reactiveForm.invalid) {
      return;
    }
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
    this.submitted = false;
  }

  // onReset(){
  //   this.submitted = false;
  //   this.reactiveForm.reset();
  // }
}
