import { useRef, useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>I rendered {renderCount.current} times！</p>;
    </>
  );
};

export default App;

//計算渲染次數