import  styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  ${mobile({height:"30vh"})}

`
const Info = styled.div`
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    color: white;
    margin-bottom:20px;

`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight:600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOW NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
