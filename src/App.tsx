import { useState } from "react";
import { Route, Switch } from "wouter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Components
import { Navbar } from "@/components/Navbar";
import { Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Navbar>
    </>
  );
}

export default App;
