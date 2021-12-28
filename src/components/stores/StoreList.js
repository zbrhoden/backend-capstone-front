import React, { useState, useEffect } from "react"
import { deleteStore, getAllStores} from "./StoreManager"


export const StoreList = () => {
    const [store, setStore] = useState([])

    const storeFetcher = () => {
        getAllStores()
            .then(data => setStore(data))
    }

    useEffect(() => {
        storeFetcher()
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

    return (
        <article className="stores">
            <header className="stores_header">
                <h1>Stores </h1>
            </header>
            {
                store.map(store => {
                    return <section key={store.id} className="store-id">
                        <div className="store-name">{store.name}</div>
                        <div className="delete">{store.id}</div>
                            <button className="btn btn-3"
                                onClick={() => handleDelete(store.id)}
                                >Delete</button>
            </section>
            })
        }
        </article>
    )
}