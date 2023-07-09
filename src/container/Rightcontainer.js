import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rightcomponent from '../component/Rightcomponent'
import * as action from '../action/Leftaction'

class Rightaction extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render (){
        return(
            <Rightcomponent {...this.props}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItem: () => {
            dispatch(action.getListItemRequest())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.item.listItem
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rightaction)
