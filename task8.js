function Storage(initialItems) {
  this.items = Array.isArray(initialItems) ? [...initialItems] : [];
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItems = function (newItem) {
  this.items.push(newItem);
};

Storage.prototype.removeItem = function (itemToRemove) {
  const indexToRemove = this.items.indexOf(itemToRemove);
  if (indexToRemove !== -1) {
    this.items.splice(indexToRemove, 1);
  }
};

// Приклад використання:
const arr = ["apple", "banana", "mango"];
const storageInstance = new Storage(arr);

console.log("Initial items:", storageInstance.getItems());

storageInstance.addItems("orange");
console.log("Items after adding 'orange':", storageInstance.getItems());

storageInstance.removeItem("banana");
console.log("Items after removing 'banana':", storageInstance.getItems());
