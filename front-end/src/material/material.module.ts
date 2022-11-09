import { NgModule } from '@angular/core'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'

import { MatButtonModule } from '@angular/material/button'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'

import { MatTabsModule } from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table'

import { MatDialogModule } from '@angular/material/dialog'

import { MatProgressBarModule } from '@angular/material/progress-bar'

const MaterialComponents = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSelectModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }