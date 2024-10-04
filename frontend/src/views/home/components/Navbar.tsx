import CurrentDate from './CurrentDate'
import CurrentTime from './CurrentTime'

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 mt-10 mb-5 justify-between items-center px-4 py-4 bg-green-100 bg-opacity-70 text-black shadow-md w-11/12 rounded-3xl">
      <CurrentDate />
      <CurrentTime />
    </nav>
  )
}

export default Navbar
