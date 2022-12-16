import Link from "next/link";

export async function getServerSideProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const data = await response.json();

    console.log(data)
    return {
        props: {data}
    }
}

export default function ({data}) {
    return (
        <>
            <h3>
                {data.name}
            </h3>

            <p>
                {data.address.city}
                <br/>
                {data.address.suite}
                <br/>
                {data.address.zipcode}
            </p>

            <Link href="/">Go Back</Link>
        </>
    );
}