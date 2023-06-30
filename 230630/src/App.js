import Counter from "./components/count";
import CountReducer from "./components/countReducer";
import TextMemo from "./components/textMemo";
import ThemeSwitcher from "./components/themeReducer";
import Timer from "./components/timer";
import ToggleTimer from "./components/timer1";

function App() {
  return(
    <div className="App">
      <h1>Get Started with Component lifecycle</h1>
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <TextMemo /> */}
      {/* <ToggleTimer /> */}
      {/* */}<CountReducer />
      {/* */}<ThemeSwitcher />
   </div>
  );
}

export default App;
