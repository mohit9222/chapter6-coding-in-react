import React, { useState } from 'react';
import ResturantCard from './ResturantCard';
import resList from '../utils/mockData';

  function filteredData(searchText, listOfResturants) {
    return listOfResturants.filter(res => res.data.name.toUpperCase().includes(searchText.toUpperCase()));
  }

  const Body = () => {
  // local state variable - super powerful variable
  // we use Hooks - useState();
  const [listOfResturants, setListOfResturants] = useState(resList);
  const [searchText, setSearchText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const searchData = (searchText,listOfResturants) => {
    if(searchText !== ''){
      const data = filteredData(searchText, resList);
      setListOfResturants(data);
    if(data.length === 0){
      setErrorMsg("No Match Found!");
    } else {
      setErrorMsg('');
    }
  } else {
     setListOfResturants(resList);
     setErrorMsg('');
  }
};

    return(
        <div className='body'>
            <div className='filter'>
                <input  
                  className='search-btn'
                  placeholder='Search Resturant'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  className='search-btn'
                  onClick={() => searchData(searchText, listOfResturants)} 
                >Search</button> 
                { errorMsg && 
                  <div className='erro-msg'>
                    <h5>{errorMsg}</h5>
                  </div>
                }                
                <button className='filter-btn' 
                  onClick={() => {
                    const filteredList = listOfResturants.filter(
                      res => res.data.avgRating > 4
                    );
                    setListOfResturants(filteredList);
                  }}>Top Rated Resturant</button>
            </div>
            <div className='restro-container'>
            {
              listOfResturants.map((restaurant) => (
                <ResturantCard key={restaurant.data.id} resData={restaurant}/>
              ))
            }
            </div>
        </div>
    )
}

export default Body;