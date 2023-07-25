import React, { useEffect, useState } from "react";

export default function Todo() {
  const regularExp = new RegExp(/../);

  console.log(regularExp.test("1"));

  const supermarketItems: Array<{ name: string; price: number }> = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.8 },
    { name: "Grape", price: 2.0 },
    { name: "Tomato", price: 1.0 },
    { name: "Cucumber", price: 0.75 },
    { name: "Carrot", price: 0.6 },
    { name: "Lettuce", price: 1.2 },
    { name: "Milk", price: 2.5 },
    { name: "Cheese", price: 3.0 },
    { name: "Yogurt", price: 1.8 },
    { name: "Bread", price: 2.0 },
    { name: "Muffin", price: 1.5 },
    { name: "Croissant", price: 1.75 },
    { name: "Water", price: 1.0 },
    { name: "Soda", price: 1.25 },
    { name: "Juice", price: 2.0 },
    { name: "Coffee", price: 2.5 },
    // Add more items and prices here as needed...
  ];
  const [searchText, setSearchText] = useState("");
  const [items, setItems] =
    useState<Array<{ name: string; price: number }>>(supermarketItems);

  const [originalItems, setOriginalItems] = useState(items);

  const itemsLessThanOneDollar = items.filter((item) => item.price < 1.0);

  console.log(itemsLessThanOneDollar);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    setItems(
      originalItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="mx-auto flex flex-col gap-2 mt-7 w-fit h-[400px]">
      <input
        className="border-[2px] border-black outline-none px-2"
        onChange={handleChange}
        type="search"
        value={searchText}
      />
      <div className="h-500px  overflow-auto border-[2px] border-black w-[200px]">
        {items.map((item, i) => (
          <div className="flex p-2 ">
            <div className="flex justify-between w-[150px]">
              <p className="w-[100px]">{item.name}</p>
              <p className="text-blue-500 w-[50px] flex justify-center">
                ${item.price}
              </p>
            </div>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
}
