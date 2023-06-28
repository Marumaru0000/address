document.getElementById('postcodeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var postcode = document.getElementById('postcode').value;
    getAddress(postcode);
});

function getAddress(postcode) {
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                var results = data.results;
                var address = results[0].address1 + results[0].address2 + results[0].address3;
                document.getElementById('addressResult').innerText = '住所: ' + address;
            } else {
                document.getElementById('addressResult').innerText = 'エラー: ' + data.message;
            }
        })
        .catch(error => {
            document.getElementById('addressResult').innerText = 'エラー: ' + error;
        });
}