const url = '';

const getOption = (arrayOrderDetail) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ arrayDetail: arrayOrderDetail })
});

const order = (arrayOrderDetail) => (
    fetch(url, getOption(arrayOrderDetail))
    .then(res => res.json())
)

export default order;