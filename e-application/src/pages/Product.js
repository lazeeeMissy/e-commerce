import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import {mobile} from '../responsive'


const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
  ${mobile({flexDirection: 'column',padding:'10px'})}

`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
  ${mobile({height: '50vh'})}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
  ${mobile({padding: '10px'})}

`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
  ${mobile({fontSize: '24px',fontWeight: '400'})}

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;
  ${mobile({width: '95%'})}

`
const Filter = styled.div`
    display: flex;
    align-items:center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div` 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left:10px ;
    padding:  5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
  ${mobile({width: '95%'})}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px; 
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f5;
    }
`



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="http://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, 
                    at iaculis arcu nisi sed mauris. Nulla fermentum vestobulum ex, eget
                    tristique tortor pretum ut. Curabitur elit justo, consequat id condimetum ac,
                    volutpat ornare.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = 'black'/>
                        <FilterColor color = 'darkblue'/>
                        <FilterColor color = 'green'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
