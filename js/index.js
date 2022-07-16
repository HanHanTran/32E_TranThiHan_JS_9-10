//tạo mảng
var mangNhanVien = []
document.querySelector('#btnThemNV').onclick = function(){
    //Tạo đối tương
    var nv = new NhanVien();
    //Lấy input từ người dùng
    nv.tknv = document.querySelector('#tknv').value;
    nv.name = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.password = document.querySelector('#password').value;
    var ngayLam = document.querySelector('#datepicker').value;
    // xử lý ngày
    nv.ngayLam = moment(ngayLam).format('DD-MM-YYYY');
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.chucvu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
   //mỗi lần bấm thêm nhân viên sẽ dưa object vào mangNhanVien
    
   // kiểm tra dữ liệu có hợp lệ hay không
   var valid = true;

   valid &= kiemTraRong(nv.tknv,'#error_required_tknv','Tài khoản nhân viên')
    & kiemTraRong(nv.name,'#error_required_name','Tên nhân viên')
    & kiemTraRong(nv.email,'#error_required_email','Email ') 
    & kiemTraRong(nv.password,'#error_required_password','Mật khẩu ') 
    & kiemTraRong(nv.ngayLam,'#error_required_date','Ngày làm ') 
    & kiemTraRong(nv.chucvu,'#error_required_chucvu','Chức vụ ') 
    & kiemTraRong(nv.luongCB,'#error_required_luongcb','Lương cơ bản ') 
    & kiemTraRong(nv.gioLam,'#error_required_giolam','Giờ làm ') 
    
   //kiểm tra định dạng dữ liệu
    valid &= kiemTraKyTu(nv.name,'#error_allLetter_name','Tên nhân viên');
    // kiểm tra email
    valid = kiemTraEmail(nv.email,'#error_email_name','Email');

    //kiểm tra sô
    valid &= kiemTraSo(nv.luongCB,'#error_allNuber_luongcb','Lương cơ bản') &kiemTraSo(nv.luongCB,'#error_allNuber_giolam','Giờ làm');
    valid &= kiemTraNgay(nv.ngayLam,'#error_date','Ngày làm ') ;
    valid &=kiemTraDoDai(nv.password,'#error_minmax_lenght_matkhau','Mật khẩu',6,10,) & kiemTraDoDai(nv.tknv,'#error_minmax_lenght_tknv','Tài khoản',4,6,);
    valid &=kiemTraKyTuMatKhau(nv.password,'#error_kytu_matkhau','Ký tự mật khẩu');
    valid &= kiemTraGiaTri(nv.luongCB,'#error_kiemTraGiaTri_lươngcb','Lương cơ bản',1000000,20000000) & kiemTraGiaTri(nv.gioLam,'#error_kiemTraGiaTri_giolam','Số giờ ',80,200)
    valid &= kiemTraTrungNhau(nv.tknv,'#error_trungnhau','Tài khoản ',mangNhanVien)
    valid &= kiemTraChucVu('#chucvu','#error_required_chucvu1','Chức vụ')
    if(!valid){
    return;
   }






    mangNhanVien.push(nv);
    // gọi hàm từ mảng
    console.log(mangNhanVien)
    renderTableNhanVien(mangNhanVien);
}
//gọi hàm
function renderTableNhanVien(arrNhanVien){
    html= '';
for(var index = 0; index<arrNhanVien.length; index++){
        var nv = arrNhanVien[index];
        nv.tongluong = function(){
            var tinhTongLuong = 0;
        
            if(this.chucvu == '11'){
                tinhTongLuong = Number(this.luongCB * 3);
            }if(this.chucvu == '12' ){
                tinhTongLuong = Number(this.luongCB * 2);
            }if(this.chucvu == '13' ){
                tinhTongLuong = this.luongCB ;
            }
            return tinhTongLuong;
        }

        nv.xuatChucVu = function (){
            var chucVu ='';
            if(this.chucvu == '11'){
                chucVu = 'Sếp'
            }if(this.chucvu == '12' ){
                chucVu = 'Trưởng phòng' 
            }if(this.chucvu == '13' ){
                chucVu ='Nhân Viên'
            }
            return chucVu;
        }

    // thêm thông tin thông qua mảng (hướng đối tượng)
    nv.ptxeploai = function (){
        var xeploai = '';
        if(this.gioLam <  160){
            xeploai = 'Trung bình';
    
        }else  if(this.gioLam >= 160 && this.gioLam <176){
            xeploai = 'Khá';
    
        } else if(this.gioLam >= 176 && this.gioLam <192){
            xeploai = 'Giỏi';
    
        }else if(this.gioLam >= 192){
            xeploai = 'Xuất sắc';
    
        }
        return xeploai;
      }


      //tạo ra một chuỗi html
      html+= `
      <tr>
      <td>${nv.tknv}</td>
      <td>${nv.name}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.xuatChucVu()}</td>
      <td>${nv.tongluong()}</td>
      <td>${nv.ptxeploai()}</td>
      <td><button class="btn btn-danger" onclick ="xoaNhanVien('${nv.tknv}')" > Xoá </button> </td>
      <td> <button class="btn btn-primary" data-toggle="modal"
      data-target="#myModal" onclick ="chinhSua('${nv.tknv}')" > Chỉnh sửa </button> </td>
    
      
      </tr>
      `;
     
}
document.querySelector('#tableDanhSach').innerHTML = html;
return html;
}
//xoá mảng
//tạo hàm xoá
function xoaNhanVien(tkNhanVienClick){
        //hàm trong .findIndex sẽ tự động chạy đến khi nào tìm thấy hoặc hết mảng (không thấy thì trả về -1);
    var indexDel = mangNhanVien.findIndex(nv => nv.tknv === tkNhanVienClick);
        mangNhanVien.splice(indexDel,1);
//     var indexDel = -1;
//     for(var index = 0; index<mangNhanVien.length; index++){
//         var nv = mangNhanVien[index];
//         if(nv.tknv === tkNhanVienClick){
//             indexDel = index;
//             break;
//         }
//     // xoá nhân viên tại vị trí indexdel tìm được
//     mangNhanVien.splice[indexDel,1];
// }
    renderTableNhanVien(mangNhanVien);

}


