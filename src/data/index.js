export const getResults = async function(searchTerm) {
    const result = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`);
    const data = await result.json();
    console.log(data.hits);
    if (data && data.hits && data.hits.length && data.hits.length > 0) {
        return data.hits;
    }
    return [];
};