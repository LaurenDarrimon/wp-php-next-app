import Head from 'next/head';
import Link from 'next/link';


export default function Layout({ children, home } ) {
    return (
        <div>
            <Head>
                <title>
                    Middle Earth Socials Next.js App
                </title>
            </Head>
            <main>{children}</main>
            {!home && (
                <Link href="/" className="btn btn-primary mt-3">Go to Home Page</Link>
                )
            }
        </div>
    );
}