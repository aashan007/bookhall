import {useSelector} from 'react-redux'
import {useState} from 'react'
import {Select} from 'antd'
import {createHall} from '../actions/hall'
import {toast} from 'react-toastify'
import HallCreateForms from '../components/forms/HallCreateForms'


const {Option} = Select;



function NewHall() {

    const {auth} = useSelector((state) => ({...state}));
    const {token} = auth
    const [values,setValues] = useState({
        title: "",
        content: "",
        location: "",
        image: "",
        price: "",
        from:"",
        to: "",
        capacity: "",

    });

    const [preview,setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW')

    const {title,content,location,image,price,from,to,capacity} = values;
  
    const handleSubmit = async (e)=>{
        e.preventDefault();
        //console.log(values);
        //there is image file so send as form data

        let hallData = new FormData();
        hallData.append('title',title)
        hallData.append('content',content)
        hallData.append('location',location)
        hallData.append('price',price)
        image && hallData.append('image',image)
        hallData.append('from',from)
        hallData.append('to',to)
        hallData.append('capacity',capacity)

      //  console.log([...hallData]);

        try{
            let response = await createHall(token,hallData);
        console.log('HOTEL_CREATE_RESPONSE',response);

        toast.success('New Hotel is created');

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
      setValues({...values,image:e.target.files[0]});

    }

    const handleChange = (e)=>{
        setValues({...values,[e.target.name]:e.target.value})


    }
    
    return (
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
            Post a new Hotel
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <br/>
                    <HallCreateForms
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

export default NewHall
