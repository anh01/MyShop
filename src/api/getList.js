export default (idList, idPage) => (
    fetch(`http://localhost:3000/getList/${idList}/${idPage}`)
    .then(res => res.json())
);
