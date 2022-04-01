import Head from "next/head";
import Layout from "@/components/Layout";
import {API_URL} from '@/config/index';

export default function HomePage() {
    return (
        <Layout>
            <Head>
                <title>
                    DJ Events
                    <meta name="description" content="Welcome to DJ Events"/>
                </title>
            </Head>
            <h1>Upcoming Events</h1>
        </Layout>
    )

}


export async function getServerSideProps() {
    const response = await fetch(`${API_URL}/api/events`)
    const events = await response.json()
    console.log(events)
    return {
        props: {},
    }
}