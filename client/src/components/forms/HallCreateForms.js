import {DatePicker, Select} from 'antd'
import moment from 'moment'



const {Option} = Select;


function HallCreateForms(props) {
    const {
        values,
        setValues,
        handleChange,
        handleImageChange,
        handleSubmit,
    } = props;

    const{title,location,price,content} = values;

    return (
         <form onSubmit={handleSubmit}> 
        <div className="form-group">
            <label className="btn btn-outline-secondary btn-block m-2 text-left">
                Image
                <input type="file" name="image" onChange={handleImageChange} accept="image/*" hidden/>
            </label>
        </div>

        <input type="text" name="title" onChange={handleChange} placeholder="Title" className="form-control m-2" value={title}/>
        <textarea name="content" onChange={handleChange} placeholder="Content" className="form-control m-2" value={content}/>
         <input type="text" name="location" onChange={handleChange} placeholder="Location" className="form-control m-2" value={location}/>
        {/* <AlgoliaPlaces className="form-control ml-2 mr-2" placeholder="Location" defaultValue={location} options={config} onChange={({suggestion}) => setValues({...values,location:suggestion.value})} style={{height:"50px"}}/> */}
        <input type="number" name="price" onChange={handleChange} placeholder="Price" className="form-control m-2" value={price}/>

        {/* <input type="number" name="capacity" onChange={handleChange} placeholder="Capacity" className="form-control m-2" value={capacity}/> */}
        <Select onChange={(value)=>setValues({...values,capacity:value})} className="w-100 m-2" size="large" placeholder="Hall Capacity">
            <Option key={50}>50</Option>
            <Option key={100}>100</Option>
            <Option key={200}>200</Option>
            <Option key={500}>500</Option>
            <Option key={1000}>1000</Option>


        </Select>
       
        <DatePicker placeholder="From Date" className="form-control m-2" onChange={(date,dateString) =>setValues({...values,from:dateString})}
        disabledDate={(current)=>current && current.valueOf() < moment().subtract(1,'days')}/>
        {/* changes needed it should dynamically check if from date is less than to date and if the from date is filled only then enable it    */}
        <DatePicker placeholder="To Date" className="form-control m-2" onChange={(date,dateString) =>setValues({...values,to:dateString})}
        disabledDate={(current)=>current && current.valueOf() < moment().subtract(1,'days')}/>
        <button className="btn btn-outline-primary m-2">
            Save
        </button>
    


        </form>
    )
}

export default HallCreateForms
