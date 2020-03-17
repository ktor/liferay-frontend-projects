/**
 * SPDX-FileCopyrightText: © 2017 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

const fs = require('fs-extra');
const path = require('path');

const Gulp = require('./_gulp');
const Options = require('./_options');
const Store = require('./_store');
const ThemeConfig = require('./_theme-config');

class Project {
	constructor(projectDir) {
		this._construct(projectDir);
	}

	init(options) {
		if (this._initialized) {
			throw new Error('Project can only be initialized once');
		}

		this._initialized = true;

		this._gulp = new Gulp(this, options.gulp);
		this._options = new Options(this, options);
		this._store = new Store(
			this,
			options.storeConfig.path,
			options.storeConfig.name
		);
		this._watching = false;
	}

	get dir() {
		return this._dir;
	}

	get gulp() {
		return this._gulp.proxy;
	}

	get options() {
		return this._options;
	}

	get pkgJson() {
		return this._pkgJson;
	}

	get store() {
		return this._store;
	}

	get themeConfig() {
		return this._themeConfig;
	}

	get watching() {
		return this._watching;
	}

	modifyPkgJson(modifier) {
		this._pkgJson = modifier(this._pkgJson);

		fs.writeJSONSync(this._pkgJsonPath, this._pkgJson, {spaces: 2});
	}

	set watching(watching) {
		this._watching = watching;
	}

	_reload() {
		Object.keys(this).forEach(key => delete this[key]);

		this._construct('.');
	}

	_construct(projectDir) {
		this._dir = path.resolve(projectDir);
		this._initialized = false;
		this._pkgJsonPath = path.join(this.dir, 'package.json');
		this._pkgJson = fs.readJSONSync(this._pkgJsonPath);
		this._themeConfig = new ThemeConfig(this);
	}
}

module.exports = new Project('.');
