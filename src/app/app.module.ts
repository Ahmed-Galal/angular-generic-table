import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';

/** Components used in example */
import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { RestComponent } from './rest/rest.component';
import { CustomRowComponent } from './custom-row/custom-row.component';
import { BasicComponent } from './basic/basic.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemplifyModule } from "angular-exemplify";
import { LocalizationComponent} from './localization/localization.component';
import { CustomColumnComponent, NameComponent, AgeComponent } from './custom-column/custom-column.component';

import {DragulaModule} from 'ng2-dragula'

/** Only needed when using ng2-translate */
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/** Import generic table module */
import { GenericTableModule } from '../generic-table/generic-table.module';
import {GtColumnPipe, GtColumnSettingsComponent} from './gt-column-settings/gt-column-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    RestComponent,
    CustomRowComponent,
    CustomColumnComponent,
    NameComponent,
    AgeComponent,
    BasicComponent,
    ExamplesComponent,
    LocalizationComponent,
    GtColumnSettingsComponent,
    GtColumnPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GenericTableModule, /** ADD THIS LINE TO YOUR APP MODULE! */
    AppRoutingModule, /** holds routes used in examples */
    ExemplifyModule, /** used for generating examples */
    /** translate module only needed for localization when using ngx */
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    DragulaModule
  ],
  /** add components used by your table i.e. for expanding rows etc. as entry components */
  entryComponents: [
    CustomRowComponent,
    NameComponent,
    AgeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
