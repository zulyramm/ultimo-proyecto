import { NavLink } from "react-router-dom";

const ListsNavLink = ({ className = '', handleClickList = () => { }, handleClickNavLink = () => { } }) => {
  return (
    <ul
      className={`list ${className}`}
      onClick={handleClickList}
    >
      <li>
        <NavLink
          to="/productos"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          Productos
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/servicios"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          Servicios
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/nosotros"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          Nosotros
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacto"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          Contacto
        </NavLink>
      </li>
    </ul>
  );
};

export default ListsNavLink;