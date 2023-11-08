// First we import our components from our components folder.
import Navbar from "./components/navBar";


// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `App` and rendering it in the return method.
function App() {
  return <Navbar />;
}

export default App;
