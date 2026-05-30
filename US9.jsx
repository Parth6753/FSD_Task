import {useState} from "react";
function US9(){
    const [data,setData]=useState({})
    const hc=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    const hf=(e)=>{
        e.preventDefault()
        alert(`welcome ${data.fname} ${data.lname},your email is ${data.mail},your message ${data.message},gender ${data.gender},city ${data.city}`)
    }
    return (
        <>
        <form onSubmit={hf}>
        FirstName:
        <input type="text" name="fname" onChange={hc} />
        LastName:
        <input type="text" name="lname" onChange={hc} />
        Email:
        <input type="email" name="mail" onChange={hc} />
        Password:
        <input type="password" name="pass" onChange={hc}/>
        Message:
        <textarea name="message" cols="30" rows="10" onChange={hc}></textarea>
        <input type='radio' name="gender" value="male" onChange={hc}/>Male
        <input type='radio' name="gender" value="female" onChange={hc}/>Female
        City:
        <select name="city" onChange={hc}>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="surat">Surat</option>
            <option value="rajkot">Rajkot</option>
        </select>
        <input type="submit"/>
        </form>
        </>
    )
}
export default US9