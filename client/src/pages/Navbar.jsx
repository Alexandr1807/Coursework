import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper red accent-4">
        <a href="#" class="brand-logo">Main</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/auth/signin">Sign in</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
