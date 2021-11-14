import  product from './product'
import './home.css'
function Home()
{
    return (
      
        <div className="home">
            <product 
            id="1"
            name="potato"
            price={30}
            available="1"
            vendor="himachal pvt ltd"
            category="vegitables"
            image="potato.png"
            />
            <product 
            id="4"
            name="orange"
            price={25}
            available="1"
            vendor="nagpur farms"
            category="fruits"
            image="orange.png"
            />
            <product 
            id="2"
            name="banana"
            price={50}
            available="1"
            vendor="organic farms"
            category="fruits"
            image="banana.png"
            />
            <product 
            id="3"
            name="Drumsticks"
            price={20}
            available="0"
            vendor="malikarjuna farms"
            category="vegitables"
            image="drumstick.png"
            /></div>
    )
}
export default Home