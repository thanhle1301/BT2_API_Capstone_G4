export let renderShoeList = (shoeArr) => {
  let contentHTML = "";
  shoeArr.forEach((shoe) => {
    let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = shoe;
    let trString = `<tr>
                           <td>${ma}</td>
                           <td>${ten}</td>
                           <td>${loai}</td>
                           <td>${gia}</td>
                           <td>${khuyenMai}</td>
                           <td>0</td>
                           <td>${tinhTrang}</td>
                           <td>
                                <button class="btn btn-danger" onclick=deleteShoe(${ma})>Xóa</button>
                                <button class="btn btn-warning" onclick=EditShoe(${ma})>Sửa</button>
                                <button class="btn btn-success"  onclick=addShoeGH(${ma})>Thêm giỏ hàng</button>
                           </td>
                  </tr>`;
    contentHTML = contentHTML + trString;
  });
  document.getElementById("tbodyShoe").innerHTML = contentHTML;
};

let getData = (idValue) => document.getElementById(idValue).value;
export let layThongTinTuForm = () => {
  let ma = getData("shoeID");
  let ten = getData("tenShoe");
  let loai = getData("loai");
  let gia = getData("giaShoe");
  let khuyenMai = getData("khuyenMai");
  let tinhTrang = getData("tinhTrang");
  let hinhAnh = getData("hinhShoe");
  let moTa = getData("moTa");
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
