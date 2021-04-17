import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import {Select} from 'antd'
import {read,updateHall} from '../actions/hall'
import {useSelector} from 'react-redux'
import HallEditForms from'../components/forms/HallEditForms'



const {Option} = Select;


const EditHall = ({match})=>{

        const {auth} = useSelector((state) => ({...state}));
        const {token} = auth
        const [values,setValues] = useState({
        title: "",
        content: "",
        location: "",
        
        price: "",
        from:"",
        to: "",
        capacity: "",

    });

    const [image,setImage] = useState("")


    const [preview,setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW')

    const {title,content,location,price,from,to,capacity} = values;
  


    useEffect( ()=>{
        loadSellerHall();
    },[]);

    const loadSellerHall = async()=>{
        //console.log(match)
         let res = await read(match.params.hallId);
         setValues({...values,...res.data})
          setPreview(`${process.env.REACT_APP_API}/hall/image/${res.data._id}`)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        let hallData = new FormData();

        hallData.append('title',title)
        hallData.append('content',content)
        hallData.append('location',location)
        hallData.append('price',price)
        image && hallData.append('image',image)
        hallData.append('from',from)
        hallData.append('to',to)
        hallData.append('capacity',capacity)

         try{
            let response = await updateHall(token,hallData,match.params.hallId);
            console.log('HOTEL_UPDATE_RESPONSE',response);

            toast.success(`${response.data.title} is updated`);

        setTimeout(()=>{
            window.location.reload();
        },1000)
        }
        catch(err){
            console.log(err)
            toast.error(err.response.data)
        }


    }

    const handleImageChange =(e)=>{
      //  console.log(e.target.files[0])
      setPreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0])
     

    }

    const handleChange = (e)=>{
        setValues({...values,[e.target.name]:e.target.value})


    }

    return (
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
            Edit Hotel
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <HallEditForms

                    values={values}
                        setValues={setValues}
                        handleChange={handleChange}
                        handleImageChange={handleImageChange}
                        handleSubmit={handleSubmit}


                    />
                    
                </div>

                <div className="col-md-2">
                    <img src ={preview} alt="preview_image" className="img img-fluid m-2"/>
                    <pre>
                        {JSON.stringify(values,null,4)}
                    </pre>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditHall;
