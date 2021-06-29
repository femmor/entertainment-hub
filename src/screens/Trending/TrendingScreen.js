import React, { useEffect, useState } from 'react'
import "./TrendingScreen.css"
import SingleContent from '../../components/SingleContent/SingleContent'

const TrendingScreen = () => {
  const [trending, setTrending] = useState([])

  const api_key = process.env.REACT_APP_API_KEY

  const getTrending = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
        const data = await response.json({})
        const trendingMovies = data.results
        setTrending(trendingMovies)
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <div>
      <h1 className="screen-title">Trending</h1>
      <div className="trending">
        {
          trending ? trending.map
            (movie =>
              <SingleContent 
                key={movie.id} 
                id={movie.id}
                title={movie.title || movie.name} 
                date={movie.first_air_date || movie.release_date}
                media_type={movie.media_type}
                poster={movie.poster_path}
                vote_average={movie.vote_average}
              />
            ) 
          : (
              <>
                <h2>No Trending Movies</h2>
              </>
            )
        }
      </div>
    </div>
  )
}

export default TrendingScreen
