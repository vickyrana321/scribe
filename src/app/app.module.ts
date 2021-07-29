import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as firebase from "firebase/app";
import "firebase/auth";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { CapitalizePipe } from "./capitalize.pipe";
import { SlautationPipe } from "./slautation.pipe";
import { MenubarComponent } from "./menubar/menubar.component";
import { MyblogComponent } from "./myblog/myblog.component";
import { ProfileComponent } from "./profile/profile.component";
import { CreateComponent } from "./create/create.component";
// import { MenuComponent } from "./menu/menu.component";
// import { PersonComponent } from './person/person.component';
import { NgxEditorModule } from "ngx-editor";
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { VeiwComponent } from './veiw/veiw.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
let firebaseConfig = {
  apiKey: "AIzaSyC6Vy5017A2rGve6-PLRfLEFyGJSvIAfmo",
  authDomain: "scribe-372f7.firebaseapp.com",
  databaseURL: "https://scribe-372f7.firebaseio.com",
  projectId: "scribe-372f7",
  storageBucket: "scribe-372f7.appspot.com",
  messagingSenderId: "275711154777",
  appId: "1:275711154777:web:dc16bfa57b1a19e606ef48",
  measurementId: "G-RVWDNNRH0K"
};

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    SlautationPipe,
    MenubarComponent,
    MyblogComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    VeiwComponent,
    CommentsComponent,
    EditProfileComponent
  ], //add  MenuComponent, PersonComponent in declaration while imprting menu and person
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
