import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>

      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '26rem' }}
          className="mb-2 m-auto mt-4"
        >
          
          <Card.Body>
            <Card.Title> What is cors? </Card.Title>
            <Card.Text>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </Card.Text>
          </Card.Body>
        </Card>
           ))}
      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '26rem' }}
          className="mb-2 m-auto mt-4"
        >
          
          <Card.Body>
            <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
            <Card.Text>
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.I have other options like Auth0,Okta,Keycloak etc.
            </Card.Text>
          </Card.Body>
        </Card>
           ))}
      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '26rem' }}
          className="mb-2 m-auto mt-4"
        >
          
          <Card.Body>
            <Card.Title> How does the private route work? </Card.Title>
            <Card.Text>
            The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
            </Card.Text>
          </Card.Body>
        </Card>
           ))}
      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '26rem' }}
          className="mb-2 m-auto mt-4"
        >
          
          <Card.Body>
            <Card.Title> What is Node? How does Node work?</Card.Title>
            <Card.Text>
            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </Card.Text>
          </Card.Body>
        </Card>
           ))}
         
        </div>
    );
};

export default Blog;