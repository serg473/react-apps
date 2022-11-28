import React, {createRef} from 'react';
import mp from './MyProfile.module.css'
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";


class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.valueTA = React.createRef();

    }

    AddPost = () => {
        this.props.addPost()
    }

    updateText = () =>{
        let txt = this.valueTA.current.value;
        this.props.updateTxt(txt)
    }

    render() {

        return <div className={mp.myprofile_item}>

            <div className={mp.profile}>
                <Profile profile={this.props.profile}/>

            </div>
            <div className={mp.post}>
                <textarea onChange={this.updateText} ref={this.valueTA} name="" id="" cols="50" rows="10"></textarea>
                <div>
                    <button onClick={this.AddPost}>Запостить</button>
                </div>
                {this.props.dataPost.map(el =>
                    <Posts key={el.id} title={el.title} id={el.id} body={el.body} photo={el.photo}/>
                )}

            </div>
        </div>
    };
}

export default MyProfile;