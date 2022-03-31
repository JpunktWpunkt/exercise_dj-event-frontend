import Head from "next/head";
import Layout from "@/components/Layout";

export default function HomePage() {
    return (
        <Layout>
            <Head>
                <title>
                    DJ Events
                    <meta name="description" content="Welcome to DJ Events"/>
                </title>
            </Head>
            <h1>Home</h1>
        </Layout>
    )
}
