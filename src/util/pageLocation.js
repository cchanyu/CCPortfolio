const pageLocation = (props) => {
    let page = 0;
    if (props.pathname === '/') {
      page = 1;
    } else if (props.pathname === '/about') {
      page = 2;
    } else if (props.pathname === '/project') {
      page = 3;
    } else if (props.pathname === '/contact') {
      page = 4;
    }
    return page;
  };
  
  export default pageLocation;