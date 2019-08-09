export default class Counter {
    constructor() {
        this._observers = [];
        this._count = 0;
    }

    addObserver(observer) {
        this._observers.push(observer);
    }

    get count() {
        return this._count;
    }

    set count(count) {
        this._count = count;
        for (let observer of this._observers) {
            observer.forceUpdate();
        }
    }
}