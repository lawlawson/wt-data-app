import React from 'react';
import '../components/Filters.css';
import { useState } from 'react';

const Filters = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const people = [
    {
      id: 1,
      name: 'Eddy',
      profession: 'project management',
      gender: 'male',
      job_title: 'junior project manager',
      seniority: 'junior',
      country: 'UK',
      age: 28,
    },
    {
      id: 2,
      name: 'Annie',
      profession: 'Data Science',
      gender: 'female',
      job_title: 'Data Scientist',
      seniority: 'senior',
      country: 'USA',
      age: 31,
    },
    {
      id: 3,
      name: 'Larry',
      profession: 'Web',
      gender: 'male',
      job_title: 'Web Developer',
      seniority: 'junior',
      country: 'UK',
      age: 21,
    },
  ];

  return (
    <div>
      <div className='container filters-block'>
        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <div className='card filter-card'>
              <div className='card-body'>
                <p>Filters</p>
                <input
                  type='text'
                  placeholder='search...'
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <select
                  className='form-select'
                  aria-label='Default select example'>
                  <option disabled>Select a field</option>
                  <option value='1'>Project Manager</option>
                  <option value='2'>Engineer</option>
                  <option value='3'>UX/UI Designer</option>
                  <option value='4'>Data Scientist</option>
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
                    <option disabled>Select one or more options</option>
                    <option value='1'>Gender</option>
                    <option value='2'>Job Title</option>
                    <option value='3'>Seniority</option>
                    <option value='4'>Country</option>
                    <option value='5'>Age</option>
                  </select>
                </div>
                <div>
                  <button
                    type='submit'
                    value='Submit'
                    className='btn btn-success'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-6 filter-output'>
            <div className='card'>
              <div className='card-body'>
                <div className='form-floating'>
                  <div className='filter-output'>
                    <b>This is where the data should go:</b>
                    {people
                      .filter((person) => {
                        if (searchTerm === '') {
                          return person;
                        } else if (
                          person.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return person;
                        }
                      })
                      .map((person, index) => (
                        <div className='display-items-listed' key={index}>
                          {person.name}
                        </div>
                      ))}
                    {/* {people
                      .filter((person) => person.seniority === 'junior')
                      .map((filteredPerson, index) => (
                        <li key={index}>{filteredPerson.name}</li>
                      ))} */}
                  </div>
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
