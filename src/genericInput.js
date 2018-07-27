import React from 'react';
import className from 'classnames';

export default class GenericInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type : this.props.hasOwnProperty('type') ? this.props.type : 'text',
            placeHolder : this.props.hasOwnProperty('placeHolder') ? this.props.placeholder : "",
            value : this.props.value && this.props.value.length > 0 ? this.props.value : "",
            required : this.props.hasOwnProperty('isRequired') ? this.props.isRequired : false,
            placeHolderIcon : this.props.hasOwnProperty('placeHolderIcon') ? this.props.placeHolderIcon : false,
            placeHolderIconSrc : this.props.hasOwnProperty('placeHolderIconSrc') ? this.props.placeHolderIconSrc : "",
            rightIcon : this.props.hasOwnProperty('rightIcon') ? this.props.rightIcon : false,
            rightIconSrc : this.props.hasOwnProperty('rightIconSrc') ? this.props.rightIconSrc : "",
            label : this.props.hasOwnProperty('label') ? this.props.label : "",
            parentClassName : this.props.hasOwnProperty('parentClassName') ? this.props.hasOwnProperty('parentClassName') : "",
            inputWrapperClassName : this.props.hasOwnProperty('inputWrapperClassName') ? this.props.hasOwnProperty('inputWrapperClassName') : "",
            inputClassName : this.props.hasOwnProperty('inputClassName') ? this.props.hasOwnProperty('inputClassName') : "",
            placeHolderIconClassName : this.props.hasOwnProperty('placeHolderIconClassName') ? this.props.hasOwnProperty('placeHolderIconClassName') : "",
            rightIconClassName : this.props.hasOwnProperty('rightIconClassName') ? this.props.hasOwnProperty('rightIconClassName') : "",
            labelClassName : this.props.hasOwnProperty('labelClassName') ? this.props.hasOwnProperty('labelClassName') : "",
            errorClassName: ""
        };
    }

    componentDidMount() {
        if(window.componentHandler) {
            window.componentHandler.upgradeAllRegistered();
        }
    }

    _setInputValue(value) {
        this.setState({"value" : value});
    }

    _handleInputChange(e) {
        this.setState({value : e.target.value});
        e.target.value.length > 0 && this.state.errorClassName == "input-error" ? this.setState({errorClassName : ""}): "";
        this.props.handleInputChange ? this.props.handleInputChange(e) : "";
    }

    _handleFocusChange() {
        this.props.handleFocusChange ? this.props.handleFocusChange : this._handleInputChange;
    }

    _handleBlurChange() {
        this.props.handleBlurChange ? this.props.handleBlurChange : false;
    }

    render() {
        let parentClassName = this.state.parentClassName ? this.state.parentClassName : className({
            "mdl-cell mdl-cell--4-col" : true
        });
        this.state.errorClassName ? parentClassName[this.state.errorClassName] = true : "";

        let inputWrapperClassName = this.state.inputWrapperClassName ? this.state.inputWrapperClassName : className({
            "mdl-textfield" : true, 
            "mdl-js-textfield" : true
        })

        let inputClassName = this.state.inputClassName ? this.state.inputClassName : className({
            "mdl-textfield__input" : true
        })

        let placeHolderIconClassName = this.state.placeHolderIconClassName ? this.state.placeHolderIconClassName : className({

        })

        let rightIconClassName = this.state.rightIconClassName ? this.state.rightIconClassName : className({

        })

        let labelClassName = this.state.labelClassName ? this.state.labelClassName : className({
            "mdl-textfield__label" : true,
            "required" : this.state.required
        })
      return (
        <div id="text_input" className={parentClassName} >
            <div className={inputWrapperClassName}>
                <input className = {inputClassName} 
                    type = {this.state.type} 
                    placeholder = {this.state.placeHolder} 
                    value = {this.state.value} 
                    required = {this.state.required}
                    onFocus = {this._handleFocusChange.bind(this)}
                    onBlur = {this._handleBlurChange.bind(this)}
                    onChange = {this._handleInputChange.bind(this)}
                />
                { 
                    this.props.placeHolderIcon ? 
                    <img src = {placeHolderIconSrc} className = {placeHolderIconClassName}/> : "" 
                }
                { 
                    this.props.rightIcon ? 
                    <img src = {rightIconSrc} className = {rightIconClassName}/> : "" 
                }
                <label className={labelClassName}>
                    {this.state.label}
                </label>
            </div>
        </div>
      );
    }
}