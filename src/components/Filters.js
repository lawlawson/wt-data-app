import React from 'react';
import '../components/Filters.css';
import { useState } from 'react';

const Filters = () => {
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
      gender: 'Male',
      job_title: 'Junior Project Manager',
      seniority: 'junior',
      country: 'UK',
      age: 28,
    },
    {
      id: 2,
      name: 'Annie',
      profession: 'Data Science',
      gender: 'Female',
      job_title: 'Data Scientist',
      seniority: 'Senior',
      country: 'USA',
      age: 31,
    },
    {
      id: 3,
      name: 'Larry',
      profession: 'Web Developer',
      gender: 'Male',
      job_title: 'Web Developer',
      seniority: 'junior',
      country: 'UK',
      age: 21,
    },
    {
      id: 4,
      name: 'Jenny',
      profession: 'Project Management',
      gender: 'Female',
      job_title: 'Senior Project Manager',
      seniority: 'Senior',
      country: 'UK',
      age: 28,
    },
    {
      id: 5,
      name: 'Dominic',
      profession: 'Marketing',
      gender: 'Male',
      job_title: 'Marketing Manager',
      seniority: 'Senior',
      country: 'USA',
      age: 35,
    },
    {
      id: 6,
      name: 'Allison',
      profession: 'UX/UI',
      gender: 'Female',
      job_title: 'Senior Designer',
      seniority: 'Senior',
      country: 'UK',
      age: 32,
    },
    {
      id: 7,
      name: 'Nick',
      profession: 'Data Science',
      gender: 'Male',
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
                <p>Filters</p>
                <input
                  type='text'
                  placeholder='search employees...'
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <select
                  className='form-select'
                  aria-label='Default select example'
                  onChange={professionChangeHandler}>
                  <option disabled>Select a field</option>
                  <option value='Project Management'>Project Manager</option>
                  <option value='UX/UI'>UX/UI Designer</option>
                  <option value='Data Science'>Data Scientist</option>
                  <option value='Marketing'>Marketing</option>
                  <option value='Web Developer'>Web Developer</option>
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
                    <b>List of employees:</b>
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
                          {person.name}&nbsp;-{person.job_title}&nbsp;-
                          {person.gender}&nbsp;-{person.country}
                        </div>
                      ))}
                    <div>
                      <b>Employees by job:&nbsp;</b>
                      {people.map((person) =>
                        selectProfession === person.profession
                          ? person.name
                          : ''
                      )}
                    </div>
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
