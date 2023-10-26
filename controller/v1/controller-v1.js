export let renderShoeList = (shoeArr) => {
  let contentHTML = "";
  shoeArr.forEach((shoe) => {
    let { ma, ten, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = shoe;
    let trString = `<tr>
                           <td>${ma}</td>
                           <td>${ten}</td>
                           <td>${gia}</td>
                           <td>${khuyenMai}</td>
                           <td>0</td>
                           <td>${tinhTrang}</td>
                           <td>
                                <button class="btn btn-danger" onclick=deleteShoe(${ma})>Xóa</button>
                                <button class="btn btn-warning" onclick=EditShoe(${ma})>Sửa</button>
                           </td>
                  </tr>`;
    contentHTML = contentHTML + trString;
  });
  document.getElementById("tbodyShoe").innerHTML = contentHTML;
};
