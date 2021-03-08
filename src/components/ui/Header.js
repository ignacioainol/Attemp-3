import React from 'react'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img style={{ maxWidth: '12em' }} src="assets/images/home_yapo_logo.png" alt="" />
                </a>

                <div>

                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="btn btn-outline-primary" aria-current="page" href="#">Inicia Sesión</a>
                            </li>
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
