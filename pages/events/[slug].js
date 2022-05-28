import {useRouter} from "next/router";
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
import Link from 'next/Link';
import {FaPencilAlt, FaTimes} from 'react-icons/fa';
import styles from '@/styles/Event.module.css'
import Image from 'next/image';

const EventPage = ({evt}) => {
    console.log('slug.js line 10 evt: ', evt)
    const router = useRouter() //create a const router to use Router ^^
    const deleteEvent = (event) => {
        console.log('delete')
    }
    console.log('test: ', router) //a lot of information about p.e. pathname usw....
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
               {new Date(evt.attributes.date).toLocaleDateString('en-US')} at {evt.attributes.time}
            </span>
            <h1>{evt.attributes.name}</h1>
            {evt.attributes.image && (
                <div className={styles.image}>
                    <Image src={evt.image.data.attributes.formats.medium.url} width={960} height={600}
                           alt="Image description"/>
                </div>
            )}
            <h3>Performers:</h3>
            <p>{evt.attributes.performers}</p>
            <h3>Description:</h3>
            <p>{evt.attributes.description}</p>
            <h3>Venue: {evt.attributes.venue}</h3>
            <p>{evt.attributes.adress}</p>

            <Link href="/events">
                <a className={styles.back}>Go back</a>
            </Link>
        </Layout>
    );
}


export default EventPage;

export async function getServerSideProps({query: {slug}}) {
    const url = `${API_URL}/api/events?slug=${slug}`;
    console.log(url)
    const response = await fetch(url)
    const events = await response.json()
    console.log(events.data[0])
    return {
        props: {
            evt: events.data[0],
        },
    }
}

/*export async function getStaticProps({params: {slug}}) {
    console.log(slug)
    const response = await fetch(`${API_URL}/events?slug=${slug}`)
    const events = await response.json()


    return {
        props: {
            evt: events [0]
        },
        revalidate: 1

    }
}*/


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
