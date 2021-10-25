import React from "react";

const FetchStarWars = ()=>{
    const [starWars,setStarWars]=React.useState([])
    React.useEffect(()=>{
        const movies=async()=>{
            let result=await(await fetch("https://swapi.dev/api/films/")).json()
            console.log(result.results)
            setStarWars(result.results)
        }
        movies()
    },[])
    return (
        <div>
            {
                starWars.map((value)=>{
                    return <div>
                       <h3 style={{color:"blue"}}> movie name: <span style={{color:"red"}}>{value.title}</span></h3><hr />
                       <h5> Dirctor:{value.director}</h5>
                    </div>
                })
            }
        </div>
    )
}
export default FetchStarWars
