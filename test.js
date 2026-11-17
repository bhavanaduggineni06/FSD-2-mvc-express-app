const url="http://localhost:8001/api/v1/movies";
const readAllMovies=()=> {
    fetch(url,{method:"GET"}).then((res)=> res.json())
    .then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log("Error while(fetching data",err);
    });
};
const readMovieById=(id)=> {
    fetch(`${url}/${id}`,{method:"GET"})
    .then((res)=> res.json())
    .then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log("Error while fetching data",err);
    });
};
const createMovies=(payload)=> {
    fetch(url, {method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log("Error while creating movie",err);
    });
};
const updateMovie=(id,payload)=> {
    fetch(`${url}/${id}`,{method:"PUT",
        header:{"Content-Type":"application/json"},
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log("Error while updating movie",err);
    });
};
const deleteMovie=(id)=> {
    fetch(`${url}/${id}`,{method:"DELETE"})
    .then((res)=>res.json())
    .then((result)=> {
       console.log(result); 
    })
    .catch((err)=> {
        console.log("Error while deleting movie",err);
    });
};
readAllMovies();