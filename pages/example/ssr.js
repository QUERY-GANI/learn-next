export default function exampleSSR({ eg }) {
    return (
        <>
            <p>Example server side rendering, <i>{ eg }</i></p>
        </>
    )
}

export function getServerSideProps() {
    return {
        props: {
            eg: "props ini akan di jalankan setiap client request ke path \"/detail/ssr\"\ndan komponen ini akan di generate ulang"
        }
    }
}
