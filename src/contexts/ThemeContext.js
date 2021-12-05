import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
      isDarkTheme: true,
      dark: {bg: '#222529', txt: '#D65F5F', hover: 'rgba(231, 76, 60, 0.6'},
      light: {bg: '#F8F9FA', txt: '#222529', hover: 'rgba(254, 209, 54, 0.6'}
  }
  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// console.log(myContext);
export default ThemeContextProvider;
