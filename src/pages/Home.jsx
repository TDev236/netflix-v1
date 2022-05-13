import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main/>
      <Row title="Upcoming" rowId="" fetchURL={requests.requestPopular}/>
      <Row title="Top Rated" rowId="" fetchURL={requests.requestTopRated}/>
      <Row title="Trending" rowId="" fetchURL={requests.requestTrending}/>
      <Row title="Upcoming" rowId="" fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home