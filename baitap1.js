/**
 * input:luongNgay, soNgayLam
 * 
 * step:
 * fuction
 * B1: lấy giá trị từ form
 * B2: nhập số ngày làm
 *  tienLuong = luongNgay * soNgayLam
 * 
 * output:tienLuong
 */

function tinhLuong() {
    let luongNgay = document.getElementById("inputluongNgay").value;
    let soNgayLam = document.getElementById("inputsoNgayLam").value; 
    let tienLuong =  luongNgay * soNgayLam;
    console.log(tienLuong)
    document.getElementById("txtTienLuong").innerHTML = "Tiền lương là: " + tienLuong.toLocaleString()
}

document.getElementById("btnTinh").onclick = tinhLuong;