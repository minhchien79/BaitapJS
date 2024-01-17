/**
 * input: giaUSD, soTienDoi
 * 
 * steps: 
 * function
 *  B1: xét giaUSD là 23500
 *  B2: tính tiền đổi được
 * 
 * output: kết quả thanhTien
 */
function doiTien() {
    let giaUSD = 23500;
    let soTienDoi = document.getElementById("inputSoTienDoi").value;
    let thanhTien = soTienDoi * giaUSD;
    console.log(thanhTien);
    document.getElementById("txtDoiTien").innerHTML = "Số tiền là: " + thanhTien.toLocaleString();
}
document.getElementById("btnDoiTien").onclick = doiTien;