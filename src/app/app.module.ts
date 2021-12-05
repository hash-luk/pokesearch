import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';

import { PokeService } from 'src/app/services/pokemons.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './Pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [MatIconModule],
  providers: [HttpClientModule,PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
