async function RequestData (url , fnc)  { 

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    fnc([...responseJson]);
  } catch (error) {
    fnc([]);
    console.log(error)
  }

};

export default RequestData;