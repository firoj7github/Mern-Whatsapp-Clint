import React, { useContext } from 'react'
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { qrCodeImage } from '../../layouts/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { UserAccount } from '../../context/UserProvider';
import { addUser } from '../../service/api';




const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCOde = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '7%',
    height: '80%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}
function LoginDailog() {


    const clientId= '668673245264-ccgcpg9usfj3u4vohiue4l2j85edg5kb.apps.googleusercontent.com';
    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const {setAccount}= useContext(UserAccount)
    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            hideBackdrop={true}
            PaperProps={{ sx: dialogStyle }}>
            <Component>
                <Container>
                    <Title>Use WhatsApp 3.0 on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRCOde src={qrCodeImage} alt="QR Code" />
                    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
                        
                            <GoogleLogin
                               clientId={clientId}
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            /> 
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDailog
