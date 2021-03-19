# coa-xml

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-xml.svg?style=flat-square)](https://www.npmjs.org/package/coa-xml)
[![npm downloads](https://img.shields.io/npm/dm/coa-xml.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-xml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-xml/pulls)

一个简单的XML和JS对象转换库。基于 [xml2js](https://www.npmjs.com/package/xml2js) 做简单封装

## 特点

根据日常实际项目使用情况：

- 整理并内置了一些默认参数，满足绝大多数使用场景
- 统一了异步表现形式，全部返回 Promise
- 内置类型引用，无需额外查看文档，开箱即用，IDE友好

## 快速开始

### 安装

```shell
yarn add coa-xml
```

### 直接使用

```typescript
import { xml } from 'coa-xml'

// 将JS对象转换成xml字符串
await xml.encode({ name: 'A', gender: 1 })  // <xml><name>A</name><gender>1</gender></xml>

// 将xml字符串转为JS对象
await xml.encode('<xml><name>A</name><gender>1</gender></xml>')  // { name: 'A', gender: 1 }
```

### 自定义配置

创建一个自定义实例，该实例的用法和`xml`对象完全一致

```typescript
import { CoaXml } from 'coa-xml'

// 根据自定义配置创建实例
const xml = new CoaXml({ cdata: false })

// 将JS对象转换成xml字符串
await xml.encode({ name: 'A', gender: 1 }) // <xml><name>A</name><gender>1</gender></xml>

// 将xml字符串转为JS对象
await xml.encode('<xml><name>A</name><gender>1</gender></xml>') // { name: 'A', gender: 1 }
```

其中，默认配置为

```typescript
const DefaultOptions = {
  rootName: 'xml',
  explicitArray: false,
  cdata: true,
  headless: true,
  explicitRoot: false
}
```

更多配置的说明详见 [xml2js](https://www.npmjs.com/package/xml2js#options) 原文