import "./App.css";
import styled from "styled-components";

// CSS-in-JS 자바스크립트로 CSS코드를 작성하는 방식
const StContainer = styled.div`
  display: flex;
`
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.borderColor};
  margin: 20px;
`;

const boxList = ['red', 'green', 'blue', 'black']

// Props를 통해서 조건부 스타일링
const getBoxName = (color) => {
  switch(color) {
    case 'red':
      return 'Red Box'
    case 'green':
      return 'Green Box'
    case 'blue':
      return 'Blue Box'
    default:
      return 'Black Box'
  }
}

function App() {
  return (
    <StContainer>
      {
        boxList.map(box => {
          return <StBox borderColor={box}>{getBoxName(box)}</StBox>
        })
      }
    </StContainer>
  )

}

export default App;
