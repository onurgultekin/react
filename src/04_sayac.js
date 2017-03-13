var Sayac = React.createClass({
  getInitialState: function () {
    return {sayac: 0};
  },

  artir: function () {
    var suAnkiSayac = this.state.sayac;
    this.setState({sayac: suAnkiSayac + 1});
   },

  render: function () {
    return (
      <div>
        Sayaca {this.state.sayac} kez assss
        <button onClick={this.artir}>asdsa</button>
      </div>)
    }
})



React.render(<Sayac/>, document.body);
