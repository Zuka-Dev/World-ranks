import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import styles from "./Country.module.css"
const getCountry = async (id) => {
    const apiResponse = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
    const country = await apiResponse.json()
    return country
}
const Country = ({ country }) =>{
    
    return <Layout title ={country.name}>
                <div className={styles.container}>
                    <div className={styles.container_left}>
                        <div className={styles.main_panel}>
                            <img src={country.flag} alt={country.name}/>
                            <h1 className={styles.main_name}>{country.name}</h1>
                            <div className={styles.main_region}>{country.region}</div>
                            <div className={styles.main_numberContainer}>
                                <div className={styles.main_population}>
                                    <div className={styles.main_value}>{country.population}</div>
                                    <div className={styles.main_label}>Population</div>
                                </div>
                                <div className={styles.main_area}>
                                    <div className={styles.main_value}>{country.area}</div>
                                    <div className={styles.main_label}>Area</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container_right}>
                        <div className={styles.details_panel}>
                            <h4 className={styles.details_panel_heading}>Details</h4>
                            <div className={styles.details_panel_row}>
                                <div className={styles.details_panel_label}>Capital</div>
                                <div className={styles.details_panel_value}>{country.capital}</div>
                            </div>
                            <div className={styles.details_panel_row}>
                                <div className={styles.details_panel_label}>Subregion</div>
                                <div className={styles.details_panel_value}>{country.subregion}</div>
                            </div>
                            <div className={styles.details_panel_row}>
                                <div className={styles.details_panel_label}>Language</div>
                                <div className={styles.details_panel_value}>{country.languages.map(({name})=> name).join(", ")}</div>
                            </div>
                            <div className={styles.details_panel_row}>
                                <div className={styles.details_panel_label}>Currencies</div>
                                <div className={styles.details_panel_value}>{country.currencies.map(({name, symbol})=> `${name}(${symbol})`).join(", ")}</div>
                            </div>
                            <div className={styles.details_panel_row}>
                                <div className={styles.details_panel_label}>Native name</div>
                                <div className={styles.details_panel_value}>{country.nativeName}</div>
                            </div>
                            <div className={styles.details_panel_row}>
                                <div className={styles.details_panel_label}>Gini</div>
                                <div className={styles.details_panel_value}>{country.gini}%</div>
                            </div>
                           
                            
                        </div>
                    </div>
                   
                    
                </div>
            </Layout>
}
export default Country

export const getServerSideProps = async ({params}) =>{
        const country = await getCountry(params.id)
    return {
        props:{
            country,
        }
    }
}