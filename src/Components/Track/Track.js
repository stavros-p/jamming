import React from 'react';
import './Track.css';
class Track extends React.Component{
  renderAction(isRemoval){
    if(isRemoval){
      console.log('-');
    }else{
      console.log("+");
    }
  }
  render(
    return(<div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className="Track-action"><!-- + or - will go here --></a>
</div>);
  );
}
default export Track;
