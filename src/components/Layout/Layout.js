import Head from "next/head"
import styles from "./Layout.module.css"
import Link from "next/link"
import { Brightness6Rounded } from "@material-ui/icons"
import { useEffect, useState } from "react"

const Layout = ({ children, title = "World Rankings " }) =>{
    const [theme, setTheme] = useState('light')
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', localStorage.getItem("theme"));
        setTheme(localStorage.getItem("theme"))
    },[])
    const switchTheme = () =>{
        if(theme === "light"){
            saveTheme("dark")
        }else{
            saveTheme("light")
        }
    }
    const saveTheme = (theme) =>{
        setTheme(theme)
            document.documentElement.setAttribute('data-theme', theme);
    }
     return(
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Link href="/">World Rankings</Link>
                <button onClick={switchTheme} className={styles.themeSwitcher}><Brightness6Rounded /></button>
            </header>
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
            &#169;CopyRights 2021 Ltd. 
            </footer>
        </div>
     )
}
export default Layout;