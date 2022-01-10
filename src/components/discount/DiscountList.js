import React, { useState, useEffect } from "react"
import { deleteDiscount, getAllDiscounts} from "./DiscountManager"
import { useHistory } from "react-router-dom";
import "./DiscountList.css"
import { DataGrid} from '@mui/x-data-grid'
import { Button } from "@mui/material"

export const DiscountList = () => {
    const [discount, setDiscount] = useState([])
    const [discountRows, setRows] = useState([])
    let history = useHistory()


    const discountFetcher = () => {
        getAllDiscounts()
            .then(data => setDiscount(data))
    }

    useEffect(() => {
        discountFetcher()
    }, [])

    const createDiscountRows = () => {
        getAllDiscounts()
        .then(data => {
            const rows = []
            for (const row of data) {
                
                const rowObject = {
                    id: row.id,
                    col1: row.inventory.name,
                    col2: (Math.round(row.discount_percentage * 10000)/100)+"%",
                }
                rows.push(rowObject)
            }
            setRows(rows)
        })
    }

    useEffect(() => {
        discountFetcher()
        createDiscountRows()
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

    const columns= [
        { field: "id", hide: true },
        { field: "col1", headerName: "Item Name", width: 150 },
        {field: "col2", headerName: "Discount Percentage", width: 150 },
        { field: "field", headerName: "Delete", width: 150,   
            renderCell: (row) => {
            return (
              <Button
                onClick={() => {
                  handleDelete(row.id);
                }}
              >
                Delete
              </Button>
            )
            }
        },
        { field: "field2", headerName: "Edit", width: 150,   
        renderCell: (row) => {
        return (
        <Button 
            onClick={() => {
                history.push ("/discounts/edit/" + row.id)}}>Edit
        </Button>
                )
            }}
        ];

    return (
        <article className="discounts">
            <header className="discounts_header">
                <h1> Discounts </h1>
                <div style={{ height: 300, width: "100%" }}>
                <DataGrid rows={discountRows} columns={columns} />
                </div>
            </header>
        </article>
    )
}