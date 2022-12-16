import Layout from '../components/layout.js';
import Link from 'next/link';



//question for later - is "lib" naming Next.js convention or optional? 
import { getPeopleIds, getData, getFriendList } from '../lib/data.js'


//create getstaticprops to return all the data for one person

export async function getStaticProps({ params }) {

    const personData = await getData(params.id);
    const friendData = await getFriendList(params.id)

    console.log("friend data on id page")
    console.log(friendData)

    return {
        props: {
            personData, friendData
        }
    };
}

//all possible URLs 
export async function getStaticPaths() {

    const dynamicPaths = getPeopleIds();

    return {
        paths: dynamicPaths,
        fallback: false
    };
}

//make a compoenent that will display the persons details at the dynamic route 

export default function Entry (  { personData , friendData } ){
    return (
        <Layout>
            <article className="card col-6">
                <div className="card-body">
                    <h4 className="card-title text-dark">
                        {personData.name}
                    </h4>
                    <h5 className="card-subtitle mb-2 text-muted"> 
                        {personData.job}
                    </h5>
                    <p className="card-text text-dark">{personData.name} was {personData.age} years old at the time of the Fellowship of the Ring.</p>
                    <a href={"mailto:" + personData.email} className="card-link text-primary"> Email {personData.name}</a>
                    <br/>
                    <h5 className="card-text text-dark">
                        Friends of {personData.name} :
                    </h5>
                    {console.log("friend data inside component")}
                    {console.log(friendData)}
                        {friendData &&
                            <div className="list-group">
                           

                            {friendData.map(({ friendId, friendName }) => (
                                <Link  key={friendId} href={`/${friendId}`}>
                                    <a className="list-group-item text-dark list-group-item-action"> {friendName} </a> 
                                </Link>
                            ))}
                            </div>
                        }        
                </div>
            </article>
        </Layout>
    )
}