"use client"

import React from "react";
import DataTable, { TableColumn } from "react-data-table-component"

type DataRow = {
  title: string;
  director: string;
  year: string
}

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Title',
    selector: row => row.title
  },
  {
    name: 'Director',
    selector: row => row.director
  },
  {
    name: 'Year',
    selector: row => row.year
  }
]
const data: DataRow[] = [
  {
    title: 'Spider man',
    year: '1988',
    director: 'Kimla'
  },
  {
    title: 'Ben 10',
    year: '1938',
    director: 'Davann'
  },
  {
    title: 'Power Ranger',
    year: '2008',
    director: 'Pheakkdey'
  }
]

export default function UserTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  )
}