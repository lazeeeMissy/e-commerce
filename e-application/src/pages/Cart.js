import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import {mobile} from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
  ${mobile({padding: '10px'})}
    
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
  ${mobile({padding: '5px'})}

`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
  ${mobile({fontWeight: '400'})}
    
`
const TopTexts = styled.div`
  ${mobile({display: 'none'})}
 
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
  ${mobile({margin: '10px'})}
    
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
  ${mobile({flexDirection: 'column'})}

`
const Info = styled.div`
    flex:3;
    
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Image = styled.img`
    width: 200px;
    ${mobile({width: '150px'})}

`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const PriceDetail = styled.span`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    margin-bottom:20px ;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({fontSize: '24px',marginTop:'10px'})}

`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==='total' && '500'};
    font-size: ${props=>props.type==='total' && '24px'};
`
const SummaryItemPrice = styled.span`
`
const SummaryItemText = styled.span`
 
`
const Button = styled.button`
    width: 100%;
    background-color: black;
    padding: 10px;
    color: white;
    font-weight: 600;
`


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>
                            Shopping Bag(2)
                        </TopText>
                        <TopText>
                            Your wishlist(0)
                        </TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECK OUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail></ProductDetail>
                            <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                            <Details>
                                <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID: </b>9283729474</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Dize: </b>36.5</ProductSize>
                            </Details>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add style={{cursor:"pointer"}}/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove style={{cursor:"pointer"}}/>
                                    <ProductPrice>$20</ProductPrice>
                                </ProductAmountContainer>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail></ProductDetail>
                            <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                            <Details>
                                <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID: </b>9283729474</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Dize: </b>36.5</ProductSize>
                            </Details>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add style={{cursor:"pointer"}}/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove style={{cursor:"pointer"}}/>
                                    <ProductPrice>$20</ProductPrice>
                                </ProductAmountContainer>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>   
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type = 'total'>
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 90</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
