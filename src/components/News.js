import React, {useState} from 'react';
import axios from 'axios';
import { NavbarData } from './Navbar';

import { Link } from 'react-router-dom';
 
const URL = 'http://hn.algolia.com/api/v1/search'
// const URL = 'https://newsapi.org/v2/everything?q=tesla&from=2021-08-17&sortBy=publishedAt&apiKey=API_KEY';

export default function Search() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
 
  async function handleFetch(event) {
    let result;
 
    try {
      result = await axios.get(`${URL}?query=React`);
      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }
 
  return (
  <>
    <body background="/assets/img/bg-img.png">
      <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#" style={{paddingLeft: '55px'}}>
                      <img src="/assets/img/logo-ALTA.png" alt="" className="d-inline-block" style={{width: '100.75px', height: '50px'}}/>
                  </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to={NavbarData[0].path} className="nav-menu nav-link" style={{color: '#F47522'}}>HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={NavbarData[1].path} className="nav-menu nav-link" style={{color: '#19345E'}}>ABOUT</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={NavbarData[2].path} className="nav-menu nav-link" style={{color: '#19345E'}}>NEWS</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={NavbarData[3].path} className="nav-menu nav-link" style={{paddingRight: '55px', color: '#19345E'}}>CONTACT</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
      </header>
    </body>  
      <div>
      <button type="button" onClick={handleFetch}>
        Cari Cerita React
      </button>
 
      {error && <span>Ada yang error ...</span>}
 
      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
      </div>  
  </>
  );
}




    