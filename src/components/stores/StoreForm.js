import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createStore} from './StoreManager.js'

export const StoreForm = () => {
    const history = useHistory()
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    const [currentStore, setCurrentStore] = useState({
        name: ""
    })
    

    const handleControlledInputChange = (store) => {
        const newStore = Object.assign({}, currentStore)
        newStore[store.target.name] = store.target.value
        setCurrentStore(newStore)
    }

    return (
        <form className="storeForm">
            <h2 className="storeForm__title">Register New Store</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Day of the week: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentStore.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const store = {
                        name: currentStore.name

                    }

                    // Send POST request to your API
                    createStore(store)
                        .then(() => history.push("/stores"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}