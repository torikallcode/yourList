const isiJudulContainer = document.getElementById('isiJudulContainer')
const inputJudul = document.getElementById('inputJudul');
const isiJudul = document.getElementById('isiJudul');
const addJudul = document.querySelector('.addJudul');
const phJudul = document.getElementById('phJudul')
let judulSudahAda = false

//Tambahkan judul
  addJudul.addEventListener("click" , function(){
    var nilaiJudulBaru = inputJudul.value.trim();

    // Memeriksa apakah judul sudah ada
    var judulSudahAda = cekJudulSudahAda(nilaiJudulBaru);

    if (inputJudul.value === ""){
      alert("Masukkan judul")
    } else if (judulSudahAda){
      alert("Judul Sudah Ada");
    } else {
      isiJudul.innerHTML += inputJudul.value
      inputJudul.value = ""
      phJudul.classList.add("hidden")
      isiJudulContainer.classList.remove("py-6")
      isiJudulContainer.classList.add("py-3")
      let bin = document.createElement("img")
      bin.src = "img/bin.png"
      bin.classList.add("w-6")
      bin.style.cursor = "pointer"
      isiJudulContainer.appendChild(bin)
      addJudul.classList.toggle("addJudul")
      bin.addEventListener("click" , function(){
      isiJudul.innerHTML = " "
      bin.classList.add("hidden")
      phJudul.classList.remove("hidden")
      isiJudulContainer.classList.remove("py-3")
      isiJudulContainer.classList.add("py-6")

      })
    }
    // saveData()
    judulSudahAda = true
  })
  // Fungsi untuk memeriksa apakah judul sudah ada
function cekJudulSudahAda(judulBaru) {
  var judulLama = isiJudul.innerHTML.trim();
  return judulLama === judulBaru;
}
  
  if(judulSudahAda === true){
    alert("Judul sudah ada")
}

const inputList = document.getElementById('inputList');
const addList = document.getElementById('addList');
const isiList = document.querySelector(".isiList")
const phList = document.querySelector("#phList")
const divList = document.getElementById("divList")
const isiListContainer = document.getElementById('isiListContainer')
let kelasLi = ["flex" , "justify-start" , "items-center" , "relative" , "w-full" , "px-9" , "text-lg" , "cursor-pointer"] 
let kelasUnCheck = ["absolute" , "top-0", "left-0" , "w-7" , "cursor-pointer"]
let kelasRemove= ["absolute" , "top-0", "right-0" , "w-7" , "cursor-pointer"]
//Tambahkan List
  addList.addEventListener("click" , function(){
    if (inputList.value === ""){
      alert("Masukkan list")
    } else {
      phList.classList.add("hidden")
      let li = document.createElement("li")
      let unCheck = document.createElement("img")
      unCheck.src = "img/uncheck.png"
      unCheck.classList.add(...kelasUnCheck)
      let remove = document.createElement("img")
      remove.src = "img/remove.png"
      remove.classList.add(...kelasRemove)
      li.innerHTML += inputList.value
      inputList.value = ""
      li.classList.add(...kelasLi)
      li.appendChild(unCheck)
      li.appendChild(remove)
      isiListContainer.appendChild(li)

      let Check = document.createElement("img")
      Check.src = "img/check.png"
      Check.classList.add(...kelasUnCheck)
      Check = false;
          li.addEventListener("click", function(){
          li.classList.toggle("line-through")
          if(Check){
              unCheck.src = "img/unCheck.png";
              Check = false
              // saveData()
          } else {
              unCheck.src = "img/check.png";
              Check = true
              // saveData()
          }
      })
      
      remove.addEventListener("click" , function(){
        isiListContainer.removeChild(li);
      })
    }
    // saveData()
  })

// function saveData(){
//   localStorage.setItem("data", isiListContainer.innerHTML)
// }

// function showTask(){
//   isiListContainer.innerHTML = localStorage.getItem("data")
// }
// showTask()






















  
// // li.addEventListener("click", function(){
// //     li.classList.toggle("line-through")
// //     if(gambar2){
// //         gambar.src = "img/uncheck.png";
// //         gambar2 = false
// //     } else {
// //         gambar.src = "img/check.png";;
// //         gambar2 = true;
// //     }
// // })

//       gambar.src = "img/uncheck.png";
//       gambar.style.width = "28px";
//       gambar.style.cursor = "pointer";
//       gambar2.src = "img/check.png";
//       gambar2.style.width = "28px";
//       gambar2.style.cursor = "pointer";
//       gambar2 = false;
































































































































































































// //hapus Modal
// const hapusModal = document.querySelector("#hapusModal");
// hapusModal.addEventListener("click", function () {
//   modalBox.classList.add("hidden");
// });

