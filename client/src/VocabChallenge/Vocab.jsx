import React, { useEffect, useState } from 'react';
import WordDescription from './WordDescription';

function App() {
  const [wordData, setWordData] = useState([]);

  useEffect(() => {
    const checkTimeAndExecute = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      if (hours === 4 && minutes === 38 && seconds === 58) {
        localStorage.clear();
      }
      if (hours === 4 && minutes === 39 && seconds === 0) {
        fetchRandomWord();
      }
    };

    // Call the function initially to set the word for the day
    checkTimeAndExecute();

    // Set interval to check every second
    const interval = setInterval(() => {
      checkTimeAndExecute();
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    
    const storedWordData = localStorage.getItem('wordData');
    if (storedWordData) {
      setWordData(JSON.parse(storedWordData));
    } else {
      
      fetchRandomWord();
    }
  }, []);

const fetchRandomWord = async () => {
  try {
    const lastFetchedTimestamp = localStorage.getItem('lastFetchedTimestamp');
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (!lastFetchedTimestamp || currentTime - lastFetchedTimestamp > twentyFourHours) {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      const data = await response.json();
      const word = data[0];

      fetchWordMeaning(word);
      localStorage.setItem('lastFetchedTimestamp', currentTime.toString());
    }
  } catch (error) {
    console.error('Error fetching random word:', error);
  }
};


  const fetchWordMeaning = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const data = await response.json();
      const meaning = data[0]?.meanings[0]?.definitions[0]?.definition;
      if (meaning) {
        const newWordData = [{ word, meaning }, ...wordData]; 
        setWordData(newWordData);
        localStorage.setItem('wordData', JSON.stringify(newWordData)); 
      }
    } catch (error) {
      console.error('Error fetching word meaning:', error);
    }
  };

  return (
    <div>
      <h1 className='flex justify-center'>Vocabulary Challenge</h1>
    
     {wordData.map((item, index) => (
  index === 0 ? <WordDescription key={index} word={item.word} meaning={item.meaning} /> : null
))}

    </div>
  );
}

export default App;
