import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BasePageComponent } from '../pages/base-page/base-page.component';
import { ComponentsModule} from '../components/components.module'
import { HttpClientModule } from '@angular/common/http';
import { pagesModule} from '../pages/pages.module'
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader { return new TranslateHttpLoader(http, './assets/i18n/', '.json'); }

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (HttpLoaderFactory),
      deps: [HttpClient]
    }}),
    ComponentsModule,
    pagesModule,
    HttpClientModule,
    FormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
