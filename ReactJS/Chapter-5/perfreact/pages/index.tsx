import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'

type Products = Array<{
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
}>

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Products>([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data: Products = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map(product => ({
      ...product,
      priceFormatted: formatter.format(product.price)
    }))

    setResults(products)
  }

  const addToWishlist = useCallback((id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />

        <button type="submit">Search</button>
      </form>

      <SearchResults
        results={results}
        onAddToWishlist={addToWishlist}
      />
    </div>
  )
}

export default Home
