import { https } from "../../service/service.js";
import { renderShoeList } from "./controller-v1.js";
https
  .get("/shopShoe")
  .then((res) => {
    console.log(res.data);
    renderShoeList(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

 window.deleteShoe=(id)=> {
    .de
  }
