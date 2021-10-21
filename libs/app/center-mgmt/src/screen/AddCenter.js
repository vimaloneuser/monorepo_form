import { FormInput } from '@edutest/ui/form-elements';
import { useDispatch } from 'react-redux'
import { saveCenterDataThunk } from '../redux/reducers';

function AddCenter() {
    const dispatch = useDispatch();

    const submit = (values,cb) => {
        dispatch(saveCenterDataThunk({values,cb}));
    }
    
    return (
        <div>
            <FormInput
                submit={submit}
            />
        </div>
    )
}

export default AddCenter
