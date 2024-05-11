async function fetchHandler(url) {
    console.log('getting posts')
    const res = await fetch(url);
    console.log('res: ',res)
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };
    const data = await res.json();
    console.log('data :',data)
    return data;
}

function formatDate(dateObj) {
    const fullDate = new Date(dateObj)
    const year = fullDate.getFullYear()
    const month = fullDate.getMonth() + 1
    const day = fullDate.getDate()
    return `${day}/${month}/${year}`
};

export { fetchHandler, formatDate }