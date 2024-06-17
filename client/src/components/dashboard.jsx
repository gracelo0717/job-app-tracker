import React from 'react';
import { useState } from 'react';
import Sidebar from './sidebar';

const dashboard = () => {
  const [dateApplied, setDateApplied] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setDateApplied(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
  };

  return (
    <div>
      <div className='main'>
        <div className='form_box'>
          <form className='inputs'>
            {' '}
            Job Application Form:
            <input
              type='text'
              className='company_name'
              placeholder='Company Name: '
            ></input>
            <input
              type='date'
              id='start'
              name='date_applied'
              value={dateApplied}
              min='2024-01-01'
              max='2028-12-31'
              onChange={handleOnChange}
            />
            <form className='status'>
              <select name='Status' id='status'>
                <option value='' disabled selected hidden>
                  Select App Status...
                </option>
                <option value='Applied'>Applied</option>
                <option value='Intial Interview'>Inital Interview</option>
                <option value='Second Interview'>Second Interview</option>
                <option value='Rejected'>Rejected</option>
                <option value='Have not heard back'>Have not heard Back</option>
                <option value='Other'>Other</option>
              </select>
            </form>
            <input type='text' className='role' placeholder='Role: '></input>
            <button type='submit' className='btn' onSubmit={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div className='app_list'>
          application list
          <div class='row'>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
          </div>
          <div class='row'>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
          </div>
          <div class='row'>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
          </div>
          <div class='row'>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
          </div>
          <div class='row'>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
            <div class='cell'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;