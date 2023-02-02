import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import './data-table-ocr.css';

const DataTableOCR = (props) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 50,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 50,
      },
      {
        accessorKey: 'dateOfBirth',
        header: 'Date of birth',
        size: 50,
      },
      {
        accessorKey: 'startDate',
        header: 'Start date',
        size: 50,
      },
      {
        accessorKey: 'street',
        header: 'Street',
        size: 50,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 50,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 50,
      },
      {
        accessorKey: 'zipcode',
        header: 'Zip code',
        size: 50,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 50,
      },
    ],
    []
  );

  return (
    <div className="table" style={{ width: '90%', margin: '0 auto' }}>
      <MaterialReactTable columns={columns} data={props.data} />
    </div>
  );
};

export default DataTableOCR;
