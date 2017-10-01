/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { DataService } from './data.service'
import { HttpModule } from '@angular/http'

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [DataService]
    })
  })

  it('should be injectable', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy()
  }))
})
