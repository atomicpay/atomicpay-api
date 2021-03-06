var data = JSON.stringify({
  "url_name": "REPLACE_WITH_VALUE",
  "url_expiry": "REPLACE_WITH_VALUE",
  "order_id": "REPLACE_WITH_VALUE",
  "order_price": "REPLACE_WITH_VALUE",
  "order_currency": "REPLACE_WITH_VALUE",
  "order_description": "REPLACE_WITH_VALUE",
  "transaction_speed": "REPLACE_WITH_VALUE",
  "notification_url": "REPLACE_WITH_VALUE",
  "notification_email": "REPLACE_WITH_VALUE",
  "redirect_url": "REPLACE_WITH_VALUE"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://merchant.atomicpay.io/api/v1/payurl/REPLACE_WITH_VALUE");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Basic REPLACE_WITH_BASE64_ENCODED_CREDENTIALS");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);