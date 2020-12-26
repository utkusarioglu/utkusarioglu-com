import { navItems } from './Nav.constants';
import './Nav.view.scss';

const NavView = () => {
  return (
    <div {...{ className: 'nav' }}>
      <nav>
        {navItems &&
          navItems.map(({ order, link, title }) => {
            return (
              <a
                {...{
                  key: order,
                  className: 'nav__link',
                  href: link,
                  target: '_blank',
                }}
              >
                {title}
              </a>
            );
          })}
      </nav>
    </div>
  );
};

export default NavView;
