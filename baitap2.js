/**
 * input:soThu1, soThu2, soThu3, soThu4, soThu5
 * 
 * step:
 * fuction
 * B1: lấy giá trị từ form
 * B2: nhập giá trị số cần tính
 *  
 * 
 * output:tinhTrungBinh
 */
function tinhTB() {
    let soThu1 = document.getElementById("inputSo1").value;
    let soThu2 = document.getElementById("inputSo2").value;
    let soThu3 = document.getElementById("inputSo3").value;
    let soThu4 = document.getElementById("inputSo4").value;
    let soThu5 = document.getElementById("inputSo5").value;

    let tinhTrungBinh = (Number(soThu1) + Number(soThu2) + Number(soThu3) + Number(soThu4) + Number(soThu5) )/ 5;
    console.log(tinhTrungBinh);
    document.getElementById("txtCalc").innerHTML = "Trung bình là: " + tinhTrungBinh
}
document.getElementById("btnTinhTrungBinh").onclick = tinhTB;