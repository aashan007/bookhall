import {useState,useEffect} from 'react'
import queryString from 'query-string'
import {Link} from 'react-router-dom'
import Search from '../components/forms/Search'
import {searchListing} from '../actions/hall'
import SmallCard from '../components/cards/SmallCard'

const SearchHall = ()=>{
    const [searchLocation,setSearchLocation] = useState('')
    const [searchDate,setSearchDate] = useState('')
    const [searchCapacity,setSeachCapacity] = useState('')
    const [halls,setHalls]= useState([]);

    useEffect (()=>{
        const {location,date,capacity}  = queryString.parse(window.location.search);
        // console.table({location,date,capacity});
        searchListing({location,date,capacity}).then(res=>{
            console.log('Search Result',res.data)
            setHalls(res.data);
        })
    },[window.location.search])
    return(
        <>
        <div className="col">
            <br/>
            <Search/>
        </div>
        <div className="container">
            <div className="row">
                    {
                    halls.map(h => <SmallCard key = {h._id} h={h} />)
}
            </div>
        </div>
        </>
    )
}

export default SearchHall;
