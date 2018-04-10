import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HeroiDetalhePage } from '../pages/heroi-detalhe/heroi-detalhe.page';
import { HeroiDetalheComponent } from './componentes/heroi-detalhe/heroi-detalhe.component';
import { HeroisProvider } from './heroi.provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroiDetalhePage,
    HeroiDetalheComponent
  ],
  imports: [

  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeroiDetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroisProvider
  ]
})
export class AppModule {}
