import {JsonObject} from "../jsonobject";
import {QuestionFactory} from "../questionfactory";
import {QuestionResultCommentModel} from "../question_result_comment";
import {QuestionImplementor} from "./koquestion";

export class QuestionResultComment extends QuestionResultCommentModel {
    constructor(public name: string) {
        super(name);
        new QuestionImplementor(this);
    }
}

JsonObject.metaData.overrideClassCreatore("resultcomment", function () { return new QuestionResultComment(""); });
QuestionFactory.Instance.registerQuestion("resultcomment", (name) => { return new QuestionResultComment(name); });
