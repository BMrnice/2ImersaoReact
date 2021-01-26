import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json';
import QuizBackground from '../src/Components/QuizBackground/index';
import Widget from '../src/Components/Widget/index.js';
import Footer from '../src/Components/Footer/index';
import GitHubCorner from '../src/Components/GitHubCorner/index';


//const BackgroundImage = styled.div`
 //background-image: url(${db.bg});
 //flex: 1;
 //background-size: cover;
 //background-position; center;
//`;
  
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1> Super Metroid</h1>
        </Widget.Header>
        <Widget.Content>
        <h1>
          Samus Aran a matadora suprema de aliens
        </h1>
        </Widget.Content>
      </Widget>
       <Widget>
         <Widget.Header>
            <h1>Super MArio</h1>
         </Widget.Header>
         
         <Widget.Content>

         <h1>
           salvador de princesa que sempre e sequestrada pelo largato estranho 

         </h1>
         </Widget.Content>
       </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl ="https://github.com/BMrnice"/>
    </QuizBackground>
  )
}
