import {Question} from "./question";
import {JsonObject} from "./jsonobject";
import {QuestionFactory} from "./questionfactory";
import {LocalizableString} from "./localizablestring";

/**
 * A Model for a comment question
 */
export class QuestionResultCommentModel extends Question{
    /**
     * The html rows attribute.
     */
    public rows: number = 1;
    /**
     * The html cols attribute.
     */
    public cols: number = 50;
    private locPlaceHolderValue: LocalizableString;
    constructor(public name: string) {
        super(name);
        this.locPlaceHolderValue = new LocalizableString(this);
    }
    /**
     * Use this property to set the input place holder.
     */
    public get placeHolder(): string { return this.locPlaceHolder.text; }
    public set placeHolder(value: string) { this.locPlaceHolder.text = value; }
    get locPlaceHolder(): LocalizableString {return this.locPlaceHolderValue; }
    public getType(): string {
        return "resultcomment";
    }
    isEmpty(): boolean {
        return super.isEmpty() || this.value === "";
    }

    protected onItemValueChanged() {
        this.rows = this.rows +5;
    }

    onSurveyValueChangeInterceptor(){
        console.log('W OBIEKCIE PODRZEDNYM');
    }


    protected onValueChanged() {
        super.onValueChanged();
        this.onItemValueChanged();
    }
}
JsonObject.metaData.addClass("resultcomment", [{ name: "cols:number", default: 50 }, { name: "rows:number", default: 4 },
    {name: "placeHolder", serializationProperty: "locPlaceHolder"}], function () { return new QuestionResultCommentModel(""); }, "question");
QuestionFactory.Instance.registerQuestion("resultcomment", (name) => { return new QuestionResultCommentModel(name); });
