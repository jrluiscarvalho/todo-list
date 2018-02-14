import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'

export default class About extends Component {
    render(){
        return (
            <div>
                <PageHeader name="Sobre" small="Nós"></PageHeader>
                <h2>Nossa História</h2>
                <p>Lorem ipsum ....</p>
            </div>
        )
    }
}