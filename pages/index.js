import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout.js';

import { getOrderedList } from '../lib/data';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const allPeople = await getOrderedList();
  return{
    props: {
      allPeople
    }
  }
}

export default function Home({ allPeople }) {
  return (
    <Layout home>
      <h1 className={styles.title}>
        Yar Welcome to the Pirate Blog 
      </h1>

      <p className={styles.description}>
        Yo ho!  A pirates life for me. 
      </p>

      <h2>Content used with love from <a href="https://pirateipsum.me/"> PirateIpsum.me </a></h2>

      <div className="list-group">
        {allPeople.map(({ id, name}) => (
          <Link  key={id} href={`/${id}`}>
            <a className="list-group-item list-group-item-action"> {name} </a> 
          </Link>
        ))}
      </div>
    </Layout>
  )
}