// //Judul
// const modalBox = document.querySelector("#modalBox");
// let kelasIsiSatu = [
//   "container",
//   "bg-[#F9F9F9]",
//   "w-full",
//   "p-3",
//   "rounded-lg",
//   "border-2",
// ];
// let kelasIsiDua = [
//   "flex",
//   "justify-between",
//   "items-center",
//   "border-b-2",
//   "border-b-gray-300",
// ];
// let kelasH2 = [
//   "font-utama",
//   "text-lg",
//   "gap-10",
//   "text-gray-500",
//   "font-medium",
//   "py-3",
//   "relative",
// ];
// let kelasSpanH2 = ["text-gray-900", "text-2xl", "ml-2"];
// let kelasBrandaJudul = [
//   "text-gray-900",
//   "text-2xl",
//   "ml-2",
//   "py-3",
//   "font-medium",
//   "font-utama",
// ];
// let kelasBinJudul = ["w-6", "cursor-pointer"];
// let kelasIsiTiga = ["static", "max-h-80", "overflow-y-auto"];
// let kelasisiTigaSatu = [
//   "py-3",
//   "font-utama",
//   "text-base",
//   "font-normal",
//   "flex",
//   "gap-3",
//   "items-center",
//   "justify-start",
//   "relative",
//   "line-through",
// ];
// document.querySelector("#tambahkan").addEventListener("click", function () {
//   modalBox.classList.toggle("hidden");
//   // judul
//   let isiSatu = document.createElement("section");
//   isiSatu.classList.add(...kelasIsiSatu);
//   modalBox.appendChild(isiSatu);
//   let isiDua = document.createElement("div");
//   isiDua.classList.add(...kelasIsiDua);
//   isiSatu.appendChild(isiDua);
//   let h2 = document.createElement("h2");
//   h2.classList.add(...kelasH2);
//   h2.textContent += "Judul : ";
//   isiDua.appendChild(h2);
//   let spanH2 = document.createElement("span");
//   spanH2.textContent = "";
//   spanH2.classList.add(...kelasSpanH2);
//   h2.appendChild(spanH2);
//   let binJudul = document.createElement("img");
//   binJudul.src = "img/bin.png";
//   binJudul.classList.add(...kelasBinJudul);
//   isiDua.appendChild(binJudul);
//   // List
//   let isiTiga = document.createElement("ul");
//   isiTiga.classList.add(...kelasIsiTiga);
//   isiSatu.appendChild(isiTiga);

//   //input judul
//   const inputJudul = document.querySelector("#inputJudul");
//   const addJudul = document.querySelector("#addJudul");

//   addJudul.addEventListener("click", function () {
//     if (inputJudul.value === "") {
//       alert("Masukkan judul");
//     } else {
//       spanH2.innerHTML += inputJudul.value;
//       inputJudul.value = "";
//     }
//   });

//   binJudul.addEventListener("click", function () {
//     spanH2.innerHTML = "";
//   });

//   //input list
//   const inputList = document.querySelector("#inputList");
//   const listContainer = document.querySelector("#listContainer");
//   const addList = document.querySelector("#addList");
//   let kelasList = [
//     "font-utama",
//     "text-lg",
//     "font-normal",
//     "flex",
//     "gap-3",
//     "items-center",
//     "justify-start",
//     "relative",
//   ];
//   let kelasHapus = [
//     "absolute",
//     "right-0",
//     "top-3",
//     "text-center",
//     "text-lg",
//     "w-5",
//   ];

//   addList.addEventListener("click", function () {
//     if (!(inputList.value === "")) {
//       let li = document.createElement("li");
//       let gambar = document.createElement("img");
//       let gambar2 = document.createElement("img");
//       let hapusList = document.createElement("img");

//       gambar.src = "img/uncheck.png";
//       gambar.style.width = "28px";
//       gambar.style.cursor = "pointer";
//       gambar2.src = "img/check.png";
//       gambar2.style.width = "28px";
//       gambar2.style.cursor = "pointer";
//       gambar2 = false;

//       hapusList.src = "img/remove.png";
//       hapusList.style.width = "20px";
//       hapusList.classList.add(...kelasHapus);
//       li.appendChild(hapusList);
//       hapusList.addEventListener("click", function () {
//         li.classList.add("hidden");
//       });

//       li.style.paddingTop = "10px";
//       li.style.paddingBottom = "10px";
//       li.style.cursor = "pointer";
//       li.classList.add(...kelasList);
//       li.appendChild(gambar);
//       li.appendChild(document.createTextNode(inputList.value));
//       isiTiga.appendChild(li);
//       inputList.value = "";

//       const listBranda = document.querySelector("#listBranda");
//       const tambahBranda = document.querySelector("#tambahBranda");
//       tambahBranda.addEventListener("click", function () {
//         modalBox.classList.add("hidden");
//         //judul
//         let sectionBranda = document.createElement("section");
//         sectionBranda.classList.add(...kelasIsiSatu);
//         listBranda.appendChild(sectionBranda);
//         let brandaJudul = document.createElement("div");
//         brandaJudul.classList.add(...kelasIsiDua);
//         sectionBranda.appendChild(brandaJudul);
//         let brandaH2Judul = document.createElement("h2");
//         brandaH2Judul.classList.add(...kelasBrandaJudul);
//         brandaH2Judul.innerHTML += spanH2.textContent;
//         brandaJudul.appendChild(brandaH2Judul);
//         let brandaUl = document.createElement("ul");
//         brandaUl.classList.add(...kelasIsiTiga);
//         // list

