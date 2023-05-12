import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperComponent } from './upper/upper.component';
import { CardComponent } from './card/card.component';
import { LoopComponent } from './loop/loop.component';
import { KarinaComponent } from './karina/karina.component';
import { WorkoutComponent } from './workout/workout.component';
import { WhiteComponent } from './white/white.component';
import { FourComponent } from './four/four.component';
import { TopComponent } from './top/top.component';
import { YellowComponent } from './yellow/yellow.component';
import { VideoComponent } from './video/video.component';
import { FerrariComponent } from './ferrari/ferrari.component';
import { Card2Component } from './card2/card2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    CardComponent,
    LoopComponent,
    KarinaComponent,
    WorkoutComponent,
    WhiteComponent,
    FourComponent,
    TopComponent,
    YellowComponent,
    VideoComponent,
    FerrariComponent,
    Card2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
