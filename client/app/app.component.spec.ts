/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('App: Mongoose Continued', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    })
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

/*  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent)
    let app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('app works!')
  }))

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    let compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('app works!')
  }));*/
})
