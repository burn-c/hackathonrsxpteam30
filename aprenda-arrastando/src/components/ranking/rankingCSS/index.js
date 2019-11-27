import React from 'react';

import { Container } from './styles';

export default function RankCSS() {

    const ranks = [
        { 
            id:3,
            avatar:"https://tse4.mm.bing.net/th?id=OIP.pfdVGYXs6WH-Y1_d6VCxewHaHa&pid=Api&P=0&w=300&h=300",
            name:'FERNANDO GOMES',
            score:45
        },
        { 
            id:1,
            avatar:"https://tse1.mm.bing.net/th?id=OIP.RBl5rxK98Bn_9edA_gzvHQHaHa&pid=Api&P=0&w=300&h=300",
            name:'PEDRO TEXEIRA',
            score:35
        },
     
        { 
            id:2,
            avatar:"https://tse4.mm.bing.net/th?id=OIP.PXslPdZU1kL-BNtmYMUpQwHaHa&pid=Api&P=0&w=300&h=300",
            name:'VINICIUS MORAIS',
            score:28
        },
              
    ];
  
  return (
    <Container>
         <h1>Ranking</h1>   
    {
       ranks.map((rank)=>(
        <div className="divList">
        
        <ul key={rank.score}>
           
              <img src={rank.avatar}/>
              <span className="nameRank">{rank.name}</span>
                <span className="Rank">{rank.score} </span>
 
        </ul>
        </div>
    )
    )}
    
     </Container>
  );

}