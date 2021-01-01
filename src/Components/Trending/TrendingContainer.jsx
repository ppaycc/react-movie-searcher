import TrendingPage from "./Trending";
import {connect} from "react-redux";
import React from 'react';
import * as axios from 'axios';
import {changeMediaTypeAC, changeTimeWindowAC} from "../../Redux/TrandingPage-reducer";
import {withRouter} from "react-router-dom";
import {setResultThunk} from "../../Redux/Relusts-reducer";
import ShowCardContainer from "../Common/ShowCardContainer";

class TrendingClass extends React.Component {
    componentDidMount() {
        this.props.setResultThunk(this.props.baseUrl, this.props.mediaType, this.props.timeWindow);
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.props.setResultThunk(this.props.baseUrl, this.props.mediaType, this.props.timeWindow);
    // }
    makeNewSet() {
        debugger
        console.log(this.props)
        this.props.setResultThunk(this.props.baseUrl, this.props.mediaType, this.props.timeWindow);
    }
    render() {
        console.log(this.props)
        // debugger
        if(this.props.match.params.path) return <ShowCardContainer/>
            return (
           <TrendingPage {...this.props} makeNewSet={this.makeNewSet.bind(this)}/>
       )
    }
}

const mapStateToProps = state => {
    return {
        timeWindow: state.trendingPage.timeWindow,
        result: state.results.result,
        baseUrl: state.trendingPage.baseUrl,
        mediaType: state.trendingPage.mediaType
    }
}

const WithUrlId = withRouter(TrendingClass)

const TrendingPageContainer = connect(mapStateToProps, {setResultThunk, changeTimeWindowAC, changeMediaTypeAC})(WithUrlId)

export default TrendingPageContainer;