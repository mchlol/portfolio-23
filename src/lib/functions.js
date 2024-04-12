export async function fetchHandler(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };
    const data = await res.json();
    return data;
}
