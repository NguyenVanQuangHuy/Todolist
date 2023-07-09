import React from "react";
class Leftcomponent extends React.Component {
    render() {
      console.log(this.props.items);
      return (
        <div className="col-md-2 leftcomponent">
           <div className="Useravatar">
              <picture>
                <source media="(min-width:750px)" srcSet=""/>
                <img className="avartar" src = "https://yt3.googleusercontent.com/3BVcX162rJYI3U7x6ibwgG3sg2S3E3kJKyAP1eECnzDFTYU44QNnT03TkIN0A1lr60UOMS1u=s900-c-k-c0x00ffffff-no-rj"/>
              </picture>
           </div>
            <div className="Category">
              <div className="Subcategory">
              <button className="btn btn-primary"><i className="bi bi-airplane margin-right-20px"></i>Category1</button>
              </div>
              <div className="Subcategory">
              <button className="btn btn-primary"><i className="bi bi-airplane margin-right-20px"></i>Category1</button>
              </div>
              <div className="Subcategory">
              <button className="btn btn-primary"><i className="bi bi-airplane margin-right-20px"></i>Category1</button>
              </div>
            </div>
        </div>
      )
    }
  }

export default Leftcomponent;