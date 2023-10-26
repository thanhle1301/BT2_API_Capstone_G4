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
                                <button class="btn btn-warning" onclick=editShoe(${ma})>Sửa</button>
                                <button class="btn btn-success"  onclick=addShoeGH(${ma})>Thêm giỏ hàng</button>
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
export let showDataFrom = (shoe) => {
  let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = shoe;
  document.getElementById("shoeID").value = ma;
  document.getElementById("tenShoe").value = ten;
  document.getElementById("loai").value = loai;
  document.getElementById("giaShoe").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value = tinhTrang;
  document.getElementById("hinhShoe").value = hinhAnh;
  document.getElementById("moTa").value = moTa;
};
