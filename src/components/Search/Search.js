import React from 'react';
import './Search.css';
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectProfession, setSelectProfession] = useState('');

  const professionChangeHandler = (e) => {
    setSelectProfession(e.target.value);
  };

  const people = [
    {
      id: 1,
      name: 'Eddy',
      profession: 'Project Management',
      job_title: 'Junior Project Manager',
      seniority: 'junior',
      country: 'UK',
      age: 28,
    },
    {
      id: 2,
      name: 'Annie',
      profession: 'Data Science',
      job_title: 'Data Scientist',
      seniority: 'Senior',
      country: 'USA',
      age: 31,
    },
    {
      id: 3,
      name: 'Larry',
      profession: 'Web Developer',
      job_title: 'Web Developer',
      seniority: 'junior',
      country: 'UK',
      age: 21,
    },
    {
      id: 4,
      name: 'Jenny',
      profession: 'Project Management',
      job_title: 'Senior Project Manager',
      seniority: 'Senior',
      country: 'UK',
      age: 28,
    },
    {
      id: 5,
      name: 'Dominic',
      profession: 'Marketing',
      job_title: 'Marketing Manager',
      seniority: 'Senior',
      country: 'USA',
      age: 35,
    },
    {
      id: 6,
      name: 'Allison',
      profession: 'UX/UI',
      job_title: 'Senior Designer',
      seniority: 'Senior',
      country: 'UK',
      age: 32,
    },
    {
      id: 7,
      name: 'Nick',
      profession: 'Data Science',
      job_title: 'Data Scientist',
      seniority: 'Junior',
      country: 'USA',
      age: 19,
    },
  ];

  return (
    <div>
      <div className='container filters-block'>
        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <div className='card filter-card'>
              <div className='card-body'>
                <p>Team member search</p>
                <input
                  type='text'
                  placeholder="Search person's name..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                {/* <select
                  className='form-select'
                  aria-label='Default select example'
                  onChange={professionChangeHandler}>
                  <option disabled>Select a field</option>
                  <option value='Project Management'>Project Manager</option>
                  <option value='UX/UI'>UX/UI Designer</option>
                  <option value='Data Science'>Data Scientist</option>
                  <option value='Marketing'>Marketing</option>
                  <option value='Web Developer'>Web Developer</option>
                </select> */}
              </div>
              {/* <div className='card'>
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
              </div> */}
            </div>
          </div>
          <div className='col-xs-12 col-lg-6 filter-output'>
            <div className='card'>
              <div className='card-body'>
                <div className='form-floating'>
                  <div className='filter-output'>
                    <p>Team members' Details:</p>
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
                        return null;
                      })
                      .map((person, index) => (
                        <div className='display-items-listed' key={index}>
                          <div className='employee-profile'>
                            <div>
                              <span>Name:&nbsp;</span>
                              {person.name}
                            </div>
                            <div>
                              <span>Job Title:&nbsp;</span>
                              {person.job_title}
                            </div>

                            <div>
                              <span>Country:&nbsp;</span>
                              {person.country}
                            </div>
                          </div>
                        </div>
                      ))}
                    {/* <div>
                      <b>Employees by job:&nbsp;</b>
                      {people.map((person) =>
                        selectProfession === person.profession
                          ? person.name
                          : ''
                      )}
                    </div> */}
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

export default Search;
