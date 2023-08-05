const fetchApi = async (endpoint, setter) => {
    const response = await fetch(endpoint)
    const data = await response.json()
    setter(data)
}

export default fetchApi