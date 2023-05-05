import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TitleComponent } from './components/title/title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardInlineComponent } from './components/small-card-inline/small-card-inline.component';
import { SmallCardBlockComponent } from './components/small-card-block/small-card-block.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { GroupCardBlockComponent } from './components/group-card-block/group-card-block.component';
import { GroupCardInlineComponent } from './components/group-card-inline/group-card-inline.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardInlineComponent,
    SmallCardBlockComponent,
    HomeComponent,
    PostComponent,
    GroupCardBlockComponent,
    GroupCardInlineComponent,
    FooterComponent,
    GenericPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
