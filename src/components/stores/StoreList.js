import React, { useState, useEffect } from "react"
import { deleteStore, getAllStores} from "./StoreManager"
import { BiX } from "react-icons/bi"
import { DataGrid} from '@mui/x-data-grid'

export const StoreList = () => {
    const [store, setStore] = useState([])
    const [storerows, setRows] = useState([])

    const storeFetcher = () => {
        getAllStores()
            .then(data => setStore(data))
    }
    
    const buttons = (store_id) => {
        return <button onClick={() => handleDelete(store_id)}>Delete</button>
    }

    const createStoreRows = () => {
        getAllStores()
        .then(data => {
            const rows = []
            for (const row of data) {
                
                const rowObject = {
                    id: row.id,
                    col1: row.name,
                    col2: buttons(),
                }
                rows.push(rowObject)
            }
            setRows(rows)
        })
    }

    useEffect(() => {
        storeFetcher()
        createStoreRows()
    }, [])

    
    const handleDelete = (store_id) => {
        //Delete from DB
        deleteStore(store_id)
        //Delete from local state
        var newStoreList = []
        //For Loop, if not ID, then copy to new
        for (let i = 0; i < store.length; i++){
            if (store_id != store[i].id) {
                newStoreList.push(store[i])
            }
        }
        setStore(newStoreList)
    }
      
      const columns= [
        { field: "id", hide: true },
        { field: "col1", headerName: "Store Name", width: 150 },
        { field: "col2", headerName: "Edit/Delete", width: 150 }
      ];

    return (
        <article className="store-list">
            <header className="stores_header">
                <h1>Stores </h1>
                <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={storerows} columns={columns} />
    </div>
            </header>
            {
                store.map(store => {
                    return <section key={store.id} className="store-id">
                        <div className="Id">{store.id}</div>
                        <div className="store-name">{store.name}</div>

                            <BiX 
                                onClick={() => handleDelete(store.id)}
                                >Delete</BiX>
            </section>
            })
        }
        </article>
    )
}