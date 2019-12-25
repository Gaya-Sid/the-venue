import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import CustomButton from '../utils/custom-button.component';

class Discount extends Component {
  
  state ={
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState ({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage()
    }, 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
            
          <Fade onReveal={() => this.percentage()}>

            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>

          </Fade>

          <Slide right>

            <div className="discount_description">
              <h3>Purchase tickets before 20th SEPTEMBER</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nihil, quibusdam ex! dolorem eum atque? 
              Quidem at itaque quam dolorum veritatis consequatur aperiam numquam! 
              Voluptas beatae ab dolorum.</p>

              <CustomButton 
                text="Purchase tickets" 
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              ></CustomButton>
            </div>

          </Slide>

        </div>
      </div>
    );
  }
}

export default Discount;