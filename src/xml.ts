import { Builder, OptionsV2, Parser } from 'xml2js'

interface Dic<T> {
  [index: string]: T
}

export default new class {

  private options: OptionsV2 = { rootName: 'xml', explicitArray: false, cdata: true, headless: true, explicitRoot: false }
  private builder = new Builder(this.options)
  private parser = new Parser(this.options)

  // xml 转 js
  async decode (str: string) {
    return await this.parser.parseStringPromise(str) as Dic<any>
  }

  // js 转 xml
  async encode (data: Dic<any>) {
    return this.builder.buildObject(data)
  }
}