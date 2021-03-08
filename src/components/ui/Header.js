import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'


export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">
                    
                </a> */}

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img style={{ maxWidth: '12em' }} src="assets/images/home_yapo_logo.png" alt="" />
                </Link>

                <div>

                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link
                                to="login"
                                className="btn btn-outline-primary">
                                Iniciar Sesión
                            </Link>
                            <li>
                                &nbsp;
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-dark" href="#">Publica tu Aviso</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}
