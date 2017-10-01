import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import { DataService } from '../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public isLoading: boolean

    ngOnInit() {

    }
}
