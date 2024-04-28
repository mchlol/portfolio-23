export async function fetchHandler(url) {
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
