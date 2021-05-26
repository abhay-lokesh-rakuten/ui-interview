import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import {headers} from './constants';

import {getUniqueOptions} from '../utils';


const Table = ({data }) => {
  const [showSearch, setShowSearch] =useState(false);
  const [dropdownOptions, setDropdownOptions] =useState([]);

  const dateFormat = date => new Date(date).toLocaleDateString();

  const [filteredData, setfilteredData] = useState(data);

  useEffect(() => {
    setfilteredData(data);
  }, [data]);



  const renderStatus = date => {
    const currentDate = new Date();
    const returnDate = date?.returnDate;
    const issueDate = date?.issueDate;
  }

  const searchData = () => {
    setShowSearch((prev) =>  !prev);
  }

  const searchBooks = e => {
    const value = e.target.value;
    const updatedValues = data.filter(eachItem => {
      return eachItem.bookName.toLowerCase().includes(value.toLowerCase());
    });
    setfilteredData(updatedValues);
  }

  const filterByDropdown = e => {
    const value = e.target.value;
    const updatedValues = data.filter(eachItem => {
      return eachItem.publisher.toLowerCase() === value;
    });
    setfilteredData(updatedValues);
  }

  const renderdropdowns = (options) => (
    <select onChange={filterByDropdown}>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </select>
  )

  const renderHeaders = header => {
    if (header.filterBy === 'search') {
      return (
        <> 
        <Header header={header} handleClick={searchData}  />
         {showSearch && <input type="text" onChange={searchBooks} />}
         </>
      )
    }

    if (header.filterBy === 'dropdown') {
     return (
      <>
      <Header header={header} handleClick={searchDataByDropdown}  />
      {dropdownOptions.length ? renderdropdowns(dropdownOptions) : null}
      </>
     )
    }
    return (
      <Header header={header} handleClick={searchDataByDropdown} /> 
    )
  }

  const searchDataByDropdown = () => {
    const options = getUniqueOptions(data);
    setDropdownOptions(options);
  }
  return(
    <table>
      <thead>
        {headers.map(header => (
          <th key={`header-${header.label}`}>
            {renderHeaders(header)}
          </th>
        ))}
      </thead>
      {filteredData.length && (
        <tbody>
          {filteredData.map(eachData =>  (
              <tr key={`data-${eachData.bookId}-${eachData.id}`}>
                <td>{eachData.bookId}</td>
                <td>{eachData.bookName}</td>
                <td>{eachData.publisher}</td>
                {eachData.date && (
                  <>
                  <td>{dateFormat(eachData.date.issueDate)}</td>
                  {eachData.date.returnDate && <td>{dateFormat(eachData.date.returnDate)}</td>}
                  </>
                )}
                 <td>{renderStatus(eachData.date)}</td>
              </tr>
            )
          )}
        </tbody>
      )}

    </table>
  )
}

export default Table;