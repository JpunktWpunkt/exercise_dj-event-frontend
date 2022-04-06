import {useRouter} from "next/router";
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
import Link from 'next/Link';
import {FaPencilAlt, FaTimes} from 'react-icons/fa';
import styles from '@/styles/Event.module.css'
import Image from 'next/image';

const EventPage = ({evt}) => {
    const router = useRouter() //create a const router to use Router ^^
    const deleteEvent = (event) => {
        console.log('delete')
    }
    console.log(router) //a lot of information about p.e. pathname usw....
    return (
        <Layout>
            <div className="styles.event">
                <div className="styles.controls">
                    <Link href={`/events/edit/{evt.id}`}>
                        <a>
                            <FaPencilAlt/> Edit Event
                        </a>
                    </Link>
                    <a href="#" className={styles.delete}
                       onClick={deleteEvent}>
                        <FaTimes/> Delete Event
                    </a>
                </div>
            </div>
            <h3>{router.query.slug}</h3>
            <span>
                {evt.date} at {evt.time}
            </span>
            <h1>{evt.name}</h1>
            {evt.image && (
                <div className={styles.image}>
                    <Image src={evt.image} width={960} height={600}/>
                </div>
            )}
            <h3>Performers:</h3>
            <p>{evt.performers}</p>
            <h3>Description:</h3>
            <p>{evt.description}</p>
            <h3>Venue: {evt.venue}</h3>
            <p>{evt.adress}</p>

            <Link href="/events">
                <a className={styles.back}>Go back</a>
            </Link>
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
