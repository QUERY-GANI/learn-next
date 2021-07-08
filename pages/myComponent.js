export default function customComponent({ customProps }) {
    return (
        <>
            <p>Hello Next.js</p>
            <code>{ customProps }</code>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            customProps: "ini custom props gitu lho v:"
        }
    }
}