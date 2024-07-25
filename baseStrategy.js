class Strategy {
    constructor() {
        this.map = new Map();
    }

    // 注册
    register(key, action) {
        const keyStr = this.normalizeKey(key);
        this.map.set(keyStr, action);
    }

    // 移除
    remove(key) {
        const keyStr = this.normalizeKey(key);
        this.map.delete(keyStr);
    }


    has(key) {
        const keyStr = this.normalizeKey(key);
        return this.map.has(keyStr);
    }

    // 执行
    run(key) {
        const keyStr = this.normalizeKey(key);
        const action = this.map.get(keyStr);
        if (action) {
           return action();
        } else {
            throw new Error("抛异常");
        }
    }

    // 规范化键，进行排序和字符串化
    normalizeKey(key) {
        if (typeof key === 'string' || typeof key === 'number') {
            return key; 
        }
        return JSON.stringify(this.sortObject(key)); 
    }

    // 对象和数组的排序
    sortObject(obj) {
        if (obj === null) return null;
        if (typeof obj !== 'object') return obj;

        if (Array.isArray(obj)) {
            return obj.map(item => this.sortObject(item)) // 递归排序每个数组元素
                .sort(); // 对数组元素进行排序
        }

        return Object.keys(obj)
            .sort() // 对对象的键进行排序
            .reduce((sorted, key) => {
                sorted[key] = this.sortObject(obj[key]); // 递归排序每个值
                return sorted;
            }, {});
    }
}

let sStrategy = new Strategy()
 sStrategy.register(1, () => { return "牛吉吉123" })
sStrategy.register({ a: 1, b: 2 }, () => { console.log("牛吉吉123"); })
sStrategy.register([1, 2, { min: 1, max: 20 }], () => { console.log("牛吉吉asd"); })
console.log(sStrategy.run(1));
