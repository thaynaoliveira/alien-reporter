import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReports } from '../Actions';
import Sortable from '../components/Sortable';

class Reports extends Component {

    componentDidMount(){
        this.getReports();
    }

    refresh(e){
        e.preventDefault();
        this.getReports();
    }

    getReports(){
        let { dispatch } = this.props;
        dispatch(getReports());
    }

    formatDate(date){
        let d = new Date(date);
        return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    }

    render() {
        console.log(this.props.reports)
        return (
            <div className="reports">
                {this.props.reports && this.props.reports.formId ?
                    <div>
                        <div className="reports__main">
                            <h4>Last sighting</h4>
                            <div className="reports__main__item">
                                <img src="../../images/alien.png" width="30px"/>
                                <div className="reports__main__item__details">
                                    <span>{this.props.reports.lastChangedBy}</span>
                                    <div>
                                        <p>{this.props.reports.formId}</p>
                                        <p>{this.formatDate(this.props.reports.lastChangedDate)}</p>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divisor"></div>
                        <div className="reports__all">
                            <h4>List of reported sightings</h4>
                            <Sortable listItems={this.props.reports.form}/>
                        </div>
                    </div>
                    : 
                    this.props.loading ? null :
                    <div className="reports__not-found">
                        <p>No reports found. Please, try again later.</p>
                        <button className="btn-default" onClick={(e) => this.refresh(e)}>Try again</button>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reports: state.reports,
        loading: state.loading
    };
}

export default connect(mapStateToProps)(Reports);