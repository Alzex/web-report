// script.js

// Task 1: getProductDetails function
function getProductDetails(productId, successCallback, errorCallback) {
  const products = {
    1: { name: "Product 1", price: 100 },
    2: { name: "Product 2", price: 200 },
    3: { name: "Product 3", price: 300 }
  };

  setTimeout(() => {
    if (products[productId]) {
      successCallback(products[productId]);
    } else {
      errorCallback("Product not found");
    }
  }, 1000);
}

function getProductDetailsHandler() {
  const productId = document.getElementById('productId').value;
  getProductDetails(productId,
    (product) => document.getElementById('productResult').innerText = `Product details: ${JSON.stringify(product)}`,
    (error) => document.getElementById('productResult').innerText = `Error: ${error}`
  );
}

// Task 2: Filter and sort concerts
const concerts = {
  Київ: new Date("2020-04-01"),
  Умань: new Date("2025-07-02"),
  Вінниця: new Date("2020-04-21"),
  Одеса: new Date("2025-03-15"),
  Хмельницький: new Date("2020-04-18"),
  Харків: new Date("2025-07-10"),
};

function displayUpcomingConcerts() {
  const upcomingConcerts = Object.keys(concerts)
    .filter(city => concerts[city] > new Date())
    .sort((a, b) => concerts[a] - concerts[b]);

  document.getElementById('concertResult').innerText = JSON.stringify(upcomingConcerts);
}

// Task 3: Apply discount to medicines
const medicines = [
  { name: "Noshpa", price: 170 },
  { name: "Analgin", price: 55 },
  { name: "Quanil", price: 310 },
  { name: "Alphacholine", price: 390 },
];

function displayDiscountedMedicines() {
  const discountedMedicines = medicines.map((medicine, index) => {
    return {
      id: index + 1,
      name: medicine.name,
      price: medicine.price > 300 ? medicine.price * 0.7 : medicine.price
    };
  });

  document.getElementById('medicineResult').innerText = JSON.stringify(discountedMedicines);
}

// Task 4: Storage class
class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage(["apple", "banana", "mango"]);

function addItemToStorage() {
  const item = document.getElementById('storageItem').value;
  storage.addItem(item);
  document.getElementById('storageItem').value = '';
  displayStorageItems();
}

function removeItemFromStorage() {
  const item = document.getElementById('storageItem').value;
  storage.removeItem(item);
  document.getElementById('storageItem').value = '';
  displayStorageItems();
}

function displayStorageItems() {
  document.getElementById('storageResult').innerText = JSON.stringify(storage.getItems());
}

// Task 5: Check brackets function
function checkBrackets(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if (Object.values(brackets).includes(char)) {
      if (char !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function checkBracketsHandler() {
  const codeString = document.getElementById('codeString').value;
  const result = checkBrackets(codeString);
  document.getElementById('bracketsResult').innerText = result ? "Brackets are correct" : "Brackets are incorrect";
}
