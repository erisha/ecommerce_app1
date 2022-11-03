import styled from "styled-components"

const Container = styled.div``;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder='First Name'/>
                <Input placeholder='Last Name'/>
                <Input placeholder='Username'/>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register