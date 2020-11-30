import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import Link from 'material-ui/core/Link'
import { CookiesProvider } from 'react-cookie';
import Cookies from 'universal-cookie';

const useStyles = (theme) => ({
  root: {
    flex: '1 1 auto',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > div': {
      margin: `${theme.spacing(1)}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& fieldset': {
      border: 'none',
      '& label': {
        marginBottom: theme.spacing(.5),
        display: 'block',
      },
    },
  },
})

const getItem = key =>
    document.cookie.split("; ").reduce((total, currentCookie) => {
       const item = currentCookie.split("=");
       const storedKey = item[0];
       const storedValue = item[1];
       return key === storedKey 
         ? decodeURIComponent(storedValue) 
         : total;
    }, '');

const useCookies = (key, defaultValue) => {
    const getCookies = () => getItem(key) || defaultValue;
    const [cookie, setCookie] = useState(getCookies());
 
   return [cookie];
};

export default ({
  onUser
}) => {
  const styles = useStyles(useTheme())
  const [cookies, setCookie, removeCookie]=useCookies([]);  
    const config = {
        authorization_endpoint: "http://127.0.0.1:5556/dex/auth",
        token_endpoint: "http://127.0.0.1:5556/dex/token",
        client_id: 'webtech',
        redirect_uri:'http://127.0.0.1:3000',
        scope : 'openid%20email%20offline_access'
    }
    const params =new URLSearchParams(window.location.search)
    const code=params.get('code')
    const crypto = require ('crypto')
    const axios = require ('axios')
    const qs = require ('qs')

    const base64URLEncode = (str) =>{
      str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    }
    
    const sha256 = (buffer) => {
        crypto
    .createHash('sha256')
    .update(buffer)
    .digest();
    }
    
    
     if(!code)
    {
        if(!cookies.oauth)
        {
            const codeVerifier=base64URLEncode(crypto.randomBytes(32))
            setCookie('code_verifier', codeVerifier)
            return (<Redirect codeVerifier={codeVerifier} config={config} css={styles.root} /> )
        }
        else
        {
            return(<Tokens oauth={cookies.oauth} css={styles.root} />)
        }
        
    }
    else
    {
        const codeVerifier=cookies.code_verifier
        useEffect(  () => {
                const fetch= async () => {
                    try {
                        const {data: oauth} = await axios.post (
                        config.token_endpoint,
                        qs.stringify({
                            grant_type: 'authorization_code',
                            client_id: `${config.client_id}`,
                            redirect_uri: `${config.redirect_uri}`,
                            //client_secret: client_secret,
                            code_verifier: `${codeVerifier}`,
                            code: `${code}`
                        }))
                        removeCookie('code_verifier')
                        setCookie('oauth', oauth)
                        window.location='/'
                    }catch(err){
                        console.error(err)
                    }
                }
                fetch()
            }
            )
    }
    
    const Redirect = (
        codeVerifier,
        config,
    ) => {
        const styles=useStyles(useTheme())
        const redirect = (e)=>{
            e.stopPropagation()
            const code_challenge= base64URLEncode(sha256(codeVerifier))
            const url=[
                "#{authorization_endpoint}?",
                "client_id=#{client_id}&",
                "scope=#{scope.join '%20'}&",
                "response_type=code&",
                "redirect_uri=#{redirect_uri}&",
                "code_challenge=#{code_challenge}&",
                "code_challenge_method=S256"
                ].join('')
            window.location=url
        }
        return (<div css={styles.root}>
               <Link onClick={redirect} color='secondary'>Login with Dex;</Link>
               </div>
               )
        }

    const Tokens = (
        oauth
    ) => {
        const [,, removeCookie] = useCookies([]);
        const styles = useStyles(useTheme())
        const {id_token} = oauth
        const id_payload= id_token.split('.')[1]
        const {email} = JSON.parse(atob(id_payload))
        const logout= (e)=>{
            e.stopPropagation()
        }
    }
    
   
        
  return (
    <div css={styles.root}>
      <div>
        <fieldset>
          <label htmlFor="username">username: </label>
          <input id="username" name="username" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">password:</label>
          <input id="password" name="password" type="password" />
        </fieldset>
        <fieldset>
          <input type="submit" value="login" onClick={ (e) => {
            e.stopPropagation()
            onUser({username: 'david'})
          }} />
        </fieldset>
      </div>
    </div>
  );
}
