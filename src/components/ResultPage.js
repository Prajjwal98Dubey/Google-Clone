import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Results from './Results'
import { items } from './Constants'
import Shimmer from './Shimmer'
import Paginate from './Paginate'
import { RESULT_API } from './Constants'

const ResultPage = () => {
    const [param] = useSearchParams()
    const [search] = useState(param.get("v"))
    const [query, setQuery] = useState([])
    const [loading,setloading]=useState(true)
    const [currentPage,setCurrentPage]=useState(1)
    const[postperPage]=useState(10)

    useEffect(() => {
        const getItems = async () => {
            const url = `https://google-search74.p.rapidapi.com/?query=${search}&limit=100&related_keywords=true`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${RESULT_API}`,
                    'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                // const r=await result.json()
                setQuery(result.results)
                   setloading(false)
                
            } catch (error) {
                console.error(error);
            }
        }
        getItems()

    }, [])
  

    const indexOfLastPost=currentPage*postperPage
    const indexOfFirstPost=indexOfLastPost-postperPage

    const handlePaginate=(n)=>{
        setCurrentPage(n)
    }

    return (
        <>
            <div className='flex justify-start mt-10 ml-10'>
                <div className='flex'>
                    <Link to="/"><div className='text-white text-2xl font-semibold mr-10 cursor-pointer'>Google</div></Link>
                    <div><input type="text" className='pl-5 border border-white w-[600px] h-[40px] rounded-xl bg-[#303134] text-white font-semibold' name={search} value={search} onChange={() => { }} /></div>
                </div>
            </div>

           {  loading ?  <Shimmer/> : <div className='mt-10 ml-[150px]'>
                <div>
                    {query.slice(indexOfFirstPost,indexOfLastPost).map((item) => <Results key={item.url} item={item} />)}
                </div>
            </div>}
             {loading ? null:<Paginate postperPage={postperPage}  total={query.length}  handlePaginate={handlePaginate}/> }
        </>
    )
}

export default ResultPage