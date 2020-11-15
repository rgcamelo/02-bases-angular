import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PosComponent } from './pos/pos.component';


@NgModule({
  declarations: [PostComponent, PosComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
