import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { deleteDiscount, updateDiscount, getDiscount } from "./DiscountManager"


export const EditDiscount = () => {
    const history = useHistory()
    const [discount, setDiscount] = useState([])
    

    const discountFetcher = () => {
        console.log("fetch", discount)
        getDiscount()
            .then(data => setDiscount(data))
    }

    useEffect(() => {
        discountFetcher()
    }, [])

    const handleDelete = (item_id) => {
        console.log("delete", item_id)
        //Delete from DB
        deleteDiscount(item_id)
        //Delete from local state
        var newDiscountList = []
        //For Loop, if not ID, then copy to new
        for (let i = 0; i < discount.length; i++){
            console.log("loop", discount[i], item_id)
            if (item_id != discount[i].id) {
                newDiscountList.push(discount[i])
            }
        }
        setDiscount(newDiscountList)
            
    }

    // const handleDelete = item_id => {

    //     setDiscount((discount) => ({
    //         ...discount,
    //         id: discount.filter((_,i) => i != item_id)
    //     }));
    // }

    return (
        <article className="discounts">
            <header className="discounts__header">
                <h1> Edit Discounts </h1>
            </header>
            
            {
                discount.map(discount => {
                    return <section key={discount.id} className="edit">
                        <div className="delete">{discount.id}</div>
                            <button className="btn btn-3"
                                onClick={() => handleDelete(discount.id)}
                                >Delete</button>
                    </section>
                })
            }
        </article>
    )
}