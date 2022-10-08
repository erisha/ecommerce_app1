import { Facebook, Instagram, MailOutline, Phone, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;

`;


const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction:  column;
    padding: 20px; 
        
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;


const SocialMedia = styled.div`
    display: flex;
    
`;

const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

`;

const Center = styled.div `
    flex: 1;
    padding: 20px;

 `;

 const Title= styled.h3`
    margin-bottom: 30px;
 `;


 const List= styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
 `;


 const ListItem= styled.li`
    width: 50%;
    margin-bottom: 10px;    
 `;


const Right = styled.div`
    flex:1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;




const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>What's Tea w/ the Stars</Logo>
        
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>
            <SocialMedia>

                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>

                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>

            </SocialMedia>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Candles</ListItem>
                <ListItem>Cups & Accesories</ListItem>
                <ListItem>Teas</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Terms & Policies</ListItem>
                
            </List>

        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
                <Phone /> +1-234-567-8901 
            </ContactItem>
            <ContactItem>
            <MailOutline /> contact@whatstea.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer