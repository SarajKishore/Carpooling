import React from 'react';
import './mainpage.css';

const Kard= ({matched,rider,phone,model,start,owner,pickup}) =>{
    const kardComponent= matched.map((user,i)=>{
        return <div key={i}>
            <div className="conatiner">
                            <div className="wrap">
                                <div className="box one">       
                                    <div className="date">
                                        <h4>Pickup @ {pickup[i]}</h4>
                                        <h4>Location: {start[i]}</h4>
                                        <h4>Owner: {owner[i]} </h4>
                                        <h4>Car: {model[i]}</h4>
                                        <h4>Rider:{rider[i]}</h4>	
                                        <h4>Owner phone:{phone[i]} </h4>	
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
    });
    return(
        <div>
            {kardComponent}
        </div>
    );
}

export default Kard;