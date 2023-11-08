import { useEffect } from 'react';
import './words.style.css'

const Cover = () => {

  // Text will show  "A fullstack developer" "A software Engineer" "A Tech Enthusiast"
  useEffect(()=>{
    var wordInterval;
    var currentWord = 0;
    var words = [];
    var wordArray = [];

    startWords();

    function startWords () {
      try {
        words = document.getElementsByClassName('word');

        currentWord = 0;
        wordArray = [];
        
        words[currentWord].style.opacity = 1;
        for (var i = 0; i < words.length; i++) {
          splitLetters(words[i]);
        }
        
        changeWord();
        clearInterval(wordInterval);
        wordInterval = setInterval(changeWord, 4000);
      } catch (error) {
        // Ruh-roh - there are no wordz
        // No worries
      }
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      
      for (let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
      
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerText;
      word.innerText = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerText = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      
      wordArray.push(letters);
    }
  }, [])


  return (
    <div className="cover-img">
      <div className='word-container'>
        <h1>
          <span className="word" >
            <span className="letter in">F</span>
            <span className="letter in">u</span>
            <span className="letter in">l</span>
            <span className="letter in">l</span>
            <span className="letter in">&nbsp;</span>
            <span className="letter in">S</span>
            <span className="letter in">t</span>
            <span className="letter in">a</span>
            <span className="letter in">c</span>
            <span className="letter in">k</span>
            <span className="letter in">&nbsp;</span>
            <span className="letter in">D</span>
            <span className="letter in">e</span>
            <span className="letter in">v</span>
            <span className="letter in">.</span>
          </span>
          
          <span className="word" >
            <span className="letter out">S</span>
            <span className="letter out">o</span>
            <span className="letter out">f</span>
            <span className="letter out">t</span>
            <span className="letter out">w</span>
            <span className="letter out">a</span>
            <span className="letter out">r</span>
            <span className="letter out">e</span>
            <span className="letter out">&nbsp;</span>
            <span className="letter out">E</span>
            <span className="letter out">n</span>
            <span className="letter out">g</span>
            <span className="letter out">.</span>
          </span>
          
          <span className="word" >
            <span className="letter out">U</span>
            <span className="letter out">X</span>
            <span className="letter out"> </span>
            <span className="letter out">&nbsp;</span>
            <span className="letter out"> </span>
            <span className="letter out">D</span>
            <span className="letter out">e</span>
            <span className="letter out">s</span>
            <span className="letter out">i</span>
            <span className="letter out">g</span>
            <span className="letter out">n</span>
            <span className="letter out">e</span>
            <span className="letter out">r</span>
            <span className="letter out">.</span>
          </span>
        </h1>
      </div>
      
    </div>
  );
};

export default Cover;