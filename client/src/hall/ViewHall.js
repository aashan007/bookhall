import React from'react';
import {read,diffDays} from '../actions/hall'
import {useState,useEffect} from 'react'
import moment from 'moment'
import {useSelector} from 'react-redux'
const ViewHall = ({match,history})=>{

    const [hall,setHall] = useState({});
    const [image,setImage]=  useState('')
    const {auth} = useSelector((state) => ({...state}));
    useEffect( ()=>{
        loadSellerHall();
    },[]);

    const handleClick = (e)=>{
        e.preventDefault();
        if(!auth) history.push('/login')
        console.log('get session id from payment gateway to show a button')

    }

    const loadSellerHall = async()=>{
        console.log(match)
        let res = await read(match.params.hallId);
        setHall({...res.data})
        setImage(`${process.env.REACT_APP_API}/hall/image/${res.data._id}`)
    }
    return(
    <>
    <div className="container-fluid bg-secondary p-5 text-center">
        <h2>{hall.title}</h2>        
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                <br/>
                <img src={image} alt={hall.title} className="img img-fluid m-2"/>
            </div>
            <div className="col-md-6">
                <br/>
                <b>
                    {hall.content}
                </b>
                <p className="alert alert-info mt-3">{hall.price}/-</p>
                <p className="card-text">
                        <span className="float-right text-primary">
                            for {diffDays(hall.from,hall.to)} {diffDays(hall.from,hall.to) <=1 ? ' day ' : ' days '}
                        </span>
                </p> 
                <p>
                    From<br/>
                    {moment(new Date(hall.from)).format('MMMM Do YYYY, h:mm:ss a')}
                </p>    

                <p>
                    From<br/>
                    {moment(new Date(hall.to)).format('MMMM Do YYYY, h:mm:ss a')}
                </p>    
                <i>Posted By:{hall.postedBy && hall.postedBy.name}</i>
                <br/>
                <button onClick={handleClick}className="btn btn-block btn-lg btn-primary mt-3">
                    {auth &&auth.token ? 'Book Now' : 'Login to Book'}
                </button>
            </div>
        </div>
    </div>


    </>
    );
}


export default ViewHall;