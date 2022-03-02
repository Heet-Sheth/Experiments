import { lazy, Suspense } from "react";
import "./App.css";
const Page = lazy(() => import("./Component/simplyPage.js"));

function App() {
  return (
    <Suspense className="App" fallback={<div>Wait...</div>}>
      <Page />
    </Suspense>
  );
}

export default App;
