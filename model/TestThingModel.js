import { BaseModel } from 'startupjs/orm'

export default class TestThingModel extends BaseModel {
  async addSelf () {
    await this.root.add(this.getCollection(), {
      id: this.getId()
    })
  }

  async reset () {
    await this.set('counter', 0)
  }
}
