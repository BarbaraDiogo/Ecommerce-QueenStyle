import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import Sobre from "./pages/Sobre/Sobre";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Carrinho from "./pages/Carrinho/Carrinho";
import Contato from "./pages/Contato/Contato";
import Inicio from "./pages/Inicio/Inicio";
import Offer from "./pages/Offer/Offer";
import Pagamento from "./pages/Pagamento/Pagamento";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Produtos from "./pages/Produtos/Produtos";
import Troca from "./pages/Troca/Troca";

const Layout = () => {
  return (
    <div>
      <Header />
      <div  style={{ marginTop: "70px"}}></div>
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Ecommerce-QueenStyle" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Inicio />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/promocoes" element={<Offer />}></Route>
        <Route path="/produtos/:_id" element={<ProductDetails />}></Route>
        <Route path="/carrinho" element={<Carrinho />}></Route>
        <Route path="/pagamento" element={<Pagamento />}></Route>
        <Route path="/troca" element={<Troca />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
