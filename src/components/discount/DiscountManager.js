export const getAllDiscounts = () => {
    return fetch("https://discounts-r-us.herokuapp.com/discount", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getDiscount = (discountId) => {
    return fetch(`https://discounts-r-us.herokuapp.com/discount/${discountId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(res => res.json())
}

export const getCategory = () => {
    return fetch("https://discounts-r-us.herokuapp.com/category", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getInventory = () => {
    return fetch("https://discounts-r-us.herokuapp.com/inventory", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const createDiscount = (newDiscount) => {
    return fetch("https://discounts-r-us.herokuapp.com/discount", {
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
    const request = `https://discounts-r-us.herokuapp.com/discount/${ discountId }`
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
    return fetch(`https://discounts-r-us.herokuapp.com/discount/${ updatedDiscount.id }`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedDiscount)
    })
        
}