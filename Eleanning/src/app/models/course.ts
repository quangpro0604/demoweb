export interface ICourse{
    maKhoaHoc: string,
    biDanh: string,
    tenKhoaHoc: string,
    moTa: string,
    luotXem: number,
    hinhAnh: string,
    ngayTao: string,
    soLuongHocVien: string,
    danhMucKhoaHoc: string,
}

export interface ISelectedCourse extends ICourse{
    CourseDetail: any[];
}