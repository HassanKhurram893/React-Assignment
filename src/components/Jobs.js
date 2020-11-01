import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Jobslist } from './joblist'
import data from '../graphql/data'
import Appheader from './Appheader'

function Jobs() {
  const { data: { jobs = [] } = {} } = useQuery(data)
  return (
    <div>
            <Appheader />
            {jobs.map((jobs) => (
              <Jobslist key={jobs.id} jobs={jobs} />
            ))}
    </div>
  )
}

export default Jobs