import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { homedir } from "os";
import { componentFactoryName } from "@angular/compiler";
import { MyblogComponent } from "./myblog/myblog.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "./auth.guard";
import { VeiwComponent } from "./veiw/veiw.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "myblog",
    component: MyblogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile/:id",
    component: ProfileComponent
  },
  {
    path: "veiw/:postId",
    component: VeiwComponent
  },
  {
    path: "edit-profile/:Id",
    component: EditProfileComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
