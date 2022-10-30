import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.div`
    margin: 20px 0px;
`;
const Price = styled.div`
    font-weight: 100;
    font-size: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterSign = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSignOption= styled.option`  `;

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.imgur.com/ibsmTx4.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Cancer</Title>
                <Description>Camomile Tea with Provence Lavender <br></br>57gs/2oz
                </Description>
                <Price>$8.88</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Zodiac Sign</FilterTitle>
                        <FilterSign>
                            <FilterSignOption>Aries</FilterSignOption>
                            <FilterSignOption>Taurus</FilterSignOption>
                            <FilterSignOption>Gemini</FilterSignOption>
                            <FilterSignOption>Cancer</FilterSignOption>
                            <FilterSignOption>Leo</FilterSignOption>
                            <FilterSignOption>Virgo</FilterSignOption>
                            <FilterSignOption>Libra</FilterSignOption>
                            <FilterSignOption>Scorpio</FilterSignOption>
                            <FilterSignOption>Sagitarrius</FilterSignOption>
                            <FilterSignOption>Capricorn</FilterSignOption>
                            <FilterSignOption>Aquarius</FilterSignOption>
                            <FilterSignOption>Picses</FilterSignOption>
                        </FilterSign>
                     </Filter>
                   
                </FilterContainer>

               
            </InfoContainer>

        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product