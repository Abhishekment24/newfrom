import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container-fluid pt-4">
                    <Link className="navbar-brand ps-5" to="home">Club Wealth</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="cats">Cats</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="covid">Covid</Link>
                            </li>

                            <li className="nav-item">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                                        Star Wars
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">

                                        <Dropdown.Item href="#/action-2"><Link className="nav-link " aria-current="page" to="films">Films</Link></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><Link className="nav-link " aria-current="page" to="starwars">People</Link></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><Link className="nav-link " aria-current="page" to="planets">Planets</Link></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><Link className="nav-link " aria-current="page" to="species">Species</Link></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><Link className="nav-link " aria-current="page" to="vehicles">Vehicles</Link></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><Link className="nav-link " aria-current="page" to="starships">Starships</Link></Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                        </ul>

                        <ul className="navbar-nav pe-5 mb-2 mb-lg-0">

                            {props.userData ?
                                <li className="nav-item">
                                    <span onClick={props.logOut} className="nav-link pe-5 pointer">Logout</span>
                                </li>
                                : <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="login">Login</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="register">Register</Link>
                                    </li>

                                </>}  {/*but if not user data show this items */}

                        </ul>


                    </div>
                </div>
            </nav>
        </>
    )
}
