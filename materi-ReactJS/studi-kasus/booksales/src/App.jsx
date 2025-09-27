import { RouterProvider } from "react-router-dom";
import {router} from "./routers";

function App() {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;