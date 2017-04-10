export default (idList, idPage) => (
    fetch(`http://app.nhodalat.com/sp_by_type.php?id_type=${idList}&page=${idPage}`)// eslint-disable-line
    .then(res => res.json())
);
