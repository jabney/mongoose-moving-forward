import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { SearchComponent } from './search/search.component'
import { DataService } from './services/data.service'

// Routing Configuration -----------------------------------------
const routing = RouterModule.forRoot([
    { path: '',      component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'about', component: AboutComponent }
])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
