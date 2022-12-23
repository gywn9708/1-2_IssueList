import { ListContextProvider } from "./context/ListContext";
import Router from "./Router";

function App() {
  return (
    <ListContextProvider>
      <Router />
    </ListContextProvider>
  );
}

export default App;