function chinhSua (tkNhanVienClick){
    var indexEdit = mangNhanVien.findIndex(nhanVien => nhanVien.tknv === tkNhanVienClick);
    var nvEdit = mangNhanVien[indexEdit];
    //khoá mã nv
    document.querySelector('#tknv').disabled = true;
    // gán giá trị chỉnh sửa
    document.querySelector('#tknv').value = nvEdit.tknv;
    document.querySelector('#name').value = nvEdit.name;
    document.querySelector('#email').value = nvEdit.email;
    document.querySelector('#password').value = nvEdit.password;
    document.querySelector('#datepicker').value = nvEdit.datepicker;
    document.querySelector('#luongCB').value = nvEdit.luongCB;
    document.querySelector('#chucvu').value = nvEdit.chucvu;
    document.querySelector('#gioLam').value = nvEdit.gioLam;

}
 document.querySelector('#btnCapNhat').onclick = function(){
    var nv = new NhanVien();
    //Lấy input từ người dùng
    nv.tknv = document.querySelector('#tknv').value;
    nv.name = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.password = document.querySelector('#password').value;
    nv.datepicker = document.querySelector('#datepicker').value;
    // xử lý ngày
    nv.datepicker = moment(datepicker).format('DD-MM-YYYY');
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.chucvu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    
    var indexEdit = mangNhanVien.findIndex(nhanVien => nhanVien.tknv === nv.tknv);
    // mangNhanVien[indexEdit].tknv = nv.tknv;
    mangNhanVien[indexEdit].name = nv.name;
    mangNhanVien[indexEdit].email = nv.email;
    mangNhanVien[indexEdit].password = nv.password;
    mangNhanVien[indexEdit].datepicker = nv.datepicker;
    mangNhanVien[indexEdit].luongCB = nv.luongCB;
    mangNhanVien[indexEdit].chucvu = nv.chucvu;
    mangNhanVien[indexEdit].gioLam = nv.gioLam;

//    validation chỉnh sửa



    //tạo lại bảng nhân viên mới sau khi thay đổi
    renderTableNhanVien(mangNhanVien);
    //mở lại nút mã nhân viên
    document.querySelector('#tknv').disabled = false;
   // luuLoCalStorage();


 }
        document.querySelector('#btnTimNV9').onclick = function(){
            var arrTemp =[]
           arrTemp =  phanLoaiNhanVien('#luaChon9',mangNhanVien);
            renderTableNhanVien(arrTemp);
        }


        // nut nhan xoa form
        document.querySelector('#btnThem').onclick = function(){
            resetForm();
        }


















 