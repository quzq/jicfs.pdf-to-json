import * as app from '../app'




describe('app.test.js', () => {
  describe('parseRow()', () => {
    const datas = [
      "569859  その他スポーツ　トレーナー・Ｔシャツ    ｿﾉﾀｽﾎﾟｰﾂﾄﾚｰﾅｰ,  その他スポーツ　トレーナー・",
      "569872  その他スポーツ　アンダーウエアｿﾉﾀｽﾎﾟｰﾂｱﾝﾀﾞｰｳ  その他スポーツ　アンダーウエ",
      "569888  その他スポーツ　アクセサリーｿﾉﾀｽﾎﾟｰﾂｱｸｾｻﾘｰ  その他スポーツ　アクセサリー",
      "569889  その他スポーツ　その他ウェアｿﾉﾀｽﾎﾟｰﾂｿﾉﾀｳｴｱ  その他スポーツ　その他ウェア",
      "569897  その他スポーツ　その他ｿﾉﾀｽﾎﾟｰﾂｿﾉﾀ    その他スポーツ　その他",
      "59その他衣料・身の回り品ｿﾉﾀｲﾘﾖｳ,ﾐﾉﾏﾜﾘﾋ  その他衣料・身の回り品",
      "9その他商品ｿﾉﾀｼﾖｳﾋﾝその他商品",
      "99その他商品ｿﾉﾀｼﾖｳﾋﾝその他商品",
      "9901   その他輸入商品ｿﾉﾀﾕﾆﾕｳｼﾖｳﾋﾝ   その他輸入商品",
      "990199  その他輸入商品不明ｿﾉﾀﾕﾆﾕｳｼﾖｳﾋﾝﾌﾒ  その他輸入商品不明 ",
    ]
    it(`case 1`, async () => {
      const val = app.parseRow(datas[0])
      expect(val.length).toBe(4)
      expect(val[0]).toBe('569859')
      expect(val[1]).toBe('その他スポーツ　トレーナー・Ｔシャツ')
      expect(val[2]).toBe('ｿﾉﾀｽﾎﾟｰﾂﾄﾚｰﾅｰ,')
      expect(val[3]).toBe('その他スポーツ　トレーナー・')
    })
    it(`case 2`, () => {
      const val = app.parseRow(datas[5])
      expect(val.length).toBe(4)
      expect(val[0]).toBe('59')
      expect(val[1]).toBe('その他衣料・身の回り品')
      expect(val[2]).toBe('ｿﾉﾀｲﾘﾖｳ,ﾐﾉﾏﾜﾘﾋ')
      expect(val[3]).toBe('その他衣料・身の回り品')
    })
    it(`case 3`, () => {
      const val = app.parseRow(datas[6])
      expect(val.length).toBe(4)
      expect(val[0]).toBe('9')
      expect(val[1]).toBe('その他商品')
      expect(val[2]).toBe('ｿﾉﾀｼﾖｳﾋﾝ')
      expect(val[3]).toBe('その他商品')
    })
  })
})