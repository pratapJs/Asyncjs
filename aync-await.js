const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("please provide a number");
    }, 500);
  });

const processData = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  return data;
};

processData()
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
