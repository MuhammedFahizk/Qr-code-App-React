interface Props {
    children : string
}
const Nav = ({children}: Props) => {
  return (
    <div>
        <nav className=" container">
            <h1 className=" py-3 text-success">
               {children}
            </h1>

        </nav>
    </div>
  )
}

export default Nav