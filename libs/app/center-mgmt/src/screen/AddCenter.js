import React from 'react'
import { FormInput } from '@edutest/ui/form-elements';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { saveCenterDataThunk } from '../redux/reducers';

function AddCenter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.centers)

    const submit = (values) => {
        dispatch(saveCenterDataThunk(values));
    }

    console.log(counter, " counter....")
    return (
        <div>
            {/* <h2>{counter}</h2> */}
            <FormInput
                submit={submit}
            />
        </div>
    )
}

export default AddCenter
