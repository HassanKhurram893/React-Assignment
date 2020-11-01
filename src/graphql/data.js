import gql from 'graphql-tag'

const data = gql`
  query {
    jobs {
      id
      title
      description
      applyUrl
      userEmail
      company {
        name
      }
    }
  }
`

export default data