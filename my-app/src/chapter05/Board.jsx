import React from "react";
const styles={
    wrapper:{
        margin:8,
        padding:8,
        display:"flex",
        flexDirection:"row",
        border:"1px solid grey",
        borderRadius:16,
    },
    imageContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    image:{
        width:50,
        height:50,
        borderRadius:25,
    },
    contentContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    nameText:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
    },
    commentText:{
        color:"black",
        fontSize:16,
    },
};
function User(props) {
    return (
        <div style={styles.contentContainer}>
            <div style={styles.nameText}>{props.name}</div>
            <div style={styles.commentText}>{props.comment}</div>
        </div>
    );
}


function Board(props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
              <User src={props.imgUrl} name={props.name}/>
            </div>
        
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>
            {props.comment}
            </span>
        </div>
        </div>
    );
}
export default Board;