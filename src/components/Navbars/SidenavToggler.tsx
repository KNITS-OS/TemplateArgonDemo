import classnames from "classnames";
import { NavItem } from "reactstrap";
import { toggleSidenav } from "redux/features/sidenav/sidenavSlice";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { Theme } from "types/types";

interface Props {
  theme: Theme;
}

const SidenavToggler = ({ theme }: Props) => {
  const { isSidenavOpen } = useAppSelector(state => state.sidenav);
  const dispatch = useAppDispatch();
  return (
    <NavItem className="d-xl-none">
      <div
        className={classnames(
          "pr-3 sidenav-toggler",
          { active: isSidenavOpen },
          { "sidenav-toggler-dark": theme === "dark" },
        )}
        onClick={() => dispatch(toggleSidenav())}
      >
        <div className="sidenav-toggler-inner">
          <i className="sidenav-toggler-line" />
          <i className="sidenav-toggler-line" />
          <i className="sidenav-toggler-line" />
        </div>
      </div>
    </NavItem>
  );
};
export default SidenavToggler;
