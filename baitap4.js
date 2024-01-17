/**
 * inputs: nhập chiều dài, chiều rộng
 * 
 * step: lập công thức tính diện tích, chu vi
 *  + diện tích: dài * rộng
 *  + chu vi: ( dài + rộng)*2
 * 
 * output: kết quả
 */
function tinhDTCV() {
    let chieuDai = document.getElementById("inputChieuDai").value;
    let chieuRong = document.getElementById("inputChieuRong").value;
    // diện tích
    let dienTich = chieuDai * chieuRong;
    console.log(dienTich)
    //chuVi
    let chuVi = (Number(chieuDai) + Number(chieuRong))*2;
    console.log(chuVi)

     document.getElementById("txtCVDT").innerHTML = "Diện tích: " + dienTich + " Chu vi: " + chuVi;
}
document.getElementById("btnTinhCVDT").onclick = tinhDTCV;