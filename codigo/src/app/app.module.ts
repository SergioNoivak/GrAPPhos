import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioPage } from '../pages/inicio/inicio';
import { ComponentsModule } from '../components/components.module';
import { GrafoGeralProvider } from '../providers/grafo-geral/grafo-geral';
import { KatexModule } from 'ng-katex';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeProvider } from '../providers/home/home';
import { HomeModalPage } from '../pages/home-modal/home-modal';





@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    InicioPage,
    HomeModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    KatexModule,
    CommonModule,
    HttpClientModule,

    
    
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    InicioPage,
    HomeModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GrafoGeralProvider,
    HomeProvider
  ]
})
export class AppModule {}
