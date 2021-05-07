import React from 'react';
import '../components/Filters.css';

const Filters = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <p>Filters</p>
                <select
                  className='form-select'
                  aria-label='Default select example'>
                  <option default>Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <p>Filters (to exclude)</p>
                  <select
                    className='form-select'
                    multiple
                    aria-label='multiple select example'>
                    <option default>Select one or more options</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
                <div>
                  <button type='button' className='btn btn-success'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <div className='form-floating'>
                  <textarea
                    className='form-control'
                    placeholder='Leave a comment here'
                    id='floatingTextarea'
                    value='Some data should be dynamically rendered here'
                    readOnly={true}
                  />
                  <label htmlFor='floatingTextarea'>Data output</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
