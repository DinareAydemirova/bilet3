import Layout from "../layout/Layout";
import Home from "../pages/Home/Index";
import Admin from "../pages/admin/Index";
import Detail from "../pages/admin/detail/Index";
import Post from "../pages/admin/post/Index";
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
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/:id",
    element:<Detail/>
  },
  {
    path:"/post",
    element:<Post/>
  }
]

export default router