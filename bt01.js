const bookCatalog = [
  {
    bookCode: "B01",
    title: "Lập trình JavaScript",
    category: "Công nghệ thông tin",
    price: 150000,
    totalCopies: 5,
    availableCopies: 3,
    shelfLocation: "Kệ A1"
  },
  {
    bookCode: "B02",
    title: "Cơ sở dữ liệu",
    category: "Công nghệ thông tin",
    price: 180000,
    totalCopies: 4,
    availableCopies: 4,
    shelfLocation: "Kệ A2"
  },
  {
    bookCode: "B03",
    title: "Lập trình Python",
    category: "Lập trình",
    price: 200000,
    totalCopies: 6,
    availableCopies: 5,
    shelfLocation: "Kệ B1"
  }
];

function displayBooks() {
  console.log("==============================================================");
  console.log("                    KIỂM KÊ KHO SÁCH");
  console.log("==============================================================");

  for (let i = 0; i < bookCatalog.length; i++) {
    let status = "CÒN SÁCH";

    if (bookCatalog[i].availableCopies === 0) {
      status = "HẾT SÁCH TRÊN KỆ";
    }

    console.log(
      bookCatalog[i].bookCode + " | " +
      bookCatalog[i].title + " | " +
      bookCatalog[i].price + " VNĐ | " +
      bookCatalog[i].totalCopies + " | " +
      bookCatalog[i].availableCopies + " | " +
      bookCatalog[i].shelfLocation + " | " +
      status
    );
  }

  console.log("==============================================================");
}

console.log("KHO SÁCH BAN ĐẦU");
displayBooks();

const newBook = {
  bookCode: "B04",
  title: "Lập trình Web",
  category: "Công nghệ thông tin",
  price: 220000,
  totalCopies: 3,
  availableCopies: 3,
  shelfLocation: "Kệ B2"
};

bookCatalog.push(newBook);

console.log("SAU KHI NHẬP KHO B04");
displayBooks();

const borrowBookCode = "B01";

for (let i = 0; i < bookCatalog.length; i++) {
  if (bookCatalog[i].bookCode === borrowBookCode) {
    if (bookCatalog[i].availableCopies > 0) {
      bookCatalog[i].availableCopies--;

      if (bookCatalog[i].availableCopies === 0) {
        console.log("B01: HẾT SÁCH TRÊN KỆ");
      }
    } else {
      console.log("B01 đã hết sách, không thể cho mượn.");
    }
  }
}

console.log("SAU KHI MƯỢN SÁCH B01");
displayBooks();

const deleteBookCode = "B03";

for (let i = 0; i < bookCatalog.length; i++) {
  if (bookCatalog[i].bookCode === deleteBookCode) {
    bookCatalog.splice(i, 1);
    console.log("Đã thanh lý sách B03.");
    break;
  }
}

console.log("SAU KHI THANH LÝ B03");
displayBooks();

let totalBooks = 0;
let totalAssetValue = 0;

for (let i = 0; i < bookCatalog.length; i++) {
  totalBooks += bookCatalog[i].totalCopies;
  totalAssetValue += bookCatalog[i].totalCopies * bookCatalog[i].price;
}

console.log("==============================================================");
console.log("                     BÁO CÁO KIỂM KÊ");
console.log("==============================================================");
console.log("Tổng số lượng sách:", totalBooks);
console.log("Tổng giá trị tài sản:", totalAssetValue, "VNĐ");
console.log("==============================================================");