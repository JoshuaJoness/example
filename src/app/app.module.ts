import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureSliderComponent } from './components/feature-slider/feature-slider.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { BannerComponent } from './components/banner/banner.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureSliderComponent,
    ProductGridComponent,
    BannerComponent,
    BestSellerComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
