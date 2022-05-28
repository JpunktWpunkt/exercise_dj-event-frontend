import Head from "next/head";
import Link from 'next/link';
import EventItem from '@/components/EventItem';
import Layout from "@/components/Layout";//this way would be configure in jsconfig.json
import {API_URL} from '@/config/index'; //this way would be configure in jsconfig.json
/*import {useEffect, useState} from 'react';*/

export default function HomePage({events}) {

    /*
        const [events, setEvents] = useState([]);
        useEffect(() => {
            fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=3`)
                .then((res) => res.json())
                .then(setEvents);
        }, []);*/

    console.log(events)
    return (
        <Layout>
            <Head>
                <title>
                    DJ Events
                    <meta name="description" content="Welcome to DJ Events"/>
                </title>
            </Head>
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt}/>
            ))}

            {events.length > 0 && (
                <Link href='/events'>
                    <a className='btn-secondary'>View all Events</a>
                </Link>
            )}
        </Layout>
    )

}


export async function getStaticProps() {
    const response = await fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=3&populate=*`)
    const data = await response.json()
    const events = data.data

    console.log(events)
    return {
        props: {events},
        revalidate: 1,
    }
}