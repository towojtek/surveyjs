import * as React from 'react';
import {SurveyElementBase, ReactSurveyElement, SurveyQuestionElementBase} from "./reactquestionelement";
import {QuestionResultCommentModel} from "../question_result_comment";
import {Question} from "../question";
import {ReactQuestionFactory} from "./reactquestionfactory";

export class SurveyQuestionResultComment extends SurveyQuestionElementBase {
    constructor(props: any) {
        super(props);
        this.state = { value: this.question.value || '' };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }
    protected get question(): QuestionResultCommentModel { return this.questionBase as QuestionResultCommentModel; }
    componentWillReceiveProps(nextProps: any) {
        super.componentWillReceiveProps(nextProps);
        this.state = { value: this.question.value || '' };
    }
    handleOnChange(event) {
        this.setState({ value: event.target.value });
    }
    handleOnBlur(event) {
        this.question.value = event.target.value;
        this.setState({ value: this.question.value || '' });
    }
    render(): JSX.Element {
        if (!this.question) return null;
        var cssClasses = this.question.cssClasses;
        return (
            <textarea id={this.question.inputId} className={cssClasses.root} type="text" readOnly={this.isDisplayMode} value={this.state.value} placeholder={this.question.placeHolder} onBlur={this.handleOnBlur} onChange={this.handleOnChange} cols={this.question.cols} rows={this.question.rows} />
        );
    }
}

export class SurveyQuestionResultCommentItem extends ReactSurveyElement {
    private question: Question;
    private comment: string;
    private otherCss: string;
    constructor(props: any) {
        super(props);
        this.question = props.question;
        this.comment = this.question.comment;
        this.otherCss = props.otherCss;
        this.state = { value: this.comment };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }
    handleOnChange(event) {
        this.comment = event.target.value;
        this.setState({ value: this.comment });
    }
    handleOnBlur(event) {
        this.question.comment = this.comment;
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
    }
    render(): JSX.Element {
        if (!this.question) return null;
        if (this.isDisplayMode)
            return (<div className={this.cssClasses.comment}>{this.comment}</div>);
        var className = this.otherCss ? this.otherCss : this.cssClasses.comment;
        return (<input type="text" className={className} value={this.state.value} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />);
    }
}

ReactQuestionFactory.Instance.registerQuestion("resultcomment", (props) => {
    return React.createElement(SurveyQuestionResultComment, props);
});
