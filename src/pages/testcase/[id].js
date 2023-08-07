export const getStaticPaths = async() => {
    //await is used for asyn
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // use the map method to do the path
    const paths = data.map(sample =>{
        return {
            params:{id: sample.id.toString()}
        }
    })
    return{
        //each object represent a route
        //paths: [{}, {}, {params:{id:}}]
        paths,
        fallback: false //backpage problem, if did not see the id we found, it will go to 404
    }

}


export const getStaticProps = async(context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return {
        props:{ sample: data} //value as a prop
    }
}

// this page will be route base on dynamic route tech from json id 
const details = ({sample}) => {
    return (
        <div>
            <h1>{ sample.name } </h1>
            <p>{ sample.email }</p>
            <p>{ sample.website }</p>
            <p>{ sample.address.city }</p>
        </div>
    );
}

export default  details;