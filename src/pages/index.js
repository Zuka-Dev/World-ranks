import Head from 'next/head'
import { useState } from 'react'
import CountriesTable from '../components/CountriesTable/CountriesTable'
import Layout from '../components/Layout/Layout'
import SearchInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState('')
  const filterCountries = countries.filter(country =>
     country.name.toLowerCase().includes(keyword) ||
     country.region.toLowerCase().includes(keyword) ||
     country.subregion.toLowerCase().includes(keyword)
  )
  const inputChangeHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.count}>
                Found {countries.length} countries
        </div>
        <div className={styles.input}>
          <SearchInput placeholder="Filter by Name, Region or Sub Region" onChange={inputChangeHandler}/>
        </div>
      </div>
      
      <CountriesTable countries={filterCountries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const apiResponse = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await apiResponse.json();
  return {
    props: {
      countries
    }
  }
}