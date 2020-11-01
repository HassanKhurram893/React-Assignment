import React from 'react'

function onClick(jobs)
{
  alert(jobs.description)
}

export function Jobslist({ jobs }) {
  return (
    <div>
      <table id='job'>
        <tr>
          <td>{jobs.title}</td>
          <td>{jobs.company.name}</td>
          <td>{jobs.userEmail}</td>
          <td><a href={jobs.applyUrl} target="_blank" >{jobs.applyUrl}</a></td>
          <td><button className='button button2' onClick={()=>{onClick(jobs)}}>Click to find out more</button></td>
        </tr>
  </table>
</div>
  )
}