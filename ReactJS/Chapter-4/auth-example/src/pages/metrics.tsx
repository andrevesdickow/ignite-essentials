import { GetServerSideProps } from "next"

import { withSSRAuth } from "../../utils/withSSRAuth"

export default function Metrics() {
  return (
    <>
      <h2>Metrics</h2>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  // const apiClient = setupAPIClient()
  // const response = apiClient.get('/me')

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
})