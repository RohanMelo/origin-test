import ICONS from '../styles/icons';

export default function Navbar(): JSX.Element {
  return (
    <div className="w-full bg-white">
      <div className="py-4 pl-4 sm:py-6 sm:pl-14">
        <img
          src={ICONS.logo}
          alt="origin logo"
          className="responsive-logo"
          height="32"
          width="100"
          data-cy="nav-logo"
        />
      </div>
    </div>
  );
}
