import {useState} from 'react'
import {Link} from 'react-router-dom'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav'
import {useSelector} from 'react-redux'
import {HomeOutlined} from '@ant-design/icons'
import {createConnectAccount} from '../actions/stripe'
import {toast} from 'react-toastify'


const DashboardSeller= ()=>{

    const {auth} = useSelector((state)=> ({...state}))
    const [loading,setLoading] = useState(false);
    const handleClick = async ()=>{
        //loading
        setLoading(true);
        try{
            let res = await createConnectAccount(auth.token);
            console.log(res); //get login link
        }
        catch(err){
            console.log(err);
            toast.error("Stripe connect failed, Try again");
            setLoading(false);
        }
    }
    const connected = () =>(
         <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h2>Your Halls</h2>
                </div>
                <div className="col-md-2">
                    <Link to="/halls/new" className="btn btn-primary">
                        + Add New
                    </Link>
                </div>
            </div>
        </div>
    )



    

    const notConnected = () =>(
         <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <div className="p-5 ponter">
                        <HomeOutlined className="h1"/>
                        <h4>Setup payouts to post halls</h4>
                        <p className="lead">
                            MERN partners with stripe to transfer earning to your bank
                        </p>
                        <button disabled ={loading} onClick={handleClick} className="btn btn-primary mb-3">
                            {loading ? "Processing" : "Setup Payouts" }</button>
                        <p className="text-muted"><small>You will be redirected to stripe to complete the onboarding</small></p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )

    
    return (
        <>
        <div className="container-fluid bg-secondary p-5">
            <ConnectNav/>
        </div>
        <div className="container-fluid p-4">
            <DashboardNav/>
        </div>

        {
            auth && 
             auth.user //&& 
            // auth.user.stripe_seller &&
            // auth.user.stripe_seller.charges_enabled 
            ? connected() : notConnected()
        }

        {/* <pre>
            {JSON.stringify(auth,null,4)}
        </pre> */}

        
       
        </>
    )
}

export default DashboardSeller; 