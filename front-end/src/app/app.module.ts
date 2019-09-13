import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DocsModule } from './docs/docs.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ManageTfjComponent } from './manage-tfj/manage-tfj.component';
import { FilialesComponent } from './manage-tfj/filiales/filiales.component';
import { HostsComponent,DialogOverviewExampleDialog } from './manage-tfj/filiales/filiale/hosts/hosts.component';
import { FilialeComponent } from './manage-tfj/filiales/filiale/filiale.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageTfjComponent,
    FilialesComponent,
    HostsComponent,
    FilialeComponent,
    DialogOverviewExampleDialog,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    DocsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
