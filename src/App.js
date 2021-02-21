import Accordian from "./components/Accordian";
import Search from "./components/Search";
import "./styles.css";

const items = [
  { title: "Whatis React?", content: "React is frontend js framework" },
  { title: "Why React?", content: "Because react is fast" },
  { title: "How to use React?", content: "By creating components" }
];

export default function App() {
  return (
    <div className="App">
      <Accordian items={items} />
      <Search />
    </div>
  );
}
