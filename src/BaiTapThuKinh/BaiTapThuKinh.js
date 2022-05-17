import React, { Component } from "react";
import styles from "./BaiTapThuKinh.module.css";
// import model from '../assets/img/glasses/model.jpg'
// import g1 from '../assets/img/glasses/g1.jpg'
// import g2 from '../assets/img/glasses/g2.jpg'
// import g3 from '../assets/img/glasses/g3.jpg'
// import g4 from '../assets/img/glasses/g4.jpg'
// import g5 from '../assets/img/glasses/g5.jpg'
// import g6 from '../assets/img/glasses/g6.jpg'
// import g7 from '../assets/img/glasses/g7.jpg'
// import g8 from '../assets/img/glasses/g8.jpg'
// import g9 from '../assets/img/glasses/g9.jpg'
// import v1 from '../assets/img/glasses/v1.png'
// import v2 from '../assets/img/glasses/v2.png'
// import v3 from '../assets/img/glasses/v3.png'
// import v4 from '../assets/img/glasses/v4.png'
// import v5 from '../assets/img/glasses/v5.png'
// import v6 from '../assets/img/glasses/v6.png'
// import v7 from '../assets/img/glasses/v7.png'
// import v8 from '../assets/img/glasses/v8.png'

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
class BaiTapThuKinh extends Component {
   constructor(prosp){
       super(prosp);
      this.state = {
          name : "FENDI F8500",
          price : " 100",
          desc : "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
          url:"./glassesImage/v8.png",
      }
   }
  
   handleTestGlass =(name,price,desc,url)=>{
       this.setState({name,price,desc,url})
       
}
h
  renderGlasses = () => {
     return data.map((item)=>{
          return (
              <div key={item.id} className={styles.item}>
                  <img onClick={()=>this.handleTestGlass(item.name,item.price,item.desc,item.url)} src={item.url}/>
              </div>
          )
      })
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Test Glasses online</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.model}>
              <div className={styles.modelLeft}>
                  <img src="./glassesImage/model.jpg"/>
                  <div className={styles.info}>
                      <p>{`Name : ${this.state.name}`}</p>
                      <p>{`Price : ${this.state.price}`}</p>
                      <p>{`Desc : ${this.state.desc}`}</p>
                  

                  </div>
                  <img src={this.state.url} className={styles.glassTest}/>
              </div>
              <div className={styles.modelRight}>
                  <img src="./glassesImage/model.jpg"/>
              </div>
          </div>
          <div className={styles.glasses}>
              {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapThuKinh;
