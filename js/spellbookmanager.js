"use strict";

class PageUi1 {
    constructor () {
        this._$wrpSource = null;
		this._$wrpMain = null;

        this._isInitialLoad = true;
    }

    async init () {
		this._$wrpLoad = $(`#page_loading`);
		this._$wrpSource = $(`#page_source`);
		this._$wrpMain = $(`#page_main`);

        this._doRebuildStageSource();

        this._isInitialLoad = false;
    }

    _doRebuildStageSource (options) {
        SpellbookUtil.render({...options, $parent: this._$wrpSource});
    }
}

class SpellbookManager {
    static async doPageInit () {
        await ui.init();
    }
}

const ui = new PageUi1();

window.addEventListener("load", async () => {
    await SpellbookManager.doPageInit();
});