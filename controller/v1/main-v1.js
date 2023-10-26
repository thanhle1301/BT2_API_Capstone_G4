import { https } from "../../service/service.js";
import { renderShoeList } from "./controller-v1.js";
function fetchShoeList() {
  https
    .get("/food")
    .then((res) => {
      console.log(res.data);
      renderShoeList(res.data);
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
window.addShoe = () => {};
