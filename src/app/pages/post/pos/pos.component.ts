import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPost.emit( this.mensaje.id);
  }

}
