import {Link} from 'react-router-dom'
import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'

const Dashboard = ()=>{
    return (
        <>
        <div className="container-fluid bg-secondary p-5">
            {/* <h1>
                Dashboard
            </h1> */}
            <ConnectNav/>
        </div>
        <div className="container-fluid p-4">
            <DashboardNav/>
        </div>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h2>Your Bookings</h2>
                </div>
                <div className="col-md-2">
                    <Link to="/halls/new" className="btn btn-primary">
                        Browse Halls
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;