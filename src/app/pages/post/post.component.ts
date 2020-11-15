import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  mensajes: any

  constructor( private DataService: DataService) { }

  ngOnInit(): void {
    this.mensajes = this.DataService.getpost()



    /*.subscribe( (posts:any[]) =>{
      console.log(posts)
      this.mensajes = posts
    });*/
  }

  escuchaClick(id:number){
    console.log('Click en:', id);
  }

}
