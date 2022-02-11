import { useEffect } from 'react'
import { GetServerSideProps } from 'next'

import { withSSRAuth } from '../../utils/withSSRAuth'
import { useAuth } from '../contexts/AuthContext'
import { api } from '../services/apiClient'
import { Can } from '../components/Can'

export default function Dashboard() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h2>Dashboard: {user?.email}</h2>

      <button onClick={signOut}>Signout</button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  // const apiClient = setupAPIClient()
  // const response = apiClient.get('/me')

  return {
    props: {}
  }
})