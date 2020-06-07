import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DangNhapComponent } from './home-layout/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './home-layout/dang-ky/dang-ky.component';
import { CourseListComponent } from './home-layout/course-list/course-list.component';
import { CourseDetailComponent } from './home-layout/course-detail/course-detail.component';
import { TrangChuComponent } from './home-layout/trang-chu/trang-chu.component';
import { CartComponent } from './home-layout/cart/cart.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'dangnhap', component:DangNhapComponent},
  {path: 'dangky', component: DangKyComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'course-detail/:id', component: CourseDetailComponent},
  {path: 'trang-chu', component: TrangChuComponent},
  {path: 'cart', component: CartComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
