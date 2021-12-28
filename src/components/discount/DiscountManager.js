export const getAllDiscounts = () => {
    return fetch(process.env.REACT_APP_BACKEND_URL+"/discount", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getDiscount = (discountId) => {
    return fetch(process.env.REACT_APP_BACKEND_URL+`/discount/${discountId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(res => res.json())
}

export const getCategory = () => {
    return fetch(process.env.REACT_APP_BACKEND_URL+"/category", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getAllStores = () => {
    return fetch(process.env.REACT_APP_BACKEND_URL+"/store", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getInventory = () => {
    return fetch(process.env.REACT_APP_BACKEND_URL+"/inventory", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const createDiscount = (newDiscount) => {
    return fetch(process.env.REACT_APP_BACKEND_URL+"/discount", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(newDiscount)
    })
        .then(res => res.json())
}

export const deleteDiscount = discountId => {
    const request = process.env.REACT_APP_BACKEND_URL+`/discount/${ discountId }`
        console.log("request", request)
    return fetch(request, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
}

export const updateDiscount = (updatedDiscount) => {
    console.log("Check",updatedDiscount)
    return fetch(process.env.REACT_APP_BACKEND_URL+`/discount/${ updatedDiscount.id }`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedDiscount)
    })
        
}