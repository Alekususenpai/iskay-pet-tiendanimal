import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import menuIcon from '../../assets/Menu.svg';
import searchIcon from '../../assets/Search.svg';
import loginIcon from '../../assets/Login.svg';
import cartIcon from '../../assets/Cart.svg';

function Header() {

  const activeStyle = 'text-primary underline underline-offset-8 decoration-4';
  const inactiveStyle = 'text-gray-600 hover:text-primary';

  return (
    <header className="bg-white">
      <div className="flex justify-between items-center p-4 md:px-8 border border-bottom">
        <img src={menuIcon} alt="Menu" className="h-6 w-6 md:order-1" />
        <img src={searchIcon} alt="Search" className="h-6 w-6 md:mr-6 md:order-3" />
        <Link to="/" className="md:order-2 md:flex md:justify-center md:w-full md:ml-24">
          <img src={logo} alt="Tiendanimal" className="h-7 outline-none" />
        </Link>
        <img src={loginIcon} alt="Login" className="h-6 w-6 md:mr-6 md:order-4" />
        <img src={cartIcon} alt="Cart" className="h-7.5 w-7.5 md:order-5" />
      </div>
      <nav className="flex flex-nowrap overflow-x-auto px-2 pt-5 pb-2 whitespace-nowrap custom-scrollbar md:justify-center md:gap-10">
        <NavLink
          to="/perfil"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle) + ' px-4'}
        >
          Mis datos
        </NavLink>
        <NavLink
          to="/tareas"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle) + ' px-4'}
        >
          Mis tareas
        </NavLink>
        <NavLink
          to="/devoluciones"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle) + ' px-4'}
        >
          Mis devoluciones
        </NavLink>
        <NavLink
          to="/comunicaciones"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle) + ' px-4'}
        >
          Mis comunicaciones
        </NavLink>
        <NavLink
          to="/mascotas"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle) + ' px-4'}
        >
          Mis mascotas
        </NavLink>
      </nav>
    </header>

  );
}

export default Header;
