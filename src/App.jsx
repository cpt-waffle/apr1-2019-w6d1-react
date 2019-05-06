//Rule 1: always import react (and Component)
import React, {Component} from 'react';

//CATS: https://i.ytimg.com/vi/9nZMHBDw8os/hqdefault.jpg
//DOGS: https://i.ytimg.com/vi/ePREI8Qqi0Y/hqdefault.jpg
//MEMES: https://cdn.kapwing.com/image_5c885ed2ab4559001307f486.jpg


 function dog() {
  return 'woof!!';
 }

class Video extends Component {

  render() {
    console.log(this) // to see what this is // this.props to see what properties are being passed in
    return (
      <div className="video">
        <img src={this.props.image} />
        <div className="space">
          <h2>{this.props.title}</h2>
          <p>Views {this.props.views}</p>
        </div>
      </div>
    )
  }
}


let array = [
  {image: 'https://i.ytimg.com/vi/9nZMHBDw8os/hqdefault.jpg', title: 'CAT VIDEO', views:1235},
  {image: 'https://i.ytimg.com/vi/ePREI8Qqi0Y/hqdefault.jpg', title: 'DOG VIDEO', views:1235},
  {image: 'https://cdn.kapwing.com/image_5c885ed2ab4559001307f486.jpg', title: 'MEMES VIDEO', views:1235}
]
//Rule 2: Classes are your components. extends Component

class App extends Component {
  //Rule 6: There are things called constructors and it has state
  constructor(props) {
    // BONUS: this is how to set a default state
    super(props);
    this.state = { number: 0, test: 'hello world'}
  }

  // BONUS: this is how to define a function. Note use es6 syntax because it autobind ( which will have to 'this' object)
  number = () => {
    let x = this.state.number;
    console.log(x)
    x++;
    //BONUS:  to set a state make sure to use the setState function. If not, the DOM will not rerender and you will not see it change on your screen!
    this.setState({number: x})
  }

  //Rule 3: All Components MUST!!!! have a render() function
  //Rule 5: Always wrap your JSX into one single elment;
  render() {

    return (
      <div>
        {array.map(element => {return <Video
                title={element.title}
                image={element.image}
                views={element.views}
              />
        })}


        <h1>CHECK OUT MY STATE</h1>
        <h3>{this.state.test}</h3>
        <h2>{this.state.number}</h2>
        <button onClick={this.number}>CLICK ME</button>
      </div>

    );
  }
}
//Rule 4: If component is a in a different file, ALWAYS export that component
export default App;


    // Not the best way!! use .map .filter .forEach instead!!!!
    // for (let i of array) {
    //   jsxArray.push(<Video title={i.title} image={i.image} views={i.views}/>)
    // }