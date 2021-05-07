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
                  <option default>Select a field</option>
                  <option value='1'>Project Managers</option>
                  <option value='2'>Engineers</option>
                  <option value='3'>UX/UI Designers</option>
                  <option value='4'>Data Scientists</option>
                  <option value='5'>Marketing</option>
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
                    <option value='1'>Gender</option>
                    <option value='2'>Job Title</option>
                    <option value='3'>Seniority</option>
                    <option value='4'>Country</option>
                    <option value='5'>Age</option>
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
