import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteDiscount, getAllDiscounts} from "./DiscountManager"
import { BiX } from "react-icons/bi"
import { AiFillEdit } from "react-icons/ai"
import {IconContext} from "react-icons"
import "./DiscountList.css"

export const DiscountList = () => {
    const [discount, setDiscount] = useState([])

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
                    return <section key={discount.id} className="discount-list">
                            <div className="Id-spot">ID: {discount.id}</div>
                            <div className="discount-name">{discount.inventory.name}</div>
                            <div className="discount-percent-spot">Discount: {(Math.round(discount.discount_percentage * 10000)/100)+"%"}</div>
                        

                            <BiX onClick={() => handleDelete(discount.id)}></BiX>
                            <AiFillEdit className="Edit-button" to={"/discounts/edit/"+discount.id}>Edit</AiFillEdit>

            </section>
            })
        }
        </article>
    )
}