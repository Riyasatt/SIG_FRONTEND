import { Link, useLocation } from "react-router-dom";


export const links = [
      { value: 1, label: 'Home', to: '/' },
      { value: 2, label: 'About', to:'/about' },
      { value: 3, label: 'Eligibility', to: '/eligibility' },
      { value: 3, label: 'Apply', to: '/form' },
]

const NavLinks = () => {

      const location = useLocation()
  return (
    <>
      {links.map((link) => {
            return (
                  <Link className={`md:nav-animation gap-y-5 md:gap-y-0 w-full md:w-auto ${location.pathname === link.to && "text-customAccent"}`} key={link.value} to={link.to}>
                        {link.label}
                  </Link>
            )
      })}
    </>
  );
};

export default NavLinks;