/**
 * @fileOverview {{cookiecutter.repo_name}} base.
 * @author <a href="mailto:{{cookiecutter.email}}">{{cookiecutter.full_name}}</a>
 */


/**
 * Example class.
 * @constructor
 * @param {number} number Input number.
 */
function Number(num) {
    /**
     * Internal representation.
     * @type {number}
     * @default 0
     */
    this.number = num || 0;
}


/**
 * Example add function.
 * @param {number} x First number to add.
 * @param {number} y Second number to add.
 * @return {number} Result of operation.
 */
function add(x, y) {
    return x + y;
}
