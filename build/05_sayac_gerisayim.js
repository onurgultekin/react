var Sayac = React.createClass({displayName: "Sayac",
  getInitialState: function () {
    return {sayac: 0};
  },

  artir: function () {
    var suAnkiSayac = this.state.sayac;
    if(suAnkiSayac<10){
      this.setState({sayac: suAnkiSayac + 1});
    }
  },

  render: function () {
    return (
    React.createElement("div", null, 
      "Sayaca ", this.state.sayac, " kez tıkladınız.", 
      10 - this.state.sayac, " kez daha tıklamalısınız.", 
      React.createElement("button", {onClick: this.artir}, "Sayaç")
    )
    );
  }
})

React.render(React.createElement(Sayac, null), document.body);
