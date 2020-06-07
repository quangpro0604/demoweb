import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { FeelPeopleComponent } from './feel-people/feel-people.component';
import { TermsComponent } from './terms/terms.component';
import { TearmColorComponent } from './tearm-color/tearm-color.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselCourseComponent } from './carousel-course/carousel-course.component';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [HeaderComponent, TrangChuComponent, FooterComponent, CarouselComponent, AboutComponent, CourseComponent, TestimonalComponent, FeaturesComponent, TeamComponent, FeelPeopleComponent, TermsComponent, TearmColorComponent, CourseListComponent, CourseItemComponent, CourseDetailComponent, DangKyComponent, DangNhapComponent, CarouselCourseComponent, CartComponent],
  imports: [
    CommonModule, CarouselModule, FormsModule, RouterModule, MatButtonModule, MatPaginatorModule, NgxPaginationModule
  ],
  exports:[HeaderComponent, TrangChuComponent, CarouselComponent, AboutComponent, CourseComponent, TestimonalComponent, FooterComponent, FeaturesComponent, TeamComponent, FeelPeopleComponent, TermsComponent, TearmColorComponent, CourseListComponent, CourseItemComponent, CourseDetailComponent, DangKyComponent, DangNhapComponent, CarouselCourseComponent, CartComponent]
})
export class HomeLayoutModule { }
