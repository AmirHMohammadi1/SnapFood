import { useRoutes } from "react-router-dom";
import routes from "./Routes";

function App() {
  const router = useRoutes(routes);
  return (
    <div className="  m-auto ">
      <div className="m-auto mt-4 sm:py-0">{router}</div>
    </div>
  );
}

export default App;
