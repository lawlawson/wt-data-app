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
                    Quarter
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'>
                    <li>Quarter 1</li>
                    <li>Quarter 2</li>
                    <li>Quarter 3</li>
                    <li>Quarter 4</li>
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
