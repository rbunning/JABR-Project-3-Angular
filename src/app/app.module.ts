import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserService } from './login/user.service';
import { BoardsService } from './boards/boards.service';
import { NavbarService } from './navbar/navbar.service';

import { ScrumHomeComponent } from './scrum-home/scrum-home.component';
import { TaskComponent } from './task/task.component';
import { CreateStoryComponent } from './create-story/create-story.component';

import { HomeComponent } from './home/home.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';

import { TaskService } from './task/task.service';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { CreateStoryService } from './create-story/create-story.service';

import { AddBoardComponent } from './add-board/add-board.component';
import { OrderByPipe } from './boards/order-by.pipe';
import { SwimlaneComponent } from './swimlane/swimlane.component';
import { SwimlaneService } from './swimlane/swimlane.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'task', component: TaskComponent},
  { path: 'scrum-home', redirectTo: 'boards', pathMatch: 'full'},
  { path: 'home', redirectTo: 'boards', pathMatch: 'full'},
  { path: 'boards', component: BoardsComponent},

  { path: 'add-board', component: AddBoardComponent},
  { path: 'detail/:id', component: BoardDetailComponent},

  { path: 'chart', component: ChartComponent},
  { path: 'add-story', component: CreateStoryComponent},
  { path: 'boards', component: BoardsComponent},
  { path: 'add-board', component: AddBoardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ScrumHomeComponent,
    TaskComponent,
    HomeComponent,
    BoardsComponent,
    BoardDetailComponent,
    ChartComponent,
    CreateStoryComponent,
    AddBoardComponent,
    OrderByPipe,
    SwimlaneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [DatePipe, UserService, BoardsService, SwimlaneService, NavbarService, TaskService, CreateStoryService],

  bootstrap: [AppComponent]
})
export class AppModule { }
