import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

export default function MainPage() {
  return (
    <div>
      <Banner />
      {/* <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      /> */}
      <Row title="암" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="폐렴" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="심장"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="실습"
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}
