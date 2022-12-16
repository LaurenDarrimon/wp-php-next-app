import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout.js';

import { getOrderedList } from '../lib/data';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const allPeople = getOrderedList();
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
        Welcome to Middle Earth Socials
      </h1>

      <p className={styles.description}>
        Virtual gathering for all the free peoples of middle earth.
      </p>

      <h2>Find Hobbits, Dwarves, Elves, Men, Wizards, and more!</h2>

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
