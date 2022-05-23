import React, {useEffect, useState} from 'react'

const Joke = () => {
    const initialJoke =
     {
        joke: "are you alright?"
    };

  const [joke, setJoke] = useState('');

  /*useEffect( ()=>{
    axios
    .get('https://icanhazdadjoke.com/', {headers: {Accept:'application/json'}})
    .then(res=>setJoke(res.data))
    .catch(err=>console.log(err))
  },[]);

  const fetchJoke = ()=>{
    axios
    .get('https://icanhazdadjoke.com/', {headers: {Accept:'application/json'}})
    .then(res=>setJoke(res.data))
    .catch(err=>console.log(err))
  }*/
  

  return (
    <div className="mt-4">
      <div className="card">
          <div className="card-header">Joke game</div>
          <div className="card-body">
              <p className="card-text">{joke.joke}</p><br />
              <a href="" className="btn btn-primary text-white" onClick="()">play</a>
          </div>
      </div>
    </div>
  )
}

export default Joke
