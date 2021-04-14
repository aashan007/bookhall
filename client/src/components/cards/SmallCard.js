const SmallCard = ({h}) => (
    <>
    {/* {console.log(h)} */}
    {/* {JSON.stringify(h)} */}
    <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="http://via.placeholder.com/900x500.png?text=Booking" 
                alt="default hall image"
                className="card-image img img-fluid"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">
                        {h.title} {" "}
                        <span className="float-right text-primary">{h.price}/-</span>
                        {" "}
                    </h3>
                    <p className="alert alert-info">{h.location}</p>
                </div>
            </div>
        </div>
    </div>
    <br/>
    </>
)

export default SmallCard 