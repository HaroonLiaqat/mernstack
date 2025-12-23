import React, { useState } from "react";

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  isLiked: boolean;
}

function ItemCards() {
  const items: Item[] = [
    {
      id: 1,
      name: "Value Bucket",
      description:
        "Enjoy 9 pcs of our Crispy Fried Chicken, hand-breaded in-house",
      price: 2025,
      isLiked: false,
    },
    {
      id: 2,
      name: "Family Festival 3",
      description:
        "An ultimate meal for the fam. It includes 4 zinger burgers + 4 pieces Hot and Crispy",
      price: 2090,
      isLiked: false,
    },
    {
      id: 3,
      name: "Xtreme Duo Box",
      description:
        "The irresistible combo of 6 crispy zinger burgers and 6 pieces Hot and Crispy",
      price: 2025,
      isLiked: false,
    },
    {
      id: 4,
      name: "Value Bucket",
      description:
        "Enjoy 9 pcs of our Crispy Fried Chicken, hand-breaded in-house",
      price: 2025,
      isLiked: false,
    },
  ];
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  return (
    <>
      <div className="flex flex-row items-center justify-between px-10 my-10">
        <p className="text-2xl font-bold">Deals</p>
        <div className="flex flex-row items-center gap-4">
          <p className="text-lg font-bold">
            Price: {selectedItems.reduce((acc, item) => acc + item.price, 0)}
          </p>
          <p className="text-lg font-bold">Items: {selectedItems.length}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10 px-10 mt-5">
        {items.map((item) => (
          <div key={item.id} className="bg-white px-4 py-10 rounded-2xl">
            <p className="text-black">{item.name}</p>
            <p className="text-black">{item.description}</p>
            <p className="text-black">{item.price}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemCards;
