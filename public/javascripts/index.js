document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('getRequest').onclick = () => {
        let request = new XMLHttpRequest();
        request.open('GET', '/api');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            console.log(data)
            document.getElementById('getForm').placeholder = data['get'];
        }
        request.send();
    };

    document.getElementById('postRequest').onclick = () => {
        if (document.getElementById('postForm').value != '') {
            let request = new XMLHttpRequest();
            request.open('POST', '/api');
            request.onload = () => {
                console.log('request sent!');
            }
            let message = document.getElementById('postForm').value;

            let sendData = JSON.stringify({'message':message});
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(sendData);
        } else {
            alert('Input box must not be empty!');
        }
    }

});