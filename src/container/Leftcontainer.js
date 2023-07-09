import React, { Component } from 'react'
import { connect } from 'react-redux'
import Leftcomponent from '../component/Leftcomponent'
import * as action from '../action/Leftaction'

class Leftaction extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render (){
        return(
            <Leftcomponent {...this.props}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Leftaction)
