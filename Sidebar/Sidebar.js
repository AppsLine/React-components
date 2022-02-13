import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import './Sidebar.scss';

const Sidebar = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [navActive, setNavActive] = useState();
  const [visible, setVisible] = useState(true);

  const onClickNavHandle = (nav, isSubNav = false) => {
    let redirect = true;

    if (nav.onClick) {
      redirect = nav.onClick();
    }

    if (redirect && nav.path) {
      history.push(nav.path);
    }

    if (!isSubNav) {
      if (navActive === nav)
        setNavActive(undefined)
      else
        setNavActive(nav)
    }
  }

  const isNavOptionsInsideLocation = (nav) => {
    let isLocation = false;

    const verify = (path) => {
      return location.pathname === path;
    }

    if (nav.path) {
      if (verify(nav.path)) {
        isLocation = true;
      }
    }
    else if (Array.isArray(nav.options)) {
      nav.options.forEach(option => {
        if (option.path) {
          if (verify(option.path)) {
            isLocation = true;
          }
        }
      })
    }

    if(Array.isArray(nav.activePath)) {
      nav.activePath.forEach(path => {
        if (verify(path)) {
          isLocation = true;
        }
      })
    }

    return isLocation;
  }

  const subMenuOptions = () => {
    if (navActive) {
      const options = navActive.options;
      if (Array.isArray(options)) {
        return options.map((subNav, key) => {
          return (
            <div
              key={key}
              className={`option ${isNavOptionsInsideLocation(subNav) && 'location-pathname'}`}
            >
              <button
                className='navbar-brand btn'
                onClick={() => onClickNavHandle(subNav, true)}
              >
                <i className={subNav.icon}></i> <span>{subNav.title}</span>
              </button>
            </div>
          )
        })
      }
    }
    return null;
  }

  const btnToggle = () => {
    setVisible(!visible);
  }

  return (
    <div className={`Sidebar col-md-2 px-0 ${visible ? 'show' : 'hide'}`}>
      <div className='header'>
        <img src={logo} className='logo px-2' alt='logo' />
        <button
          onClick={btnToggle}
          className="btn-toggle"
        >
          <i className="fas"></i>
        </button>
      </div>
      <div className="nav">
        <div className='icons'>
          {props.nav.options.map((nav, key) => {
            return (
              <div
                key={key}
                className={`icon ${navActive === nav && 'active'} ${isNavOptionsInsideLocation(nav) && 'location-pathname'}`}
                onClick={() => onClickNavHandle(nav)}
              >
                <i className={nav.icon}></i>
              </div>
            )
          })
          }
        </div>
        <div className={`titles ${navActive === undefined && 'enabled'}`}>
          {props.nav.options.map((nav, key) => {
            return (
              <div
                key={key}
                className={`title ${navActive === nav && 'active'} ${isNavOptionsInsideLocation(nav) && 'location-pathname'}`}
                onClick={() => onClickNavHandle(nav)}
              >
                <span>{nav.title}</span>
              </div>
            )
          })
          }
        </div>
        <div className={`options ${(navActive && navActive.options) && 'active'} ${(navActive !== undefined && isNavOptionsInsideLocation(navActive)) && 'location-pathname'}`}>
          {(navActive && navActive.options) &&
            <span className='title'>{navActive?.title}</span>
          }
          {subMenuOptions()}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;