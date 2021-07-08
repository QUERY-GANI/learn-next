export default function dynamicRoutes({ id }) {
    return (
        <>
            <small>ID: { id }</small>
            <p>Ini dynamic route bwang</p>
        </>
    )
}

export function getStaticProps({ params: { test } }) {
    return { props: { id: test } }
}

export async function getStaticPaths() {
    const paths = [1, 2, 3, 4, 5].map(id => ({ params: { test: id.toString() } }))

    // fallback: false berarti untuk route selain 1 - 5 tampilkan 404 page
    return { paths, fallback: false }
}