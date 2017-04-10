const url = 'http://app.nhodalat.com/getdata.php';

const getOption = (arrayOrderDetail) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ arrayDetail: arrayOrderDetail })
});

const order = (arrayOrderDetail) => (
    fetch(url, getOption(arrayOrderDetail))// eslint-disable-line
    .then(res => res.text())
);

export default order;
