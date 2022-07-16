function kiemTraRong(value, selectorError, ten) {
    if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = ten + ' không được bỏ trống !';
    return false;
}

//kiẻm tra ký tự
function kiemTraKyTu(value, selectorError, ten) {
    var regexLetter = /^[A-Za-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = ten + ' tất cả đều là chữ';
    return false;
}

//kiểm tra email
function kiemTraEmail(value, selectorError, ten) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = ten + ' không hợp lệ';
    return false;
}
//kiểm tra tất cả số
function kiemTraSo(value, selectorError, ten) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = ten + ' là số';
    return false;
}

//kiểm tra ngày
function kiemTraNgay(value, selectorError, ten) {
    // var regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // var regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (regexDate.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;

    }
    document.querySelector(selectorError).innerHTML = ten + ' không đúng định dạng ngày';
    return false;
}
//kiểm tra đọ dài của mảng
function kiemTraDoDai(value, selectorError, ten, minLength, maxLength) {
    var lengthValue = value.length;
    if (lengthValue > maxLength || lengthValue < minLength) {
        document.querySelector(selectorError).innerHTML = ten + ' từ ' + minLength + ' đến ' + maxLength + ' ký tự ';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true
}
//kiểm tra ký tự mật khẩu của mảng
function kiemTraKyTuMatKhau(value, selectorError, ten) {
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexPassword.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;

    }
    document.querySelector(selectorError).innerHTML = ten + ' chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống';
    return false;
}

//kiểm tra giá trị
function kiemTraGiaTri(value, selectorError, ten, minValue, maxValue) {
    value = Number(value);
    if (value > maxValue || value < minValue) {
        document.querySelector(selectorError).innerHTML = ten + ' từ ' + minValue + ' đến ' + maxValue + ' ký tự ';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;

}
// phân loại nhân viên

function phanLoaiNhanVien(id, arrNhanVien) {
    var arrTemp = []
    var luaChon = document.querySelector(id).value
    if (luaChon === '0') {
        return arrNhanVien
    } else if (luaChon === '1') {
        for (index = 0; index < arrNhanVien.length; index++) {
            if (arrNhanVien[index].gioLam >= 192) {
                arrTemp.push(arrNhanVien[index])
            }

        }

    } else if (luaChon === '2') {
        for (index = 0; index < arrNhanVien.length; index++) {
            if (arrNhanVien[index].gioLam >= 176 && arrNhanVien[index].gioLam < 192) {
                arrTemp.push(arrNhanVien[index])
            }
        }

    } else if (luaChon === '3') {
        for (index = 0; index < arrNhanVien.length; index++) {
            if (arrNhanVien[index].gioLam >= 160 && arrNhanVien[index].gioLam < 176) {
                arrTemp.push(arrNhanVien[index])
            }
        }

    } else if (luaChon === '4') {
        for (index = 0; index < arrNhanVien.length; index++) {
            if (arrNhanVien[index].gioLam < 160) {
                arrTemp.push(arrNhanVien[index])
            }
        }

    }

    return arrTemp
}

/// tài khoản không trùng nhau

function kiemTraTrungNhau(value, id, name, arrTemp) {
    for (index = 0; index <= arrTemp.length; index++) {
        if (arrTemp.length >= 1) {
            if (arrTemp[index].tknv === value) {
                document.querySelector(id).innerHTML = name + ' đã bị trùng '
                return false
            } else if (arrTemp[index].tknv !== value) {
                document.querySelector(id).innerHTML = ''
                return true
            }
        }
    }
    return true
}

// hàm reset lại form
function resetForm() {
    document.querySelector('#tknv').value =''
    document.querySelector('#name').value =''
    document.querySelector('#email').value =''
    document.querySelector('#password').value =''
    document.querySelector('#datepicker').value =''
    document.querySelector('#luongCB').value =''
    document.querySelector('#chucvu').value ='10'
    document.querySelector('#gioLam').value =''
}
/// chức vụ
function kiemTraChucVu(value,id,name){
    var value1 =document.querySelector(value).value
    if(value1 === '10'){
        document.querySelector(id).innerHTML =name+ ' chưa lưa chọn !';
        return false;
    }else if(value1 === '11' ){
        document.querySelector(id).innerHTML = '';
        return true
    }else if(value1 === '12' ){
        document.querySelector(id).innerHTML = '';
        return true
    }else if(value1 === '13' ){
        document.querySelector(id).innerHTML = '';
        return true
    }
}