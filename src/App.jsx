import React, { useState } from "react";
import data from "./data";



function App() {
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    let amount = parseInt(formdata.get("amount"));
    if (amount > 8) amount = 8;
    if (amount <= 0) amount = 1;
    setText(data.slice(0, amount))
  };

  return (
    <div className="h-screen pt-8">
      <div className="text-center text-xl font-semibold">
        <span className="">Generate Lorem Text</span>
      </div>
      <form
        className="text-center space-x-8 mt-4"
        onSubmit={(e)=>handleSubmit(e)}
      >
        <label htmlFor="paragraph" className="text-lg font-mono">
          Paragraph
        </label>
        <input
          type="number"
          name="amount"
          id="paragraph"
          defaultValue={`1`}
          className="border-2 rounded-md w-10 h-6 text-center focus:outline-none"
        />
        <button className="border-2 rounded-md bg-green-400 px-4 hover:bg-green-500 transition-colors duration-300">
          Generate
        </button>
      </form>
      <div className="border-2 mx-2 rounded-md px-2 mt-4 overflow-y-scroll h-1/2 shadow-lg shadow-gray-300">
        {text.map((txt, items)=>{
          return <p key={items}>{txt}</p>
        })}
      </div>
    </div>
  );
}

export default App;
