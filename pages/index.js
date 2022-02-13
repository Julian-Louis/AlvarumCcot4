import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import cheerio from "cheerio";
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default  function Home() {

    const { data, error } = useSWR('/api/donation', fetcher, { refreshInterval: 5000 })

    if (error) return <div>Failed to load</div>
        if (!data) return <div>Loading...</div>


  return (
      <div>
          <h1>{data.money}</h1>
      </div>
  )
}
