var slice = Array.prototype.slice

module.exports = iterativelyWalk

function iterativelyWalk(nodes, cb) {
    // 数组在对象里面
    if (!('length' in nodes)) {
        nodes = [nodes]
    }
    
    var depth = 0;
    
    // 将伪数组处理为标准数组
    nodes = slice.call(nodes)

    while(nodes.length) {
        var node = nodes.shift(),
            ret = cb(node, depth) // 回调函数回显node

        if (ret) {
            return ret
        }

        // 深度优先
        if (node.childNodes && node.childNodes.length) {
            // 变量很少，都在nodes上操作，符合ninja原则
            nodes = slice.call(node.childNodes).concat(nodes);
            depth++;
        }
    }
}

// Other

// budo ==> bole  ==> fast-safe-stringify
// budo: Running budo will start a server with a default index.html and incrementally bundle your source on filesave
// bole: A tiny JSON logger, optimised for speed and simplicity
// fast-safe-stringify: 
    // Safe and fast serialization alternative to JSON.stringify.
    // Gracefully handles circular structures instead of throwing.

// browserify
// 将node服务端写法代码require转化为浏览器中的<script>标签
