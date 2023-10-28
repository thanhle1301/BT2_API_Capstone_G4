export let renderShoeList_2 = (shopShoeArr) => {
  let contentHTML_2 = "";

  shopShoeArr.forEach((shopShoe) => {
    let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = shopShoe;
    let trString = `<tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${loai}</td>
                            <td>${gia} USD</td>
                            <td class="pl-4">${khuyenMai} %</td>
                            
                            <td class="pl-4">${tinhTrang}</td>
                            <td>
                            <button onclick=deleteFood_2(${ma})   class="btn btn-danger">Xóa</button>
                            <button onclick=editFood_2(${ma}) class="btn btn-warning">Sửa</button>
                            </td>
                    </tr>`;

    contentHTML_2 = contentHTML_2 + trString;
  });
  document.getElementById("tbodyShoe_2").innerHTML = contentHTML_2;
};

export let showDataFrom_2 = (shoeGH) => {
  let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = shoeGH;
  document.getElementById("shoeID_2").value = ma;
  document.getElementById("tenShoe_2").value = ten;
  document.getElementById("loai_2").value = loai;
  document.getElementById("giaShoe_2").value = gia;
  document.getElementById("khuyenMai_2").value = khuyenMai;
  document.getElementById("tinhTrang_2").value = tinhTrang;
  document.getElementById("hinhShoe_2").value = hinhAnh;
  document.getElementById("moTa_2").value = moTa;
};

export let getDataFrom_2 = () => {
  let ma = document.getElementById("shoeID_2").value;
  let ten = document.getElementById("tenShoe_2").value;
  let loai = document.getElementById("loai_2").value;
  let gia = document.getElementById("giaShoe_2").value;
  let khuyenMai = document.getElementById("khuyenMai_2").value;
  let tinhTrang = document.getElementById("tinhTrang_2").value;
  let hinhAnh = document.getElementById("hinhShoe_2").value;
  let moTa = document.getElementById("moTa_2").value;
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
