import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex:1;

 
align-items:center;
 flex-direction:column;
 justify-content:space-between;

 h1{
     align-self:center;
     margin:10px 20px;
     

 }
 
.divList{
background:#FFf;
margin: 5px;
border-color:#555;
 border-width:4;
 padding:5px;
 width:200px;

}

  img{
      width:30px;
      height:30px;
      border-radius:50%;
  }
  .nameRank{
    margin-left:5px;
    font-size:12px;
    font-weight:bold;
    margin-right:10px;
    
    
  }
  .scoreRank{
   
    font-size:18px;
  
  }


`;
