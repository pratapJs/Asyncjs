//promise

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("please provide a number");
    }, 500);
  });
getDataPromise(5)
  .then((data) => {
    console.log(data);
    return getDataPromise(data);
  })
  .then((data) => {
    console.log(data);
    return getDataPromise(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
