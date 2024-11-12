const applyDiscount = (medicines) => {
  const discountedMedicines = medicines.map((medicine, index) => {
    const { name, price } = medicine;
    const discountedPrice = price > 300 ? 0.7 * price : price;

    return {
      id: index + 1,
      name,
      price: discountedPrice.toFixed(2),
    };
  });

  return discountedMedicines;
};

const medicines = [
  { name: "Noshpa", price: 170 },
  { name: "Analgin", price: 55 },
  { name: "Quanil", price: 310 },
  { name: "Alphacholine", price: 390 },
];

const result = applyDiscount(medicines);

// Виведення кожного елемента у рядковому форматі
result.forEach((item) => {
  console.log(
    `ID: ${item.id}, Name: ${item.name}, Discounted Price: ${item.price} UAH`
  );
});
