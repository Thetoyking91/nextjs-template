import Template from "../public/Template";

function Error({ statusCode }) {
    return (
        <Template title={`${statusCode}`} headText={`Error code ${statusCode} occurred.`}/>
    )
}


Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error