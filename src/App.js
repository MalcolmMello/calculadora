import { StateProvider } from "./contexts/StateContext";
import { Calc } from './components/Calc'

function App() {
  return (
    <StateProvider>
      <Calc />
    </StateProvider>
  );
}

export default App;
