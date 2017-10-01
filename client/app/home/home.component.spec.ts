/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing'
import { HomeComponent } from './home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { DataService } from '../services/data.service'

describe('Component: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        DataService
      ]
    })
  })

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(HomeComponent)
    const component = fixture.debugElement.componentInstance
    expect(component).toBeTruthy()
  })
})
