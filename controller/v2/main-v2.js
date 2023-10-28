import { https_2 } from "../../service/service.js";
import { renderShoeList_2 } from "./controller-v2.js";
import { showDataFrom_2, getDataFrom_2 } from "./controller-v2.js";

function fetchShoeList_2() {
  https_2
    .get("/shoeGH")
    .then((res) => {
      renderShoeList_2(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchShoeList_2();
function deleteFood_2(id) {
  console.log("😃 - file: main-v2.js:16 - deleteFood_2 - deleteFood_2:", id);
  https_2
    .delete(`/shoeGH/${id}`)
    .then((res) => {
      console.log("😃 thanh công", res);
      fetchShoeList_2();
    })
    .catch((err) => {
      console.log("that bai", err);
    });
}
window.deleteFood_2 = deleteFood_2;

window.editFood_2 = (id) => {
  $("#exampleModal_2").modal("show");
  https_2
    .get(`/shoeGH/${id}`)
    .then((res) => {
      showDataFrom_2(res.data);
      console.log("😃 - file: main-v2.js:35 - .then - res:", res.data);
    })
    .catch((err) => {
      console.log("😃 - file: main-v2.js:50 - err:", err);
    });
};

window.updateShoe_2 = () => {
  let shoeGH = getDataFrom_2();
  https_2
    .put(`/shoeGH/${shoeGH.ma}`, shoeGH)
    .then((res) => {
      fetchShoeList_2();
      $("#exampleModal_2").modal("hide");
    })
    .catch((err) => {
      console.log("😃 - file: main-v1.js:61 - err:", err);
    });
};
