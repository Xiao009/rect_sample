import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    //因为单单加head这种源文件修改和div一起，不能单独return其中一个，只能总体return
    // 一个类似div的格式，所以加了个《》《/》
    <> 
     <Head>
        <title>Xiao Space | Home</title>
        <meta name="keywords" content="xiao"/>
    </Head>
    <div className = {styles.container}>
      <h1 className = {styles.title}>
        homepage
      </h1>
      <p className = {styles.text}>
        lollkjkkjljkljkj
      </p >
      <p className = {styles.text}>
        lollkjkkjljkljkj
      </p>
      <Link href='/testcase'>
        <span className = {styles.btn}>see more testcase</span>
      </Link>
    </div>
    </>
  )
}
