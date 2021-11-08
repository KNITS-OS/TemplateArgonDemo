import { NavItem, NavLink } from "reactstrap";

const NavItemTabButton = ({ tabId, tab, setTab }) => {
  return (
    <NavItem>
      <NavLink
        data-toggle="tab"
        className={tabId === tab ? "active" : ""}
        onClick={() => setTab(tabId)}
        style={{ cursor: "pointer" }}
      >
        {tabId}
      </NavLink>
    </NavItem>
  );
};
export default NavItemTabButton;
