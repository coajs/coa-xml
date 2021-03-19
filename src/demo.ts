// @ts-nocheck

import { CoaXml, xml } from '.'

// 将JS对象转换成xml字符串
await xml.encode({ name: 'A', gender: 1 }) // <xml><name>A</name><gender>1</gender></xml>

// 将xml字符串转为JS对象
await xml.encode('<xml><name>A</name><gender>1</gender></xml>') // { name: 'A', gender: 1 }


const xml = new CoaXml({ cdata: false })

// 将JS对象转换成xml字符串
await xml.encode({ name: 'A', gender: 1 }) // <xml><name>A</name><gender>1</gender></xml>

// 将xml字符串转为JS对象
await xml.encode('<xml><name>A</name><gender>1</gender></xml>') // { name: 'A', gender: 1 }

