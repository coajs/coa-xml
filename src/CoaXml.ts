import { Builder, OptionsV2, Parser } from 'xml2js'

// 默认配置
const DefaultOptions = { rootName: 'xml', explicitArray: false, cdata: true, headless: true, explicitRoot: false }

export class CoaXml {

  private readonly options: OptionsV2
  private readonly builder: Builder
  private readonly parser: Parser

  constructor (options: OptionsV2 = {}) {
    this.options = Object.assign({}, DefaultOptions, options)
    this.builder = new Builder(this.options)
    this.parser = new Parser(this.options)
  }

  // xml 转 js
  async decode (str: string) {
    return await this.parser.parseStringPromise(str) as { [key: string]: any }
  }

  // js 转 xml
  async encode (data: { [key: string]: any }) {
    return this.builder.buildObject(data)
  }
}