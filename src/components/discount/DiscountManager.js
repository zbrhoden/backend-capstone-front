export const getDiscount = () => {
    return fetch("http://localhost:8000/discount", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
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
    console.log("creating discount",JSON.stringify(newDiscount))
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
    return fetch(`http://localhost:8000/discount${ discountId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
        .then(getDiscount)
}

export const updateDiscount = discountId => {
    return fetch(`http://localhost:8000/discount/${ discountId }`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
        .then(getDiscount)
}