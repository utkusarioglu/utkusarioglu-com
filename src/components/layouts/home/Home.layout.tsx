import NavView from '../../views/nav/Nav.view';
import HeaderView from '../../views/header/Header.view';
import './Home.layout.scss';

function HomeLayout() {
  return (
    <div {...{ className: 'home' }}>
      <HeaderView />
      <NavView />
    </div>
  );
}

export default HomeLayout;
