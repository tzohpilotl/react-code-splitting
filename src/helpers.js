const getVirusData = async function(url, callback) {
  try {
    const newData = await fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
      }
    });
    callback(await newData.json());
  } catch (error) {
    alert("API server has coronavirus");
  }
};

export { getVirusData };