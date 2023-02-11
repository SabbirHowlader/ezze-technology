import Homes from "../Page/Home/Homes/Homes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Homes></Homes>
            }
        ]
    }
])

export default router;