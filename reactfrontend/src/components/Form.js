import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Create extends Component {
    render() {
        const form_style = {
            display : "flex",
            flexDirection : "column",
            textAlign : 'right',
        }
        return (
            <div >
                <form style = {form_style} onSubmit={this.props.handlingSubmit}>
                <TextField
                    label="Search field"
                    type="search"
                    
                    margin="normal"
                    
                    name='title'
                    value={this.props.title}
                    onChange={this.props.handlingChange}   
                        
                    />
                    <TextField
                        label="Filled"
                        margin="normal"
                        variant="filled"
                        
                        name='content'
                        value={this.props.content}
                        onChange={this.props.handlingChange}
                    />
                    
                    <Button  type="submit">
                        글작성
                    </Button>
                </form>
            </div>
        )
    }
}