import Link from 'next/link';
export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props:{ testcase: data} //value as a prop
    }
} 

// export const getStaticProps = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await res.json();
//       return {
//         props: { testcase: data }, // value as a prop
//       };
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//       return {
//         props: { testcase: [] }, // Return an empty array or a default value if there is an error
//       };
//     }
// };

import styles from '../../styles/testcase.module.css'

const testcase = ({testcase})=> {
    return (
        // id and name, those properties are from the json file we fetch, we read the key then take value
       <div>
          <h1>testcase list</h1>
            {testcase.map( sample => (
              //the way this link can route to a web with speicifc sample id
                <Link href={'/testcase/'+ sample.id} key={sample.id}>
                    <div className={styles.single}>
                        <h3>
                        {sample.name}
                        </h3>
                    </div>
                </Link>
            ))}
       </div>

    )
}

export default testcase;