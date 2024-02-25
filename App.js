//import logo from './logo.svg';
import './App.css';
import List from "./component/List";
import Style from "./App.module.scss";


function App() {
  const menu = [ 
      { 
        name:"草莓蛋糕", 
        price: 50, 
        isLimited: false, 
        image: "https://png.pngtree.com/png-clipart/20190118/ourmid/pngtree-red-cake-strawberry-cake-illustration-delicious-cake-a-piece-of-cake-png-image_454976.jpg",
        desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
      }, 
      { 
        name:"香草蛋糕", 
        price: 50, 
        isLimited: false, 
        image: "https://png.pngtree.com/png-clipart/20230616/ourmid/pngtree-vanilla-cup-cakes-with-sprinkles-png-image_7144575.png",
        desrc: "這種濃郁的味道真不可思議，獨和極有嚼勁的面搭配起來，獨讓人不禁想要一口接一口"
      },
      { 
        name:"巧克力蛋糕", 
        price: 50, 
        isLimited: false, 
        image: "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-hand-drawn-food-blueberry-chocolate-strawberry-cup-cake-paintedfoodblueberrycakechocolatestrawberrystrawberry-blueberry-cakestrawberry-png-image_674226.jpg",
        desrc: "在嘴裡慢慢的融化，這種口感是多麼細緻而高雅"
      },
      { 
        name:"司康", 
        price: 60, 
        isLimited: false, 
        image: "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-small-cake-cup-cake-illustration-image_1218683.jpg",
        desrc: "鮮美多汁的內餡<br/>加上香Q的皮，完美的搭配"
      },
      { 
        name: "草莓司康", 
        price: 60, 
        isLimited: true, 
        image: "https://png.pngtree.com/png-vector/20190121/ourmid/pngtree-cup-cake-west-point-dessert-dessert-cartoon-snack-png-image_515106.jpg",
        desrc: "材料簡單 味道獨特<br/>獨特的醬汁風味，值得一再品嚐"
      },
  ];
  return (
      <div className={Style.app}>
        <div className={Style.container}>
        <h1 className={Style.title}>超好咖啡廳</h1>
        <ul>
          {menu.map((item, index) => (
          <List key={item.name} item={item} index={index}></List>
          ))}
        </ul>
        </div>
      </div>
  );
}

export default App;
