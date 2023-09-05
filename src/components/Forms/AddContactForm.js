import React, { useReducer } from 'react';
import classes from './styles/addContact.module.css'
import { NAME, MOBILE_NUMBER, CANCEL } from '../../constants/typeConstants';
import { addContactReducer } from './Actions/FormReducer';
import { Button } from '@mui/material';

function AddContactForm(props) {

    const initialAddContactValues = {
        name: "",
        mobileNumber : ""
    }

    const [addContactState, addContactDispatch] = useReducer(addContactReducer, initialAddContactValues)

    const nameHandler = (e) => {
        addContactDispatch({ type: NAME, payload: e.target.value})
    }

      const mobileNumberHandler = (e) => {
        addContactDispatch({ type: MOBILE_NUMBER, payload: e.target.value})
    }

    const cancelHandler = () => {
        addContactDispatch({ type: CANCEL, payload: "" })
        props.popupStatus(false)
    }

    return (
        <div>
            <form>
                <div>
                    <label className={classes.label}>Name :</label>
                    <input type="text" className={classes.input} value={addContactState.name} onChange={nameHandler} required/>
                </div>
                 <div>
                    <label className={classes.label}>Mobile Number :</label>
                    <input type="number" className={classes.input} value={addContactState.mobileNumber} onChange={mobileNumberHandler} required/>
                </div>
                <div className={classes.buttonContainer}>
                 <Button onClick={cancelHandler} color="error" variant='contained'>Cancel</Button>
                    <Button color='primary' variant='contained'>Ok</Button>
                    </div>
            </form>
        </div>
    );
}

export default AddContactForm;