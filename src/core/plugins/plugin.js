"use strict";

/*
 * Copyright (C) 2020 UBports Foundation <info@ubports.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * UBports Installer plugin
 * @abstract
 * @property {Props} props properties
 * @param {String} cachePath cache path
 * @param {EventEmitter} event event
 * @param {Object} log logger
 */
class Plugin {
  /**
   * @constructs Plugin
   * @param {Props} props properties
   * @param {String} cachePath cache path
   * @param {EventEmitter} event event
   * @param {Object} log logger
   */
  constructor(props, cachePath, event, log) {
    this.props = props;
    this.cachePath = cachePath;
    this.event = event;
    this.log = log;
  }
}

module.exports = Plugin;
