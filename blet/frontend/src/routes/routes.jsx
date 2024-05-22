import Layout from "../layout/Layout";
import Home from "../pages/Home/Index";
import Basket from "../pages/basket/Basket";
import Wishlist from "../pages/wishlist/Wishlist";

const router=[

  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      }
    ]
  },
]

export default router