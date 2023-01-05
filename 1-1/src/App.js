import { ListContextProvider } from "./contexts/ListContext";
import Router from "./Router";

function App() {
  return (
    <ListContextProvider>
      <Router />
    </ListContextProvider>
  );
}

export default App;
