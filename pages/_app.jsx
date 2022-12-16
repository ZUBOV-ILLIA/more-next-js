import '../styles/globals.css';
import App from 'next/app';

const MyApp = ({ Component, props }) => {
  return (
    <Component {...props} />
  );
}

MyApp.getInitialProps = (appContext) => {
  App.getInitialProps(appContext);
};
export default App;
