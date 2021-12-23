import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getDiscount} from "./DiscountManager"

export const DiscountList = () => {
    const history = useHistory()
    const [ discounts, assignDiscounts ] = useState([])

    const discountFetcher = () => {
        getDiscount()
            .then(data => assignDiscounts(data))
    }

    useEffect(() => {
        discountFetcher()
    }, [])

    return (
        <article className="discounts">
            <header className="discounts_header">
                <h1> Discounts </h1>
            </header>
            {
                discounts.map(discount => {
                    return <section key={discount.id} className="discount-id">
                        <div className="discount-name">{discount.inventory.name}</div>
            </section>
            })
        }
        </article>
    )
}