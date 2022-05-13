import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main/>
      <Row title="Upcoming" rowId="1" fetchURL={requests.requestPopular}/>
      <Row title="Top Rated" rowId="2" fetchURL={requests.requestTopRated}/>
      <Row title="Trending" rowId="3" fetchURL={requests.requestTrending}/>
      <Row title="Upcoming" rowId="4" fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home