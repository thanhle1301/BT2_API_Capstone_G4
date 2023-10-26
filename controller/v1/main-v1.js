import { https } from "../../service/service.js";
import { getDataFrom, renderShoeList, showDataFrom } from "./controller-v1.js";

function fetchShoeList() {
  https
    .get("/food")
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
    .delete(`/food/${id}`)
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
    .post("/food", shoe)
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
    .get(`/food/${id}`)
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
    .put(`/food/${shoe.ma}`, shoe)
    .then((res) => {
      fetchShoeList();
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log("😃 - file: main-v1.js:61 - err:", err);
    });
};
