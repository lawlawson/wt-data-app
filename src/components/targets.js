import React from 'react';
import '../components/Targets.css';

function Targets() {
  return (
    <div>
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <div class='card'>
              <div class='card-body'>
                <div class='dropdown'>
                  <button
                    class='btn btn-primary dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Targets
                  </button>
                  <ul
                    class='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'>
                    <li>
                      <a class='dropdown-item' href='https://www.google.co.uk/'>
                        Target 1
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='https://www.google.co.uk/'>
                        Target 2
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='https://www.google.co.uk/'>
                        Target 3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Targets;
