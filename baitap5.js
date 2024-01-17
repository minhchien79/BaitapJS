/**
 * inputs: nhập số
 * 
 * steps: 
 *  tính hàng chục
 *  tính hàng đơn vị
 *  tính tổng và hiển thị kết quả
 *  
 * 
 * outputs: kết quả
 */
function tinhTong() {
    let nhapSo = document.getElementById("inputNhapSo").value;
    let ten = Math.floor(nhapSo / 10);
    let unit = nhapSo % 10;
    let total = ten + unit
    document.getElementById("txtTinhTong").innerHTML = "Tổng là: " + total;
}
document.getElementById("btnTinhTong").onclick = tinhTong;