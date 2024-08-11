import SiteLogo from './modules/SiteLogo';
import MainMenu from './modules/MainMenu';
import MobileMenu from './modules/MobileMenu';

const TopBar = () => {
  return (
    <>
      <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
        <SiteLogo />
        <MainMenu />
        <MobileMenu />
      </header>
    </>
  );
}

export default TopBar;
