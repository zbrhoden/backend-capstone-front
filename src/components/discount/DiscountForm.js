import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createDiscount, getCategory, getInventory, getStore} from './DiscountManager.js'

export const DiscountForm = () => {
    const history = useHistory()
    const [category, setCategory] = useState([])
    const [inventory, setInventory] = useState([])
    const [store, setStore] = useState([])
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    const [currentDiscount, setCurrentDiscount] = useState({
        inventory: "",
        day_of_week: 0,
        quantity: 0,
        store: "",
        category: "",
        discount_percentage: 0.0
    })
    
    useEffect(() => {
        getStore().then(data => setStore(data))
    }, [])

    useEffect(() => {
        getCategory().then(data => setCategory(data))
    }, [])

    useEffect(() => {
        getInventory().then(data => setInventory(data))
    }, [])

    const handleControlledInputChange = (discount) => {
        const newDiscount = Object.assign({}, currentDiscount)
        newDiscount[discount.target.name] = discount.target.value
        setCurrentDiscount(newDiscount)
    }

    return (
        <form className="discountForm">
            <h2 className="discountForm__title">Register New Discount</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="inventory">Item: </label>
                    <select type="text" name="inventory" required autoFocus className="form-control"
                    placeholder="inventory"
                    defaultValue="Choose an Item"
                        value={currentDiscount.inventory}
                        onChange={handleControlledInputChange}>
                        <option>Choose an Item</option>
                        {
                            inventory.map(inventory => <option name="inventory" value={inventory.id}>{inventory.name}</option>)
                        }
                    </select>
                </div>
            </fieldset>
            <div className="form-group">
                <label htmlFor="category">Category: </label>
                <select type="text" name="category" className="form-control"
                    placeholder="category"
                    defaultValue="Choose a Category"
                    onChange={handleControlledInputChange}>
                    <option>Choose a Category</option>
                    {
                        category.map(category => <option name="category" value={category.id}>{category.label}</option>)
                    }
                </select>
            </div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="day_of_week">Day of the week: </label>
                    <input type="text" name="day_of_week" required autoFocus className="form-control"
                        value={currentDiscount.day_of_week}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="quantity">Number of Items: </label>
                    <input type="number" name="quantity" required autoFocus className="form-control"
                        value={currentDiscount.quantity}
                        onChange={handleControlledInputChange}
                        
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <select type="text" name="store" required autoFocus className="form-control"
                    placeholder="store"
                    defaultValue="Choose a Store"
                        value={currentDiscount.store}
                        onChange={handleControlledInputChange}>
                        <option>Choose a Store</option>
                        {
                            store.map(store => <option name="store" value={store.id}>{store.name}</option>)
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="discount_percentage">Discount Amount: </label>
                    <input type="number" name="discount_percentage" required autoFocus className="form-control"
                        value={currentDiscount.discount_percentage}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const discount = {
                        inventory: currentDiscount.inventory,
                        day_of_week: currentDiscount.day_of_week,
                        quantity: currentDiscount.quantity,
                        store: currentDiscount.store,
                        category: currentDiscount.category,
                        discount_percentage: currentDiscount.discount_percentage
                    }

                    // Send POST request to your API
                    createDiscount(discount)
                        .then(() => history.push("/discounts"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}