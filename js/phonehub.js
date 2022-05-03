const btns = document.querySelectorAll(".btn");
const phone = document.querySelector(".phone");
// for in loop
// for (const btn of btns) {
//   btn.addEventListener("click", function () {
//     const list = btn.parentElement;
//     console.log(list);
//     phone.removeChild(list);
//   });
// }

// simple for loop
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     const listele = btns[i].parentElement;
//     phone.removeChild(listele);
//   });
// }

// foreach() loop
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     const listele = btn.parentElement;
//     phone.removeChild(listele);
//   });
// });

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e.target);
//     const listele = btn.parentElement;
//     phone.removeChild(listele);
//   });
// });

// phone.addEventListener("click", function (e) {
//   // console.log(e.target);
//   const listelement = e.target.parentElement;
//   phone.removeChild(listelement);
// });

phone.addEventListener("click", function (e) {
  if (e.target.className == "btn") {
    const listelement = e.target.parentElement;
    var conf=confirm("are you sure want to delete?");
    if(conf==true){
        phone.removeChild(listelement);
    }
    else {
      return false;
    }
  }
});
