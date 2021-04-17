import React,{useState} from 'react';
import {DatePicker,Select} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

//destructuring
const {RangePicker}= DatePicker;
const {Option} = Select;



const Search = ()=>{
    const history = useHistory()
    const [location,setLocation] = useState('')
    const [date,setDate]=useState('')
    const [capacity,setCapacity]= useState('');
    console.log(location,date);
    const handleSubmit = () =>{
        history.push(`/search-result?location=${location}&date=${date}&capacity=${capacity}`);
    };

    return (
        <div className="d-flex pb-4">
            <div className="w-100">
                <input type="text" name="location" onChange={(e)=>setLocation(e.target.value)} placeholder="Location" className="form-control m-2" value={location}/>
            </div>
            
                 <RangePicker className="w-100" onChange={(value,dateString) =>setDate(dateString)}
                disabledDate={(current)=>current && current.valueOf() < moment().subtract(1,'days')}/>
                <Select onChange={(value)=>setCapacity(value)} className="w-100" size="large" placeholder="Capacity">
                    <Option key={50}>50</Option>
                    <Option key={100}>100</Option>
                    <Option key={200}>200</Option>
                    <Option key={500}>500</Option>
                    <Option key={1000}>1000</Option>

                </Select>

                <SearchOutlined onClick={handleSubmit} className="btn btn-primary p-3 btn-square"/>

            
               
            
        </div>
    )

}
export default Search;