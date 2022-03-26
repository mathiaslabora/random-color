import React from 'react'
import { connect } from 'react-redux';

const Cuadro = (props) => {

    return (
        <div className='card' style={{ width: "10rem", height: "10rem", backgroundColor: props.result }}>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <h4> {props.result} </h4>
                    <h4 style={{ color: "white" }}> {props.result} </h4>
                </div>

            </div>
        </div>)


}

const stateMapToPros = state => {
    console.log(state.random.result)
    return {
        result: state.random.result?.orginalList
    }
}

export default connect(stateMapToPros)(Cuadro);