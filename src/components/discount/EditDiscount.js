import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router"
import {updateDiscount, getDiscount,  getCategory, getInventory } from "./DiscountManager"


export const EditDiscount = () => {
    const history = useHistory()
    const { discountId } = useParams()
    const [category, setCategory] = useState([])
    const [inventory, setInventory] = useState([])
    const [discount] = useState({})

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    useEffect(() => {
        getDiscount(discountId)
        .then(discount => setCurrentDiscount({ 
            id: discount.id,
            inventory: discount.inventory.id,
            day_of_week: discount.day_of_week,
            quantity: discount.quantity,
            store: discount.store.id,
            category: discount.category.id,
            discount_percentage: discount.discount_percentage}))
    }, [])

    const [currentDiscount, setCurrentDiscount] = useState({})
    

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

    const constructNewDiscount = () => {
        const discountCopy = { ...currentDiscount }
        discountCopy.id = parseInt(discountCopy.id)
        updateDiscount(discountCopy)
            .then(history.push(`/discounts`))
    }
    
    return (
        <form className="discountForm">
            <h2 className="discountForm__title">Edit Discount</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="inventory">Item: </label>
                    <select type="text" name="inventory" required autoFocus className="form-control"
                    placeholder="inventory"
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
                    value={currentDiscount.category}
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
                    <label htmlFor="store">Store: </label>
                    <input type="number" name="store" required autoFocus className="form-control"
                        value={currentDiscount.store}
                        onChange={handleControlledInputChange}
                    />
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
                    constructNewDiscount()
                }}
                
                className="btn btn-primary">Submit</button>
        </form>
    )
}