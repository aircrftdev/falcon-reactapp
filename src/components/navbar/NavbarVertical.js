import React, { useContext, useEffect, useRef } from 'react';
import { Button, Collapse, CustomInput, Nav, Navbar } from 'reactstrap';
import Scrollbar from 'react-scrollbars-custom';
import Logo from './Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';
import AppContext from '../../context/Context';
import Flex from '../common/Flex';
import routes from '../../routes';
import { navbarBreakPoint } from '../../config';

const NavbarVertical = () => {
  const navBarRef = useRef(null);

  const {
    isFluid,
    setIsFluid,
    isRTL,
    setIsRTL,
    isDark,
    setIsDark,
    showBurgerMenu,
    isNavbarVerticalCollapsed,
    setIsNavbarVerticalCollapsed
  } = useContext(AppContext);

  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  //Control Component did mount and unmount of hover effect
  if (isNavbarVerticalCollapsed) {
    HTMLClassList.add('navbar-vertical-collapsed');
  }

  useEffect(() => {
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };

  return (
    <Navbar expand={navbarBreakPoint} className="navbar-vertical navbar-glass" light>
      <Flex align="center">
        <ToggleButton
          isNavbarVerticalCollapsed={isNavbarVerticalCollapsed}
          setIsNavbarVerticalCollapsed={setIsNavbarVerticalCollapsed}
        />
        <Logo at="navbar-vertical" width={40} />
      </Flex>

      <Collapse
        navbar
        isOpen={showBurgerMenu}
        className="bg-200"
        innerRef={navBarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          clearTimeout(time);
          HTMLClassList.remove('navbar-vertical-collapsed-hover');
        }}
      >
        <Scrollbar
          style={{ height: 'calc(100vh - 77px)', display: 'block' }}
          rtl={isRTL}
          trackYProps={{
            renderer(props) {
              const { elementRef, ...restProps } = props;
              return <span {...restProps} ref={elementRef} className="TrackY" />;
            }
          }}
        >
          <Nav navbar vertical>
            <NavbarVerticalMenu routes={routes} />
          </Nav>
          <div className={`settings px-3 px-${navbarBreakPoint}-0`}>
            <hr className="border-300 my-3" />
            <h6 className="text-uppercase fs--2 font-weight-semi-bold ls text-600">Settings</h6>
            <div
              className="bg-light border py-card rounded"
              style={{ paddingLeft: '1.4375rem', paddingRight: '1.4375rem' }}
            >
              <CustomInput
                type="checkbox"
                id="dark"
                name="dark"
                label="Dark Mode"
                checked={isDark}
                onChange={({ target }) => setIsDark(target.checked)}
              />
              <CustomInput
                type="checkbox"
                id="rtl"
                name="rtl"
                label="RTL Layout"
                checked={isRTL}
                onChange={({ target }) => setIsRTL(target.checked)}
              />
              <CustomInput
                type="checkbox"
                id="fluid"
                name="fluid"
                label="Fluid Container"
                checked={isFluid}
                onChange={({ target }) => setIsFluid(target.checked)}
              />
            </div>
            <Button
              tag={'a'}
              href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template-react/"
              target="_blank"
              color="primary"
              size="sm"
              block
              className="my-3 btn-purchase"
            >
              Purchase
            </Button>
          </div>
        </Scrollbar>
      </Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
