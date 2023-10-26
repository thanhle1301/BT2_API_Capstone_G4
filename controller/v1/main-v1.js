import { https } from "../../service/service.js";
import { getDataFrom, renderShoeList, showDataFrom } from "./controller-v1.js";

function fetchShoeList() {
  https
    .get("/shoe")
    .then((res) => {
      console.log(res.data);
      renderShoeList(res.data.reverse());
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchShoeList();
function deleteShoe(id) {
  https
    .delete(`/shoe/${id}`)
    .then((res) => {
      fetchShoeList();
      console.log("del tcong", res);
    })
    .catch((err) => {
      console.log("err", err);
    });
}
window.deleteShoe = deleteShoe;
window.addShoe = () => {
  let shoe = getDataFrom();
  https
    .post("/shoe", shoe)
    .then((res) => {
      fetchShoeList();
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editShoe = (id) => {
  $("#exampleModal").modal("show");
  https
    .get(`/shoe/${id}`)
    .then((res) => {
      console.log("Sửa thành công", id, res.data);
      showDataFrom(res.data);
    })
    .catch((err) => {
      console.log("😃 - file: main-v1.js:50 - err:", err);
    });
};
window.updateShoe = () => {
  let shoe = getDataFrom();
  https
    .put(`/shoe/${shoe.ma}`, shoe)
    .then((res) => {
      fetchShoeList();
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log("😃 - file: main-v1.js:61 - err:", err);
    });
};
// window.addShoeGH = (id) => {
//   https
//     .get(`/shoe/${id}`) // thay API
//     .then((res) => {
//       // Thay fetch mới bên giỏ hàng
//       console.log("them gio hang ok"res.data, id);
//       Swal.fire(
//         "Thêm vào giỏ hàng thành công!",
//         "You clicked the button!",
//         "success"
//       );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
