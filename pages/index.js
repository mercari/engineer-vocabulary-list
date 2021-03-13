import React, { useState } from 'react'
import Fuse from 'fuse.js'
import dictionary from './api/dictionary'

const Home = () => {
  const [translations, setTranslations] = useState([...dictionary])
  const fuse = new Fuse(dictionary, {
    keys: ['en', 'jp'],
  })

  const handleSearch = (e) => {
    if (!e.target.value.trim()) {
      setTranslations([...dictionary])
    } else {
      const filtered = []
      const results = fuse.search(e.target.value)
      for (let index = 0; index < results.length; index++) {
        filtered.push(results[index].item)
      }
      setTranslations(filtered)
    }
  }
  return (
    <div>
      <h1 className="title billabong">Engineer Vocabulary List in Japanese/English</h1>
      <h2 className="title">エンジニア向け日英ボキャブラリーリスト</h2>
      <p className="description">
        Consolidated and Comprehensive guide to communication in multi national team. (Japan)
        <br/>
        <br/>
        <a className="serif" href="https://github.com/kevincobain2000/engineer-vocabulary-list">Add more translations</a>
      </p>
      <input onChange={handleSearch} type="text" placeholder="Search here.."/>
      <br/><br/>
      {translations.map((name, index) => (
          <div className="card" key={`key-${index}`}>
            <p>{name.en}</p>
            <p>{name.jp}</p>
          </div>
      ))}
    </div>
  )
}

export default Home
