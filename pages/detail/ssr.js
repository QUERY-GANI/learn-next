export default function exampleSSR({ eg }) {
    return (
        <>
            <p>Example server side rendering, <i>{ eg }</i></p>
        </>
    )
}

export function getServerSideProps() {
    return { props: { eg: "komponen ini akan di buat setiap user request atau hit ke path \"/detail/ssr\"" } }
}
