//Tạo điều kiện dữ liệu nhân viên
function NhanVien(){
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = 0
    this.chucvu = '';
    this.gioLam = 0;
    // this.tongluong = function(){
    //     var tinhTongLuong = 0;
        
    //         if(this.chucvu == 'Sếp' && (this.luongCB<= 20000000 && this.luongCB >= 1000000)){
    //             tinhTongLuong = Number(this.luongCB * 3);
    //         }if(this.chucvu == 'Trưởng phòng' && (this.luongCB<= 20000000 && this.luongCB >= 1000000)) {
    //             tinhTongLuong = Number(this.luongCB * 2);
    //         }if(this.chucvu == 'Nhân viên' && (this.luongCB<= 20000000 && this.luongCB >= 1000000)) {
    //             tinhTongLuong = this.luongCB ;
    //         }
    //         return tinhTongLuong;

        
    // };
//   this.ptxeploai = function (){
//     var xeploai = '';
//     if(this.gioLam <= 160){
//         xeploai = 'Trung bình';

//     }  if(this.gioLam >= 160){
//         xeploai = 'Khá';

//     }  if(this.gioLam >= 176){
//         xeploai = 'Giỏi';

//     } if(this.gioLam >= 192){
//         xeploai = 'Xuất sắc';

//     }
//     return xeploai;
//   }
}