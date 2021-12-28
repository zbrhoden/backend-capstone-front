export const getAllStores = () => {
    return fetch(process.env.REACT_APP_BACKEND_URL+"/store", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getStore = (storeId) => {
    return fetch(process.env.REACT_APP_BACKEND_URL+`/store/${storeId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(res => res.json())
}

export const createStore = (newStore) => {
    return fetch(process.env.REACT_APP_BACKEND_URL+"/store", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(newStore)
    })
        .then(res => res.json())
}

export const deleteStore = storeId => {
    const request = process.env.REACT_APP_BACKEND_URL+`/store/${ storeId }`
        console.log("request", request)
    return fetch(request, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
}

export const updateStore = (updatedStore) => {
    return fetch(process.env.REACT_APP_BACKEND_URL+`/store/${ updatedStore.id }`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedStore)
    })
        
}