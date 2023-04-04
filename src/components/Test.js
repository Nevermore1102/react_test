import '../styles/test.css';

function Test() {
    return (
      <div>
        <h1>aaa</h1>
        <MyButton/>
        <button>I'm a button</button>
        <AboutPage/>
        <Profile/>
        <ShoppingList/>
      </div>
    );
  }
  function MyButton() {
    return (
        <>
        <button>I'm a button</button>
        <MyButton2/>
        </>
      
    );
  }
  function MyButton2() {
    return (
        <>
        <button>I'm a button</button>
        </>

      
    );
  }
  //JSX css 
  function AboutPage() {
    return (
      <div className="test">
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </div>
    );
  }
  //url users
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
            width: user.imageSize,
            height: user.imageSize
            }}
        />
        </>
    )
  }  
// 循环
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

  function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );  
    return (
        <ul>{listItems}</ul>
    );
}
export default Test;
  