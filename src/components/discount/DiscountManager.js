export const getAllDiscounts = () => {
    return fetch("http://localhost:8000/discount", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getDiscount = (discountId) => {
    return fetch(`http://localhost:8000/discount/${discountId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(res => res.json())
}

export const getCategory = () => {
    return fetch("http://localhost:8000/category", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getInventory = () => {
    return fetch("http://localhost:8000/inventory", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const createDiscount = (newDiscount) => {
    return fetch("http://localhost:8000/discount", {
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
    const request = `http://localhost:8000/discount/${ discountId }`
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
    return fetch(`http://localhost:8000/discount/${ updatedDiscount.id }`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedDiscount)
    })
        
}