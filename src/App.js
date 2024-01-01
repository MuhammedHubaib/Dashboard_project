import React from "react";
import './style.css'
import logo from './assets/Logo-Blue-no-Shadow.svg'
import Vector from './assets/Vector.svg'
import notification from './assets/Group 1171275647.svg'
import photo from './assets/Frame 1171276803.svg'
import magni from'./assets/Magnifer.svg'
import dash from './assets/Home.svg'
import product from './assets/Frame.svg'
import category from './assets/grid-6.svg'
import report from './assets/Documents.svg'
import arrow from './assets/Arrow-Down.svg'
import left_arrow from './assets/arrow-left.svg'
import filter from './assets/Filter.svg'
import btn from './assets/Add Circle.svg'
import right_arrow from './assets/arrow-right.svg'


const productData = [{productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'},
                     {productName: 'Product Name ', category: 'Category ', numOfProducts: 15, taxId: 'ID223890', dateAdded: '12 November 2023'} 


]


function App(){
    return <html>
        <head>
        <link rel="stylesheet" type="text/css" href="styles.css"></link>
        </head>
    <body>
        <header>
            <div class="header">
                <img class="head-left" src={logo} alt="logo of FAPSS" />
                <div class="header-right">
                    <div class="search-box">
                        <img class="search-icon" src={magni} alt="magnifier"/>
                        <div class="search">
                            <input type="text" id="search-input" placeholder="Search..."></input>
                        </div>
                    </div>
                    <img id="settings-btn" src={Vector} alt="settings"/>
                    <img id="notification-btn" src={notification} alt="settings"/>
                    <img id="profile-btn" src={photo} alt="settings"/>
                </div> 
            </div>
        </header>
            <div className="main-div">
                <div class="left-card">
                        <div class="left-inside-box">
                            <ul>
                                    <li class="nav-div">
                                        <img class="nav-icon" src={dash} alt="dash-icon"/>
                                        <a class="text-dec" href="#"><span>Dashboard</span></a>
                                        <img class="arrow" id="arrow-dash" src={arrow} alt="arrow"/>
                                    </li>
                                    <li class="nav-div">
                                        <img class="nav-icon" src={product} alt="dash-icon"/>
                                        <a class="text-dec" href="#"><span>Product</span></a>
                                        <img class="arrow" id="arrow-product" src={arrow} alt="arrow"/>
                                    </li>
                                    <li class="nav-div">
                                        <img class="nav-icon" src={category} alt="dash-icon"/>
                                        <a class="text-dec" href="#"><span>Category</span></a>
                                        <img class="arrow" id="arrow-category" src={arrow} alt="arrow"/>
                                    </li>
                                    <li class="nav-div">
                                        <img class="nav-icon" src={report} alt="dash-icon"/>
                                        <a class="text-dec" href="#"><span>Report</span></a>
                                        <img class="arrow" id="arrow-report" src={arrow} alt="arrow"/>
                                    </li>
                        
                            </ul>
                        </div>
                        <div class="left-bar-lower">
                            <div class="container">
                                <div class="circle"></div>
                                <span class="text-inside">
                                    <h4 className="heading">Lorem Ipsum</h4>
                                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </span>
                            </div>
                        </div>
                </div>
                <div className="div-one">
                    <div className="breadcrumb">
                        <img className="left-arrow" src={left_arrow} alt="left arrow"/>
                        <p className="dash-txt">Dashboard</p>
                        <p className="slash">/</p>
                        <p className="product-txt">Products</p>
                    </div>
                    <h3 className="head-txt">Products</h3>
                    <div className="inner-first-bar">
                        <div class="search-box-one">
                            <img class="search-icon" src={magni} alt="magnifier"/>
                            <div class="search">
                                <input type="text" id="search-input-one" placeholder="Search..."></input>
                            </div>
                        </div>
                        <div className="filter">
                            <p className="filter-txt">Filter</p>
                            <img className="filter-icon" src={filter} alt="filter-icon"/>
                        </div>
                        <button className="vector-button">
                            Add Product
                            <img className="button-icon" src={btn} alt="button icon" />
                        </button>
                    </div>
                    <div>
                        <table className="table-new">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>No. of Products</th>
                                    <th>Tax Id</th>
                                    <th>Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData.map((product, index) =>( 
                                    <tr key={index}>
                                        <td>{product.productName}</td>
                                        <td>{product.category}</td>
                                        <td>{product.numOfProducts}</td>
                                        <td style={{ fontWeight: 'bold' }}>{product.taxId}</td>
                                        <td>{product.dateAdded}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="lower-div">
                        <div className="lower-left-div">
                            <p className="lower-txt">Number of rows</p>
                            <select className="lower-btn" defaultValue="10" >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="lower-right-div">
                            <button className="pervious-btn">
                                <img className="left-down-arrow" src={left_arrow} alt="Left arrow"/>
                                <span className="pervious-txt">Pervious</span>
                            </button>
                            <button className="num-btn">1</button>
                            <button className="num-btn">2</button>
                            <button className="num-btn">3</button>
                            <button className="num-btn">4</button>
                            <button className="num-btn">...</button>
                            <button className="num-btn">12</button>
                            <button className="nxt-btn">
                                <span className="next-txt">Next</span>
                                <img className="right-arrow" src={right_arrow} alt="Right arror"/>

                            </button>

                        </div>
                    </div>
                </div>
            </div>    

    </body>
    </html>


}
export default App;