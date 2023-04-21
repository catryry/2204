import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "../styles/letters.css"
import 'react-alice-carousel/lib/alice-carousel.css';
import { title1, content1, by1 } from '../txt/carta1.json'
import { title2, content2, by2 } from '../txt/carta2.json'
import { title3, content3, by3 } from '../txt/carta3.json'
import { title4, content4, by4 } from '../txt/carta4.json'

const Letters = () => {

  const letters = [
    {
      id: 1,
      title: title1,
      content: content1,
      by: by1
    },
    {
      id: 2,
      title: title2,
      content: content2,
      by: by2
    },
    {
      id: 3,
      title: title3,
      content: content3,
      by: by3
    },
    {
      id: 4,
      title: title4,
      content: content4,
      by: by4
    }
  ];


  const options = {
    responsive: {
      0: { items: 1 },
      1024: { items: 1 }
    }
  };

  return (
    <div>
      <AliceCarousel {...options}
        mouseTracking
        items={letters.map((letter) => (
          <div key={letter.id} className='cardLetters'>
            <h2>{letter.title}</h2>
            <br />
            <p className='myText'>{letter.content.split('\n').map((line, index) => {
              return <React.Fragment key={index}>{line}<br /></React.Fragment>;
            })}</p>

            <br />
            <p>{letter.by}</p>
          </div>
        ))}

      />

    </div>
  )
}

export default Letters