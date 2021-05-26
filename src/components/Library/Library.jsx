import React, {useEffect, useState} from 'react';
import Table from '../Table/Table';

const Library = () => {

  const [tableData, setTableData] = useState([]);

  const getTableData = async () => {
   const res = await fetch('http://localhost:3004/books');
   const data = await res.json();
   setTableData(data)
  }

  useEffect(() => {
    getTableData();
  }, []);
  
  return (
   <Table data={tableData} />
  )
}

export default Library;