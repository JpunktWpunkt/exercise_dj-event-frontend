import Head from "next/head";
import Layout from "@/components/Layout";//this way would be configure in jsconfig.json
import {API_URL} from '@/config/index'; //this way would be configure in jsconfig.jso

export default function HomePage({events}) {
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
            {events.map(evt => (<h3 key={evt.id}>{evt.name}</h3>
            ))}
        </Layout>
    )

}


export async function getStaticProps() {
    const response = await fetch(`${API_URL}/api/events`)
    const events = await response.json()
    console.log(events)
    return {
        props: {events},
        revalidate: 1,
    }
}