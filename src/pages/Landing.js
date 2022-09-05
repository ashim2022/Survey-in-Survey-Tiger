import React, { useState } from "react";

export default function Landing() {
  const [isCreateSelected, setIsCreateSelected] = useState(false);
  const [option, setOption] = useState();
  const [selectMultiSelect, setSelectMultiSelect] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);

  function handlePlus() {
    setItem((val) => [
      ...val,
      <Input
        handlePlus={handlePlus}
        id={Date.now()}
        handleMinus={handleMinus}
        key={Date.now()}
      />,
    ]);
  }
  // function handleMinus(id) {
  //   // setInputValue("");

  //   console.log(id)
  //   setItem((val) => val.filter((arrElem, inp) => inp.id !== id));
  //   // setItem((oldItem) => {
  //   //   return oldItem.filter((arrElem, index) => {
  //   //     return index !== id;
  //   //   });
  //   // });
  // }
  function handleMinus(id) {
    console.log(id); 
    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <h1>SURVEY TIGER</h1>
      <div>
        {!isCreateSelected ? (
          <>
            <button onClick={() => setIsCreateSelected(true)}>
              Create Survey
            </button>
            <button>Take Survey</button>
          </>
        ) : (
          <select
            defaultValue="sqt"
            onChange={(e) => {
              setOption(e.target.value);
              setSelectMultiSelect(true);
            }}
          >
            {" "}
            <option value="sqt">Select Question Type</option>
            <option value="ms">Multi-select</option>
            <option value="ss">Single select</option>
          </select>
        )}
        {selectMultiSelect ? (
          <>
            <p>
              <span>?</span>which of the folloing apps you have on your phone
            </p>
            <h3>Options</h3>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="type answer here"
            />
            <span onClick={handlePlus}>+</span>
            <span onClick={handleMinus}>-</span>
            {item}
          </>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

function Input({ handlePlus, handleMinus, id }) {
  return (
    <div id={id}>
      <input type="text" />
      <button onClick={handlePlus}>+</button>
      <button onClick={() => handleMinus(id)}>-</button>
    </div>
  );
}
