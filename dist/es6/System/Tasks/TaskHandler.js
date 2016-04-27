import TaskHandlerBase from "./TaskHandlerBase";
import ArgumentNullException from "../Exceptions/ArgumentNullException";
export default class TaskHandler extends TaskHandlerBase {
    constructor(_action) {
        super();
        this._action = _action;
        if (!_action)
            throw new ArgumentNullException('action');
    }
    _onExecute() {
        this._action();
    }
    _onDispose() {
        super._onDispose();
        this._action = null;
    }
}
//# sourceMappingURL=TaskHandler.js.map