import { useState } from "react";


function Form(){
    const [formState , setFormState] = useState({
        name : "",
        age : "",
        country : "",
        isMarried :false,
    })

    const{name , age, country, isMarried} = formState;
    return (
        <form>
            <div className="form">
            <label>
                name: <input name="name" value = {name} onChange = {function(event) {
                    console.log(event.target.name);
                    console.log(event.target.value)

                    setFormState({
                        ...formState,
                        [event.target.name]:event.target.value
                    })
                }}/>
            </label>
            <label>
                age : <input name="age" type="number" value = {age} onChange = {function(event) {
                    console.log(event.target.name);
                    console.log(event.target.value)
                    setFormState({
                        ...formState,
                        [event.target.name]:+event.target.value
                    })
                }}/>
            </label>
            <label>
                country :
                <select name="country" value={country} onChange = {function(event) {
                    console.log(event.target.name);
                    console.log(event.target.value)
                    setFormState({
                        ...formState,
                        [event.target.name]:event.target.value
                    })
                }}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="USA">USA</option>
                </select>
            </label>
            <label>
            Is User Married :
            <input name="isMarried" type="checkbox"checked={isMarried} onChange = {function(event) {
                console.log(event.target.name);
                console.log(event.target.value)
                setFormState({
                    ...formState,
                    [event.target.name]:event.target.checked
                })
            }} />
            </label>
            <input type="submit" value="SUBMIT form" />
            </div>
        </form>
    );
}


export default Form