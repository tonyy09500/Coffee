import { useEffect, useRef } from "react";


const App=() => {
    const myInput = useRef();

    useEffect(() => {
        myInput.current.focus();
    }, []);

    return(
        <div>
            <label>Name:</label>
            <input tpye="text" value="text"ref={myInput} />
        </div>

    );
};

export default App;


//useRef使用情境如下 
//useRef會回傳一個物件，有current屬性
//1.指定 DOM 元素做操作
//2.計算渲染次數
//3.儲存不會導致畫面渲染的資料 (如抓取以前的值)


