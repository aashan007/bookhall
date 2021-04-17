import React from 'react'
// import {userSelector, useSelector, useStore} from 'react-redux'
import {allHalls} from '../actions/hall'
import {useState,useEffect} from 'react'
import SmallCard from '../components/cards/SmallCard'
import Search from '../components/forms/Search'

function Home() {
    const [halls,setHalls] = useState([]);

    useEffect(()=>{
        loadAllhalls();
    },[])

    const loadAllhalls = async () =>{
        let res = await allHalls();
        setHalls(res.data);
    }
    // const {auth} = useSelector((state)=>state)
    return (
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
            <h1>
                All Halls
            </h1>
        </div>
        <Search/>
        <div className="container-fluid">
            <br/>
            <pre>
                {/* {JSON.stringify(halls,null,4)} */}
                {
                    halls.map((h) =>(
                        <SmallCard key={h._id} h={h}/>
                      
                    ))
                }
            </pre>
        </div>
        </>
    )
}

export default Home
