import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteDiscount, getAllDiscounts} from "./DiscountManager"


export const DiscountList = () => {
    const [discount, setDiscount] = useState([])
    console.log(process.env.REACT_APP_FOO)

    const discountFetcher = () => {
        getAllDiscounts()
            .then(data => setDiscount(data))
    }

    useEffect(() => {
        discountFetcher()
    }, [])

    
    const handleDelete = (item_id) => {
        //Delete from DB
        deleteDiscount(item_id)
        //Delete from local state
        var newDiscountList = []
        //For Loop, if not ID, then copy to new
        for (let i = 0; i < discount.length; i++){
            if (item_id != discount[i].id) {
                newDiscountList.push(discount[i])
            }
        }
        setDiscount(newDiscountList)
    }

    return (
        <article className="discounts">
            <header className="discounts_header">
                <h1> Discounts </h1>
            </header>
            {
                discount.map(discount => {
                    return <section key={discount.id} className="discount-id">
                        <div className="discount-name">{discount.inventory.name}</div>
                        <div className="delete">{discount.id}</div>
                            <button className="btn btn-3"
                                onClick={() => handleDelete(discount.id)}
                                >Delete</button>
                                <Link className="nav-link" to={"/discounts/edit/"+discount.id}>Edit</Link>
            </section>
            })
        }
        </article>
    )
}