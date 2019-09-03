import React, {Component} from 'react';
import Card from './CardsUI';
import img1 from '../../src/Images/Infosys.jpg'
import img2 from '../../src/Images/oxford.jpg'
import img3 from '../../src/Images/user.jpg'
import img4 from '../../src/Images/workspaces.jpg'
import img5 from '../../src/Images/Labs.jpg'
import img6 from '../../src/Images/station.jpg'
import './line.css'

class Cards extends Component {
render(){
    return(
<div class="container-fluid"> 

<div>
   <h5 className="float-left myline" >Your Workspaces</h5>
</div>
<div className="row-md-12">
 
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">

<div className="carousel-inner">

<div className="carousel-item active">
<div className="container-fluid d-flex justify-content-center">

<div className="col-md-3">
<Card imgsrc={img1} title={"workspaces"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img2} title={"Code Lib"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img3} title={"Admin"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img4} title={"Admin"}/>
</div>

</div>
</div>


<div className="carousel-item">
<div className="container-fluid d-flex justify-content-center">

<div className="col-md-3">
<Card imgsrc={img5} title={"workspaces"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img4} title={"Code Lib"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img3} title={"Admin"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img1} title={"Admin"}/>
</div>

</div>
</div>

</div>


<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
<span class="carousel-control-prev-icon"  aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>

<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>

</div>
</div>

<div>
   <h5 className="float-left myline" >You May also Like</h5>
</div>


<div className="row-md-12">
 
<div id="carouselExampleControls2" class="carousel slide" data-ride="carousel" data-interval="false">

<div className="carousel-inner">

<div className="carousel-item active">
<div className="container-fluid d-flex justify-content-center">

<div className="col-md-3">
<Card imgsrc={img6} title={"workspaces"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img4} title={"Code Lib"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img1} title={"Admin"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img5} title={"Admin"}/>
</div>

</div>
</div>


<div className="carousel-item">
<div className="container-fluid d-flex justify-content-center">

<div className="col-md-3">
<Card imgsrc={img5} title={"workspaces"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img4} title={"Code Lib"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img3} title={"Admin"}/>
</div>

<div className="col-md-3">
<Card imgsrc={img1} title={"Admin"}/>
</div>

</div>
</div>

</div>


<a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
<span class="carousel-control-prev-icon"  aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>

<a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>

</div>
</div>

</div>
    );
}

}

export default Cards;