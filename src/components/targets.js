import React from 'react';
import '../components/Targets.css';

function Targets() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <div className='dropdown'>
                  <button
                    className='btn btn-primary dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Targets
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.google.co.uk/'>
                        Target 1
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.google.co.uk/'>
                        Target 2
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.google.co.uk/'>
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
