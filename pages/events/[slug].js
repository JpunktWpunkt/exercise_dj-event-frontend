import {useRouter} from "next/router";
import Layout from '../../components/Layout';
import {API_URL} from '/config/index';

const EventPage = ({evt}) => {
    const router = useRouter() //create a const router to use Router ^^

    console.log(router) //a lot of information about p.e. pathname usw....
    return (
        <Layout>
            <h1>{evt.name}</h1>
            <h3>{router.query.slug}</h3>
        </Layout>
    );
}


export default EventPage;

export async function getStaticPaths() {
    const response = await fetch(`${API_URL}/api/events `)
    const events = await response.json()

    const paths = events.map((evt) => ({
        params: {slug: evt.slug}
    }))
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params: {slug}}) {
    console.log(slug)
    const response = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await response.json()


    return {
        props: {
            evt: events [0]
        },
        revalidate: 1

    }
}


/*
export async function getServerSideProps({query: {slug}}) {
    console.log(slug)
    const response = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await response.json()


    return {
        props: {
            evt: events [0]
        },

    }
}*/