//         let listItem = isiTiga.querySelectorAll("li");
//         listItem.forEach(function (li) {
//           let brandaLi = document.createElement("li");
//           let image = document.createElement("img");
//           let image2 = document.createElement("img");

//           image.src = "img/uncheck.png";
//           image.style.width = "28px";
//           image.style.cursor = "pointer";
//           image2.src = "img/check.png";
//           image2.style.width = "28px";
//           image2.style.cursor = "pointer";
//           image2 = false;

//           brandaLi.style.paddingTop = "10px";
//           brandaLi.style.paddingBottom = "10px";
//           brandaLi.style.cursor = "pointer";
//           brandaLi.classList.add(...kelasList);
//           brandaLi.innerHTML += li.innerText;
//           // brandaLi.appendChild(image)
//           brandaUl.appendChild(brandaLi);
//           sectionBranda.appendChild(brandaUl);
//         });
//       });
//     } else {
//       alert("Masukan List");
//     }
//   });
// });

// // li.addEventListener("click", function(){
// //     li.classList.toggle("line-through")
// //     if(gambar2){
// //         gambar.src = "img/uncheck.png";
// //         gambar2 = false
// //     } else {
// //         gambar.src = "img/check.png";;
// //         gambar2 = true;
// //     }
// // })

// // gambar.addEventListener("click", function(){
// //     li.classList.toggle("line-through")
// //     if(gambar2){
// //         gambar.src = "img/uncheck.png";
// //         gambar2 = false
// //     } else {
// //         gambar.src = "img/check.png";;
// //         gambar2 = true;
// //     }
// // })

// // hapusList.innerHTML = "❌"
// // hapusList.style.fontSize = "13px"
// // hapusList.classList.add(...kelasHapus)
// // brandaLi.appendChild(hapusList)
// // hapusList.addEventListener("click", function(){
// //     brandaLi.classList.add("hidden")
// // })
// // let brandaLi = document.createElement("li")
// // let image = document.createElement("img");
// // let image2 = document.createElement("img")

// // image.src = "img/uncheck.png";
// // image.style.width = "28px"
// // image.style.cursor = "pointer"
// // image2.src = "img/check.png";
// // image2.style.width = "28px"
// // image2.style.cursor = "pointer"
// // image2 = false;

// // brandaLi.classList.add(...kelasList)
// // brandaLi.textContent = "hallo"
// // brandaLi.style.paddingTop = "10px"
// // brandaLi.style.paddingBottom = "10px"
// // brandaLi.style.cursor = "pointer"
// // brandaLi.appendChild(image)
// // brandaUl.appendChild(brandaLi)

// // let judulBranda = document.querySelector("#judulBranda")

// // let containerBranda = document.querySelector("#containerBranda")
// // let kelasPembungkus = ["bg-[#F9F9F9]", "w-full", "p-3", "rounded-lg" , "border-2"]
// // let kelasPembungkusJudul = ["flex" ,"justify-between" ,"items-center" ,"border-b-2", "border-b-gray-300"]
// // let kelasIsiJudul = ["font-utama" ,"text-lg" ,"gap-10" ,"text-gray-500" ,"font-medium" ,"py-3"]
// // tambahBranda.addEventListener("click", function(){
// //     modalBox.classList.add("hidden")
// //     let pembungkus = document.createElement("div");
// //     pembungkus.setAttribute("class")
// //     pembungkus.classList.add(...kelasPembungkus)

// //     let pembungkusJudul = document.createElement("div")
// //     pembungkusJudul.setAttribute("class")
// //     pembungkusJudul.classList.add(...kelasPembungkusJudul)

// //     let isiJudul = document.createElement("h1")
// //     isiJudul.setAttribute("class")
// //     isiJudul.classList.add(...kelasIsiJudul)

// //     listBranda.appendChild(pembungkus)
// //     pembungkus.appendChild(pembungkusJudul)
// //     pembungkusJudul.appendChild(isiJudul)
// // })
// // judulBranda.innerHTML += judul.textContent
// // containerBranda.innerHTML += listContainer.innerHTML
// // Membuat elemen judul baru

// // const judulBaru = document.createElement("h1");
// // judulBaru.textContent = judul.textContent;

// // // Membuat elemen daftar baru
// // const daftarBaru = document.createElement("ul");

// // // Mengambil semua elemen daftar yang sudah ada
// // const listSudahAda = document.querySelectorAll("#listContainer li");

// // // Menyalin elemen-elemen daftar yang sudah ada ke dalam elemen daftar baru
// // listSudahAda.forEach((listItem) => {
// //   const listItemBaru = document.createElement("li");
// //   listItemBaru.textContent = listItem.textContent;
// //   daftarBaru.appendChild(listItemBaru);
// // });

// // // Mengambil elemen "branda" yang akan ditambahkan
// // const branda = document.querySelector("#listBranda");

// // // Menambahkan elemen judul baru ke dalam "branda"
// // branda.appendChild(judulBaru);

// // // Menambahkan elemen daftar baru ke dalam "branda"
// // branda.appendChild(daftarBaru);
