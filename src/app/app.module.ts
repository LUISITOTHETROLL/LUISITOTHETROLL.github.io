import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NftComponent } from './components/nft/nft.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const rutas: Routes = [
  {path: '', redirectTo: '/nfts', pathMatch: 'full'},
  {
    path:'nfts',
    component: NftComponent

  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    NftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
