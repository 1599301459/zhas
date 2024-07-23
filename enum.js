class Enum {
    constructor(enumObj) {
        this.enumObj = enumObj;
        this.keys = Object.keys(enumObj);
        this.values = Object.values(enumObj);
    }

    // 根据键获取值
    getValue(key) {
        return this.enumObj[key];
    }

    // 根据值获取键
    getKey(value) {
        return this.keys.find(key => this.enumObj[key] === value);
    }

    // 获取所有键
    getKeys() {
        return this.keys;
    }

    // 获取所有值
    getValues() {
        return this.values;
    }

    // 检查是否包含键
    containsKey(key) {
        return this.keys.includes(key);
    }

    // 检查是否包含值
    containsValue(value) {
        return this.values.includes(value);
    }

    // 枚举对象的字符串表示
    toString() {
        return JSON.stringify(this.enumObj);
    }

    // 返回一个包含 {name: key, label: value} 的数组
    toArray() {
        return this.keys.map(key => ({ name: key, label: this.enumObj[key] }));
    }
}

export default Enum



