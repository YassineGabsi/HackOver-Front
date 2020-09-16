import React, {Component} from 'react';
import "./feedbacks.sass";

class Feedbacks extends Component {
    constructor(props) {
        super(props);
        this.deleteFeed = this.deleteFeed.bind(this);
        this.updateFeed = this.updateFeed.bind(this);
        this.changeFeedback = this.changeFeedback.bind(this);
        this.addFeedback = this.addFeedback.bind(this);

        this.state = {
            feedback: this.props.feedback.comment,
            changeFeedback : false,
        }
    }

     deleteFeed () {
        this.props.deleteFeedback(this.props.oneHack._id, this.props.feedback._id)
    };

     updateFeed () {
        this.props.updateFeedback(this.state.feedback, this.props.oneHack._id, this.props.feedback._id)
    };

     changeFeedback () {
         this.setState({
            changeFeedback: !this.state.changeFeedback,
         });
     }
    addFeedback(e) {
        this.state.feedback = e.target.value;
    }

     render () {
         return (
             <div>
                 <div className=" row  mx-auto" style={{padding: "8px 8px 8px 0"}}>
                     <div className="user-circle "/>
                     <div className="row">
                         <p className="brand" style={{paddingLeft: "30px", paddingTop: "5px"}}>{this.props.feedback.author.fullName}
                             <br/>
                             <span style={{fontSize: "1rem", color: "white"}}> {new Intl.DateTimeFormat("en-US", {
                                 year: "numeric",
                                 month: "long",
                                 day: "2-digit",
                             }).format(new Date(this.props.feedback.createdAt))}</span>
                         </p>
                     </div>
                 </div>
                 {this.state.changeFeedback ? (
                     <>
                         <input type="text" className="input  vivify fadeIn mt-3 d-flex mx-auto mb-4"
                                placeholder="Phone" defaultValue={this.state.feedback} onChange={this.addFeedback}/>
                         <a className="font-weight-bold text-size" onClick={this.changeFeedback}>Cancel</a>
                         <a className="font-weight-bold text-size ml-3 red-colored"
                            onClick={this.updateFeed}>Change</a>
                     </>
                 ) : (
                     <>
                         <p className="text-size">{this.props.feedback.comment}</p>
                         {this.props.user._id === this.props.feedback.author._id ? (
                             <>
                                 <button className="button button-reg-log  mx-3 vivify fadeIn delay-200"
                                         onClick={this.deleteFeed}>
                                     Delete
                                 </button>
                                 <button className="button button-reg-log  mx-3 vivify fadeIn delay-200"
                                         onClick={this.changeFeedback}>
                                     Update
                                 </button>
                             </>
                         ) : null}
                     </>
                 )}
                 <hr/>
             </div>
         );
     }
}

export default Feedbacks;
