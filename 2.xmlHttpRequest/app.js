let getData = (url, callback) => {
  // step 1
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.responseType = "json";

  // step 2
  // onload execute when the request is success
  xhr.onload = () => {
    const status = xhr.status;
    if (status == 200) {
      callback(null, xhr.response);
    } else {
      callback(status);
    }
  };

  // step 3
  xhr.send();
};

getData("http://time.jsontest.com", (error, data) => {
  if (error) {
    console.log("OOPS", error);
  } else {
    let txt = ` at ${data.time}`;
    document.getElementsByTagName("h1")[0].append(txt);
  }
});
