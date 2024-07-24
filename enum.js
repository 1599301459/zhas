class Enum {
    /**
     * 构造函数，初始化枚举对象
     * @param {Object} enumObj - 枚举对象
     */
    constructor(enumObj) {
        this.enumObj = enumObj;
        this.keys = Object.keys(enumObj);
        this.values = Object.values(enumObj);
    }

    /**
     * 根据键获取对应的值
     * @param {string} key - 枚举键
     * @returns {*} 枚举值
     */
    getValue(key) {
        return this.enumObj[key];
    }

    /**
     * 根据值获取对应的键
     * @param {*} value - 枚举值
     * @returns {string|undefined} 枚举键
     */
    getKey(value) {
        return this.keys.find(key => this.enumObj[key] == value);
    }

    /**
     * 获取所有的键
     * @returns {Array<string>} 枚举键数组
     */
    getKeys() {
        return this.keys;
    }

    /**
     * 获取所有的值
     * @returns {Array<*>} 枚举值数组
     */
    getValues() {
        return this.values;
    }

    /**
     * 检查是否包含指定的键
     * @param {string} key - 枚举键
     * @returns {boolean} 是否包含键
     */
    containsKey(key) {
        return this.keys.includes(key);
    }

    /**
     * 检查是否包含指定的值
     * @param {*} value - 枚举值
     * @returns {boolean} 是否包含值
     */
    containsValue(value) {
        return this.values.includes(value);
    }

    /**
     * 将枚举对象转换为字符串
     * @returns {string} 枚举对象的字符串表示
     */
    toString() {
        return JSON.stringify(this.enumObj);
    }

    /**
     * 将枚举对象转换为键值对数组
     * @returns {Array<{key: string, value: *}>} 键值对数组
     */
    toArray() {
        return this.keys.map(key => ({ key: key, value: this.enumObj[key] }));
    }
}

//demo
let enums=new Enum({
    "zxc":1,
    "icc":2,
    "ycc":3
})
console.log(enums);
console.log(enums.getKeys());
console.log(enums.getValue("zxc"));
console.log(enums.getKey("1"));
console.log(enums.toArray())
// export default Enum



