import logo from '../../images/Multid.png';
import "./navBar.css"


function Navbar() {
//   let [prevScroll, setPrevScroll] = useState(0)


//   useEffect(() => {
//     window.addEventListener('scroll', ()=>{
//         setPrevScroll(window.scrollY)
//     })
// },[prevScroll])
// className={`padre ${prevScroll>0?"color":"transparent"}`}

  return (
    <div>
      <nav className='padre color'>
      <a href="#" className='logo'>
        <img src={logo} alt='logo'/>
        </a>
        <input className='menu-btn' type='checkbox' id ='menu-btn'/>
        <label className="menu-icon" for='menu-btn'>
          <span className="nav-icon"></span>
        </label>
        <ul className='menu'>
          <li><a href='#' className='active'>Home</a></li>
          <li>
            <a href='#' className='active'>Service</a>
            </li>
          <li>
            <a href='#' className='active'>Work</a>
            </li>
          <li>
            <a href='#' className='active'>About Us</a>
            </li>
          <li>
            <a href='#' className='active'>Contact</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;