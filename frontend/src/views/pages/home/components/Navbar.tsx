import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

const Navbar = () => {

  return (
    <nav className="flex -mt-5 mb-5 justify-between items-center px-4 py-2 bg-green-100 bg-opacity-70 text-black shadow-md w-11/12 rounded-3xl">
        <CurrentDate />
        <CurrentTime />
    </nav>
  );
};

export default Navbar;
