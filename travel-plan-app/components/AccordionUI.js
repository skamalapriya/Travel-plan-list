import { useState } from "react";
import ItemDisplay from "./ItemDisplay";

function AccordionUI(props) {
  const [addItem, setAddItem] = useState("");
  const [travelItems, setItems] = useState([]);

  const handleAdd = () => {
    //console.log(travelItems);
    setItems([...travelItems, addItem]);
    setAddItem("");
  };

  return (
    <div className="w-4/5 h-auto bg-gray-200 mx-auto my-auto rounded-md">
      <div className="w-full h-8 bg-purple-800 flex items-center rounded-tl-md rounded-tr-md">
        <input
          type="checkbox"
          className="peer relative inset-x-0 w-8 h-8 opacity-0 z-10 cursor-pointer"
        />

        <div className="absolute transition-transform rotate-0 peer-checked:rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="solid"
            viewBox="0 0 24 24"
            strokeWidth={1}
            // stroke="white"
            className="w-6 h-6 fill-current text-slate-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <h1 className="text-slate-50 text-xl pb-1 font-serif font-bold subpixel-antialiased">
          {props.section}
        </h1>
      </div>
      <div className="container overflow-auto w-full h-48 my-3">
        <div className="flex flex-row justify-around items-center">
          <input
            type="text"
            value={addItem}
            onChange={(e) => setAddItem(e.target.value)}
            className="w-3/4 h-8 outline-none rounded-[5px] font-[Times New Roman] text-sm font-medium px-3 py-1"
          />
          <button
            type="button"
            onClick={handleAdd}
            className="bg-purple-800 w-10 h-8 text-slate-50 px-1 py-1 rounded-md font-sans text-md font-semibold"
          >
            Add
          </button>
        </div>
        <div>
          {travelItems.map((item) => (
            <ItemDisplay name={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccordionUI;
