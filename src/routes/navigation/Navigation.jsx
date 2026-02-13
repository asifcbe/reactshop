import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebaseutils";
import CartIcon from "../../components/carticon/CartIcon";
import CartDropDown from "../../components/cartdropdown/CartDropDown";
import { CartContext } from "../../contexts/CartContext";
function Navigation() {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} className="logo" alt="Crown Logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
  
        {isCartOpen&&<CartDropDown />}
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
