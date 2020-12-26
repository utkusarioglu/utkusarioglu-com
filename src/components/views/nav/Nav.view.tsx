import { navItems } from './Nav.constants';
import ReactGa from 'react-ga';
import './Nav.view.scss';

const NavView = () => {
  return (
    <div {...{ className: 'nav' }}>
      <nav>
        {navItems &&
          navItems.map(({ order, link, title }) => {
            return (
              <ReactGa.OutboundLink
                {...{
                  className: 'nav__link',
                  key: order,
                  eventLabel: `${title}Visit`,
                  to: link,
                  target: '_blank',
                }}
              >
                {title}
              </ReactGa.OutboundLink>
            );
          })}
      </nav>
    </div>
  );
};

export default NavView;
