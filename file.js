var app = new Vue({
  el: '#app',
  data: {
    zone: [
        {id: 0, title: "A1", bool:'False', detail: "0", quantity: 20},
        {id: 1, title: "A2", bool:'False', detail: "0", quantity: 2},
        {id: 2, title: "A3", bool:'False', detail: "0", quantity: 5},
        {id: 3, title: "B1", bool:'False', detail: "0", quantity: 8},
        {id: 4, title: "B2", bool:'False', detail: "0", quantity: 14},
    ],
    qrcode: [
        {id: 0, auth_key: 0382188424, image: "https://www.qr-code-generator.com/wp-content/themes/qr/img-v4/guide/design/QR_Code_Plain.svg", time : "20/12/59"},
        
    ],

    reserve: [
        {id: 0, auth_key: 0382188424 },
        {id: 1, auth_key: 0514872131 },
        {id: 2, auth_key: 204553454 },
        
    ],

    name: [
        {id: 0, auth_key: 0382188424, image: "https://www.qr-code-generator.com/wp-content/themes/qr/img-v4/guide/design/QR_Code_Plain.svg"},
        
    ],


  }
})