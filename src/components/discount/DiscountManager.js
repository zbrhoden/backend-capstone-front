export const getDiscounts = () => {
    return fetch("http://localhost:8000/discounts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const createDiscount = (newDiscount) => {
    return fetch("http://localhost:8000/discounts", {
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
    return fetch(`http://localhost:8000/discounts${ discountId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
        .then(getDiscounts)
}

export const updateDiscount = discountId => {
    return fetch(`http://localhost:8000/discounts/${ discountId }`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
        .then(getDiscounts)
}