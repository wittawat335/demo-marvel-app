import { useState } from "react";
import { Route, Switch } from "wouter";

// Components
import { Navbar } from "@/components/Navbar";
import { Heroes, Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/heroes" component={Heroes} />
        </Switch>
      </Navbar>
    </>
  );
}

export default App;
