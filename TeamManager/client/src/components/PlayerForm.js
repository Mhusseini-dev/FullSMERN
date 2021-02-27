import React, {useState} from 'react';
import {
    Card, 
    FormControl, 
    InputLabel, 
    Input, 
    FormHelperText, 
    Button
} from "@material-ui/core";
import styles from './style.module.css';

const PlayerForm = props => {
    const {handleSubmit, errors} = props;
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    
    return (
        <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        id="name"
                        aria-describedby="name-helper"
                    />
                    <FormHelperText id="name-helper">Must be at least 2 characters</FormHelperText>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="preferredPosition">Preferred Position</InputLabel>
                    <Input
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        type="text"
                        id="preferredPosition"
                    />
                </FormControl>
                <br/>
                <button
                    variant="contained"
                    type="submit"
                >Add</button>
            </form>
            {
                errors.map(error =>{
                    return (
                        <p className={styles.error}>{error}</p>
                    );
                })
            }
        </div>
    );
}

export default PlayerForm;
