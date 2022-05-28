import Head from "next/head";
import EventItem from '@/components/EventItem';
import Layout from "@/components/Layout";//this way would be configure in jsconfig.json
import {API_URL} from '@/config/index'; //this way would be configure in jsconfig.json

export default function EventsPage({events}) {
    console.log(events)
    return (
        <Layout>
            <Head>
                <title>
                    DJ Events
                    <meta name="description" content="Welcome to DJ Events"/>
                </title>
            </Head>
            <h1> Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt.attributes}/>
            ))}
        </Layout>
    )
}


export async function getStaticProps() {
    const response = await fetch(`${API_URL}/api/events?populate=*&_sort=date:ASC`)
    const eventsData = await response.json()
    const events = eventsData.data;
    console.log('events: ', events)
    return {
        props: {events},
        revalidate: 1,
    }
}