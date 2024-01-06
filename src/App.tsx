import { useState } from "react";
import { Route, Switch } from "wouter";

// Components
import { Navbar } from "@/components/Navbar";
import { Heroes, Home, Test } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/heroes" component={Heroes} />
          <Route path="/test" component={Test} />
        </Switch>
      </Navbar>
    </>
  );
}

export default App;
