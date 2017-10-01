import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import { DataService } from '../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items = []
  public isLoading = true

  public isEditing = false
  public isAddNew = false

  public estValueSum

  public addItemForm: FormGroup
  public editItemForm: FormGroup

  public infoMsg = { body: '', type: 'info'}

  private item = {}

  constructor(private http: Http,
              private dataService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getItems()

    this.addItemForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'category': ['', Validators.required],
      'estvalue': ['', Validators.minLength(1)]
    })

    this.editItemForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'category': ['', Validators.required],
      'estvalue': ['', Validators.minLength(1)]
    })

    this.getValueSum()
  }

  getItems() {
    this.dataService.getItems().subscribe(
      data => this.items = data,
      error => console.log(error),
      () => this.isLoading = false
    )
  }

  addItem() {
    this.dataService.addItem(this.addItemForm.value).subscribe(
      res => {
        const newItem = res.json()
        this.items.push(newItem)
        this.addItemForm.reset()
        this.sendInfoMsg('item added successfully.', 'success')
      },
      error => console.log(error)
    )
    // Refresh value sum
    this.getValueSum()
    this.isAddNew = false
  }

  enableEditing(item) {
    this.isEditing = true
    this.item = item
  }

  cancelEditing() {
    this.isEditing = false
    this.item = {}
    this.sendInfoMsg('item editing cancelled.', 'warning')
    // reload the items to reset the editing
    this.getItems()
  }

  editItem(item) {
    this.dataService.editItem(item).subscribe(
      res => {
        this.isEditing = false

        this.item = item
        this.sendInfoMsg('item edited successfully.', 'success')
        // Refresh value sum
        this.getValueSum()
      },
      error => console.log(error)
    )
  }

  deleteItem(item) {
    if (window.confirm('Are you really sure you want to permanently delete this item?')) {
      this.dataService.deleteItem(item).subscribe(
        res => {
          const pos = this.items.map(_item => _item._id).indexOf(item._id)
          this.items.splice(pos, 1)
          this.sendInfoMsg('item deleted successfully.', 'success')
          // Refresh value sum
          this.getValueSum()
        },
        error => console.log(error)
      )
    }
  }

  sendInfoMsg(body, type, time = 8000) {
    this.infoMsg.body = body
    this.infoMsg.type = type
    window.setTimeout(() => this.infoMsg.body = '', time)
  }

  getValueSum() {
    this.dataService.getValueSum().subscribe(
      data => this.estValueSum = data.length && data[0].total || 0,
      error => console.log(error)
    )
  }

  enableAddNew() {
    // this.item = {}
    // this.addItemForm.reset()
    this.isAddNew = true
  }

  cancelAddNew() {
    this.isAddNew = false
    this.addItemForm.reset()
    this.item = {}
  }

}
