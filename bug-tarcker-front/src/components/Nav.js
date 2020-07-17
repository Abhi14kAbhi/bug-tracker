import React from 'react';

const Navbar = props => {
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a href="#" class="navbar-brand">Bug Tracker</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon">

                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item ml-auto">
                        <a href="" class="nav-link">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

