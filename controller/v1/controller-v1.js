export let renderShoeList = (shoeArr) => {
  let contentHTML = "";
  shoeArr.forEach((shoe) => {
    let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang, tinhGKM } =
      shoe;

    let trString = `<tr>
                           <td>${ma}</td>
                           <td>${ten}</td>
                           <td>${loai}</td>
                           <td>${gia} USD</td>
                           <td class="pl-4">${khuyenMai} %</td>
                           
                           <td class="pl-4">${tinhTrang}</td>
                           <td>
                                <button class="btn btn-danger" onclick=deleteShoe(${ma})>Xóa</button>
                                <button class="btn btn-warning" onclick=editShoe(${ma})>Sửa</button>
                           </td>
                           <td>
                                <button class="btn btn-success"  onclick=ShowDetail(${ma})>Xem chi tiêt</button>

                           </td>
                  </tr>`;
    contentHTML = contentHTML + trString;
  });
  document.getElementById("tbodyShoe").innerHTML = contentHTML;
};

export let getDataFrom = () => {
  let ma = document.getElementById("shoeID").value;
  let ten = document.getElementById("tenShoe").value;
  let loai = document.getElementById("loai").value;
  let gia = document.getElementById("giaShoe").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let hinhAnh = document.getElementById("hinhShoe").value;
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhAnh,
    moTa,
    tinhGKM: function () {
      return this.gia * (1 - this.khuyenMai);
    },
  };
};
// loai : true tốt, false thường
const loaiTot = "Loại 1";
const loaiThuong = "Loại 2";
const tot = true;
// tinh trang : true Còn, false Hết
const tinhTrangCon = "1";
const tinhTrangHet = "0";
const con = true;
export let showDataFrom = (shoe) => {
  let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = shoe;
  document.getElementById("shoeID").value = ma;
  document.getElementById("tenShoe").value = ten;
  document.getElementById("loai").value = loai == tot ? loaiTot : loaiThuong;
  document.getElementById("giaShoe").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value =
    tinhTrang == true ? tinhTrangCon : tinhTrangHet;
  document.getElementById("hinhShoe").value = hinhAnh;
  document.getElementById("moTa").value = moTa;
};
