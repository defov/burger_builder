import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-order';

import * as actions from '../../store/actions/';

import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        let orders = <Spinner />;
        if(!this.props.loading){
            orders = (
                <div>
                    {this.props.orders.map(order => (<Order 
                                                        key={order.id}
                                                        ingredients={order.ingredients}
                                                        price={+order.price}/>))}
                </div>
            );
        }
        return orders;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));