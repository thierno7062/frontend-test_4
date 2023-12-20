import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  formData = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    age:  '',
  }

  constructor(private http: HttpClient,) { }

  ngOnInit() {
  }

  create(){
    console.log(this.formData);
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    // ----------------------
     axios.post('http://localhost/students.php', this.formData)
     .then(
      (response:any)=>{
        console.log(response);
      })
      .catch((error:any)=>{
        console.log(error);
      })
  }

   //load API
   refreshPerson(formData:any){
    // this.loadingService.presentLoading();
    // this.readAPI('http://localhost/students.php', this.formData)
    // .subscribe((listes) =>{
      // this.loadingService.dismiss();
      // console.log(Listes);

      // this.loadingService.dismiss();
    // });
  }

  readAPI(url: string){
    return this.http.get(url);

  }
  async getData() {

  }

}
