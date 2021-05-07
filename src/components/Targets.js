import React from 'react';
import '../components/Targets.css';

const Targets = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <div className='dropdown'>
                  <button
                    className='btn btn-danger dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Target
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Quarter 1
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Quarter 2
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Quarter 3
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Quarter 4
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
};

export default Targets;
