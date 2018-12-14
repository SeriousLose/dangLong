import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AttractionsInfoComponent } from "./pages/attractions-info/attractions-info.component";
import { TouristRouteComponent } from "./pages/tourist-route/tourist-route.component";
import { AttractionsEvaluationComponent } from "./pages/attractions-evaluation/attractions-evaluation.component";
import { HomeManageComponent } from "./pages/home-manage/home-manage.component";
import { AttractionsManageComponent } from "./pages/attractions-manage/attractions-manage.component";
import { TouristRouteManageComponent } from "./pages/tourist-route-manage/tourist-route-manage.component";
import { AttractionsEvaluationManageComponent } from "./pages/attractions-evaluation-manage/attractions-evaluation-manage.component";
import { UserManageComponent } from "./pages/user-manage/user-manage.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//UI
import { InputTextModule, ButtonModule,DialogModule,CalendarModule,PasswordModule,PanelModule, MenuModule, ContextMenuModule} from "primeng/primeng";
import { DataTableModule, SharedModule,PanelMenuModule,BreadcrumbModule,AutoCompleteModule,PaginatorModule,SliderModule} from "primeng/primeng";
import { RadioButtonModule, GrowlModule } from "primeng/primeng"; //单选按钮
import { ChartModule } from "primeng/primeng";
import { TabViewModule } from "primeng/primeng"; //选项卡
import { InputTextareaModule } from "primeng/primeng";
import { DropdownModule,CheckboxModule, FileUploadModule,LightboxModule, GalleriaModule,MultiSelectModule} from "primeng/primeng";
import { PublicComponent } from './pages/public/public.component';
import { MessageComponent } from "./components/message/message.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AttractionsInfoComponent,
    TouristRouteComponent,
    AttractionsEvaluationComponent,
    HomeManageComponent,
    AttractionsManageComponent,
    TouristRouteManageComponent,
    AttractionsEvaluationManageComponent,
    UserManageComponent,
    PublicComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    PasswordModule,
    PanelModule,
    DataTableModule,
    SharedModule,
    PanelMenuModule,
    BreadcrumbModule,
    AutoCompleteModule,
    PaginatorModule,
    SliderModule,
    RadioButtonModule,
    GrowlModule,
    ChartModule,
    TabViewModule,
    InputTextareaModule,
    DropdownModule,
    CheckboxModule,
    FileUploadModule,
    LightboxModule,
    GalleriaModule,
    MultiSelectModule,
    MenuModule,
    ContextMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
