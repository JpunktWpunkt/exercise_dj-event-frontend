import {useRouter} from "next/router";
import Layout from '../../components/Layout';

const EventPage = () => {
    const router = useRouter() //create a const router to use Router ^^

    console.log(router) //a lot of information about p.e. pathname usw....
    return (
        <Layout>
            <h1>My Event</h1>
            <h3>{router.query.slug}</h3>
        </Layout>
    );
}


export default EventPage;