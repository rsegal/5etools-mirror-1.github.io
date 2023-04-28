"use strict";

class PageUi1 {
    constructor () {
        this._$wrpSource = null;
		this._$wrpMain = null;

        this._isInitialLoad = true;
    }

    async init () {
		this._$wrpLoad = $(`#spellbook_page_loading`);
		this._$wrpSource = $(`#spellbook_page_source`);
		this._$wrpMain = $(`#spellbook_page_main`);

        this._doRebuildStageSource({});
        this.__setStageMain();

        this._isInitialLoad = false;
    }

	__setStageSource () {
		this._$wrpLoad.hide();
		this._$wrpSource.show();
		this._$wrpMain.hide();
	}

	__setStageMain () {
		this._$wrpLoad.hide();
		this._$wrpSource.hide();
		this._$wrpMain.show();
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